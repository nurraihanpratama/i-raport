export default function ReportGenerateButton({
  label = 'Generate',
  onClick,
  className,
  disabled = false,
}) {
  return (
    <button
      type="button"
      className={`border-green-700 hover:bg-green-700 rounded-sm px-2 border-2 dark:text-white hover:text-white disabled:bg-gray-400 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
