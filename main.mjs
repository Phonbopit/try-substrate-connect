import {
  ScProvider,
  WellKnownChain,
} from "@polkadot/rpc-provider/substrate-connect";
import { ApiPromise } from "@polkadot/api";

const provider = new ScProvider(WellKnownChain.westend2);
await provider.connect();

const api = await ApiPromise.create({ provider });

await api.rpc.chain.subscribeNewHeads((lastHeader) => {
  console.log("Subscribe:::>>> ", lastHeader.hash);
});
