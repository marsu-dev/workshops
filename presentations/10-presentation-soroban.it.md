# Presentazione Soroban

non pianificato

Soroban è un sistema di messaggistica effimera decentralizzato che permette lo scambio di messaggi a breve durata e l'automazione di protocolli interattivi.

Basato sulla libreria [libp2p](https://libp2p.io/), comunica tramite Tor per garantire anonimato e resistenza alla censura.

---

## Obiettivi

- Capire Soroban e la sua architettura
- Architettura tecnica (JSON-RPC, chiave/valore, GOSSIP)
- Integrazione con Tor
- Storia e applicazioni reali
- Casi d'uso pratici
- Installazione e dimostrazione

---

## Che cos'è Soroban?

Messaggistica effimera decentralizzata

- Rete peer-to-peer ([libp2p](https://libp2p.io/))
- Messaggi effimeri
- Automazione di protocolli interattivi
- Comunicazione via Tor
- Anonimato e resistenza alla censura
- Open source AGPL 3.0

---

## Architettura Tecnica

Server JSON-RPC con sistema chiave/valore

- **Server JSON-RPC**: API standardizzata
- **Sistema chiave/valore generico**: Archiviazione distribuita
- **Rete P2P con GOSSIP**: Sincronizzazione automatica
- **Crittografia a carico dell'applicazione**: Massima flessibilità
- **Client HTTP + proxy SOCKS**: Uso semplice con Tor

Un nodo Soroban diffonde i dati sulla rete P2P tramite il protocollo GOSSIP.

---

## Chiave / Valore

### Flessibilità

- Struttura libera: chiave e valore sono definiti dall'applicazione
- Valori multipli: più voci possono condividere la stessa chiave
- Effimero: TTL configurabile secondo le esigenze

**Modello dati**: Document Model No-SQL

---

## Integrazione Tor

Comunicazione anonima e resistente alla censura

- Instradamento via Tor (hidden services)
- Generazione di indirizzi .onion vanity
- Protezione dell'identità
- Resistenza alla sorveglianza

---

## Operazioni Possibili

- **Aggiungi**: `directory.Add`
  - Aggiungere una voce con una chiave e un valore
  - Modalità di durata configurabile

---

## Operazioni Possibili

- **Elenca**: `directory.List`
  - Elencare tutte le voci per una chiave data
  - Se esistono più voci, vengono restituite tutte

---

## Durata dei Messaggi

TTL (Time To Live) per modalità

| Modalità              | Durata        |
| -------------------- | ------------- |
| `fast`               | 15 secondi    |
| `short`              | 1 minuto      |
| `normal` / `default` | 3 minuti      |
| `long`               | 5 minuti      |

---

## Prima Applicazione: Cahoot (Samourai Wallet)

Evoluzione del progetto e casi d'uso reali

- Scambio di PSBT per i payjoin Cahoot
- Sincronizzazione tra partner di transazione
- Protocollo interattivo automatizzato

---

## Tentativo Whirlpool

Progetto di decentralizzazione

- Progetto di decentralizzazione di Whirlpool
- Non è andato in porto

---

## Ashigaru Wallet

In produzione

- Payjoin
- Client RPC integrato nel wallet

---

## Dojo PushTx

Funzione PushTx in Dojo

- Funzione PushTx in Dojo
- Invio delle transazioni tramite il cluster Soroban
- Selezione casuale di un nodo per il broadcast
- Distribuzione del carico sulla rete Bitcoin per una migliore privacy

**Ancora compatibile con Samourai Wallet**

---

## Messaggistica Effimera

Possibili casi d'uso

- Sincronizzazione dei partner (payjoin, Ō-uzu)
- Autenticazione Auth47 / [PayNym](https://paynym.rs/)
- Coordinamento decentralizzato

---

## Replicazione di Backup Cifrati

Possibili casi d'uso

- Wallet (Sparrow, ecc.)
- Coldcard
- BullBitcoin

**Backup distribuito sicuro**

---

## Miglioramento dei Protocolli Interattivi

Possibili casi d'uso

- Multi-sig in Sparrow
- Coordinamento delle firme
- Protocolli Bitcoin complessi

---

## Ō-uzu (grande vortice)

Possibili casi d'uso

- Protocollo di mix a più parti
- Coordinatore indipendente
- Decentralizzato

**Il coordinatore può impostare le proprie commissioni**

---

## Stato Attuale del Progetto

Cluster Dojo e sviluppo

- **Repository**: Dojo-Open-Source-Project
- **URL**: https://github.com/Dojo-Open-Source-Project/soroban
- **Cluster Dojo**: ~150 nodi attivi
- **Ultima versione**: 0.4.2 ([Changelog](https://github.com/Dojo-Open-Source-Project/soroban/blob/v0.4.2/Changelog.md))
- **Dapp**: Permette di realizzare applicazioni distribuite

---

## Installazione via Docker

Configurare un nodo Soroban locale

### Prerequisiti

- Docker
- Tor 
- Client HTTP (curl, ecc.)

---

## Installazione via Docker

### Comandi

```bash
# Clonare il repository (versione 0.4.2)
git clone https://github.com/Dojo-Open-Source-Project/soroban.git -b v0.4.2
cd soroban

# Build delle immagini
bash soroban.sh server_build

# Avvio del server
bash soroban.sh server_start
```

---

## Installazione da Sorgente

Configurare un nodo Soroban locale

### Prerequisiti

- Go
- Tor, Tor Browser
- Client HTTP (curl, ecc.)

---

## Installazione da Sorgente

### Comandi

```bash
# Clonare il repository (versione 0.4.2)
git clone https://github.com/Dojo-Open-Source-Project/soroban.git -b v0.4.2
cd soroban

# Build
make soroban

# Avvio
go run cmd/server/main.go --hostname=0.0.0.0 --port=4242
```

---

## Configurazione

Parametri principali

- **Port**: Porta del server (default: 4242)
- **Seed**: Seed per generare l'indirizzo .onion
- **Prefix**: Prefisso per l'indirizzo vanity
- **P2P Bootstrap**: Indirizzo per unirsi alla rete
- **P2P Room**: Segregazione dei cluster

---

## Dimostrazione Pratica

Creazione di un nodo e scambio di messaggi

### Build e avvio del server

```bash
# Build delle immagini Docker
./soroban.sh server_build

# Avvio del server
./soroban.sh server_start

# Verifica dello stato
./soroban.sh server_status

# Consultazione dei log
./soroban.sh server_logs
```

---

### Generazione di un indirizzo .onion vanity

```bash
go run ./cmd/server --prefix=sci --genCount=1
```

---

### Avvio di un nodo Soroban locale (alternativa)

```bash
go run cmd/server/main.go \
  --seed 169fc9f1925eec11b6a728044c9f4e6dd1a676a4f4e6f640c4100015644914e8 \
  --hostname=0.0.0.0 \
  --port=4242
```

---

### Configurazione dell'endpoint

```bash
soroban_endpoint="http://sorzvujomsfbibm7yo3k52f3t2bl6roliijnm7qql43bcoe2kxwhbcyd.onion"
```

---

### Aggiunta di una voce

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

### Elenco delle voci

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

## Rete Peer-to-Peer

Connessione alla rete decentralizzata

- **Bootstrap**: Indirizzo di un nodo esistente
- **Scoperta dei peer**: Tramite DHT
- **Sincronizzazione**: Propagazione GOSSIP automatica
- **Rooms**: Segregazione dei cluster (p2pRoom)
- **Resilienza**: Nessun singolo punto di guasto

**Esempio di connessione**:
```bash
go run cmd/server/main.go \
  --p2pBootstrap /onion3/.../p2p/... \
  --withTor=true \
  --p2pRoom soroban-p2p
```

---

## Conclusione

Soroban: infrastruttura per Dapp decentralizzate

- Messaggistica effimera decentralizzata
- Protocolli interattivi automatizzati
- Infrastruttura flessibile ed estensibile
- Anonimato tramite Tor
- Uso semplice (HTTP + SOCKS)
- Cluster Dojo: ~150 nodi
- Licenza: Open source AGPL 3.0

---

## Risorse
- Repository: https://github.com/Dojo-Open-Source-Project/soroban
- libp2p: https://libp2p.io
- Paynym: https://paynym.rs
- Ashigaru: https://ashigarumobile.org/
