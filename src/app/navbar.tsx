'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Navbar() {
    const { data: session, status } = useSession()
    return (
        <nav className="flex flex-wrap flex-row w-screen justify-between p-10">
            <ConnectButton />
            { status === 'unauthenticated' && (
            <>
                <div className="flex flex-row w-1/4 justify-around">
                    <p className="">Not signed in</p>
                    <button className="bg-indigo-500 px-2 rounded" onClick={() => signIn()}>Sign in</button>
                </div>
            </>
            )}
            {status === 'authenticated' && (
            <>
                <p className="">Signed in as {session?.user?.email}</p><br />
                <button className="bg-indigo-500 px-2 rounded" onClick={() => signOut()}>Sign out</button>
            </>
            )}
        </nav>

    )
}