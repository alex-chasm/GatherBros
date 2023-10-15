'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const { data: session } = useSession()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session?.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
      <div className="space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          <Link href="/">Home</Link>
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">
          <Link href="/location">Map</Link>
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded">
          User Settings
        </button>
      </div>
    </main>
  )
}
