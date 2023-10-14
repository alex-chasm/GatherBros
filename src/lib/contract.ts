import { contractAbi } from '@/contract/location-contract'
import { Account, getContract } from 'viem'
import { PublicClient, WalletClient } from 'wagmi'

export default class LocationContract {
  private contract

  constructor(
    private readonly publicClient: PublicClient,
    private readonly walletClient: WalletClient,
  ) {
    this.contract = getContract({
      address: `0x${process.env.TESTNET_WMNT!}`,
      abi: contractAbi,
      publicClient,
    })
    this.publicClient = publicClient
    this.walletClient = walletClient
  }

  async swapForWMNT(address: `0x{string}`, amount: number) {
    const { request } = await this.publicClient.simulateContract({
      abi: contractAbi,
      functionName: 'swapGBLforWMNT',
      address: address,
      account: this.walletClient.account,
      args: [amount],
    })

    await this.walletClient.writeContract(request)
  }
}
