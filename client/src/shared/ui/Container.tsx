import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TProps = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: TProps) => {
  return <div className={twMerge('mx-auto max-w-[1440px] px-2.5', className)}>{children}</div>
}
