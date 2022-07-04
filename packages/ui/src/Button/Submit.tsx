import React, {FC, ReactNode} from 'react'

console.log('submit button')

export const Button1: FC<{children: ReactNode}> = ({ children }) => (
    <button type="submit">{children}</button>
)