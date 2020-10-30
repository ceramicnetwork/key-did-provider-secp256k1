import u8a from 'uint8arrays'

import { encodeDID } from '../src'

describe('key-did-provider-secp256k1', () => {
  test('encodeDID', () => {
    const key = u8a.fromString(
      'd713cb7f8624d8648496e01010f2bd72f0dcbbdecdb7036f38c20475f5f429bf',
      'base16'
    )
    expect(encodeDID(key)).toMatchSnapshot()
  })
})
