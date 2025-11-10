# Iniziare con Sparrow

10 novembre 2025

Scopri come usare Sparrow Wallet con una chiave software per gestire i tuoi bitcoin in sicurezza.

---

## Obiettivi

- Installare Sparrow Wallet
- Comprendere le diverse reti Bitcoin
- Configurare la connessione di rete
- Creare e proteggere un portafoglio
- Comprendere conti e indirizzi
- Ricevere e inviare bitcoin

---

## Download di Sparrow

- Andare sul sito ufficiale
- Scaricare la versione per il tuo sistema

**Risorsa** : [Download Sparrow](https://sparrowwallet.com/download/)

---

## Verifica di Sparrow

- Garantisce l'autenticità del software
- Protegge da malware

⚠️ **Importante** : Verificare la firma GPG del file scaricato

**Risorsa** : [Download Sparrow](https://sparrowwallet.com/download/)

---

## Installazione di Sparrow

- **macOS** : Aprire il file .dmg e trascinare Sparrow in Applicazioni
- **Windows** : Eseguire il file .exe
- **Linux** : Estrarre l'archivio ed eseguire

**Risorsa** : [Guida Quick Start Sparrow](https://sparrowwallet.com/docs/quick-start.html)

---

## Reti Bitcoin

### Mainnet

- Rete principale
- **Bitcoin reali** con valore monetario
- Transazioni definitive e irreversibili

⚠️ **Usare solo con bitcoin reali**

---

## Reti Bitcoin

### Testnet

- **Bitcoin di test** senza valore
- Per testare e imparare
- Faucet disponibili per ottenere bitcoin di test

---

## Reti Bitcoin

### Signet

- **Bitcoin di test** senza valore
- Più stabile di testnet
- Ideale per workshop e formazione

---

## Confronto Reti

| Caratteristica | Mainnet     | Testnet  | Signet    |
| -------------- | ----------- | -------- | --------- |
| Valore         | Reale       | Nessuno  | Nessuno   |
| Stabilità      | Molto stabile | Variabile | Stabile   |
| Uso            | Produzione  | Test     | Formazione |

**Per questo workshop** : Useremo **Signet**

---

## Tipi di Connessione

Sparrow può connettersi in diversi modi:

- **Nodo Bitcoin Core privato**
- **Server Electrum pubblico**
- **Server Electrum privato**

---

## Nodo Bitcoin Core

- Il tuo nodo Bitcoin
- Massima privacy
- Controllo totale

---

## Server Electrum

**Server Electrum pubblico** :
- Connessione a un server di terze parti
- Più semplice da configurare

**Server Electrum privato** :
- Il tuo server Electrum
- Buon compromesso privacy/facilità

---

## Connessione di Rete

### Clearnet

- Connessione Internet standard
- Più veloce
- Meno privacy

---

## Connessione di Rete

### Tor

- The Onion Router
- Connessione anonima tramite la rete Tor
- Più privacy
- Può essere più lenta

**Risorsa** : [The Tor Project](https://www.torproject.org/)

---

## Configurazione

- Aprire **Preferenze**
- Andare in **Server** / **Connessioni**
- Scegliere la rete: Mainnet / Testnet / Signet

---

## Configurazione

- Configurare la connessione:
  - **Server Pubblico** : Selezionare un server
  - **Server Privato** : Il tuo server
- Scegliere **Clearnet** o **Tor**
- Verificare che lo stato mostri **"Connesso"**

**Risorsa** : [Guida Quick Start Sparrow](https://sparrowwallet.com/docs/quick-start.html)

---

## Creare un Nuovo Portafoglio

- Menu → **Nuovo Portafoglio** → **Portafoglio Standard**
- Scegliere un nome per il tuo portafoglio
- Selezionare il formato: **Native SegWit (P2WPKH)**

---

## Formato Native SegWit

- Formato moderno ed economico
- Indirizzi che iniziano con
  - `bc1...` (mainnet)
  - `tb1...` (testnet/signet)

---

## Generare Frase Seed

La **frase seed** è la tua chiave di backup

- Generalmente **12 o 24 parole**
- Generata casualmente da Sparrow

⚠️ **CRITICO** : Salvare immediatamente su carta

---

## Salvare la Seed

- **Scrivere su carta** (mai su computer/cloud)
- Verificare che tutte le parole siano corrette
- Conservare in un luogo sicuro e segreto
- Non condividere mai con nessuno

⚠️ Perdita della seed = **perdita definitiva di tutti i bitcoin**

---

## Portafoglio Senza Passphrase

- Portafoglio standard solo con seed
- Più semplice da usare
- Se la seed è compromessa, i fondi sono accessibili

---

## Portafoglio Con Passphrase

- Protezione aggiuntiva
- `seed + passphrase` = portafoglio diverso da `solo seed`
- La stessa seed può creare più portafogli diversi

---

## Esempio di Passphrase

- Seed : `parola1 parola2 ... parola12`
- Senza passphrase → Portafoglio A
- Con passphrase "MioSegreto123" → Portafoglio B

---

## Attivare Passphrase

- Nelle impostazioni del portafoglio
- Attivare l'opzione **Passphrase**
- Inserire la tua passphrase

**memorizzare o salvare separatamente**

⚠️ Perdita della passphrase = **perdita dei fondi di questo portafoglio**

---

## Impostare una Password

La **password del portafoglio** protegge l'accesso a Sparrow

- Necessaria ogni volta che apri il portafoglio
- Diversa dalla passphrase

⚠️ Non protegge se qualcuno ha la tua seed

---

## Buone Pratiche

- Usare una password forte
- Memorizzarla o conservarla in un gestore di password sicuro
- Non confonderla con la passphrase

---

## Concetto di Conto

Un **conto** è una separazione logica nel tuo portafoglio

- Ogni conto ha i propri indirizzi
- Utile per organizzare i tuoi fondi
- Esempio: Conto "Risparmi", Conto "Spese"

---

## Percorso di Derivazione

**Percorso di Derivazione**
- Mainnet
  - Conto 0 : `m/84'/0'/0'`
  - Conto 1 : `m/84'/0'/1'`

- Signet
  - Conto 0 : `m/84'/1'/0'`
  - Conto 1 : `m/84'/1'/1'`

---

## Sotto-conti

- I sotto-conti permettono un'organizzazione più fine
- Ogni conto può avere più sotto-conti
- Utile per separare usi diversi

---

## Indirizzi di Ricezione

- Indirizzi per **ricevere** bitcoin
- Generati automaticamente dal portafoglio
- Ogni transazione deve usare un **nuovo indirizzo**

---

## Indirizzi di Resto

- Indirizzi per il **resto** restituito quando si invia
- Generati automaticamente dal portafoglio

Se invii **0.1 BTC** ma spendi 1.0 BTC

**0.9 BTC** torna come "resto"

---

## Esempio di Indirizzo di Resto

- Hai 1 BTC
- Invii 0.3 BTC a qualcuno
- Commissioni : 0.0001 BTC

**Resto** : 0.6999 BTC torna al tuo indirizzo di resto

---

## Visualizzare Conti in Sparrow

- Aprire il tuo portafoglio
- Vedere l'elenco dei conti nella barra laterale
- Fare clic su un conto per vedere i suoi indirizzi
- Scheda **Indirizzi** : vedere tutti gli indirizzi
  - ricezione
  - resto

---

## Generare Indirizzo di Ricezione

- Selezionare il tuo portafoglio
- Andare alla scheda **Ricevi**
- Fare clic su "Crea nuovo indirizzo di ricezione"
  
**Viene generato un nuovo indirizzo**

---

## Mostrare Codice QR

- Mostrare il **codice QR** per facilitare la condivisione
- Copiare l'indirizzo per inviarlo

---

## Indirizzi Pre-generati

- Sparrow può generare più indirizzi in anticipo
- Utile per ricevere più pagamenti
- Ogni indirizzo rimane unico e valido

---

## Riutilizzo Indirizzo

⚠️ Riutilizzo Indirizzo **Evitare**

- Usare lo stesso indirizzo più volte riduce la privacy
- Permette di collegare le tue transazioni

Buona pratica **un indirizzo = una transazione**

---

## Ricevere - Dimostrazione

- Portafoglio → **Ricevi**
- Generare un nuovo indirizzo
- Copiare l'indirizzo o mostrare il codice QR
- Usare un faucet Signet per ricevere bitcoin di test

---

## Verificare Ricezione

- **Conferme** : Numero di blocchi minati dalla tua transazione
- Più conferme = transazione più sicura
- Osservare la transazione apparire nella scheda **Transazioni**

---

## Numero di Conferme

- Per importi piccoli : 1 conferma spesso sufficiente
- Per importi grandi : aspettare 6 conferme

---

## Perché Spostare Tra Conti?

- Organizzare i tuoi fondi
- Separare usi diversi
- Trasferire a un altro conto nello stesso portafoglio

---

## Come Spostare Tra Conti

- Aprire la scheda **Invia**
- In **Paga a**, inserire un indirizzo di destinazione
- Inserire l'importo da trasferire
- Verificare le commissioni
- Creare, firmare e trasmettere la transazione

**Nota** : È tecnicamente una transazione normale, ma al tuo stesso portafoglio

---

## Creazione Transazione

- Aprire la scheda **Invia**
- In **Paga a** :
  - Inserire l'indirizzo Bitcoin del destinatario
  - O scansionare un codice QR
- Inserire l'**importo** da inviare
  - In BTC o sats
- Aggiungere un'**etichetta** per identificare la transazione

---

### Configurazione Commissioni

- **Cursore commissioni** : Regolare le commissioni di transazione (sats/vB)
- Commissioni più alte = conferma più veloce
- Commissioni più basse = conferma più lenta
- Sparrow suggerisce commissioni appropriate

---

### Opzioni Avanzate

- **Replace-By-Fee (RBF)** : Permette di aumentare le commissioni dopo l'invio
- **Selezione monete** : Scegliere manualmente gli UTXO da spendere

---

### Verifica Prima di Firmare

- **Indirizzo di destinazione** : È corretto?
- **Importo** : È corretto?
- **Commissioni** : Accettabili?

⚠️ **PASSO CRITICO** - Verificare prima di firmare

---

## Verifica - Indirizzo di Resto

- **Indirizzo di resto** : Verificare che ti appartenga
  - Deve essere un indirizzo del tuo portafoglio

⚠️ Se l'indirizzo di resto non è tuo, perdi questi bitcoin

---

### Spiegazione Indirizzo di Resto

Quando invii, se spendi più dell'importo da inviare

**Esempio di invio**
- Hai un UTXO di 1 BTC
- Invii 0.3 BTC
- Commissioni : 0.0001 BTC

**Resto** : 0.6999 BTC deve tornare al tuo portafoglio

---

### Regola Indirizzo di Resto

L'indirizzo di resto deve **SEMPRE** essere un indirizzo che controlli.

---

## Firma Transazione

- Dopo la verifica, fare clic su **"Crea Transazione"**
- Verificare di nuovo tutti i dettagli
- Fare clic su **"Firma"**
- Inserire la tua password se richiesta
- La transazione è firmata con le tue chiavi private

---

### Trasmissione Transazione

- Dopo la firma, fare clic su **"Trasmetti Transazione"**
- La transazione è inviata alla rete Bitcoin
- Aspettare conferme
- Seguire la transazione nella scheda **Transazioni**

---

### Lista di Controllo Prima di Inviare

✅ **Verifiche Finali**

- [ ] Indirizzo di destinazione corretto
- [ ] Importo corretto
- [ ] Commissioni accettabili
- [ ] Indirizzo di resto è mio
- [ ] Tutti gli output sono verificati
- [ ] Capisco cosa sto facendo

---

### Buone Pratiche - Backup

- ✅ Frase seed su carta
- ✅ Passphrase conservata separatamente
- ✅ Password in un gestore di password sicuro
- ❌ Mai su computer/cloud/email

---

### Buone Pratiche - Privacy

- ✅ Usare il tuo nodo se possibile
- ✅ Usare Tor per più anonimato
- ✅ Un nuovo indirizzo per transazione
- ✅ Verificare indirizzi di resto

---

### Buone Pratiche - Verifiche

- ✅ Sempre verificare gli output prima di firmare
- ✅ Verificare l'indirizzo di destinazione
- ✅ Comprendere le commissioni
- ✅ Testare prima su Signet/Testnet

---

## Cosa Abbiamo Imparato

- ✅ Installare Sparrow Wallet
- ✅ Comprendere le reti Bitcoin
- ✅ Configurare la connessione
- ✅ Creare un portafoglio
- ✅ Comprendere i conti
- ✅ Ricevere bitcoin
- ✅ Spostare bitcoin tra conti
- ✅ Inviare bitcoin

---

## Punti Chiave - Sicurezza

⚠️ **Sicurezza**

- Frase seed = accesso totale ai bitcoin
- Salvare su carta, mai online
- Sempre verificare indirizzi di resto

---

## Punti Chiave - Privacy

🔒 **Privacy**

- Un indirizzo = una transazione
- Usare il tuo nodo se possibile
- Comprendere le implicazioni di ogni azione

---

### Prossimi Workshop

- Multisig
- Be-BOP
- Block transaction
