import { Link } from '@inertiajs/react'

export default function TabButton({ label, href, active }) {
  return (
    <Link
      href={href}
      className={`font-bold text-gray-700 dark:text-white hover:text-amber-600 hover:dark:text-amber-600 ${
        active && 'border-b-2 border-primary'
      }`}
    >
      <p>{label}</p>
    </Link>
  )
}
