# Blocchi e Transazioni

08 dicembre 2025

Comprendere la struttura dei blocchi Bitcoin e il processo di validazione delle transazioni sulla blockchain.

---

## Introduzione

Comprendere i fondamenti di Bitcoin: struttura dei blocchi e validazione delle transazioni

---

## Obiettivi

- Capire cos'è una transazione Bitcoin
- Capire come le transazioni vengono raggruppate in blocchi
- Capire perché si pagano le commissioni
- Capire i diversi formati (Legacy, SegWit, Taproot)
- Capire l'identificatore di una transazione (TXID)
- Capire l'albero di Merkle e il suo ruolo nella sicurezza dei blocchi

---

## Che cos'è una transazione Bitcoin?

Una transazione Bitcoin è come un **assegno digitale** che:

- **Prende** denaro che hai già ricevuto (le tue monete Bitcoin)
- **Invia** quel denaro a qualcun altro (o lo rimanda a te come "resto")

---

## Le monete Bitcoin (UTXO)

Immagina di aver ricevuto diverse monete Bitcoin:

- Una moneta da 0,1 BTC
- Una moneta da 0,05 BTC
- Una moneta da 0,02 BTC

Per inviare 0,15 BTC devi usare le monete esistenti. È come pagare con le banconote: se vuoi pagare 15€ e hai una banconota da 20€, devi usarla e ricevere 5€ di resto.

---

## Struttura semplice di una transazione

Una transazione contiene essenzialmente:

**1. Gli input**
- Quali monete usi (riferimento alle monete che hai ricevuto)

**2. Gli output**
- A chi invii il denaro (importo + indirizzo)
- Il tuo resto (se hai usato più del necessario)

**3. La firma**
- La tua prova di possesso delle monete

---

## Esempio concreto

**Situazione:** Alice vuole inviare 0,1 BTC a Bob

**Cosa ha Alice:**
- Una moneta da 0,15 BTC ricevuta in precedenza

---

## Esempio concreto

**La transazione:**
- **Input:** Usa la moneta da 0,15 BTC di Alice
- **Output 1:** 0,1 BTC a Bob
- **Output 2:** 0,0499 BTC ad Alice (il suo resto)
- **Commissione:** 0,0001 BTC (la differenza)


---

## Esempio concreto

**Risultato:** Bob riceve 0,1 BTC, Alice recupera quasi tutto il resto e i miner ricevono le commissioni.

---

## Le commissioni di transazione

Perché pagare commissioni?

- I miner devono verificare e includere la transazione in un blocco
- È come pagare un servizio postale: più è urgente, più è caro
- Le commissioni incentivano i miner a elaborare velocemente la transazione

---

## Le commissioni evitano lo spam

**Le commissioni evitano lo spam:** senza commissioni, chiunque potrebbe inviare migliaia di transazioni inutili e intasare la rete

---

## Come si calcolano le commissioni?

Le commissioni dipendono da **due cose**:

**1. La dimensione della transazione**
- Più monete (input) usi, più è grande
- Più destinatari (output) hai, più è grande
- Le firme occupano spazio

**2. La priorità desiderata**
- Commissioni alte = elaborazione veloce (come posta espressa)
- Commissioni basse = elaborazione più lenta (come posta ordinaria)

---

## Esempio di calcolo delle commissioni

**Transazione semplice:**
- 1 input (una moneta usata)
- 2 output (destinatario + resto)
- Dimensione: circa 250 byte

---

## Esempio di calcolo delle commissioni

**Se scegli:**
- Commissioni rapide: 50 satoshi per byte → 250 × 50 = 12.500 satoshi
- Commissioni normali: 10 satoshi per byte → 250 × 10 = 2.500 satoshi

**Nota:** Le transazioni moderne (SegWit) costano meno perché le firme occupano meno spazio.

---

## L'identificatore di transazione (TXID)

Ogni transazione riceve un **identificatore unico**, come un numero di tracking.

**Caratteristiche:**
- È una lunga stringa di lettere e numeri (come un codice a barre)
- È unico: impossibile avere due transazioni con lo stesso identificatore
- Permette di ritrovare la transazione sulla blockchain

---

## Il TXID non cambia mai

- Non cambia mai: anche se guardi la transazione più tardi, l'identificatore resta lo stesso

**Utilità:**
- Verificare che una transazione sia stata inviata
- Seguire lo stato di un pagamento
- Fare riferimento a una transazione in futuro

---

## Vedere le transazioni in Sparrow

**Passo 1: Apri la scheda Transactions**
- Seleziona il tuo wallet in Sparrow
- Clicca sulla scheda **Transactions** (in basso nell'interfaccia)
- Vedrai l'elenco di tutte le tue transazioni

---

## Consultare i dettagli di una transazione

**Passo 2: Consulta i dettagli di una transazione**
- Fai doppio clic su una transazione nell'elenco
- Si apre una finestra con tutti i dettagli della transazione

---

## Vedere il TXID in Sparrow

**Metodo 1: Nell'elenco delle transazioni**
- La scheda **Transactions** mostra il TXID di ogni transazione
- È la prima colonna (lunga stringa di lettere e numeri)
- Puoi cliccarla per copiarla

---

## Vedere il TXID in Sparrow

**Metodo 2: Nei dettagli di una transazione**
- Fai doppio clic su una transazione
- Il TXID è visualizzato in alto nella finestra dei dettagli
- Puoi cliccarlo per copiarlo

---

## Vedere il TXID in Sparrow

**Metodo 3: Menu contestuale**
- Clic destro su una transazione nell'elenco
- Seleziona **"Copy Transaction ID"**
- Il TXID viene copiato negli appunti

---

## Informazioni visibili in Sparrow

**Informazioni di base:**
- Il **TXID** (identificatore unico)
- L'**importo** inviato o ricevuto
- La **data e ora** della transazione
- Il **numero di conferme**

---

## Dettagli tecnici in Sparrow

**Dettagli tecnici:**
- Gli **input**: quali monete sono state usate
- Gli **output**: a chi è stato inviato il denaro
- Le **commissioni** pagate
- La **dimensione** della transazione (in vByte)

---

## Stato di una transazione in Sparrow

**Stato:**
- **In attesa:** transazione non confermata
- **Confermata:** numero di blocchi dalla conferma
- **Finalizzata:** transazione completamente confermata

---

## Una transazione non può perdersi

**Garanzia Bitcoin:**

Una transazione Bitcoin non può **mai** perdersi. Esistono solo due stati possibili:

---

## Stato 1: La transazione è minata

**1. La transazione è minata**
- È inclusa in un blocco della blockchain
- È confermata e irreversibile
- Il tuo denaro è stato trasferito

---

## Stato 2: Nessuna operazione effettuata

**2. Nessuna operazione è stata effettuata**
- La transazione non è mai stata trasmessa alla rete
- Oppure è stata rifiutata prima di essere minata
- Il tuo denaro non ha mai lasciato il tuo portafoglio

**Non esistono stati intermedi:**
- Niente "transazioni in transito" che potrebbero sparire
- Niente "limbo" in cui il tuo denaro è bloccato
- O è fatto, o non è fatto

---

## I diversi formati di transazione

Bitcoin è evoluto e oggi offre diversi formati di transazione. Ogni formato ha vantaggi in termini di costo e funzionalità.

---

## Confronto dei formati: Legacy, SegWit, Taproot

| Formato     | Nome tecnico | Anno | Caratteristiche                               | Costo relativo        |
| ----------- | ------------ | ---- | --------------------------------------------- | --------------------- |
| **Legacy**  | P2PKH        | 2009 | Formato originale, firme nella transazione    | Il più costoso        |
| **SegWit**  | P2WPKH       | 2017 | Firme separate, 4x meno costose               | Forte riduzione       |
| **Taproot** | P2TR         | 2021 | Formato più moderno, firme ottimizzate        | Il meno costoso       |

**In pratica:** I formati moderni (SegWit e Taproot) ti fanno risparmiare sulle commissioni!

---

## Le transazioni moderne (SegWit)

**Prima (vecchio formato Legacy):**
- Le firme erano nella transazione principale
- Transazioni più pesanti = commissioni più alte
- Formato: P2PKH (Pay-to-Public-Key-Hash)

---

## SegWit: i vantaggi

**Ora (SegWit):**
- Le firme sono separate (nel "witness")
- Transazioni più leggere = commissioni più basse
- Circa 4 volte meno costoso per le firme
- Formati: P2WPKH, P2WSH

**Vantaggio:** Paghi meno commissioni per la stessa transazione!

---

## Costo dei diversi formati di input

Quando usi una moneta Bitcoin in una transazione, il costo dipende dal formato:

| Tipo di input            | Formato     | Dimensione appross. | Costo relativo     |
| ------------------------ | ----------- | ------------------- | ------------------ |
| **Legacy**               | P2PKH       | ~148 vByte          | Il più costoso     |
| **SegWit annidato**      | P2SH-P2WPKH | ~91 vByte           | Riduzione moderata |
| **SegWit nativo**        | P2WPKH      | ~41 vByte           | Molto efficiente   |
| **Taproot**              | P2TR        | ~16-57 vByte        | Ottimale           |

---

## Risparmio con SegWit

**Esempio concreto:**
- Usare una moneta Legacy: costa circa 148 unità
- Usare una moneta SegWit: costa circa 41 unità
- **Risparmio:** Circa il 70% di commissioni in meno con SegWit!

---

## Costo dei diversi formati di output

Quando invii denaro a qualcuno, il formato dell'indirizzo di destinazione influisce anche sulla dimensione:

| Tipo di output | Formato | Dimensione appross. |
| -------------- | ------- | ------------------- |
| **Legacy**     | P2PKH   | ~34 vByte           |
| **SegWit**     | P2WPKH  | ~31 vByte           |
| **Taproot**    | P2TR    | ~43 vByte           |

**Nota:** La differenza è minore sugli output, ma SegWit resta leggermente più efficiente.

---

## Esempio di confronto delle commissioni

**Transazione con 1 input e 2 output:**

| Formato      | Dimensione totale | Commissioni (a 20 sat/vByte) | Risparmio       |
| ------------ | ----------------- | ---------------------------- | --------------- |
| **Legacy**   | ~250 vByte        | ~5.000 satoshi               | -               |
| **SegWit**   | ~117 vByte        | ~2.340 satoshi               | 53% più economico |
| **Taproot**  | ~100 vByte        | ~2.000 satoshi               | 60% più economico |

**Conclusione:** Usare formati moderni può farti risparmiare più della metà delle commissioni!

---

## Taproot: il formato più moderno

**Taproot (P2TR)** è il formato più recente e avanzato:

**Vantaggi:**
- **Commissioni ancora più basse:** Firme Schnorr ottimizzate
- **Più privacy:** Tutte le transazioni Taproot si assomigliano
- **Più flessibilità:** Permette script complessi senza rivelarne l'esistenza
- **Migliore efficienza:** Codifica ottimizzata

---

## Quando usare Taproot?

**Quando usarlo?**
- Se il tuo portafoglio lo supporta (wallet moderni)
- Per ottenere le commissioni più basse
- Per maggiore privacy

**Nota:** Non tutti i wallet supportano ancora Taproot, ma è il formato del futuro.

---

## Organizzazione del blocco

Le transazioni non vengono elaborate una per una. Sono raggruppate in **blocchi**, come pagine di un libro contabile.

**Un blocco contiene:**
- Un'intestazione (come la copertina di un libro)
- Un elenco di transazioni (come le righe di un registro)

---

## Dimensione e frequenza dei blocchi

**Dimensione di un blocco:**
- Massimo circa 1 MB di dati
- Può contenere diverse migliaia di transazioni
- Un nuovo blocco viene creato circa ogni 10 minuti

---

## La coinbase

In ogni blocco, la **prima transazione è speciale**:

**La transazione coinbase:**
- Crea nuovi bitcoin (la ricompensa del miner)
- Raccoglie tutte le commissioni delle transazioni del blocco
- È come lo stipendio del miner per il suo lavoro

---

## Esempio di ricompensa del miner

**Esempio:**
- Ricompensa del blocco: 3,125 BTC (attualmente)
- Commissioni raccolte: 0,5 BTC
- **Totale per il miner:** 3,625 BTC

---

## Ordine delle transazioni

**Regola semplice:**
1. La coinbase è sempre per prima
2. Le altre transazioni possono essere in qualsiasi ordine
3. **Tranne:** se la transazione B spende denaro creato nella transazione A, allora A deve venire prima di B

---

## Perché questa regola?

**Perché?**
- È come nella vita reale: non puoi spendere denaro che non hai ancora ricevuto!

---

## Esempio di ordine delle transazioni

**Esempio:**
- Transazione A: Alice riceve 0,1 BTC
- Transazione B: Alice invia 0,05 BTC a Bob
- B deve venire **dopo** A nel blocco

---

## L'albero di Merkle
**il sigillo di sicurezza del blocco**

L'albero di Merkle è un sistema che crea un'**impronta unica** per tutte le transazioni di un blocco.


---

## L'albero di Merkle
**Analogia semplice:**
Immagina un libro di 1.000 pagine. Invece di controllare ogni pagina, crei un "indice magico" che riassume tutto il libro in una sola riga. Se qualcuno modifica anche una sola lettera, l'indice cambia completamente.

---

## Uso dell'albero di Merkle

**1. Rilevare le modifiche**
- Se qualcuno prova a modificare una transazione nel blocco, l'impronta cambia
- È come un sigillo di cera: se è rotto, si vede subito
- Impossibile falsificare un blocco senza che sia evidente

---

## Verificare rapidamente una transazione

**2. Verificare rapidamente una transazione**
- Puoi provare che una transazione è nel blocco **senza scaricare tutte le transazioni**
- È come controllare se una parola è in un dizionario senza leggere tutte le pagine
- Molto utile per i wallet leggeri su telefono

---

## Risparmiare spazio e banda

**3. Risparmiare spazio e banda**
- Invece di archiviare tutte le transazioni, puoi verificare solo l'impronta
- I wallet mobili possono funzionare senza scaricare tutta la blockchain

---

## Come funziona?

**Passo 1:** Ogni transazione riceve una "impronta" unica (come un codice a barre)

**Passo 2:** Le impronte vengono raggruppate a coppie e si crea una nuova impronta per ogni coppia

**Passo 3:** Si ripete fino a ottenere un'unica impronta finale: la **Merkle Root**

**Risultato:** Un'unica impronta rappresenta tutte le transazioni del blocco!

Questa impronta finale è memorizzata nell'intestazione del blocco.

---

## Struttura dell'albero di Merkle

<img src="presentations/04-block-tx/merkle.png" alt="Struttura dell'albero di Merkle" style="height: 300px; width: auto; background-color: white; padding: 20px; border-radius: 8px;">

---

## Perché è utile nella pratica?

**Scenario 1: Verificare il tuo pagamento**
- Vuoi verificare che la tua transazione sia in un blocco
- **Senza Merkle:** Dovresti scaricare tutte le transazioni del blocco (magari 3.000 transazioni = diversi MB)
- **Con Merkle:** Scarichi solo alcune piccole impronte (qualche KB) e puoi provare che la tua transazione c'è!

---

## Perché è utile nella pratica?

**Scenario 2: Portafoglio su telefono**
- Il tuo telefono non ha spazio sufficiente per archiviare tutta la blockchain (centinaia di GB)
- **Con Merkle:** Il wallet può verificare le tue transazioni senza scaricare tutto
- È come avere il riassunto del libro invece dell'intero libro

---

## Sicurezza con l'albero di Merkle

**Scenario 3: Sicurezza**
- Se un hacker prova a modificare una transazione in un blocco
- L'impronta Merkle cambia immediatamente
- Tutti i nodi della rete rifiutano il blocco modificato
- È impossibile falsificare senza che tutti se ne accorgano

---

## Riassunto semplice

L'albero di Merkle è:
- ✅ Un **sigillo di sicurezza**: impossibile modificare un blocco senza che l'impronta cambi
- ✅ Un **sistema di verifica rapida**: provare che una transazione esiste senza scaricare tutto
- ✅ Un **risparmio di spazio**: i wallet leggeri possono funzionare senza la blockchain completa

---

## Riassunto semplice

**In una frase:**

È come un indice magico che cambia se modifichi anche una sola lettera del libro, e che permette di verificare che una pagina esista senza leggere tutto il libro.

---

## Validazione di un blocco

Prima che un blocco sia accettato, deve essere **validato**:

**Verifiche:**
- Tutte le transazioni sono valide (firme corrette)
- Nessuno ha speso denaro che non possiede
- Nessuna transazione duplicata
- Gli importi sono corretti (output ≤ input)
- L'impronta Merkle è corretta

**Se tutto è a posto:** Il blocco viene aggiunto alla blockchain
**Se qualcosa è sbagliato:** Il blocco viene respinto

---

## Osservare un blocco su mempool.space

**Passo 1: Dai dettagli di una transazione in Sparrow**
- Apri Sparrow e vai alla scheda **Transactions**
- Fai doppio clic su una transazione confermata
- Nei dettagli, clicca sull'**hash del blocco** o sul **numero del blocco**
- Si apre automaticamente il blocco su mempool.space

---

## Osservare un blocco su mempool.space

**Passo 2: Apri mempool.space**
- Vai su [mempool.space](https://mempool.space) nel browser
- Oppure usa [mempool.space/signet](https://mempool.space/signet) per Signet

---

## Osservare un blocco su mempool.space

**Passo 3: Cerca il blocco**
- Usa la barra di ricerca in alto nella pagina
- Inserisci il numero o l'hash del blocco
- Clicca sul risultato per vedere tutti i dettagli del blocco

---

## Cosa puoi vedere su mempool.space

**Informazioni sul blocco:**
- L'**hash del blocco** e il **numero del blocco**
- Il **numero di transazioni** nel blocco
- La **dimensione del blocco** (in MB)
- Le **commissioni raccolte** dal miner
- La **ricompensa del blocco** (coinbase)
- Il **Merkle Root** (impronta di tutte le transazioni)

---

## Cosa puoi vedere su mempool.space

**Elenco delle transazioni:**
- Tutte le transazioni del blocco in ordine
- La transazione coinbase per prima
- I dettagli di ogni transazione (TXID, importi, commissioni)

---

## Riepilogo: una transazione Bitcoin

Una transazione Bitcoin è come un assegno digitale che:
- Prende denaro che hai già
- Lo invia a qualcun altro (o lo rimanda a te)
- Include la tua firma per provare che sei tu

---

## Riepilogo: una transazione Bitcoin

**Contiene:**
- Le monete che usi (input)
- A chi invii (output)
- La tua firma

---

## Riepilogo: una transazione Bitcoin

**Non contiene:**
- Il tuo nome o identità
- Il tuo saldo totale
- Il tuo indirizzo email

---

## Riepilogo: le commissioni di transazione

Le commissioni dipendono da:
- **La dimensione** della transazione (numero di monete usate, numero di destinatari)
- **Il formato** usato (Legacy, SegWit, Taproot)
- **La priorità** scelta (rapida = più cara, lenta = più economica)

---

## Perché le commissioni?

**Perché le commissioni?**
- Pagano i miner per il loro lavoro
- Evitano lo spam e proteggono la rete
- Incentivano l'elaborazione rapida delle transazioni

---

## Confronto dei formati

**Confronto dei formati:**
- **Legacy:** Il più costoso (~250 vByte per una transazione semplice)
- **SegWit:** Circa 2x più economico (~117 vByte)
- **Taproot:** Il meno costoso (~100 vByte)

---

## Riepilogo: l'identificatore (TXID)

Ogni transazione ha un **identificatore unico**:
- È come un numero di tracking
- Permette di ritrovare la tua transazione
- Non cambia mai
- Puoi condividerlo per provare un pagamento

**Dove trovarlo?** Nel tuo wallet, dopo aver inviato una transazione.

---

## Riepilogo: i blocchi

Le transazioni sono raggruppate in **blocchi**:
- Un blocco = una pagina del libro contabile di Bitcoin
- Circa 1 MB massimo
- Un nuovo blocco ogni 10 minuti
- La prima transazione è sempre la coinbase (ricompensa del miner)

**Ordine:**
- Coinbase per prima
- Altre transazioni in qualsiasi ordine
- Tranne quando una transazione dipende da un'altra

---

## Riepilogo: l'albero di Merkle

L'albero di Merkle crea un'**impronta unica** del blocco:
- **Sicurezza:** Impossibile modificare un blocco senza che l'impronta cambi
- **Verifica rapida:** Provare che una transazione esiste senza scaricare tutto il blocco
- **Risparmio di spazio:** I wallet leggeri possono funzionare senza la blockchain completa

---

## Punti chiave da ricordare

- ✅ Una transazione prende denaro che hai e lo invia altrove
- ✅ Le commissioni dipendono da dimensione e priorità
- ✅ Ogni transazione ha un identificatore unico (TXID)
- ✅ Le transazioni sono raggruppate in blocchi
- ✅ La prima transazione di un blocco è sempre la coinbase
- ✅ L'albero di Merkle garantisce che nessuno possa modificare un blocco

---
