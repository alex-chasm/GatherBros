import { contractAbi } from '@/contract/location-contract-abi'
import {
  Account,
  createPublicClient,
  encodeAbiParameters,
  getContract,
  http,
  parseAbiParameters,
  parseEther,
} from 'viem'
import { mantleTestnet } from 'viem/chains'
import { WalletClient } from 'wagmi'
import wMNTContract from './wmnt-contract'

export default class LocationContract {
  public contract
  public address: `0x${string}`
  private readonly publicClient = createPublicClient({
    chain: mantleTestnet,
    transport: http(),
  })

  constructor(
    private readonly walletClient: WalletClient,
    private readonly wmntContract: wMNTContract,
  ) {
    this.address = '0x0752D867B997a0E70a1231e361d4E40564DE8093'
    this.contract = getContract({
      address: this.address,
      abi: contractAbi,
      publicClient: this.publicClient,
      walletClient: walletClient,
    })
    this.walletClient = walletClient
  }

  async swapForWMNT(amount: number) {
    // check if wallet has enough approval
    const allowance = await this.contract.read.allowance([
      this.walletClient.account.address,
      this.contract.address,
    ])

    if (allowance < parseEther(amount.toString())) {
      // Wallet does not have enough approval
    } else {
      // Wallet has enough approval
    }
    this.contract.write.swapGBLforWMNT([parseEther(amount.toString())])
  }

  async swapForGBL(amount: number) {
    // check if wallet has enough approval
    const allowance = await this.contract.read.allowance([
      this.walletClient.account.address,
      this.wmntContract!.address,
    ])
    if (allowance < parseEther(amount.toString())) {
      const hash = await this.contract.write.approve([
        this.contract.address,
        BigInt(parseEther(amount.toString())),
      ])

      const transaction = await this.publicClient.waitForTransactionReceipt({
        hash,
      })

      if (!transaction || transaction.status !== 'success') {
        throw new Error('Transaction failed')
      }
    }
    await this.contract.write.swapWMNTForGBL([
      BigInt(parseEther(amount.toString())),
    ])
  }

  async stake(account: Account, amount: number) {
    const time = Math.floor(Date.now() / 1000)
    const timeStop = time + 30 * 60

    // const hash = await this.contract.read.balanceOf([
    //   '0x08a80B42f8499C1C3f9e352632fB87E38F5Cbc80',
    // ])
    const hash = await this.contract.write.stake([
      {
        amount: BigInt(amount),
        stakeStart: BigInt(time),
        stakeStop: BigInt(timeStop),
      },
    ])
    return hash
  }

  async unstake(amount: number) {
    const hash = await this.contract.write.unstake([BigInt(amount)])

    return hash
  }
}
