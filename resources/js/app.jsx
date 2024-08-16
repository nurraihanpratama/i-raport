import './bootstrap'
import '../css/app.css'
import '../css/loader.css'
// import '@sweetalert2/theme-dark/dark.min.css'
// import 'leaflet/dist/leaflet.css'    

import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { StrictMode } from 'react'
import AppContextProvider from './AppContextProvider'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(
      <StrictMode>
        <AppContextProvider>
          <App {...props} />
        </AppContextProvider>
      </StrictMode>,
    )
    delete el.dataset.page
  },
  progress: {
    color: '#E32B21',

    // Whether to include the default NProgress styles.
    includeCSS: true,
    // Whether the NProgress spinner will be shown.
    // showSpinner: true,
  },
})
