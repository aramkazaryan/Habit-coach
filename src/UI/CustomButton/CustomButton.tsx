import { JSX } from 'react'

export type ButtonI = {
  text?: string
} & JSX.IntrinsicElements['button']

export const CustomButton: React.FC<ButtonI> = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className='flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500'
    >
      {text}
    </button>
  )
}
