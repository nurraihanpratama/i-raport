// import IdoBillLogo from '@/Theme/Components/IdoBillLogo'
// import Logo from '@/Theme/Components/Logo'
import { usePage } from '@inertiajs/react'

export default function LogoSection({ place = 'header' }) {
  const { app, auth } = usePage().props

  return (
    <div className={`${place == 'header' ? 'hidden lg:flex mt-2' : 'md:flex'}`}>
      {/* {auth?.user ? <Logo subname={app.subname} /> : <IdoBillLogo />} */}
      <span className='flex gap-2 text-2xl font-bold text-gray-700 dark:text-white'>
        <p>SMK N</p>
        <p>8</p>
        <p>Batam</p>
      </span>
    </div>
  )
}
