# Portafoglio Multi-firma

24 novembre 2025

Crea e gestisci un portafoglio multi-firma per proteggere i tuoi bitcoin con più chiavi.

---

## Obiettivi

- Comprendere il concetto di multi-firma
- Creare un portafoglio multi-firma
- Comprendere le chiavi e le parole di recupero (BIP-39)
- Scoprire le configurazioni possibili
- Creare un multi-sig in Sparrow
- Ricevere bitcoin su un portafoglio multi-sig
- Spendere da un multi-sig con PSBT

---

## Cos'è la multi-firma?

Un **multi-sig** = un caveau Bitcoin che richiede più chiavi per spendere

- A differenza di un portafoglio standard (1 chiave)
- Più chiavi devono firmare per autorizzare una spesa

---

## Esempio: 2 su 3

**2-of-3** : Servono **2 chiavi su 3** per firmare una spesa

- Hai 3 chiavi in totale
- Per spendere, devi usare almeno 2 di queste chiavi
- Una sola chiave non è sufficiente

---

## Vantaggi del multi-sig

### Sicurezza rafforzata

- **Se una chiave è persa** : I fondi rimangono accessibili con le altre chiavi
- **Una chiave rubata** : L'attaccante non può fare nulla da solo
- **Protezione contro il furto** : Richiede più firme

---

## Casi d'uso - Sicurezza personale

- Distribuire le chiavi su diversi dispositivi
- Una chiave su computer, una su telefono, una su hardware wallet
- Protezione anche se un dispositivo è compromesso

---

## Casi d'uso - Azienda / Associazione

- Più persone devono approvare le spese
- Controllo dei fondi aziendali
- Gestione collaborativa dei bitcoin

---

## Casi d'uso - Famiglia

- Più membri della famiglia devono firmare
- Protezione delle eredità
- Decisioni finanziarie condivise

---

## Chiavi e parole di recupero

### BIP-39: Standard delle seed phrase

- Una **seed** = una frase di **12 o 24 parole**
- Standard BIP-39 usato da tutti i portafogli Bitcoin
- Da questa seed, Sparrow genera tutte le tue chiavi

---

## Generazione delle chiavi

- La seed phrase genera una chiave master
- Questa chiave master genera tutte le altre chiavi
- Ogni chiave può firmare transazioni

⚠️ **CRITICO** : Non condividere mai le tue parole di recupero

---

## Multi-sig e chiavi pubbliche

### xpub: Chiave pubblica estesa

- Il multi-sig usa solo **xpubs** (chiavi pubbliche estese)
- **Mai le parole di recupero** (seed phrase)
- Gli xpubs permettono di generare indirizzi senza esporre le chiavi private

---

## Perché usare xpubs?

- **Sicurezza** : Gli xpubs non permettono di spendere
- **Flessibilità** : Ogni partecipante mantiene la sua seed privata
- **Fiducia** : Non è necessario condividere le parole di recupero

---

## Configurazioni possibili

### 2-of-3 (la più comune)

- **2 firme richieste** su 3 chiavi
- Buon equilibrio tra sicurezza e praticità
- Ideale per iniziare con il multi-sig

---

## Configurazioni possibili

### 3-of-5

- **3 firme richieste** su 5 chiavi
- Più sicurezza
- Utile per aziende, associazioni
- Più flessibilità in caso di perdita di chiavi

---

## Altre configurazioni

Sparrow supporta fino a **15 chiavi** in modalità SegWit

- 2-of-3, 3-of-5, 4-of-7, ecc.
- Più chiavi = più sicurezza ma più complesso

⚠️ **Per principianti** : Iniziare con 2-of-3

---

## Creare un multi-sig in Sparrow

### Passo 1: Aprire Sparrow

- Aprire Sparrow Wallet
- Menu → **File** → **New Wallet**

---

## Creare un multi-sig in Sparrow

### Passo 2: Scegliere Multi-firma

- Selezionare **Multi-signature Wallet**
- Scegliere la rete: Mainnet / Testnet / Signet

**Per questo workshop** : Usare **Signet**

---

## Creare un multi-sig in Sparrow

### Passo 3: Scegliere la soglia

- Selezionare lo schema: **2-of-3**, **3-of-5**, ecc.
- Esempio: Scegliere **2-of-3** per iniziare

---

## Creare un multi-sig in Sparrow

### Passo 4A: Generare keystores in Sparrow

- Sparrow genera automaticamente i keystores necessari
- Ogni keystore ha la sua seed phrase
- Per ogni keystore: generare e salvare la seed phrase

---

## Creare un multi-sig in Sparrow

### Passo 4B: Importare tramite xpubs

- Se hai già delle chiavi (hardware wallets, altri portafogli)
- Importare gli **xpubs** (chiavi pubbliche estese) dei partecipanti
- Ogni partecipante mantiene la sua seed privata

**Vantaggio** : Non è necessario generare nuove chiavi

---

## Generare keystores in Sparrow

- Sparrow genera automaticamente i keystores necessari
- Per ogni keystore:
  - Generare una seed phrase
  - Salvare immediatamente su carta
  - Non condividere mai

⚠️ **CRITICO** : Salvare ogni seed phrase separatamente

---

## Importare xpubs

- Se hai già delle chiavi (hardware wallets, altri portafogli)
- Importare gli **xpubs** (chiavi pubbliche estese)
- Ogni partecipante mantiene la sua seed privata

**Vantaggio** : Non è necessario generare nuove chiavi

---

## Il descriptor

### Carta d'identità del multi-sig

- Sparrow mostra il **descriptor** del portafoglio
- È la "carta d'identità" del multi-sig
- Contiene tutte le informazioni necessarie per ricostruire il portafoglio

---

## Il descriptor - Esempio

Il descriptor assomiglia a:

```
wsh(sortedmulti(2,xpub1...,xpub2...,xpub3...))
```

- `wsh` : Witness Script Hash (SegWit)
- `sortedmulti(2,...)` : 2 firme richieste tra le chiavi elencate
- `xpub...` : Chiavi pubbliche estese

---

## Portafoglio pronto

Una volta aggiunti i keystores:

- Il portafoglio è creato
- Pronto a ricevere fondi
- Gli indirizzi sono generati automaticamente

---

## Ricevere bitcoin

### Standard BIP-48

- Il multi-sig usa uno standard chiamato **BIP-48**
- Sparrow genera automaticamente gli indirizzi
- Gli indirizzi multi-sig sono diversi dagli indirizzi standard

---

## Indirizzi multi-sig

### Formato degli indirizzi

- **Mainnet** : Iniziano con `bc1...`
- **Testnet/Signet** : Iniziano con `tb1...`
- Visivamente identici agli indirizzi standard
- Ma richiedono più firme per spendere

---

## Generare un indirizzo di ricezione

- Aprire il tuo portafoglio multi-sig
- Andare alla scheda **Receive**
- Cliccare su "Create new receiving address"
- Un nuovo indirizzo è generato automaticamente

---

## Usare l'indirizzo

- Copiare l'indirizzo o mostrare il codice QR
- Inviare bitcoin a questo indirizzo
- La transazione sarà visibile nella scheda **Transactions**

⚠️ **Importante** : Usare un nuovo indirizzo per ogni transazione

---

## PSBT: Partially Signed Bitcoin Transaction

### Cos'è una PSBT?

- **PSBT** = Partially Signed Bitcoin Transaction
- Formato standard per transazioni multi-sig
- Permette di firmare una transazione in più passaggi

---

## Perché usare PSBTs?

### Firma interattiva

- Ogni partecipante firma separatamente
- La transazione non è inviata finché tutte le firme non sono raccolte
- Sicuro e flessibile

---

## Creare una transazione

### Passo 1: Preparare la transazione

- Aprire la scheda **Send**
- Inserire l'indirizzo di destinazione
- Inserire l'importo da inviare
- Configurare le commissioni

---

## Creare una transazione

### Passo 2: Generare la PSBT

- Cliccare su **"Create Transaction"**
- Sparrow genera una **PSBT**
- La transazione non è ancora completamente firmata

---

## Esportare la PSBT

### Metodo 1: File

- Salvare la PSBT come file
- Trasferire il file ad altri partecipanti
- Metodo semplice e diretto

---

## Esportare la PSBT

### Metodo 2: Copy PSBT

- **Copy PSBT** → Copia il PSBT Base64 negli appunti
- Trasferire il testo (email, messaggistica, ecc.)
- Il destinatario usa **Open Transaction → From Text**
- Pratico per trasferimento rapido tramite testo

**Per questo workshop** : Useremo il **Metodo 2: Copy PSBT**

---

## Esportare la PSBT

### Metodo 3: Codice QR

- Mostrare la PSBT come codice QR
- Scansionare con un altro dispositivo
- Pratico per trasferimento rapido tra dispositivi

---

## Esportare la PSBT

### Metodo 4: Trasferimento USB

- Copiare il file su una chiave USB
- Trasferire fisicamente
- Metodo sicuro senza connessione di rete

---

## Firmare la PSBT

### Passo 1: Aprire la PSBT

- Ogni partecipante apre la PSBT in Sparrow
- **Per questo workshop** : Menu → **File** → **Open Transaction** → **From Text**
- Incollare il PSBT Base64 ricevuto

---

## Firmare la PSBT

### Passo 2: Aggiungere la propria firma

- Verificare i dettagli della transazione
- Indirizzo di destinazione
- Importo
- Commissioni
- Indirizzo di resto

⚠️ **CRITICO** : Verificare prima di firmare

---

## Firmare la PSBT

### Passo 3: Firmare

- Cliccare su **"Sign"**
- Inserire la password se richiesta
- La firma è aggiunta alla PSBT
- Salvare la PSBT aggiornata

---

## Raccogliere le firme

### Processo iterativo

1. Partecipante 1 firma → PSBT con 1 firma
2. Trasferire la PSBT al Partecipante 2
3. Partecipante 2 firma → PSBT con 2 firme
4. Se 2-of-3: sufficiente per finalizzare

---

## Finalizzare la transazione

### Quando tutte le firme sono raccolte

- Sparrow rileva che il numero richiesto di firme è raggiunto
- Il pulsante **"Finalize"** diventa disponibile
- Cliccare su **"Finalize"**

---

## Diffondere la transazione

### Passo finale

- Dopo la finalizzazione, cliccare su **"Broadcast Transaction"**
- La transazione è inviata alla rete Bitcoin
- Attendere le conferme
- Seguire nella scheda **Transactions**

---

## Il cuore del multi-sig

### Principio fondamentale

**Più persone devono firmare prima che il denaro possa partire**

- Sicurezza rafforzata
- Protezione contro il furto
- Controllo condiviso dei fondi

---

## Verifiche prima della firma

### Checklist per ogni partecipante

- [ ] Indirizzo di destinazione corretto
- [ ] Importo corretto
- [ ] Commissioni accettabili
- [ ] Indirizzo di resto verificato
- [ ] Tutti gli output sono verificati
- [ ] Capisco cosa sto facendo

---

## Buone pratiche - Backup

### Per ogni keystore

- ✅ Seed phrase su carta
- ✅ Conservare in luoghi diversi
- ✅ Non condividere mai le seed phrases
- ❌ Mai su computer/cloud/email

---

## Buone pratiche - Sicurezza

### Gestione delle chiavi

- ✅ Distribuire le chiavi su diversi dispositivi
- ✅ Usare hardware wallets se possibile
- ✅ Conservare le chiavi in luoghi sicuri
- ✅ Verificare sempre le PSBT prima di firmare

---

## Buone pratiche - Coordinamento

### Lavorare in squadra

- ✅ Comunicare chiaramente con gli altri partecipanti
- ✅ Verificare l'identità degli altri firmatari
- ✅ Usare canali sicuri per trasferire le PSBT
- ✅ Tenere traccia delle transazioni

---

## Cosa abbiamo imparato

- ✅ Comprendere il concetto di multi-firma
- ✅ Comprendere le chiavi e le parole di recupero (BIP-39)
- ✅ Scoprire le configurazioni possibili (2-of-3, 3-of-5, ecc.)
- ✅ Creare un portafoglio multi-sig in Sparrow
- ✅ Ricevere bitcoin su un portafoglio multi-sig
- ✅ Creare e firmare PSBTs
- ✅ Spendere da un multi-sig con più firme

---

## Punti chiave - Sicurezza

⚠️ **Sicurezza**

- Il multi-sig richiede più firme per spendere
- Se una chiave è persa, i fondi rimangono accessibili
- Una chiave rubata non può essere usata per spendere
- Verificare sempre le PSBT prima di firmare

---

## Punti chiave - Chiavi e xpubs

🔑 **Chiavi e xpubs**

- Il multi-sig usa solo xpubs, mai seed phrases
- Ogni partecipante mantiene la sua seed privata
- Gli xpubs permettono di generare indirizzi senza esporre le chiavi private

---

## Punti chiave - PSBT

📝 **PSBT**

- Formato standard per transazioni multi-sig
- Permette di firmare una transazione in più passaggi
- Più persone devono firmare prima che il denaro possa partire

---

## Prossimi workshop

- Be-BOP
- Block transaction
- Liana basics
- Liana advanced
