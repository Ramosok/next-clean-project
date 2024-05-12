'use client';

import type { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, className, ...props }) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};
