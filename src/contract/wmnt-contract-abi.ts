export const wmntContractAbi = [
  { type: 'constructor', inputs: [] },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'allowance',
    inputs: [
      { type: 'address', name: 'owner', internalType: 'address' },
      { type: 'address', name: 'spender', internalType: 'address' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'approve',
    inputs: [
      { type: 'address', name: 'spender', internalType: 'address' },
      { type: 'uint256', name: 'amount', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'balanceOf',
    inputs: [{ type: 'address', name: 'account', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint8', name: '', internalType: 'uint8' }],
    name: 'decimals',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'decreaseAllowance',
    inputs: [
      { type: 'address', name: 'spender', internalType: 'address' },
      { type: 'uint256', name: 'subtractedValue', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'payable',
    outputs: [],
    name: 'deposit',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'increaseAllowance',
    inputs: [
      { type: 'address', name: 'spender', internalType: 'address' },
      { type: 'uint256', name: 'addedValue', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'string', name: '', internalType: 'string' }],
    name: 'name',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'string', name: '', internalType: 'string' }],
    name: 'symbol',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'totalSupply',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'transfer',
    inputs: [
      { type: 'address', name: 'recipient', internalType: 'address' },
      { type: 'uint256', name: 'amount', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'transferFrom',
    inputs: [
      { type: 'address', name: 'sender', internalType: 'address' },
      { type: 'address', name: 'recipient', internalType: 'address' },
      { type: 'uint256', name: 'amount', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'withdraw',
    inputs: [{ type: 'uint256', name: '_amount', internalType: 'uint256' }],
  },
  {
    type: 'event',
    name: 'Approval',
    inputs: [
      { type: 'address', name: 'owner', indexed: true },
      { type: 'address', name: 'spender', indexed: true },
      { type: 'uint256', name: 'value', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Deposit',
    inputs: [
      { type: 'address', name: 'dst', indexed: true },
      { type: 'uint256', name: 'wad', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      { type: 'address', name: 'from', indexed: true },
      { type: 'address', name: 'to', indexed: true },
      { type: 'uint256', name: 'value', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Withdrawal',
    inputs: [
      { type: 'address', name: 'src', indexed: true },
      { type: 'uint256', name: 'wad', indexed: false },
    ],
    anonymous: false,
  },
  { type: 'receive' },
  { type: 'fallback' },
]
