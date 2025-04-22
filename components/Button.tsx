'use client'

type Props = {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded bg-blue-500 px-4 py-2 text-white"
    >
      {label}
    </button>
  )
}