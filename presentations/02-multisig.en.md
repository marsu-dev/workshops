# Multi-signature Wallet

November 24, 2025

Create and manage a multi-signature wallet to secure your bitcoins with multiple keys.

---

## Objectives

- Understand the multi-signature concept
- Create a multi-signature wallet
- Understand keys and recovery words (BIP-39)
- Discover possible configurations
- Create a multi-sig in Sparrow
- Receive bitcoins on a multi-sig wallet
- Spend from a multi-sig with PSBT

---

## What is multi-signature?

A **multi-sig** = a Bitcoin vault that requires multiple keys to spend

- Unlike a standard wallet (1 key)
- Multiple keys must sign to authorize a spend

---

## Example: 2 of 3

**2-of-3** : You need **2 keys out of 3** to sign a spend

- You have 3 keys total
- To spend, you must use at least 2 of these keys
- One key alone is not enough

---

## Advantages of multi-sig

### Enhanced security

- **If a key is lost** : Funds remain accessible with the other keys
- **One key stolen** : The attacker cannot do anything alone
- **Protection against theft** : Requires multiple signatures

---

## Use cases - Personal security

- Distribute keys across different devices
- One key on computer, one on phone, one on hardware wallet
- Protection even if one device is compromised

---

## Use cases - Business / Association

- Multiple people must approve expenses
- Control of business funds
- Collaborative management of bitcoins

---

## Use cases - Family

- Multiple family members must sign
- Protection of inheritances
- Shared financial decisions

---

## Keys and recovery words

### BIP-39: Seed phrase standard

- A **seed** = a phrase of **12 or 24 words**
- BIP-39 standard used by all Bitcoin wallets
- From this seed, Sparrow generates all your keys

---

## Key generation

- The seed phrase generates a master key
- This master key generates all other keys
- Each key can sign transactions

⚠️ **CRITICAL** : Never share your recovery words

---

## Multi-sig and public keys

### xpub: Extended public key

- Multi-sig uses only **xpubs** (extended public keys)
- **Never the recovery words** (seed phrase)
- xpubs allow generating addresses without exposing private keys

---

## Why use xpubs?

- **Security** : xpubs cannot be used to spend
- **Flexibility** : Each participant keeps their private seed
- **Trust** : No need to share recovery words

---

## Possible configurations

### 2-of-3 (most common)

- **2 signatures required** out of 3 keys
- Good balance of security + practicality
- Ideal for starting with multi-sig

---

## Possible configurations

### 3-of-5

- **3 signatures required** out of 5 keys
- More security
- Useful for businesses, associations
- More flexibility in case of key loss

---

## Other configurations

Sparrow supports up to **15 keys** in SegWit mode

- 2-of-3, 3-of-5, 4-of-7, etc.
- More keys = more security but more complex

⚠️ **For beginners** : Start with 2-of-3

---

## Create a multi-sig in Sparrow

### Step 1: Open Sparrow

- Open Sparrow Wallet
- Menu → **File** → **New Wallet**

---

## Create a multi-sig in Sparrow

### Step 2: Choose Multi-signature

- Select **Multi-signature Wallet**
- Choose the network: Mainnet / Testnet / Signet

**For this workshop** : Use **Signet**

---

## Create a multi-sig in Sparrow

### Step 3: Choose the threshold

- Select the scheme: **2-of-3**, **3-of-5**, etc.
- Example: Choose **2-of-3** to start

---

## Create a multi-sig in Sparrow

### Step 4A: Generate keystores in Sparrow

- Sparrow automatically generates the necessary keystores
- Each keystore has its own seed phrase
- For each keystore: generate and save the seed phrase

---

## Create a multi-sig in Sparrow

### Step 4B: Import by xpubs

- If you already have keys (hardware wallets, other wallets)
- Import the **xpubs** (extended public keys) of participants
- Each participant keeps their private seed

**Advantage** : No need to generate new keys

---

## Generate keystores in Sparrow

- Sparrow automatically generates the necessary keystores
- For each keystore:
  - Generate a seed phrase
  - Save immediately on paper
  - Never share

⚠️ **CRITICAL** : Save each seed phrase separately

---

## Import xpubs

- If you already have keys (hardware wallets, other wallets)
- Import the **xpubs** (extended public keys)
- Each participant keeps their private seed

**Advantage** : No need to generate new keys

---

## The descriptor

### Multi-sig identity card

- Sparrow displays the wallet **descriptor**
- It's the "identity card" of the multi-sig
- Contains all information needed to reconstruct the wallet

---

## The descriptor - Example

The descriptor looks like:

```
wsh(sortedmulti(2,xpub1...,xpub2...,xpub3...))
```

- `wsh` : Witness Script Hash (SegWit)
- `sortedmulti(2,...)` : 2 signatures required among listed keys
- `xpub...` : Extended public keys

---

## Wallet ready

Once keystores are added:

- The wallet is created
- Ready to receive funds
- Addresses are generated automatically

---

## Receive bitcoins

### BIP-48 standard

- Multi-sig uses a standard called **BIP-48**
- Sparrow automatically generates addresses
- Multi-sig addresses are different from standard addresses

---

## Multi-sig addresses

### Address format

- **Mainnet** : Start with `bc1...`
- **Testnet/Signet** : Start with `tb1...`
- Visually identical to standard addresses
- But require multiple signatures to spend

---

## Generate a receiving address

- Open your multi-sig wallet
- Go to the **Receive** tab
- Click on "Create new receiving address"
- A new address is automatically generated

---

## Use the address

- Copy the address or display the QR code
- Send bitcoins to this address
- The transaction will be visible in the **Transactions** tab

⚠️ **Important** : Use a new address for each transaction

---

## PSBT: Partially Signed Bitcoin Transaction

### What is a PSBT?

- **PSBT** = Partially Signed Bitcoin Transaction
- Standard format for multi-sig transactions
- Allows signing a transaction in multiple steps

---

## Why use PSBTs?

### Interactive signing

- Each participant signs separately
- The transaction is not sent until all signatures are collected
- Secure and flexible

---

## Create a transaction

### Step 1: Prepare the transaction

- Open the **Send** tab
- Enter the destination address
- Enter the amount to send
- Configure fees

---

## Create a transaction

### Step 2: Generate the PSBT

- Click on **"Create Transaction"**
- Sparrow generates a **PSBT**
- The transaction is not yet fully signed

---

## Export the PSBT

### Method 1: File

- Save the PSBT as a file
- Transfer the file to other participants
- Simple and direct method

---

## Export the PSBT

### Method 2: Copy PSBT

- **Copy PSBT** → Copies the PSBT Base64 to clipboard
- Transfer the text (email, messaging, etc.)
- The recipient uses **Open Transaction → From Text**
- Practical for quick text transfer

**For this workshop** : We will use **Method 2: Copy PSBT**

---

## Export the PSBT

### Method 3: QR Code

- Display the PSBT as QR code
- Scan with another device
- Practical for quick transfer between devices

---

## Export the PSBT

### Method 4: USB Transfer

- Copy the file to a USB drive
- Transfer physically
- Secure method without network connection

---

## Sign the PSBT

### Step 1: Open the PSBT

- Each participant opens the PSBT in Sparrow
- **For this workshop** : Menu → **File** → **Open Transaction** → **From Text**
- Paste the received PSBT Base64

---

## Sign the PSBT

### Step 2: Add your signature

- Verify the transaction details
- Destination address
- Amount
- Fees
- Change address

⚠️ **CRITICAL** : Verify before signing

---

## Sign the PSBT

### Step 3: Sign

- Click on **"Sign"**
- Enter password if requested
- The signature is added to the PSBT
- Save the updated PSBT

---

## Collect signatures

### Iterative process

1. Participant 1 signs → PSBT with 1 signature
2. Transfer the PSBT to Participant 2
3. Participant 2 signs → PSBT with 2 signatures
4. If 2-of-3: sufficient to finalize

---

## Finalize the transaction

### When all signatures are collected

- Sparrow detects that the required number of signatures is reached
- The **"Finalize"** button becomes available
- Click on **"Finalize"**

---

## Broadcast the transaction

### Final step

- After finalization, click on **"Broadcast Transaction"**
- The transaction is sent to the Bitcoin network
- Wait for confirmations
- Follow in the **Transactions** tab

---

## The heart of multi-sig

### Fundamental principle

**Multiple people must sign before the money can leave**

- Enhanced security
- Protection against theft
- Shared control of funds

---

## Verifications before signing

### Checklist for each participant

- [ ] Destination address correct
- [ ] Amount correct
- [ ] Fees acceptable
- [ ] Change address verified
- [ ] All outputs are verified
- [ ] I understand what I'm doing

---

## Best practices - Backup

### For each keystore

- ✅ Seed phrase on paper
- ✅ Store in different locations
- ✅ Never share seed phrases
- ❌ Never on computer/cloud/email

---

## Best practices - Security

### Key management

- ✅ Distribute keys across different devices
- ✅ Use hardware wallets if possible
- ✅ Store keys in secure locations
- ✅ Always verify PSBTs before signing

---

## Best practices - Coordination

### Working as a team

- ✅ Communicate clearly with other participants
- ✅ Verify the identity of other signers
- ✅ Use secure channels to transfer PSBTs
- ✅ Keep a record of transactions

---

## What we learned

- ✅ Understand the multi-signature concept
- ✅ Understand keys and recovery words (BIP-39)
- ✅ Discover possible configurations (2-of-3, 3-of-5, etc.)
- ✅ Create a multi-sig wallet in Sparrow
- ✅ Receive bitcoins on a multi-sig wallet
- ✅ Create and sign PSBTs
- ✅ Spend from a multi-sig with multiple signatures

---

## Key points - Security

⚠️ **Security**

- Multi-sig requires multiple signatures to spend
- If a key is lost, funds remain accessible
- One stolen key cannot be used to spend
- Always verify PSBTs before signing

---

## Key points - Keys and xpubs

🔑 **Keys and xpubs**

- Multi-sig uses only xpubs, never seed phrases
- Each participant keeps their private seed
- xpubs allow generating addresses without exposing private keys

---

## Key points - PSBT

📝 **PSBT**

- Standard format for multi-sig transactions
- Allows signing a transaction in multiple steps
- Multiple people must sign before the money can leave

---

## Next workshops

- Be-BOP
- Block transaction
- Liana basics
- Liana advanced
