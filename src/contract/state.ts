import { create } from 'zustand'
import LocationContract from './location-contract'
import wMNTContract from './wmnt-contract'
import { WalletClient } from 'wagmi'

type Store = {
  contracts: {
    location: LocationContract | null
    wmnt: wMNTContract | null
  }
  createLocationContract: (
    walletClient: WalletClient,
    wmntContract: wMNTContract,
  ) => void
  createWMNTContract: (walletClient: WalletClient) => void
}

export const useContractStore = create<Store>((set) => ({
  contracts: {
    location: null,
    wmnt: null,
  },
  createLocationContract: (
    walletClient: WalletClient,
    wmntContract: wMNTContract,
  ) => {
    set((state) => {
      if (state.contracts.location) {
        return state
      }

      return {
        contracts: {
          ...state.contracts,
          location: new LocationContract(walletClient, wmntContract),
        },
      }
    })
  },
  createWMNTContract: (walletClient: WalletClient) => {
    set((state) => {
      if (state.contracts.wmnt) {
        return state
      }

      return {
        contracts: {
          ...state.contracts,
          wmnt: new wMNTContract(walletClient),
        },
      }
    })
  },
}))
