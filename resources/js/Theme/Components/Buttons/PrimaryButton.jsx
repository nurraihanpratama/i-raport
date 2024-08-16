export default function PrimaryButton({
  type = 'button',
  onClick,
  children,
  deleteAction = false,
  darkBgColor = 'bg-[#0B1727]',
}) {
  return (
    <button
      type={type}
      className={`flex-center gap-2 font-semibold px-4 py-1 rounded-md button-shadow text-gray-600 dark:text-white ${
        deleteAction
          ? 'hover:bg-rose-500 hover:dark:bg-rose-500'
          : 'hover:bg-primary hover:dark:bg-primary'
      } dark:bg-[#0B1727] hover:text-white hover:dark:text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
