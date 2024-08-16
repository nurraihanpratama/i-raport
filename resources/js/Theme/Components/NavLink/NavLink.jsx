import ThemeContext from '@/Context/ThemeContext'
import { permissions } from '@/Helpers/authorization'
import { Link, usePage } from '@inertiajs/react'
import { useContext } from 'react'

export default function NavLink({
  navRoute,
  components,
  label,
  method = 'get',
  icon,
  ...props
}) {
  const { app, auth } = usePage().props

  const { current_route } = app

  const { theme, updateTheme } = useContext(ThemeContext)

  const isActive = components.includes(current_route)

  // const canAccess = components.some((c) => permissions().includes(c))
  const canAccess = true

  const isDashboard = components.includes('dashboard.index')

  const isLogout = components.includes('logout')

  const isProfile = components.includes('my-profile.index')

  if (canAccess || isDashboard || isProfile || isLogout)
    return (
      <Link
        method={method}
        href={navRoute}
        preserveScroll
        className={`relative flex-start gap-0 font-semibold text-gray-700 dark:text-white 
      ${isActive ? 'text-white' : 'hover:text-primary dark:hover:text-primary'}
      `}
        {...props}
      >
        <div
          className={`p-2 rounded-full z-50 ${
            isActive ? 'shadow-md bg-primary' : 'text-xl'
          }`}
          title={label}
        >
          {icon}
          {/* <FiCodesandbox size={isActive ? 15 : 20} /> */}
        </div>

        <p
          className={`lg:hidden absolute z-10 ml-4 px-4 rounded-full ${
            isActive && 'shadow-md bg-gradient-to-b from-primary-500 to-primary'
          }`}
        >
          &nbsp;&nbsp;
          {label}
        </p>

        {theme.sidebarOpen ? (
          <p
            className={`absolute z-10 ml-4 px-4 rounded-full ${
              isActive && 'shadow-md bg-gradient-to-b from-primary-500 to-primary'
            }`}
          >
            &nbsp;&nbsp;
            {label}
          </p>
        ) : (
          <p>&nbsp;</p>
        )}
      </Link>
    )
}
