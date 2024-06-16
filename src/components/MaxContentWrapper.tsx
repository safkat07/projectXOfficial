import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

export default function MaxContentWrapper({ className, children }: {
    className?: string
    children: ReactNode
}) {
    return (
        <div className={cn("h-full mx-auto w-full max-w-screen-2xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
}
