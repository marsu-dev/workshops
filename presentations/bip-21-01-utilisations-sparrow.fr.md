# Sparrow Wallet

10 novembre 2025

Apprenez à créer un wallet, utiliser les passphrases, gérer les comptes, recevoir et envoyer des bitcoins, et maîtriser la sélection de coins.

---

## Objectifs

- Création de wallet
- Passphrase BIP39
- Gestion des comptes
- Recevoir et envoyer
- Coin selection

**Environnement** : *Signet*

---

## Pourquoi Signet ?

Réseau de test Bitcoin

- Pas de fonds réels
- Fonctionnalités identiques à mainnet
- Faucets disponibles

---

## Installation

Télécharger depuis le site officiel

- macOS / Windows / Linux
- Vérifier la signature GPG

---

## Configuration réseau

### Connexions possibles

1. Electrum server
2. Bitcoin Core (RPC)
3. Public Electrum servers

---

## Configuration Signet

### Dans Sparrow

1. Preferences → Server / Connections
2. Choisir réseau Signet
3. Ajouter serveur Electrum signet
4. Vérifier "Connected"

---

## Création du wallet

### Types disponibles

- Standard single-key wallet (BIP39)
- Descriptors (bech32 native segwit)

---

## Création - Étapes

1. Menu → New Wallet → Standard Wallet
2. Choisir un nom
3. Format : Native SegWit (P2WPKH)
4. Générer la seed (12 mots + Passphrase)
5. Sauvegarder sur papier ⚠️

---

## Passphrase BIP39

### Concept

Passphrase optionnelle

- `seed + passphrase` = wallet A
- `seed seul` = wallet B

Adresses complètement différentes

---

## Passphrase - Avantages

- Defense-in-depth
- Protection supplémentaire
- Wallet séparé avec même seed

---

## Passphrase - Risques

⚠️ **Perte du passphrase = perte des fonds**

- Stocker séparément du seed
- Gestionnaire sécurisé
- Ne jamais afficher publiquement

---

## Passphrase - Démo

1. Activer Passphrase dans paramètres
2. Entrer un passphrase
3. Observer les adresses différentes
4. Tester avec passphrase différent

---

## Gestion des comptes

### Concepts

- Accounts : `m/84'/1'/0'`, `m/84'/1'/1'`
- Labels : taggage des adresses/UTXO
- Watch-only : via xpub/descriptor

---

## Comptes - Démo

1. Créer un second account
2. Étiqueter une adresse
3. Importer xpub en watch-only
4. Filtrer par label / account

---

## Recevoir des bitcoins

### Types d'adresses

- Receive : pour recevoir
- Change : pour la monnaie rendue

Utiliser de nouvelles adresses pour privacy

---

## Recevoir - Démo

1. Wallet → Receive → générer adresse
2. Afficher QR code
3. Utiliser faucet signet
4. Observer la transaction

---

## Recevoir - Concepts

- Confirmations : nombre de blocs
- Maturité : UTXO doivent être confirmés
- Affichage : txid, vout, amount, confirmations

---

## Envoyer des bitcoins

### Fonctionnalités

- Fee slider (sats/vB)
- Replace-By-Fee (RBF)
- Child-Pays-For-Parent (CPFP)
- Coin selection manuelle

---

## Envoyer - Démo

1. Wallet → Send → adresse destination
2. Entrer montant
3. Sélectionner fee
4. Activer RBF si besoin
5. Signer et broadcaster

---

## Envoyer - Vérifications

⚠️ **Vérifier les outputs**

- Ne pas laisser change vers adresse non-contrôlée
- Comprendre l'impact des fees
- Prévisualiser avant de signer

---

## Coin Selection

### Pourquoi contrôler ?

- Privacy : éviter la corrélation
- Fees : optimiser les frais
- Consolidation : regrouper UTXO

---

## Coin Selection - Démo

1. Ouvrir onglet Coins/UTXO
2. Voir txid, vout, amount, confirmations
3. Dans Send → Select Inputs
4. Choisir UTXO manuellement

---

## Freeze UTXO

Empêcher un UTXO d'être sélectionné

- Utile pour conserver des fonds
- Éviter spending accidentel
- UTXO Locking

---

## Freeze - Démo

1. Sélectionner un UTXO
2. Clic droit → Freeze
3. Vérifier dans Send (non sélectionné)
4. Démontrer Unfreeze

---

## Bonnes pratiques

✅ **Checklist essentielle**

- Sauvegarder seed + passphrase (séparément)
- Node perso pour privacy
- Coin control & freeze
- Labels systématiques
- Vérifier les outputs

---

## Ressources

- Documentation Sparrow Wallet
- Signet faucets
- Bitcoin Core signet docs

---

## Questions ?

**Atelier BIP-21 - Partie 01 : Utilisations de Sparrow**

*Réseau Signet - Aucune valeur réelle*
