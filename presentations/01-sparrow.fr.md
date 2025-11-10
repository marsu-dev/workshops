# Bien débuter avec Sparrow

10 novembre 2025

Découvrez comment utiliser Sparrow Wallet avec une clé software pour gérer vos bitcoins en toute sécurité.

---

## Objectifs

- Installer Sparrow Wallet
- Comprendre les différents réseaux Bitcoin
- Configurer la connexion au réseau
- Créer et sécuriser un wallet
- Comprendre les comptes et adresses
- Recevoir et envoyer des bitcoins

---

## Sparrow Téléchargement

- Aller sur le site officiel
- Télécharger la version pour votre système

**Ressource** : [Téléchargement Sparrow](https://sparrowwallet.com/download/)

---

## Sparrow Vérification

- Garantit l'authenticité du logiciel
- Protège contre les logiciels malveillants

⚠️ **Important** : Vérifier la signature GPG du fichier téléchargé

**Ressource** : [Téléchargement Sparrow](https://sparrowwallet.com/download/)

---

## Installation de Sparrow

- **macOS** : Ouvrir le fichier .dmg et glisser Sparrow dans Applications
- **Windows** : Exécuter le fichier .exe
- **Linux** : Extraire l'archive et exécuter

**Ressource** : [Guide Quick Start Sparrow](https://sparrowwallet.com/docs/quick-start.html)

---

## Les réseaux Bitcoin

### Mainnet

- Réseau principal
- **Bitcoin réels** avec valeur monétaire
- Transactions définitives et irréversibles

⚠️ **À utiliser uniquement avec de vrais bitcoins**

---

## Les réseaux Bitcoin

### Testnet

- **Bitcoins de test** sans valeur
- Pour tester et apprendre
- Faucets disponibles pour obtenir des bitcoins de test

---

## Les réseaux Bitcoin

### Signet

- **Bitcoins de test** sans valeur
- Plus stable que testnet
- Idéal pour les ateliers et formations

---

## Comparaison des réseaux

| Caractéristique | Mainnet     | Testnet  | Signet    |
| --------------- | ----------- | -------- | --------- |
| Valeur          | Réelle      | Aucune   | Aucune    |
| Stabilité       | Très stable | Variable | Stable    |
| Usage           | Production  | Test     | Formation |

**Pour cet atelier** : Nous utiliserons **Signet**

---

## Types de connexion

Sparrow peut se connecter de plusieurs façons :

- **Noeud Bitcoin Core privé**
- **Serveur Electrum public**
- **Serveur Electrum privé**

---

## Noeud Bitcoin Core

- Votre propre noeud Bitcoin
- Maximum de privacy
- Contrôle total

---

## Serveurs Electrum

**Serveur Electrum public** :
- Connexion à un serveur tiers
- Plus simple à configurer

**Serveur Electrum privé** :
- Votre propre serveur Electrum
- Bon compromis privacy/facilité

---

## Connexion Reseau

### Clearnet

- Connexion Internet standard
- Plus rapide
- Moins de privacy

---

## Connexion Reseau

### Tor

- The Onion Router
- Connexion anonyme via le réseau Tor
- Plus de privacy
- Peut être plus lent

**Ressource** : [The Tor Project](https://www.torproject.org/)

---

## Configuration

- Ouvrir **Preferences**
- Aller dans **Server** / **Connections**
- Choisir le réseau : Mainnet / Testnet / Signet

**Ressource** : [Guide Quick Start Sparrow](https://sparrowwallet.com/docs/quick-start.html)

---

## Configuration

- Configurer la connexion :
  - **Public Server** : Sélectionner un serveur
  - **Private Server** : Votre serveur
- Choisir **Clearnet** ou **Tor**
- Vérifier que le statut affiche **"Connected"**

**Ressource** : [Guide Quick Start Sparrow](https://sparrowwallet.com/docs/quick-start.html)

---

## Créer un nouveau wallet

- Menu → **New Wallet** → **Standard Wallet**
- Choisir un nom pour votre wallet
- Sélectionner le format : **Native SegWit (P2WPKH)**

---

## Format Native SegWit

- Format moderne et économique
- Adresses commençant par
  - `bc1...` (mainnet)
  - `tb1...` (testnet/signet)

---

## Générer la seed phrase

La **seed phrase** est votre clé de sauvegarde

- Généralement **12 ou 24 mots**
- Générée aléatoirement par Sparrow

⚠️ **CRITIQUE** : Sauvegarder immédiatement sur papier

---

## Sauvegarder la seed

- **Écrire sur papier** (jamais sur ordinateur/cloud)
- Vérifier que tous les mots sont corrects
- Stocker dans un endroit sûr et secret
- Ne jamais partager avec personne

⚠️ Perte de la seed = **perte définitive de tous les bitcoins**

---

## Wallet Sans passphrase

- Wallet standard avec la seed seule
- Plus simple à utiliser
- Si la seed est compromise, les fonds sont accessibles

---

## Wallet Avec passphrase

- Protection supplémentaire
- `seed + passphrase` = wallet différent de `seed seul`
- Même seed peut créer plusieurs wallets différents

---

## Exemple de passphrase

- Seed : `mot1 mot2 ... mot12`
- Sans passphrase → Wallet A
- Avec passphrase "MonSecret123" → Wallet B

---

## Activer la passphrase

- Dans les paramètres du wallet
- Activer l'option **Passphrase**
- Entrer votre passphrase

**mémoriser ou sauvegarder séparément**

⚠️ Perte de la passphrase = **perte des fonds de ce wallet**

---

## Définir un mot de passe

Le **mot de passe du wallet** protège l'accès à Sparrow

- Nécessaire à chaque ouverture du wallet
- Différent de la passphrase

⚠️ Ne protège pas si quelqu'un a votre seed

---

## Bonnes pratiques

- Utiliser un mot de passe fort
- Le mémoriser ou le stocker dans un gestionnaire de mots de passe
- Ne pas le confondre avec la passphrase

---

## Notion de compte

Un **compte** est une séparation logique dans votre wallet

- Chaque compte a ses propres adresses
- Utile pour organiser vos fonds
- Exemple : Compte "Épargne", Compte "Dépenses"

---

## Chemin de dérivation

**Chemin de dérivation**
- Mainnet
  - Compte 0 : `m/84'/0'/0'`
  - Compte 1 : `m/84'/0'/1'`

- Signet
  - Compte 0 : `m/84'/1'/0'`
  - Compte 1 : `m/84'/1'/1'`

---

## Sous-comptes

- Les sous-comptes permettent une organisation plus fine
- Chaque compte peut avoir plusieurs sous-comptes
- Utile pour séparer différents usages

---

## Adresses de réception

- Adresses pour **recevoir** des bitcoins
- Générées automatiquement par le wallet
- Chaque transaction doit utiliser une **nouvelle adresse**

---

## Adresses de change

- Adresses pour la **monnaie rendue** lors d'un envoi
- Générées automatiquement par le wallet

Si vous envoyez **0.1 BTC** mais dépensez 1.0 BTC

**0.9 BTC** revient en "change"

---

## 6. Exemple d'adresse de change

- Vous avez 1 BTC
- Vous envoyez 0.3 BTC à quelqu'un
- Frais : 0.0001 BTC

**Change** : 0.6999 BTC retourne à votre adresse de change

---

## Visualiser les comptes dans Sparrow

- Ouvrir votre wallet
- Voir la liste des comptes dans la barre latérale
- Cliquer sur un compte pour voir ses adresses
- Onglet **Addresses** : voir toutes les adresses
  - receive
  - change

---

## Générer une adresse de réception

- Sélectionner votre wallet
- Aller dans l'onglet **Receive**
- Cliquer sur "Create new receiving address"
  
**Une nouvelle adresse est générée**

---

## Afficher le QR code

- Afficher le **QR code** pour faciliter le partage
- Copier l'adresse pour l'envoyer

---

## Adresses pré-générées

- Sparrow peut générer plusieurs adresses à l'avance
- Utile pour recevoir plusieurs paiements
- Chaque adresse reste unique et valide

---

## Réutilisation d'adresse

⚠️ Address Reuse **À éviter**

- Utiliser la même adresse plusieurs fois réduit la privacy
- Permet de lier vos transactions ensemble

Bonne pratique **une adresse = une transaction**

---

## Recevoir - Démonstration

- Wallet → **Receive**
- Générer une nouvelle adresse
- Copier l'adresse ou afficher le QR code
- Utiliser un faucet Signet pour recevoir des bitcoins de test

---

## Vérifier la réception

- **Confirmations** : Nombre de blocs minés depuis votre transaction
- Plus il y a de confirmations, plus la transaction est sécurisée
- Observer la transaction apparaître dans l'onglet **Transactions**

---

## Nombre de confirmations

- Pour de petits montants : 1 confirmation suffit souvent
- Pour de gros montants : attendre 6 confirmations

---

## Pourquoi déplacer entre comptes ?

- Organiser vos fonds
- Séparer différents usages
- Transférer vers un autre compte du même wallet

---

## Comment déplacer entre comptes

- Ouvrir l'onglet **Send**
- Dans **Pay to**, entrer une adresse de destination
- Entrer le montant à transférer
- Vérifier les frais
- Créer, signer et diffuser la transaction

**Note** :  C'est techniquement une transaction normale, mais vers votre propre wallet

---

## Création de la transaction

- Ouvrir l'onglet **Send**
- Dans **Pay to** :
  - Entrer l'adresse Bitcoin du destinataire
  - Ou scanner un QR code
- Entrer le **montant** à envoyer
  - En BTC ou en sats
- Ajouter un **label** pour identifier la transaction

---

### Configuration des frais

- **Fee slider** : Ajuster les frais de transaction (sats/vB)
- Frais plus élevés = confirmation plus rapide
- Frais plus bas = confirmation plus lente
- Sparrow suggère des frais adaptés

---

### Options avancées

- **Replace-By-Fee (RBF)** : Permet d'augmenter les frais après envoi
- **Coin selection** : Choisir manuellement les UTXO à dépenser

---

### Vérification avant signature

- **Adresse de destination** : Est-ce la bonne ?
- **Montant** : Est-ce le bon montant ?
- **Frais** : Acceptables ?

⚠️ **ÉTAPE CRITIQUE** - Vérifier avant de signer

---

## Vérification - Adresse de change

- **Adresse de change** : Vérifier qu'elle vous appartient
  - Doit être une adresse de votre wallet

⚠️ Si l'adresse de change n'est pas la vôtre, vous perdez ces bitcoins

---

### Adresse de change Explication

Lors d'un envoi, si vous dépensez plus que le montant à envoyer

**Exemple d'envoie**
- Vous avez un UTXO de 1 BTC
- Vous envoyez 0.3 BTC
- Frais : 0.0001 BTC

**Change** : 0.6999 BTC doit retourner à votre wallet

---

### Règle Adresse de change

L'adresse de change doit **TOUJOURS** être une adresse que vous contrôlez.

---

## Signature de la transaction

- Après vérification, cliquer sur **"Create Transaction"**
- Vérifier à nouveau tous les détails
- Cliquer sur **"Sign"**
- Entrer votre mot de passe si demandé
- La transaction est signée avec vos clés privées

---

### Diffusion de la transaction

- Après signature, cliquer sur **"Broadcast Transaction"**
- La transaction est envoyée au réseau Bitcoin
- Attendre les confirmations
- Suivre la transaction dans l'onglet **Transactions**

---

### Checklist avant d'envoyer

✅ **Vérifications finales**

- [ ] Adresse de destination correcte
- [ ] Montant correct
- [ ] Frais acceptables
- [ ] Adresse de change est la mienne
- [ ] Tous les outputs sont vérifiés
- [ ] Je comprends ce que je fais

---

### Bonnes pratiques - Sauvegarde

- ✅ Seed phrase sur papier
- ✅ Passphrase stockée séparément
- ✅ Mot de passe dans un gestionnaire sécurisé
- ❌ Jamais sur ordinateur/cloud/email

---

### Bonnes pratiques - Privacy

- ✅ Utiliser votre propre noeud si possible
- ✅ Utiliser Tor pour plus d'anonymat
- ✅ Une nouvelle adresse par transaction
- ✅ Vérifier les adresses de change

---

### Bonnes pratiques - Vérifications

- ✅ Toujours vérifier les outputs avant de signer
- ✅ Vérifier l'adresse de destination
- ✅ Comprendre les frais
- ✅ Tester d'abord sur Signet/Testnet

---

## Ce que nous avons appris

- ✅ Installer Sparrow Wallet
- ✅ Comprendre les réseaux Bitcoin
- ✅ Configurer la connexion
- ✅ Créer un wallet
- ✅ Comprendre les comptes
- ✅ Recevoir des bitcoins
- ✅ Déplacer des bitcoins entre comptes
- ✅ Envoyer des bitcoins

---

## Points clés - Sécurité

⚠️ **Sécurité**

- La seed phrase = accès total aux bitcoins
- Sauvegarder sur papier, jamais en ligne
- Vérifier toujours les adresses de change

---

## Points clés - Privacy

🔒 **Privacy**

- Une adresse = une transaction
- Utiliser votre propre noeud si possible
- Comprendre les implications de chaque action

---

### Prochains ateliers

- Multisig
- Be-BOP
- Block transaction
