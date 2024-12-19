import { providers } from "ethers";

import type { LiqbotConfig } from "./types";

const network = "mainnet";
const alchemyApiKey = ""; // FILL

const alchemyRpcLocation = `eth-${network}.alchemyapi.io/v2/${alchemyApiKey}`;
const chainId = providers.getNetwork(network).chainId;

const config: LiqbotConfig = {
  httpRpcUrl: `https://rpc.quai.network/cyprus1`,
  wsRpcUrl: `wss://rpc.quai.network/cyprus1`,
  relayUrl: `https://relay.flashbots.net`,
  chainId: 9000,
  walletKey: "", // FILL
  bundleKey: "", // FILL
  executorAddress: "", // FILL (Deploy the LiqbotExecutor contract and fill its address)
  minerCutRate: 0.1
};

export default config;
