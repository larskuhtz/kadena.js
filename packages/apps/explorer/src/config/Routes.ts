export enum Route {
  Root = '/',
  Transaction = '/txdetail',
  Block = '/block',
  About = '/about',
  Chain = '/chain',
  Finish = '/finish',
  Balance = '/balance',
  Generate = '/generate',
  Height = '/height',
  Testnet = '/testnet',
  Mainnet = '/mainnet',
  Search = '/search',
  Charts = '/charts',
}

export enum APIRoute {
  Info = '/api/info',
  Chain = '/api/chain',
  Stats = '/api/stats',
  Recent = '/api/recent',
  Search = '/api/search',
  Transaction = '/api/transaction',
  Block = '/api/block',
}

export enum APIRemoteRoute {
  Config = '/info',
  Info = '/cut',
  ChainWeb = '/chainweb',
  Stats = '/stats',
  BlockChain = '/chain',
  BlockHeader = '/header',
  Updates = '/updates',
  Search = '/search',
  PactApi = '/pact/api/v1',
  Pact = '/pact',
  Poll = '/poll',
  Tx = '/tx',
  Txs = '/txs',
  Events = '/events',
  Recent = '/recent',
  Payload = '/payload',
  Outputs = '/outputs',
  Branch = '/branch',
  Local = '/local',
  Send = '/send',
  Price = '/simple/price',
  Markets = '/coins/markets',
}
