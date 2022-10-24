import React from 'react'
import { AuthContextProvider } from './AuthContext'
import CountTicketsContextProvider from './CountTicketsContextProvider'

export default function ContextProvider({children}) {
    return (
        <>
            <AuthContextProvider>
                <CountTicketsContextProvider>
                    {children}
                </CountTicketsContextProvider>
            </AuthContextProvider>
        </>
    )
}
