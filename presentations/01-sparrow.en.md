# Sparrow Wallet

November 10, 2025

Learn how to create a wallet, use passphrases, manage accounts, receive and send bitcoins, and master coin selection.

---

## Objectives

- Wallet creation
- BIP39 passphrase
- Account management
- Receive and send
- Coin selection

**Environment**: *Signet*

---

## Why Signet?

Bitcoin test network

- No real funds
- Features identical to mainnet
- Faucets available

---

## Installation

Download from the official website

- macOS / Windows / Linux
- Verify GPG signature

---

## Network Configuration

### Connection options

1. Electrum server
2. Bitcoin Core (RPC)
3. Public Electrum servers

---

## Signet Configuration

### In Sparrow

1. Preferences → Server / Connections
2. Choose Signet network
3. Add Signet Electrum server
4. Verify "Connected"

---

## Wallet Creation

### Available types

- Standard single-key wallet (BIP39)
- Descriptors (bech32 native segwit)

---

## Creation - Steps

1. Menu → New Wallet → Standard Wallet
2. Choose a name
3. Format: Native SegWit (P2WPKH)
4. Generate the seed (12 words + Passphrase)
5. Save on paper ⚠️

---

## BIP39 Passphrase

### Concept

Optional passphrase

- `seed + passphrase` = wallet A
- `seed alone` = wallet B

Completely different addresses

---

## Passphrase - Advantages

- Defense-in-depth
- Additional protection
- Separate wallet with same seed

---

## Passphrase - Risks

⚠️ **Loss of passphrase = loss of funds**

- Store separately from seed
- Secure manager
- Never display publicly

---

## Passphrase - Demo

1. Enable Passphrase in settings
2. Enter a passphrase
3. Observe different addresses
4. Test with different passphrase

---

## Account Management

### Concepts

- Accounts: `m/84'/1'/0'`, `m/84'/1'/1'`
- Labels: tagging addresses/UTXO
- Watch-only: via xpub/descriptor

---

## Accounts - Demo

1. Create a second account
2. Label an address
3. Import xpub as watch-only
4. Filter by label / account

---

## Receiving Bitcoins

### Address types

- Receive: for receiving
- Change: for change output

Use new addresses for privacy

---

## Receive - Demo

1. Wallet → Receive → generate address
2. Display QR code
3. Use Signet faucet
4. Observe the transaction

---

## Receive - Concepts

- Confirmations: number of blocks
- Maturity: UTXO must be confirmed
- Display: txid, vout, amount, confirmations

---

## Sending Bitcoins

### Features

- Fee slider (sats/vB)
- Replace-By-Fee (RBF)
- Child-Pays-For-Parent (CPFP)
- Manual coin selection

---

## Send - Demo

1. Wallet → Send → destination address
2. Enter amount
3. Select fee
4. Enable RBF if needed
5. Sign and broadcast

---

## Send - Verifications

⚠️ **Verify the outputs**

- Do not leave change to uncontrolled address
- Understand fee impact
- Preview before signing

---

## Coin Selection

### Why control it?

- Privacy: avoid correlation
- Fees: optimize costs
- Consolidation: group UTXO

---

## Coin Selection - Demo

1. Open Coins/UTXO tab
2. View txid, vout, amount, confirmations
3. In Send → Select Inputs
4. Choose UTXO manually

---

## Freeze UTXO

Prevent a UTXO from being selected

- Useful for keeping funds
- Avoid accidental spending
- UTXO Locking

---

## Freeze - Demo

1. Select a UTXO
2. Right click → Freeze
3. Verify in Send (not selected)
4. Demonstrate Unfreeze

---

## Best Practices

✅ **Essential checklist**

- Save seed + passphrase (separately)
- Personal node for privacy
- Coin control & freeze
- Systematic labels
- Verify outputs

---

## Resources

- Sparrow Wallet documentation
- Signet faucets
- Bitcoin Core signet docs

---

## Questions?

**BIP-21 Workshop - Part 01: Sparrow Usage**

*Signet Network - No real value*
