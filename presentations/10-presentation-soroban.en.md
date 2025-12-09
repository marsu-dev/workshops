# Soroban Presentation

not planned

Soroban is a decentralized ephemeral messaging system that enables the exchange of short-lived messages and the automation of interactive protocols.

Based on the [libp2p](https://libp2p.io/) library, it communicates via Tor to guarantee anonymity and censorship resistance.

---

## Objectives

- Understand Soroban and its architecture
- Technical architecture (JSON-RPC, key/value, GOSSIP)
- Tor integration
- History and real-world applications
- Practical use cases
- Installation and demonstration

---

## What is Soroban?

Decentralized ephemeral messaging

- Peer-to-peer network ([libp2p](https://libp2p.io/))
- Ephemeral messages
- Automation of interactive protocols
- Communication via Tor
- Anonymity and censorship resistance
- Open source AGPL 3.0

---

## Technical Architecture

JSON-RPC server with key/value system

- **JSON-RPC server**: Standardized API
- **Generic key/value system**: Distributed storage
- **P2P network with GOSSIP**: Automatic synchronization
- **Application-side encryption**: Maximum flexibility
- **HTTP client + SOCKS proxy**: Simple use with Tor

A Soroban node broadcasts data on the P2P network via the GOSSIP protocol.

---

## Key / Value

### Flexibility

- Free structure: key and value are defined by the application
- Multiple values: several entries can share the same key
- Ephemeral: configurable TTL as needed

**Data model**: Document Model No-SQL

---

## Tor Integration

Anonymous and censorship-resistant communication

- Routing via Tor (hidden services)
- .onion vanity address generation
- Identity protection
- Surveillance resistance

---

## Possible Operations

- **Add**: `directory.Add`
  - Add an entry with a key and a value
  - Configurable lifetime mode

---

## Possible Operations

- **List**: `directory.List`
  - List all entries for a given key
  - If several entries exist, all are returned

---

## Message Lifetime

TTL (Time To Live) by mode

| Mode                 | Duration      |
| -------------------- | ------------- |
| `fast`               | 15 seconds    |
| `short`              | 1 minute      |
| `normal` / `default` | 3 minutes     |
| `long`               | 5 minutes     |

---

## First Application: Cahoot (Samourai Wallet)

Project evolution and real-world use cases

- PSBT exchange for Cahoot payjoins
- Synchronization between transaction partners
- Automated interactive protocol

---

## Whirlpool Attempt

Decentralization project

- Project to decentralize Whirlpool
- Did not materialize

---

## Ashigaru Wallet

In production

- Payjoin
- RPC client integrated into the wallet

---

## Dojo PushTx

PushTx feature in Dojo

- PushTx feature in Dojo
- Transaction broadcast via the Soroban cluster
- Random selection of a node for broadcasting
- Load distribution on the Bitcoin network for better privacy

**Still compatible with Samourai Wallet**

---

## Ephemeral Messaging

Potential use cases

- Partner synchronization (payjoin, Ō-uzu)
- Auth47 / [PayNym](https://paynym.rs/) authentication
- Decentralized coordination

---

## Replication of Encrypted Backup Data

Potential use cases

- Wallets (Sparrow, etc.)
- Coldcard
- BullBitcoin

**Secure distributed backup**

---

## Improving Interactive Protocols

Potential use cases

- Multi-sig in Sparrow
- Signature coordination
- Complex Bitcoin protocols

---

## Ō-uzu (great vortex)

Potential use cases

- Multi-party mix protocol
- Independent coordinator
- Decentralized

**The coordinator can set its fees**

---

## Current Project Status

Dojo cluster and development

- **Repository**: Dojo-Open-Source-Project
- **URL**: https://github.com/Dojo-Open-Source-Project/soroban
- **Dojo cluster**: ~150 active nodes
- **Latest version**: 0.4.2 ([Changelog](https://github.com/Dojo-Open-Source-Project/soroban/blob/v0.4.2/Changelog.md))
- **Dapps**: Enables building distributed applications

---

## Installation via Docker

Set up a local Soroban node

### Prerequisites

- Docker
- Tor 
- HTTP client (curl, etc.)

---

## Installation via Docker

### Commands

```bash
# Clone the repository (version 0.4.2)
git clone https://github.com/Dojo-Open-Source-Project/soroban.git -b v0.4.2
cd soroban

# Build images
bash soroban.sh server_build

# Start the server
bash soroban.sh server_start
```

---

## Installation from Source

Set up a local Soroban node

### Prerequisites

- Go
- Tor, Tor Browser
- HTTP client (curl, etc.)

---

## Installation from Source

### Commands

```bash
# Clone the repository (version 0.4.2)
git clone https://github.com/Dojo-Open-Source-Project/soroban.git -b v0.4.2
cd soroban

# Build
make soroban

# Run
go run cmd/server/main.go --hostname=0.0.0.0 --port=4242
```

---

## Configuration

Main parameters

- **Port**: Server port (default: 4242)
- **Seed**: Seed to generate the .onion address
- **Prefix**: Vanity address prefix
- **P2P Bootstrap**: Address to join the network
- **P2P Room**: Cluster segregation

---

## Practical Demonstration

Creating a node and exchanging messages

### Build and start the server

```bash
# Build Docker images
./soroban.sh server_build

# Start the server
./soroban.sh server_start

# Check status
./soroban.sh server_status

# View logs
./soroban.sh server_logs
```

---

### Generate a vanity .onion address

```bash
go run ./cmd/server --prefix=sci --genCount=1
```

---

### Start a local Soroban node (alternative)

```bash
go run cmd/server/main.go \
  --seed 169fc9f1925eec11b6a728044c9f4e6dd1a676a4f4e6f640c4100015644914e8 \
  --hostname=0.0.0.0 \
  --port=4242
```

---

### Endpoint configuration

```bash
soroban_endpoint="http://sorzvujomsfbibm7yo3k52f3t2bl6roliijnm7qql43bcoe2kxwhbcyd.onion"
```

---

### Add an entry

```bash
curl -s --socks5-hostname 127.0.0.1:9150 \
  -X POST \
  -H 'Content-Type: application/json' \
  -d "{
    \"jsonrpc\": \"2.0\",
    \"id\": 42,
    \"method\": \"directory.Add\",
    \"params\": [{
      \"Name\": \"marseille.bitcoin.soroban\",
      \"Entry\": \"Marseille Bitcoin (Only) - ¯\\\\_(ツ)_/¯ - $(date -u)\",
      \"Mode\": \"short\"
    }]
  }" \
  "$soroban_endpoint/rpc" | jq .result
```

---

### List entries

```bash
curl -s --socks5-hostname 127.0.0.1:9150 \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": 42,
    "method": "directory.List",
    "params": [{
      "Name": "marseille.bitcoin.soroban"
    }]
  }' \
  "$soroban_endpoint/rpc" \
  | jq -r .result
```

---

## Peer-to-Peer Network

Connecting to the decentralized network

- **Bootstrap**: Address of an existing node
- **Peer discovery**: Via DHT
- **Synchronization**: Automatic GOSSIP propagation
- **Rooms**: Cluster segregation (p2pRoom)
- **Resilience**: No single point of failure

**Connection example**:
```bash
go run cmd/server/main.go \
  --p2pBootstrap /onion3/.../p2p/... \
  --withTor=true \
  --p2pRoom soroban-p2p
```

---

## Conclusion

Soroban: Infrastructure for decentralized Dapps

- Decentralized ephemeral messaging
- Automated interactive protocols
- Flexible and extensible infrastructure
- Anonymity via Tor
- Simple use (HTTP + SOCKS)
- Dojo cluster: ~150 nodes
- License: Open source AGPL 3.0

---

## Resources
- Repository: https://github.com/Dojo-Open-Source-Project/soroban
- libp2p: https://libp2p.io
- Paynym: https://paynym.rs
- Ashigaru: https://ashigarumobile.org/
