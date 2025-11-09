# Sparrow Wallet

10 novembre 2025

Impara a creare un portafoglio, usare passphrase, gestire account, ricevere e inviare bitcoin e padroneggiare la selezione delle monete.

---

## Obiettivi

- Creazione portafoglio
- Passphrase BIP39
- Gestione account
- Ricevere e inviare
- Selezione monete

**Ambiente**: *Signet*

---

## Perché Signet?

Rete di test Bitcoin

- Nessun fondo reale
- Funzionalità identiche a mainnet
- Faucet disponibili

---

## Installazione

Scaricare dal sito ufficiale

- macOS / Windows / Linux
- Verificare la firma GPG

---

## Configurazione rete

### Connessioni possibili

1. Server Electrum
2. Bitcoin Core (RPC)
3. Server Electrum pubblici

---

## Configurazione Signet

### In Sparrow

1. Preferenze → Server / Connessioni
2. Scegliere rete Signet
3. Aggiungere server Electrum signet
4. Verificare "Connesso"

---

## Creazione del portafoglio

### Tipi disponibili

- Portafoglio standard a chiave singola (BIP39)
- Descriptors (bech32 native segwit)

---

## Creazione - Passi

1. Menu → Nuovo Portafoglio → Portafoglio Standard
2. Scegliere un nome
3. Formato: Native SegWit (P2WPKH)
4. Generare il seed (12 parole + Passphrase)
5. Salvare su carta ⚠️

---

## Passphrase BIP39

### Concetto

Passphrase opzionale

- `seed + passphrase` = portafoglio A
- `seed solo` = portafoglio B

Indirizzi completamente diversi

---

## Passphrase - Vantaggi

- Difesa in profondità
- Protezione aggiuntiva
- Portafoglio separato con stesso seed

---

## Passphrase - Rischi

⚠️ **Perdita della passphrase = perdita dei fondi**

- Conservare separatamente dal seed
- Gestore sicuro
- Non mostrare mai pubblicamente

---

## Passphrase - Demo

1. Attivare Passphrase nelle impostazioni
2. Inserire una passphrase
3. Osservare indirizzi diversi
4. Testare con passphrase diversa

---

## Gestione degli account

### Concetti

- Account: `m/84'/1'/0'`, `m/84'/1'/1'`
- Etichette: etichettatura indirizzi/UTXO
- Solo lettura: via xpub/descriptor

---

## Account - Demo

1. Creare un secondo account
2. Etichettare un indirizzo
3. Importare xpub in solo lettura
4. Filtrare per etichetta / account

---

## Ricevere bitcoin

### Tipi di indirizzi

- Ricevi: per ricevere
- Resto: per il resto reso

Usare nuovi indirizzi per la privacy

---

## Ricevi - Demo

1. Portafoglio → Ricevi → genera indirizzo
2. Mostrare codice QR
3. Usare faucet signet
4. Osservare la transazione

---

## Ricevi - Concetti

- Conferme: numero di blocchi
- Maturità: gli UTXO devono essere confermati
- Visualizzazione: txid, vout, importo, conferme

---

## Inviare bitcoin

### Funzionalità

- Slider commissioni (sats/vB)
- Replace-By-Fee (RBF)
- Child-Pays-For-Parent (CPFP)
- Selezione manuale monete

---

## Invia - Demo

1. Portafoglio → Invia → indirizzo destinazione
2. Inserire importo
3. Selezionare commissione
4. Attivare RBF se necessario
5. Firmare e trasmettere

---

## Invia - Verifiche

⚠️ **Verificare gli output**

- Non lasciare resto verso indirizzo non controllato
- Comprendere l'impatto delle commissioni
- Anteprima prima di firmare

---

## Selezione monete

### Perché controllarla?

- Privacy: evitare la correlazione
- Commissioni: ottimizzare i costi
- Consolidamento: raggruppare UTXO

---

## Selezione monete - Demo

1. Aprire scheda Monete/UTXO
2. Vedere txid, vout, importo, conferme
3. In Invia → Seleziona Input
4. Scegliere UTXO manualmente

---

## Congela UTXO

Impedire che un UTXO venga selezionato

- Utile per conservare fondi
- Evitare spesa accidentale
- Blocco UTXO

---

## Congela - Demo

1. Selezionare un UTXO
2. Tasto destro → Congela
3. Verificare in Invia (non selezionato)
4. Dimostrare Scongela

---

## Buone pratiche

✅ **Checklist essenziale**

- Salvare seed + passphrase (separatamente)
- Nodo personale per privacy
- Controllo monete e congelamento
- Etichette sistematiche
- Verificare gli output

---

## Risorse

- Documentazione Sparrow Wallet
- Faucet Signet
- Documentazione Bitcoin Core signet

---

## Domande?

**Workshop BIP-21 - Parte 01: Utilizzi di Sparrow**

*Rete Signet - Nessun valore reale*
