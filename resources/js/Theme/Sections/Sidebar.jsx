import ThemeContext from '@/Context/ThemeContext'
import { usePage } from '@inertiajs/react'
import { Fragment, useContext, useEffect } from 'react'
import LogoSection from './Components/LogoSection'
import AuthenticatedNavigations from './Components/AuthenticatedNavigations'
// import Logo from '../Components/Logo'

// import AuthenticatedNavigations from './Components/AuthenticatedNavigations'
// import UnauthenticatedNavigations from './Components/UnauthenticatedNavigations'
// import LogoSection from './Components/LogoSection'

export default function Sidebar() {
  const { theme, updateTheme } = useContext(ThemeContext)
  const user = usePage().props.auth?.user

  useEffect(() => {
    if (window.innerWidth < 1020)
      updateTheme({
        ...theme,
        sidebarOpen: true,
      })
  }, [])

  return (
    <Fragment>
      <div className="z-10 hidden lg:block">
        <SidebarBigScreen theme={theme}>
          <AuthenticatedNavigations user={user} />
        </SidebarBigScreen>
      </div>

      <div className="z-10 lg:hidden">
        <SidebarSmallScreen theme={theme}>
          <AuthenticatedNavigations user={user} />
        </SidebarSmallScreen>
      </div>
    </Fragment>
  )
}

const SidebarBigScreen = ({ theme, children }) => {
  return (
    <div
      id="sidebar"
      className={`fixed h-screen overflow-y-auto pt-4 pb-20 bg-[#EDF2F9] dark:bg-[#0A1727] ${
        theme.sidebarOpen ? 'w-56' : 'w-0 lg:w-10'
      }`}
    >
      <div className="flex flex-col space-y-4">{children}</div>
    </div>
  )
}

const SidebarSmallScreen = ({ theme, children }) => {
  return (
    <div
      id="sidebar"
      className={`fixed px-2 h-screen overflow-y-auto pt-4 pb-20 bg-[#EDF2F9] dark:bg-[#0A1727] w-60 ${
        !theme.sidebarShow && 'hidden'
      }`}
    >
      <div className="px-2 pb-4 lg:hidden">
        {/* <Logo /> */}
        <LogoSection place="sidebar" />
        {/* <Logo subname={app.subname} /> */}
      </div>
      <div className="flex flex-col space-y-4">{children}</div>
    </div>
  )
}
