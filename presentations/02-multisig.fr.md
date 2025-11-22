# Wallet Multi-signature

24 novembre 2025

Créez et gérez un portefeuille multi-signature pour sécuriser vos bitcoins avec plusieurs clés.

---

## Objectifs

- Comprendre le concept de multi-signature
- Créer un wallet multi-signature
- Comprendre les clés et les mots de récupération (BIP-39)
- Découvrir les configurations possibles
- Créer un multi-sig dans Sparrow
- Recevoir des bitcoins sur un wallet multi-sig
- Dépenser depuis un multi-sig avec PSBT

---

## Qu'est-ce qu'un multi-signature ?

Un **multi-sig** = un coffre-fort Bitcoin qui nécessite plusieurs clés pour dépenser

- Contrairement à un wallet standard (1 clé)
- Plusieurs clés doivent signer pour autoriser une dépense

---

## Exemple : 2 sur 3

**2-of-3** : Il faut **2 clés parmi 3** pour signer une dépense

- Vous avez 3 clés au total
- Pour dépenser, vous devez utiliser au moins 2 de ces clés
- Une seule clé ne suffit pas

---

## Avantages du multi-sig

### Sécurité renforcée

- **Si une clé est perdue** : Les fonds restent accessibles avec les autres clés
- **Une seule clé volée** : L'attaquant ne peut rien faire seul
- **Protection contre le vol** : Nécessite plusieurs signatures

---

## Cas d'usage - Sécurité personnelle

- Répartir les clés sur différents appareils
- Une clé sur ordinateur, une sur téléphone, une sur hardware wallet
- Protection même si un appareil est compromis

---

## Cas d'usage - Entreprise / Association

- Plusieurs personnes doivent approuver les dépenses
- Contrôle des fonds d'entreprise
- Gestion collaborative des bitcoins

---

## Cas d'usage - Famille

- Plusieurs membres de la famille doivent signer
- Protection des héritages
- Décisions financières partagées

---

## Les clés et les mots de récupération

### BIP-39 : Standard des seed phrases

- Une **seed** = une phrase de **12 ou 24 mots**
- Standard BIP-39 utilisé par tous les wallets Bitcoin
- À partir de cette seed, Sparrow génère toutes vos clés

---

## Génération des clés

- La seed phrase génère une clé maître
- Cette clé maître génère toutes les autres clés
- Chaque clé peut signer des transactions

⚠️ **CRITIQUE** : Ne jamais partager vos mots de récupération

---

## Multi-sig et clés publiques

### xpub : Clé publique étendue

- Le multi-sig utilise seulement des **xpubs** (clés publiques étendues)
- **Jamais les mots de récupération** (seed phrase)
- Les xpubs permettent de générer des adresses sans exposer les clés privées

---

## Pourquoi utiliser des xpubs ?

- **Sécurité** : Les xpubs ne permettent pas de dépenser
- **Flexibilité** : Chaque participant garde sa seed privée
- **Confiance** : Pas besoin de partager les mots de récupération

---

## Les configurations possibles

### 2-of-3 (le plus courant)

- **2 signatures requises** parmi 3 clés
- Bon équilibre sécurité + praticité
- Idéal pour débuter avec le multi-sig

---

## Les configurations possibles

### 3-of-5

- **3 signatures requises** parmi 5 clés
- Plus de sécurité
- Utile pour entreprises, associations
- Plus de flexibilité en cas de perte de clés

---

## Autres configurations

Sparrow supporte jusqu'à **15 clés** en mode SegWit

- 2-of-3, 3-of-5, 4-of-7, etc.
- Plus de clés = plus de sécurité mais plus complexe

⚠️ **Pour débutants** : Commencer avec 2-of-3

---

## Créer un multi-sig dans Sparrow

### Étape 1 : Ouvrir Sparrow

- Ouvrir Sparrow Wallet
- Menu → **File** → **New Wallet**

---

## Créer un multi-sig dans Sparrow

### Étape 2 : Choisir Multi-signature

- Sélectionner **Multi-signature Wallet**
- Choisir le réseau : Mainnet / Testnet / Signet

**Pour cet atelier** : Utiliser **Signet**

---

## Créer un multi-sig dans Sparrow

### Étape 3 : Choisir le seuil

- Sélectionner le schéma : **2-of-3**, **3-of-5**, etc.
- Exemple : Choisir **2-of-3** pour commencer

---

## Créer un multi-sig dans Sparrow

### Étape 4A : Générer les keystores dans Sparrow

- Sparrow génère automatiquement les keystores nécessaires
- Chaque keystore a sa propre seed phrase
- Pour chaque keystore : générer et sauvegarder la seed phrase

---

## Créer un multi-sig dans Sparrow

### Étape 4B : Importer par xpubs

- Si vous avez déjà des clés (hardware wallets, autres wallets)
- Importer les **xpubs** (clés publiques étendues) des participants
- Chaque participant garde sa seed privée

**Avantage** : Pas besoin de générer de nouvelles clés

---

## Générer les keystores dans Sparrow

- Sparrow génère automatiquement les keystores nécessaires
- Pour chaque keystore :
  - Générer une seed phrase
  - Sauvegarder immédiatement sur papier
  - Ne jamais partager

⚠️ **CRITIQUE** : Sauvegarder chaque seed phrase séparément

---

## Importer des xpubs

- Si vous avez déjà des clés (hardware wallets, autres wallets)
- Importer les **xpubs** (clés publiques étendues)
- Chaque participant garde sa seed privée

**Avantage** : Pas besoin de générer de nouvelles clés

---

## Le descriptor

### Carte d'identité du multi-sig

- Sparrow affiche le **descriptor** du wallet
- C'est la "carte d'identité" du multi-sig
- Contient toutes les informations nécessaires pour reconstruire le wallet

---

## Le descriptor - Exemple

Le descriptor ressemble à :

```
wsh(sortedmulti(2,xpub1...,xpub2...,xpub3...))
```

- `wsh` : Witness Script Hash (SegWit)
- `sortedmulti(2,...)` : 2 signatures requises parmi les clés listées
- `xpub...` : Les clés publiques étendues

---

## Wallet prêt

Une fois les keystores ajoutés :

- Le wallet est créé
- Prêt à recevoir des fonds
- Les adresses sont générées automatiquement

---

## Recevoir des bitcoins

### Standard BIP-48

- Le multi-sig utilise un standard appelé **BIP-48**
- Sparrow génère automatiquement les adresses
- Les adresses multi-sig sont différentes des adresses standard

---

## Adresses multi-sig

### Format des adresses

- **Mainnet** : Commencent par `bc1...`
- **Testnet/Signet** : Commencent par `tb1...`
- Visuellement identiques aux adresses standard
- Mais nécessitent plusieurs signatures pour dépenser

---

## Générer une adresse de réception

- Ouvrir votre wallet multi-sig
- Aller dans l'onglet **Receive**
- Cliquer sur "Create new receiving address"
- Une nouvelle adresse est générée automatiquement

---

## Utiliser l'adresse

- Copier l'adresse ou afficher le QR code
- Envoyer des bitcoins à cette adresse
- La transaction sera visible dans l'onglet **Transactions**

⚠️ **Important** : Utiliser une nouvelle adresse pour chaque transaction

---

## PSBT : Partially Signed Bitcoin Transaction

### Qu'est-ce qu'une PSBT ?

- **PSBT** = Partially Signed Bitcoin Transaction
- Format standard pour les transactions multi-sig
- Permet de signer une transaction en plusieurs étapes

---

## Pourquoi utiliser des PSBT ?

### Signature interactive

- Chaque participant signe séparément
- La transaction n'est pas envoyée tant que toutes les signatures ne sont pas collectées
- Sécurisé et flexible

---

## Créer une transaction

### Étape 1 : Préparer la transaction

- Ouvrir l'onglet **Send**
- Entrer l'adresse de destination
- Entrer le montant à envoyer
- Configurer les frais

---

## Créer une transaction

### Étape 2 : Générer la PSBT

- Cliquer sur **"Create Transaction"**
- Sparrow génère une **PSBT**
- La transaction n'est pas encore signée complètement

---

## Exporter la PSBT

### Méthode 1 : Fichier

- Sauvegarder la PSBT comme fichier
- Transférer le fichier aux autres participants
- Méthode simple et directe

---

## Exporter la PSBT

### Méthode 2 : Copy PSBT

- **Copy PSBT** → Copie le PSBT Base64 dans le presse-papiers
- Transférer le texte (email, messagerie, etc.)
- Le destinataire utilise **Open Transaction → From Text**
- Pratique pour transfert rapide par texte

**Pour cet atelier** : Nous utiliserons la **Méthode 2 : Copy PSBT**

---

## Exporter la PSBT

### Méthode 3 : Code QR

- Afficher la PSBT comme QR code
- Scanner avec un autre appareil
- Pratique pour transfert rapide entre appareils

---

## Exporter la PSBT

### Méthode 4 : Transfert USB

- Copier le fichier sur une clé USB
- Transférer physiquement
- Méthode sécurisée sans connexion réseau

---

## Signer la PSBT

### Étape 1 : Ouvrir la PSBT

- Chaque participant ouvre la PSBT dans Sparrow
- **Pour cet atelier** : Menu → **File** → **Open Transaction** → **From Text**
- Coller le PSBT Base64 reçu

---

## Signer la PSBT

### Étape 2 : Ajouter sa signature

- Vérifier les détails de la transaction
- Adresse de destination
- Montant
- Frais
- Adresse de change

⚠️ **CRITIQUE** : Vérifier avant de signer

---

## Signer la PSBT

### Étape 3 : Signer

- Cliquer sur **"Sign"**
- Entrer le mot de passe si demandé
- La signature est ajoutée à la PSBT
- Sauvegarder la PSBT mise à jour

---

## Collecter les signatures

### Processus itératif

1. Participant 1 signe → PSBT avec 1 signature
2. Transférer la PSBT au Participant 2
3. Participant 2 signe → PSBT avec 2 signatures
4. Si 2-of-3 : suffisant pour finaliser

---

## Finaliser la transaction

### Quand toutes les signatures sont collectées

- Sparrow détecte que le nombre de signatures requis est atteint
- Le bouton **"Finalize"** devient disponible
- Cliquer sur **"Finalize"**

---

## Diffuser la transaction

### Étape finale

- Après finalisation, cliquer sur **"Broadcast Transaction"**
- La transaction est envoyée au réseau Bitcoin
- Attendre les confirmations
- Suivre dans l'onglet **Transactions**

---

## Le cœur du multi-sig

### Principe fondamental

**Plusieurs personnes doivent signer avant que l'argent puisse partir**

- Sécurité renforcée
- Protection contre le vol
- Contrôle partagé des fonds

---

## Vérifications avant signature

### Checklist pour chaque participant

- [ ] Adresse de destination correcte
- [ ] Montant correct
- [ ] Frais acceptables
- [ ] Adresse de change vérifiée
- [ ] Tous les outputs sont vérifiés
- [ ] Je comprends ce que je fais

---

## Bonnes pratiques - Sauvegarde

### Pour chaque keystore

- ✅ Seed phrase sur papier
- ✅ Stocker dans des endroits différents
- ✅ Ne jamais partager les seed phrases
- ❌ Jamais sur ordinateur/cloud/email

---

## Bonnes pratiques - Sécurité

### Gestion des clés

- ✅ Répartir les clés sur différents appareils
- ✅ Utiliser des hardware wallets si possible
- ✅ Stocker les clés dans des endroits sécurisés
- ✅ Vérifier toujours les PSBT avant de signer

---

## Bonnes pratiques - Coordination

### Travailler en équipe

- ✅ Communiquer clairement avec les autres participants
- ✅ Vérifier l'identité des autres signataires
- ✅ Utiliser des canaux sécurisés pour transférer les PSBT
- ✅ Garder une trace des transactions

---

## Ce que nous avons appris

- ✅ Comprendre le concept de multi-signature
- ✅ Comprendre les clés et les mots de récupération (BIP-39)
- ✅ Découvrir les configurations possibles (2-of-3, 3-of-5, etc.)
- ✅ Créer un wallet multi-sig dans Sparrow
- ✅ Recevoir des bitcoins sur un wallet multi-sig
- ✅ Créer et signer des PSBT
- ✅ Dépenser depuis un multi-sig avec plusieurs signatures

---

## Points clés - Sécurité

⚠️ **Sécurité**

- Le multi-sig nécessite plusieurs signatures pour dépenser
- Si une clé est perdue, les fonds restent accessibles
- Une seule clé volée ne permet pas de dépenser
- Toujours vérifier les PSBT avant de signer

---

## Points clés - Clés et xpubs

🔑 **Clés et xpubs**

- Le multi-sig utilise seulement des xpubs, jamais les seed phrases
- Chaque participant garde sa seed privée
- Les xpubs permettent de générer des adresses sans exposer les clés privées

---

## Points clés - PSBT

📝 **PSBT**

- Format standard pour les transactions multi-sig
- Permet de signer une transaction en plusieurs étapes
- Plusieurs personnes doivent signer avant que l'argent puisse partir

---

## Prochains ateliers

- Be-BOP
- Block transaction
- Liana basics
- Liana advanced
