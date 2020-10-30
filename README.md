# secp256k1 key did provider
Still work in progress.

## Usage

```js
import { Secp256k1Provider } from 'key-did-provider-secp256k1'
import { DID } from 'dids'

const secretKey = new Uint8Array(...) //  32 bytes with high entropy
const provider = new Secp256k1Provider(secretKey)
const did = new DID({ provider })
await did.authenticate()

const { jws, linkedBlock } = did.createDagJWS({ hello: 'world' })
```

## License

Apache-2.0 OR MIT