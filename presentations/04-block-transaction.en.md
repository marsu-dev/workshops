# Blocks & Transactions

08 December 2025

Understand Bitcoin block structure and the transaction validation process on the blockchain.

---

## Introduction

Understand Bitcoin fundamentals: block structure and transaction validation

---

## Objectives

- Understand what a Bitcoin transaction is
- Understand how transactions are grouped into blocks
- Understand why we pay fees
- Understand the different formats (Legacy, SegWit, Taproot)
- Understand a transaction identifier (TXID)
- Understand the Merkle tree and its role in block security

---

## What is a Bitcoin transaction?

A Bitcoin transaction is like a **digital check** that:

- **Takes** money you already received (your Bitcoin coins)
- **Sends** that money to someone else (or back to yourself as "change")

---

## Bitcoin coins (UTXO)

Imagine you received several Bitcoin coins:

- One coin of 0.1 BTC
- One coin of 0.05 BTC
- One coin of 0.02 BTC

To send 0.15 BTC, you must use your existing coins. It is like paying with bills: if you want to pay €15 and you have a €20 bill, you must use that bill and get €5 back as change.

---

## Simple transaction structure

A transaction essentially contains:

**1. Inputs**
- Which coins you use (reference to the coins you received)

**2. Outputs**
- Who you send the money to (amount + address)
- Your change (if you used more than needed)

**3. The signature**
- Your proof that you own the coins

---

## Concrete example

**Situation:** Alice wants to send 0.1 BTC to Bob

**What Alice has:**
- One 0.15 BTC coin she received earlier

---

## Concrete example

**The transaction:**
- **Input:** Uses Alice's 0.15 BTC coin
- **Output 1:** 0.1 BTC to Bob
- **Output 2:** 0.0499 BTC to Alice (her change)
- **Fee:** 0.0001 BTC (the difference)


---

## Concrete example

**Result:** Bob receives 0.1 BTC, Alice gets back almost all the rest, and miners receive the fees.

---

## Transaction fees

Why pay fees?

- Miners must verify and include your transaction in a block
- It is like paying for postal service: the more urgent, the more expensive
- Fees incentivize miners to process your transaction quickly

---

## Fees prevent spam

**Fees prevent spam:** without fees, anyone could send thousands of useless transactions and clog the network

---

## How are fees calculated?

Fees depend on **two things**:

**1. The size of your transaction**
- The more coins (inputs) you use, the bigger it is
- The more people you send to (outputs), the bigger it is
- Signatures also take space

**2. The priority you want**
- High fees = faster processing (like express mail)
- Low fees = slower processing (like regular mail)

---

## Example fee calculation

**Simple transaction:**
- 1 input (one coin used)
- 2 outputs (recipient + change)
- Size: about 250 bytes

---

## Example fee calculation

**If you choose:**
- Fast fees: 50 satoshis per byte → 250 × 50 = 12,500 satoshis
- Normal fees: 10 satoshis per byte → 250 × 10 = 2,500 satoshis

**Note:** Modern transactions (SegWit) are cheaper because signatures take less space.

---

## Transaction identifier (TXID)

Every transaction receives a **unique identifier**, like a tracking number.

**Characteristics:**
- It is a long string of letters and numbers (like a barcode)
- It is unique: impossible to have two transactions with the same identifier
- It lets you find your transaction on the blockchain

---

## The TXID never changes

- It never changes: even if you view the transaction later, the identifier stays the same

**Usefulness:**
- Verify that a transaction was sent
- Track the status of a payment
- Reference a transaction in the future

---

## View transactions in Sparrow

**Step 1: Open the Transactions tab**
- Select your wallet in Sparrow
- Click the **Transactions** tab (bottom of the interface)
- You will see the list of all your transactions

---

## View transaction details

**Step 2: Open transaction details**
- Double-click a transaction in the list
- A window opens with all transaction details

---

## See the TXID in Sparrow

**Method 1: In the transaction list**
- The **Transactions** tab shows each transaction's TXID
- It is the first column (long string of letters and numbers)
- You can click it to copy

---

## See the TXID in Sparrow

**Method 2: In transaction details**
- Double-click a transaction
- The TXID appears at the top of the details window
- You can click it to copy

---

## See the TXID in Sparrow

**Method 3: Context menu**
- Right-click a transaction in the list
- Select **"Copy Transaction ID"**
- The TXID is copied to the clipboard

---

## Information visible in Sparrow

**Basic information:**
- The **TXID** (unique identifier)
- The **amount** sent or received
- The **date and time** of the transaction
- The **number of confirmations**

---

## Technical details in Sparrow

**Technical details:**
- The **inputs**: which coins were used
- The **outputs**: who received the money
- The **fees** paid
- The **size** of the transaction (in vBytes)

---

## Transaction status in Sparrow

**Status:**
- **Pending:** unconfirmed transaction
- **Confirmed:** number of blocks since confirmation
- **Finalized:** fully confirmed transaction

---

## A transaction cannot be lost

**Bitcoin guarantee:**

A Bitcoin transaction can **never** be lost. There are only two possible states:

---

## State 1: The transaction is mined

**1. The transaction is mined**
- It is included in a block on the blockchain
- It is confirmed and irreversible
- Your money has been transferred

---

## State 2: No operation happened

**2. No operation happened**
- The transaction was never broadcast to the network
- Or it was rejected before being mined
- Your money never left your wallet

**There are no intermediate states:**
- No "transaction in transit" that could disappear
- No "limbo" where your money is stuck
- Either it is done or it is not

---

## The different transaction formats

Bitcoin has evolved and now offers several transaction formats. Each format has its advantages in cost and features.

---

## Format comparison: Legacy, SegWit, Taproot

| Format      | Technical name | Year | Characteristics                               | Relative cost        |
| ----------- | -------------- | ---- | ---------------------------------------------- | -------------------- |
| **Legacy**  | P2PKH          | 2009 | Original format, signatures inside transaction | Most expensive       |
| **SegWit**  | P2WPKH         | 2017 | Signatures separated, 4x cheaper               | Significant savings  |
| **Taproot** | P2TR           | 2021 | Most modern format, optimized signatures       | Cheapest             |

**In practice:** Modern formats (SegWit and Taproot) save you money on fees!

---

## Modern transactions (SegWit)

**Before (old Legacy format):**
- Signatures were in the main transaction
- Heavier transactions = higher fees
- Format: P2PKH (Pay-to-Public-Key-Hash)

---

## SegWit: advantages

**Now (SegWit):**
- Signatures are separated (in the "witness")
- Lighter transactions = lower fees
- About 4 times cheaper for signatures
- Formats: P2WPKH, P2WSH

**Advantage:** You pay lower fees for the same transaction!

---

## Cost of different input formats

When you use a Bitcoin coin in a transaction, the cost depends on the format:

| Input type              | Format      | Approx. size        | Relative cost      |
| ----------------------- | ----------- | ------------------- | ------------------ |
| **Legacy**              | P2PKH       | ~148 vBytes         | Most expensive     |
| **Nested SegWit**       | P2SH-P2WPKH | ~91 vBytes          | Moderate savings   |
| **Native SegWit**       | P2WPKH      | ~41 vBytes          | Very efficient     |
| **Taproot**             | P2TR        | ~16-57 vBytes       | Optimal            |

---

## Savings with SegWit

**Concrete example:**
- Using a Legacy coin: costs about 148 units
- Using a SegWit coin: costs about 41 units
- **Savings:** About 70% lower fees with SegWit!

---

## Cost of different output formats

When you send money to someone, the destination address format also affects size:

| Output type  | Format | Approx. size |
| ------------ | ------ | ------------ |
| **Legacy**   | P2PKH  | ~34 vBytes   |
| **SegWit**   | P2WPKH | ~31 vBytes   |
| **Taproot**  | P2TR   | ~43 vBytes   |

**Note:** The difference is smaller for outputs, but SegWit remains slightly more efficient.

---

## Fee comparison example

**Transaction with 1 input and 2 outputs:**

| Format      | Total size | Fees (at 20 sat/vByte) | Savings        |
| ----------- | ---------- | ---------------------- | -------------- |
| **Legacy**  | ~250 vBytes| ~5,000 satoshis        | -              |
| **SegWit**  | ~117 vBytes| ~2,340 satoshis        | 53% cheaper    |
| **Taproot** | ~100 vBytes| ~2,000 satoshis        | 60% cheaper    |

**Conclusion:** Using modern formats can save you more than half the fees!

---

## Taproot: the most modern format

**Taproot (P2TR)** is the newest and most advanced format:

**Advantages:**
- **Even lower fees:** Optimized Schnorr signatures
- **More privacy:** All Taproot transactions look similar
- **More flexibility:** Allows complex scripts without revealing they exist
- **Better efficiency:** Optimized encoding

---

## When to use Taproot?

**When to use it?**
- If your wallet supports it (modern wallets)
- To get the lowest fees
- For more privacy

**Note:** Not all wallets support Taproot yet, but it is the future format.

---

## Block organization

Transactions are not processed one by one. They are grouped into **blocks**, like pages of a ledger.

**A block contains:**
- A header (like a book cover page)
- A list of transactions (like the lines of a ledger)

---

## Block size and frequency

**Block size:**
- Maximum around 1 MB of data
- Can contain several thousand transactions
- A new block is created about every 10 minutes

---

## The coinbase

In every block, the **first transaction is special**:

**The coinbase transaction:**
- Creates new bitcoins (the miner reward)
- Collects all the fees from the block's transactions
- It is like the miner's salary for their work

---

## Example of miner reward

**Example:**
- Block reward: 3.125 BTC (currently)
- Fees collected: 0.5 BTC
- **Total for the miner:** 3.625 BTC

---

## Transaction order

**Simple rule:**
1. The coinbase is always first
2. The other transactions can be in any order
3. **Except:** if transaction B spends money created in transaction A, then A must come before B

---

## Why this rule?

**Why?**
- It is like real life: you cannot spend money you have not yet received!

---

## Example of transaction order

**Example:**
- Transaction A: Alice receives 0.1 BTC
- Transaction B: Alice sends 0.05 BTC to Bob
- B must come **after** A in the block

---

## The Merkle tree
**the block's security seal**

The Merkle tree is a system that creates a **unique fingerprint** for all transactions in a block.


---

## The Merkle tree
**Simple analogy:**
Imagine a book with 1,000 pages. Instead of checking every page, you create a "magic table of contents" that summarizes the whole book in one line. If someone changes even a single letter in the book, the summary changes completely.

---

## Uses of the Merkle tree

**1. Detect modifications**
- If someone tries to change a transaction in the block, the fingerprint changes
- It is like a wax seal: if it is broken, you see it immediately
- Impossible to forge a block without it being obvious

---

## Quickly verify a transaction

**2. Quickly verify a transaction**
- You can prove a transaction is in the block **without downloading all transactions**
- It is like checking if a word is in a dictionary without reading every page
- Very useful for lightweight wallets on phones

---

## Save space and bandwidth

**3. Save space and bandwidth**
- Instead of storing all transactions, you can just verify the fingerprint
- Mobile wallets can work without downloading the full blockchain

---

## How does it work?

**Step 1:** Each transaction gets a unique "fingerprint" (like a barcode)

**Step 2:** Pair the fingerprints and create a new fingerprint for each pair

**Step 3:** Repeat until you get a single final fingerprint: the **Merkle Root**

**Result:** One fingerprint represents all the transactions in the block!

This final fingerprint is stored in the block header.

---

## Structure of the Merkle tree

<img src="presentations/04-block-tx/merkle.png" alt="Structure of the Merkle tree" style="height: 300px; width: auto; background-color: white; padding: 20px; border-radius: 8px;">

---

## Why is it useful in practice?

**Scenario 1: Check your payment**
- You want to verify your transaction is in a block
- **Without Merkle:** You would have to download all the transactions in the block (maybe 3,000 transactions = several MB)
- **With Merkle:** You download just a few small fingerprints (a few KB) and can prove your transaction is there!

---

## Why is it useful in practice?

**Scenario 2: Wallet on your phone**
- Your phone does not have enough space to store the entire blockchain (hundreds of GB)
- **With Merkle:** Your wallet can verify your transactions without downloading everything
- It is like having a summary of the book instead of the whole book

---

## Security with the Merkle tree

**Scenario 3: Security**
- If a hacker tries to change a transaction in a block
- The Merkle fingerprint changes immediately
- All nodes on the network reject the modified block
- It is impossible to forge without everyone noticing

---

## Simple summary

The Merkle tree is:
- ✅ A **security seal**: impossible to change a block without the fingerprint changing
- ✅ A **fast verification system**: prove a transaction exists without downloading everything
- ✅ A **space saver**: lightweight wallets can work without the full blockchain

---

## Simple summary

**In one sentence:**

It is like a magic table of contents that changes if you modify even one letter in the book, and that lets you check a page exists without reading the whole book.

---

## Block validation

Before a block is accepted, it must be **validated**:

**Checks:**
- All transactions are valid (correct signatures)
- Nobody spent money they do not have
- No duplicate transactions
- Amounts are correct (outputs ≤ inputs)
- The Merkle fingerprint is correct

**If everything is good:** The block is added to the blockchain
**If something is wrong:** The block is rejected

---

## View a block on mempool.space

**Step 1: From transaction details in Sparrow**
- Open Sparrow and go to the **Transactions** tab
- Double-click a confirmed transaction
- In the details, click the **block hash** or **block number**
- This automatically opens the block on mempool.space

---

## View a block on mempool.space

**Step 2: Open mempool.space**
- Go to [mempool.space](https://mempool.space) in your browser
- Or use [mempool.space/signet](https://mempool.space/signet) for Signet

---

## View a block on mempool.space

**Step 3: Search for the block**
- Use the search bar at the top of the page
- Enter the block number or block hash
- Click the result to see all block details

---

## What you can see on mempool.space

**Block information:**
- The **block hash** and **block number**
- The **number of transactions** in the block
- The **block size** (in MB)
- The **fees collected** by the miner
- The **block reward** (coinbase)
- The **Merkle Root** (fingerprint of all transactions)

---

## What you can see on mempool.space

**Transaction list:**
- All transactions in the block in order
- The coinbase transaction first
- Details for each transaction (TXID, amounts, fees)

---

## Summary: A Bitcoin transaction

A Bitcoin transaction is like a digital check that:
- Takes money you already have
- Sends it to someone else (or back to you)
- Includes your signature to prove it is you

---

## Summary: A Bitcoin transaction

**Contains:**
- The coins you use (inputs)
- Who you send to (outputs)
- Your signature

---

## Summary: A Bitcoin transaction

**Does not contain:**
- Your name or identity
- Your total balance
- Your email address

---

## Summary: Transaction fees

Fees depend on:
- **The size** of your transaction (number of coins used, number of recipients)
- **The format** used (Legacy, SegWit, Taproot)
- **The priority** you choose (fast = expensive, slow = cheaper)

---

## Why fees?

**Why fees?**
- Pay miners for their work
- Prevent spam and protect the network
- Incentivize fast transaction processing

---

## Format comparison

**Format comparison:**
- **Legacy:** Most expensive (~250 vBytes for a simple transaction)
- **SegWit:** About 2x cheaper (~117 vBytes)
- **Taproot:** Cheapest (~100 vBytes)

---

## Summary: The identifier (TXID)

Every transaction has a **unique identifier**:
- It is like a tracking number
- It lets you find your transaction
- It never changes
- You can share it to prove a payment

**Where to find it?** In your wallet, after sending a transaction.

---

## Summary: Blocks

Transactions are grouped into **blocks**:
- One block = one page of the Bitcoin ledger
- About 1 MB maximum
- One new block every 10 minutes
- The first transaction is always the coinbase (miner reward)

**Order:**
- Coinbase first
- Other transactions in any order
- Except when one transaction depends on another

---

## Summary: The Merkle tree

The Merkle tree creates a **unique fingerprint** of the block:
- **Security:** Impossible to change a block without the fingerprint changing
- **Fast verification:** Prove a transaction exists without downloading the whole block
- **Space saving:** Lightweight wallets can work without the full blockchain

---

## Key points to remember

- ✅ A transaction takes money you have and sends it elsewhere
- ✅ Fees depend on size and priority
- ✅ Each transaction has a unique identifier (TXID)
- ✅ Transactions are grouped into blocks
- ✅ The first transaction of a block is always the coinbase
- ✅ The Merkle tree guarantees no one can modify a block

---
