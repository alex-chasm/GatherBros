export const contractAbi = [
  {
    type: 'constructor',
    stateMutability: 'nonpayable',
    inputs: [{ type: 'address', name: '_WMNT', internalType: 'address' }],
  },
  {
    type: 'error',
    name: 'ERC20InsufficientAllowance',
    inputs: [
      { type: 'address', name: 'spender', internalType: 'address' },
      { type: 'uint256', name: 'allowance', internalType: 'uint256' },
      { type: 'uint256', name: 'needed', internalType: 'uint256' },
    ],
  },
  {
    type: 'error',
    name: 'ERC20InsufficientBalance',
    inputs: [
      { type: 'address', name: 'sender', internalType: 'address' },
      { type: 'uint256', name: 'balance', internalType: 'uint256' },
      { type: 'uint256', name: 'needed', internalType: 'uint256' },
    ],
  },
  {
    type: 'error',
    name: 'ERC20InvalidApprover',
    inputs: [{ type: 'address', name: 'approver', internalType: 'address' }],
  },
  {
    type: 'error',
    name: 'ERC20InvalidReceiver',
    inputs: [{ type: 'address', name: 'receiver', internalType: 'address' }],
  },
  {
    type: 'error',
    name: 'ERC20InvalidSender',
    inputs: [{ type: 'address', name: 'sender', internalType: 'address' }],
  },
  {
    type: 'error',
    name: 'ERC20InvalidSpender',
    inputs: [{ type: 'address', name: 'spender', internalType: 'address' }],
  },
  { type: 'error', name: 'ExceedStakedAmount', inputs: [] },
  {
    type: 'error',
    name: 'InsufficientBalance',
    inputs: [{ type: 'uint256', name: 'required', internalType: 'uint256' }],
  },
  { type: 'error', name: 'InvalidAmount', inputs: [] },
  { type: 'error', name: 'InvalidArrayInput', inputs: [] },
  { type: 'error', name: 'NotExpired', inputs: [] },
  {
    type: 'error',
    name: 'OwnableInvalidOwner',
    inputs: [{ type: 'address', name: 'owner', internalType: 'address' }],
  },
  {
    type: 'error',
    name: 'OwnableUnauthorizedAccount',
    inputs: [{ type: 'address', name: 'account', internalType: 'address' }],
  },
  {
    type: 'event',
    name: 'Approval',
    inputs: [
      {
        type: 'address',
        name: 'owner',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'spender',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'uint256',
        name: 'value',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Deposit',
    inputs: [
      { type: 'address', name: 'dst', internalType: 'address', indexed: true },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      {
        type: 'address',
        name: 'previousOwner',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'newOwner',
        internalType: 'address',
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Staked',
    inputs: [
      { type: 'address', name: 'user', internalType: 'address', indexed: true },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      { type: 'address', name: 'from', internalType: 'address', indexed: true },
      { type: 'address', name: 'to', internalType: 'address', indexed: true },
      {
        type: 'uint256',
        name: 'value',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Unstaked',
    inputs: [
      { type: 'address', name: 'user', internalType: 'address', indexed: true },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Withdrawal',
    inputs: [
      { type: 'address', name: 'src', internalType: 'address', indexed: true },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'contract IERC20' }],
    name: 'WMNT',
    inputs: [],
  },
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
      { type: 'uint256', name: 'value', internalType: 'uint256' },
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
    stateMutability: 'payable',
    outputs: [],
    name: 'deposit',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'distribute',
    inputs: [
      { type: 'address[]', name: 'recipients', internalType: 'address[]' },
      { type: 'uint256[]', name: 'amounts', internalType: 'uint256[]' },
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
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'owner',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'renounceOwnership',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'stake',
    inputs: [
      {
        type: 'tuple',
        name: 'stakeInfo',
        internalType: 'struct GatherBrosLocation.StakeInfo',
        components: [
          { type: 'uint256', name: 'amount', internalType: 'uint256' },
          { type: 'uint256', name: 'stakeStart', internalType: 'uint256' },
          { type: 'uint256', name: 'stakeStop', internalType: 'uint256' },
        ],
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      { type: 'uint256', name: 'amount', internalType: 'uint256' },
      { type: 'uint256', name: 'stakeStart', internalType: 'uint256' },
      { type: 'uint256', name: 'stakeStop', internalType: 'uint256' },
    ],
    name: 'stakers',
    inputs: [{ type: 'address', name: '', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'swapGBLforWMNT',
    inputs: [{ type: 'uint256', name: '_amount', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'swapWMNTForGBL',
    inputs: [{ type: 'uint256', name: '_amount', internalType: 'uint256' }],
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
      { type: 'address', name: 'to', internalType: 'address' },
      { type: 'uint256', name: 'value', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'transferFrom',
    inputs: [
      { type: 'address', name: 'from', internalType: 'address' },
      { type: 'address', name: 'to', internalType: 'address' },
      { type: 'uint256', name: 'value', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'transferOwnership',
    inputs: [{ type: 'address', name: 'newOwner', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'unstake',
    inputs: [{ type: 'uint256', name: 'amount', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'withdraw',
    inputs: [{ type: 'uint256', name: '_amount', internalType: 'uint256' }],
  },
  { type: 'receive', stateMutability: 'payable' },
] as const
