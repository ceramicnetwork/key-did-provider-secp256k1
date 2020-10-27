//import { encodeDID, Secp256k1Provider } from '../src'
import { encodeDID } from '../src'
import { randomBytes } from '@stablelib/random'

describe('blah', () => {
  it('works', () => {
    expect(encodeDID(randomBytes(32))).toEqual('asdf')
    //expect(sum(1, 1)).toEqual(2)
  })
})
