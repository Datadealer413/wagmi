import { Chain } from './types'

export const foundry: Chain = {
  id: 31_337,
  name: 'Foundry',
  network: 'foundry',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
  },
}
