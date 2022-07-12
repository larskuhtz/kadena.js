import type {
  ICommand,
  EnvData,
  IKeyPair,
  IMetaData,
  NetworkId,
  Nonce,
  PactCode,
} from '@kadena/types';

import { attachSignature } from './attachSignature';
import { createCommand } from './createCommand';
import { pullSigner } from './pullSigner';

/**
 * Prepare an ExecMsg pact command for use in send or local execution.
 * To use in send, wrap result with 'createCommmand'.
 * @param keyPairs {array or object} - array or single ED25519 keypair and/or clist (list of `cap` in mkCap)
 * @param nonce {string} - nonce value for ensuring unique hash - default to current time
 * @param pactCode {string} - pact code to execute - required
 * @param envData {object} - JSON of data in command - not required
 * @param meta {object} - public meta information, see mkMeta
 * @return valid pact API command for send or local use.
 */
export function prepareExecCommand(
  keyPairs: Array<IKeyPair>,
  nonce: Nonce,
  pactCode: PactCode,
  envData: EnvData,
  meta: IMetaData,
  networkId?: NetworkId,
): ICommand {
  const signers = keyPairs.map(pullSigner);
  const cmdJSON = {
    networkId: networkId !== undefined ? networkId : null,
    payload: {
      exec: {
        data: envData,
        code: pactCode,
      },
    },
    signers,
    meta,
    nonce: JSON.stringify(nonce),
  };
  const cmd = JSON.stringify(cmdJSON);
  const sigs = attachSignature(cmd, keyPairs);
  return createCommand(sigs, cmd);
}