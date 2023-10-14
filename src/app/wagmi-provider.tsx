'use client'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mantle, mantleTestnet } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient } = configureChains(
  [mantle, mantleTestnet],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID! }), publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'GatherBros App',
  projectId: '530cc79df816407adbc4822d7220e358',
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

export default function WagmiProvider({children}: {children: React.ReactNode}) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
