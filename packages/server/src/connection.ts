import { Connection } from '@solana/web3.js';
import config from '../../../config.json';
import { ENV_RPC_URL } from './env';

const rpcUrl = ENV_RPC_URL || config.rpcUrl.trim();
console.log('Connection url: ', rpcUrl);
export const connection = new Connection(rpcUrl, 'confirmed');
