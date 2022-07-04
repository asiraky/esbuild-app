import { css } from '@emotion/react'
import React, { FC, ReactNode } from 'react'

console.log('reset button')

export const Reset: FC<{ children: ReactNode }> = ({ children }) => (
    <button type="reset" css={css`
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    `}>{children}</button>
)