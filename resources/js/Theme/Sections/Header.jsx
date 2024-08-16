
import { useEffect, useState } from 'react'
import { usePage } from '@inertiajs/react'
import LogoSection from './Components/LogoSection'
import UserHeaderMenu from '../Components/UserHeaderMenu'
import HeaderTogglerButtons from '../Components/HeaderTogglerButtons'
import SidebarToggler from '../Components/SidebarToggler'

export default function Header() {
  const { app, auth } = usePage().props

  const user = auth?.user

  const [scrolled, setScrolled] = useState(false)

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setScrolled(currentScrollPos === 0 ? false : true)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  const [search, setSearch] = useState('')

  return (
    <div
      id="header"
      className={`sticky top-0 z-10 w-full pl-4 md:pl-4 lg:pl-2 pxr-4 flex-none flex-between md:gap-10 bg-[#EDF2F9] dark:bg-[#0A1727]
    ${scrolled && 'content-header-elevate'}
    `}
    >
      <div className="w-full gap-8 md:w-60xxg flex-start">
        <SidebarToggler />
        <LogoSection />
      </div>

      <div className="py-3 w-d20 md:w-fuxll flex-between pxx-4">
        
        <div className="flex-end w-1s/2 gap-2xx">
          {/* {user && <TeamSwitcherButton />} */}
          <HeaderTogglerButtons className="hidden md:flex" />
          {user && <UserHeaderMenu user={user} />}
        </div>
      </div>
    </div>
  )
}
