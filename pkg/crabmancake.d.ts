/* tslint:disable */
/* eslint-disable */
/**
*/
export function cmc_init(): void;
/**
*/
export class CmcClient {
  free(): void;
/**
*/
  constructor();
/**
*/
  say_hello(): void;
/**
* @param {number} elapsed_time
* @param {number} height
* @param {number} width
*/
  update(elapsed_time: number, height: number, width: number): void;
/**
*/
  render(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_cmcclient_free: (a: number) => void;
  readonly cmcclient_new: () => number;
  readonly cmcclient_say_hello: (a: number) => void;
  readonly cmcclient_update: (a: number, b: number, c: number, d: number) => void;
  readonly cmcclient_render: (a: number) => void;
  readonly cmc_init: () => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        