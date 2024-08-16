import ThemeToggler from './ThemeToggler'
// import FluidToggler from './FluidToggler'
import Notification from './Notification'
import FullscreenToggler from './FullscreenToggler'

export default function HeaderTogglerButtons({ className }) {
  return (
    <div
      className={`flex-center px-4 py-0 gap-2 rounded-full border-2 border-gray-500 ${className}`}
    >
      <Notification />
      <ThemeToggler />
      <FullscreenToggler />
      {/* <FluidToggler /> */}
    </div>
  )
}
