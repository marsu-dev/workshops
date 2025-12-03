# be-BOP

4 dicembre 2025

Scopri be-BOP, un software libero per gestire le tue vendite in totale indipendenza. Nessuna commissione, nessuna censura.

---

## Lo strumento di vendita etico e indipendente

### Software libero

- Non è una piattaforma
- Software libero e copyleft
- Possiedi e controlli tutto

---

## Lo strumento di vendita etico e indipendente

- Nessuna commissione
- Nessuna censura
- Nessuna dipendenza da terze parti

---

## Per chi è be-BOP?

### Pubblico target

- Creatori
- Imprenditori
- Comunità

---

## Per chi è be-BOP?

### Strumenti integrati

- Finanziare il tuo lavoro
- Gestire le tue vendite e abbonamenti
- Organizzare i tuoi eventi
- Animare la tua comunità

---

## Cos'è be-BOP?

be-BOP non è una piattaforma. È un software libero e copyleft che possiedi e controlli interamente.

- Software libero e self-hosted
- Architettura aperta e modulare
- Pagamenti online e sul posto
- Personalizzazione e integrazione illimitate
- Nessuna installazione o supporto incluso

---

[![bip-21](presentations/03-be-bop/bip-21.png)](https://bip-21.fr/)

---

[![BitcoinStore](presentations/03-be-bop/bitcoinstore.png)](https://bitcoinstore.fr/)

---

[![Suif & Praline](presentations/03-be-bop/sulinaderm.png)](https://sulinaderm.com/)

---

[![Marketplace CryptoXR](presentations/03-be-bop/cryptoxr.png)](https://market.cryptoxr.fr/)

---

## Funzionalità

### Commercio

- **Negozio online**: Gestione completa delle tue vendite
- **Abbonamenti**: Gestione di abbonamenti ricorrenti
- **Eventi**: Creazione e biglietteria
- **Comunità**: Strumenti per animare la tua comunità

---

## Funzionalità

### Pagamenti & Libertà

- **Pagamenti**: Online e sul posto, senza commissioni
- **0% di commissione**: Tutti i tuoi ricavi ti appartengono
- **Indipendenza totale**: I tuoi dati, la tua infrastruttura

---

## Perché be-BOP?

### Controllo totale

Distribuisci il tuo ambiente e mantieni il controllo totale sui tuoi strumenti, i tuoi dati e i tuoi ricavi.

---

## Perché be-BOP

### Libertà totale

**0% di commissione**
Nessuna piattaforma prende commissioni sulle tue vendite.

**Libertà totale**
Decidi tu cosa vendere, nessuno può bloccarti.

---

## Installazione

### Prerequisiti

1. Un server Linux (Debian o Ubuntu LTS)
2. Un nome di dominio che controlli
3. Accesso alla configurazione DNS
4. Un indirizzo email (per Let's Encrypt)

---

## Prerequisiti

### Il server

**Server Linux** (Debian o Ubuntu LTS)

- Minimo: 2 GB di RAM
- Spazio disco: 40 GB
- Accesso internet

---

## Prerequisiti

### Dominio & DNS

**Un nome di dominio** che controlli
Esempio: `example.com`

**Configurazione DNS richiesta:**

- `example.com` → IP del tuo server
- `s3.example.com` → IP del tuo server

---

## Passo 1

### Ottenere un server

Avrai bisogno di un server dove eseguire comandi:

- VPS presso qualsiasi provider di hosting
- Macchina dedicata
- Macchina di riserva a casa tua con Linux

---

## Passo 1

### Modalità di accesso

**Come accedere al server:**

- Via SSH (terminale o client SSH)
- Via console web del provider

**Per Windows:**
[Git for Windows](https://gitforwindows.org/)

---

## Passo 2

### Ottenere un nome di dominio

Registra un dominio presso il provider di tua scelta:

- Dominio principale: `example.com`
- O sottodominio: `boutique.example.com`

Configurerai il DNS nel passo successivo.

---

## Passo 2

### Configurare il DNS (IPv4)

Crea due record A (IPv4):

```text
tuodominio.com      → A → IPv4 del tuo server
s3.tuodominio.com   → A → IPv4 del tuo server
```

---

## Passo 2

### Configurare il DNS (IPv6)

Aggiungi anche record AAAA:

```text
tuodominio.com      → AAAA → IPv6 del tuo server
s3.tuodominio.com   → AAAA → IPv6 del tuo server
```

**Nota:** Attendi la propagazione DNS

---

## Passo 3

### Verificare l'accesso al server

Prova un comando semplice per confermare l'accesso al server:

```text
ssh root@tuodominio.com
```

---

## Passo 4

### Avviare l'installazione

**Modifica questo comando con le tue informazioni:**

```bash
bash <(curl -fsSL https://be-bop.io/wizard/install.sh) \
  --domain "tuodominio.com" \
  --email "indirizzo@email.com"
```

**Prima di eseguire:**

- Sostituisci `tuodominio.com` con il tuo dominio
- Sostituisci `indirizzo@email.com` con la tua email

Lo script mostra tutte le attività previste e chiede conferma prima di apportare modifiche.

---

## Installazione in corso

### Durata: 3-10 minuti

Lo script fa tutto automaticamente:

- Installazione delle dipendenze
- Configurazione dei servizi
- Generazione dei certificati SSL
- Preparazione di be-BOP

---

## Dopo l'installazione

### Visita il tuo dominio in un browser

be-BOP sarà pronto per la configurazione iniziale tramite l'interfaccia web.

Segui l'assistente di configurazione per:

- Creare il tuo account amministratore
- Configurare le tue impostazioni di pagamento
- Personalizzare il tuo negozio

---

## Hai bisogno di aiuto?

### In caso di problema

Contatta il supporto con:

- Il tuo provider di hosting
- Il tuo nome di dominio
- Uno screenshot dell'errore

---

## Documentazione

[Tutti i dettagli su be-bop.io](https://be-bop.io/get-started-diy)

---

## Pronto per iniziare?

### La tua indipendenza digitale inizia qui

[Scopri be-BOP](https://be-bop.io/)

---

## Tocca a te

- Aggiungi i tuoi prodotti e servizi
- Crea le tue pagine CMS
- Configura BIP-84
- Configura PhoenixD
- Configura Swiss Bitcoin Pay
