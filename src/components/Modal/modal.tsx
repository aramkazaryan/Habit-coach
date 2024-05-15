import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Modal: React.FC<Props> = ({ children }) => {
  return (
    <div
      data-dialog-backdrop='dialog'
      data-dialog-backdrop-close='false'
      className='fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-1 backdrop-blur-sm transition-opacity duration-300'
    >
      <div
        data-dialog='dialog'
        className='relative m-4 w-auto rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl'
      >
        <div className='flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900'>
          {children}
        </div>
      </div>
    </div>
  )
}
