import { createContext, useContext, useState } from 'react'

type ContractsContext = {
  contracts: {
    [key: string]: any
  }
}
const ContractContext = createContext<ContractsContext | null>(null)

export const useContract = () => {
  return useContext(ContractContext)
}
export const ContractProvider = ({
  children,
  contracts,
}: {
  children: React.ReactNode
  contracts: ContractsContext
}) => {
  return (
    <ContractContext.Provider value={{ contracts }}>
      {children}
    </ContractContext.Provider>
  )
}
