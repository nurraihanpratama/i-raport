export default function FormHeaderBody({ label }) {
  return (
    <div className="bg-[#F9FAFD] dark:bg-[#121E2D]">
      <p
        className="px-4 py-2 text-xs italic font-bold text-left text-white bg-teal-800"
      >
        {label}
      </p>
    </div>
  )
}
