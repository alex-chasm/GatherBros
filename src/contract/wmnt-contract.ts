import { wmntContractAbi } from '@/contract/wmnt-contract-abi'
import { createPublicClient, getContract, http, parseEther } from 'viem'
import { mantleTestnet } from 'viem/chains'
import { PublicClient, WalletClient } from 'wagmi'

export default class wMNTContract {
  public contract
  public address: `0x${string}`
  private readonly publicClient = createPublicClient({
    chain: mantleTestnet,
    transport: http(),
  })

  constructor(
    private readonly walletClient: WalletClient,
  ) {
    this.address = '0x3A0Ca27f6e67C3CAA20Ee9fa3c62e89E2A50979e'
    this.contract = getContract({
      address: this.address,
      abi: wmntContractAbi,
      publicClient: this.publicClient,
      walletClient: walletClient,
    })
    this.walletClient = walletClient
  }

  async approve(spender: `0x${string}`, amount: number) {
    await this.contract.write.approve([spender, parseEther(amount.toString())])
  }
}
