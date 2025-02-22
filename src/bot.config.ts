import { LogLevel } from './common/logger';
import {
  booleanFromEnvOrDefault,
  logLevelFromEnvOrDefault,
  numberFromEnvOrDefault,
  stringFromEnvOrDefault,
  stringFromEnvOrThrow
} from './common/utils';

export interface BotConfig {
  rpcUrl: string;
  orchestratorAccountPrivateKey: string;
  numberOfAccounts: number;
  fundsPerAccount: string;
  waitForTxToMine: boolean;
  gasToConsumePerTx: string;
  logLevel: LogLevel;
  orchestratorMinFunds: string;
  serverPort: number;
}
export function getConfig(): BotConfig {
  return {
    rpcUrl: stringFromEnvOrThrow('RPC_URL'),
    orchestratorAccountPrivateKey: stringFromEnvOrThrow('ORCH_PRIV_KEY'),
    orchestratorMinFunds: stringFromEnvOrDefault(
      'ORCH_MIN_FUNDS_BASE',
      '100000000000000'
    ),
    numberOfAccounts: numberFromEnvOrDefault('NUMBER_OF_ACCOUNTS', 100000000),
    fundsPerAccount: stringFromEnvOrDefault(
      'FUNDS_PER_ACCOUNT_BASE',
      '10000000000000'
    ),
    waitForTxToMine: booleanFromEnvOrDefault('WAIT_FOR_TX_MINE', true),
    gasToConsumePerTx: stringFromEnvOrDefault('GAS_CONSUME_PER_TX', '10000000000'),
    logLevel: logLevelFromEnvOrDefault('LOG_LEVEL', 'info'),
    serverPort: numberFromEnvOrDefault('SERVER_PORT', 8080)
  };
}
