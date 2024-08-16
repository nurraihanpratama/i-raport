import { useContext, useState } from 'react'
import AppContext from '@/Context/AppContext'
import { Head } from '@inertiajs/react'
import toast, { Toaster } from 'react-hot-toast'
import ThemeContext from '@/Context/ThemeContext'
import Sidebar from './Sections/Sidebar'
import Header from './Sections/Header'
import ThemeToggler from './Components/ThemeToggler'
import FullscreenToggler from './Components/FullscreenToggler'
import SidebarOverlay from './Components/SidebarOverlay'

export default function ThemeLayout({ title, children }) {
  const { appState, updateState } = useContext(AppContext)

  const appDomain = import.meta.env.VITE_APP_NAME || 'laravel'

  const currentTheme = JSON.parse(localStorage.getItem(appDomain)) || {
    darkMode: false,
    fluidMode: true,
    sidebarOpen: true,
    sidebarShow: false, // this one for small screen
    fullscreen: false,
  }

  const [theme, setTheme] = useState(currentTheme)

  const updateTheme = (newValue) => {
    const newTheme = {
      ...theme,
      ...newValue,
    }
    setTheme(newTheme)
    localStorage.setItem(appDomain, JSON.stringify(newTheme))
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <Head title={title} />
      <Toaster />

      {currentTheme.fullscreen && <FullscreenToggler />}

      <div className="hidden">
        <ThemeToggler />
      </div>

      <div className="min-h-screen flex-center bg-[#EDF2F9] dark:bg-[#0A1727]">
        <div
          className={`relative min-h-screen flex flex-col w-full ${
            !theme.fluidMode
              ? 'md:w-full lg:w-3/4 xl:px-0'
              : !theme.fullscreen
              ? 'lg:px-4'
              : 'lg:px-0'
          }`}
        >
          {!theme.fullscreen && <Header />}

          {/* For mobile sidebar overlaying when open */}
          <SidebarOverlay />

          {/* body */}
          <div className="flex flex-grow gap-1 overflow-x-auto">
            {!theme.fullscreen && <Sidebar />}
            <div
              className={`w-full h-full p-4 space-y-4 ${
                theme.sidebarOpen
                  ? 'lg:ml-56'
                  : theme.fullscreen
                  ? 'ml-0'
                  : 'ml-0 lg:ml-8'
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
