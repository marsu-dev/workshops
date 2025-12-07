# Blocs & Transactions

08 décembre 2025

Comprenez la structure des blocs Bitcoin et le processus de validation des transactions sur la blockchain.

---

## Introduction

Comprendre les fondamentaux du Bitcoin: structure des blocs et validation des transactions

---

## Objectifs

- Comprendre ce qu'est une transaction Bitcoin
- Comprendre comment les transactions sont regroupées dans des blocs
- Comprendre pourquoi on paie des frais
- Comprendre les différents formats (Legacy, SegWit, Taproot)
- Comprendre l'identifiant d'une transaction (TXID)
- Comprendre l'arbre de Merkle et son rôle dans la sécurité des blocs

---

## Qu'est-ce qu'une transaction Bitcoin ?

Une transaction Bitcoin, c'est comme un **chèque numérique** qui :

- **Prend** de l'argent que vous avez déjà reçu (vos pièces Bitcoin)
- **Envoie** cet argent à quelqu'un d'autre (ou vous le renvoie à vous-même comme "monnaie")

---

## Les pièces Bitcoin (UTXO)

Imaginez que vous avez reçu plusieurs pièces Bitcoin :

- Une pièce de 0.1 BTC
- Une pièce de 0.05 BTC
- Une pièce de 0.02 BTC

Pour envoyer 0.15 BTC, vous devez utiliser vos pièces existantes. C'est comme payer avec des billets : si vous voulez payer 15€ et que vous avez un billet de 20€, vous devez utiliser ce billet et recevoir 5€ de monnaie.

---

## Structure simple d'une transaction

Une transaction contient essentiellement :

**1. Les entrées (inputs)**
- Quelles pièces vous utilisez (référence aux pièces que vous avez reçues)

**2. Les sorties (outputs)**
- À qui vous envoyez l'argent (montant + adresse)
- Votre monnaie (si vous avez utilisé plus que nécessaire)

**3. La signature**
- Votre preuve que vous êtes bien le propriétaire des pièces

---

## Exemple concret

**Situation :** Alice veut envoyer 0.1 BTC à Bob

**Ce qu'Alice a :**
- Une pièce de 0.15 BTC qu'elle a reçue précédemment

---

## Exemple concret

**La transaction :**
- **Entrée :** Utilise la pièce de 0.15 BTC d'Alice
- **Sortie 1 :** 0.1 BTC vers Bob
- **Sortie 2 :** 0.0499 BTC vers Alice (sa monnaie)
- **Frais :** 0.0001 BTC (la différence)


---

## Exemple concret

**Résultat :** Bob reçoit 0.1 BTC, Alice récupère presque tout le reste, et les mineurs reçoivent les frais.

---

## Les frais de transaction

Pourquoi payer des frais ?

- Les mineurs doivent vérifier et inclure votre transaction dans un bloc
- C'est comme payer un service postal : plus c'est urgent, plus c'est cher
- Les frais incitent les mineurs à traiter votre transaction rapidement

---

## Les frais évitent le spam

**Les frais évitent le spam** : sans frais, n'importe qui pourrait envoyer des milliers de transactions inutiles et bloquer le réseau

---

## Comment sont calculés les frais ?

Les frais dépendent de **deux choses** :

**1. La taille de votre transaction**
- Plus vous utilisez de pièces (entrées), plus c'est grand
- Plus vous envoyez à de personnes (sorties), plus c'est grand
- Les signatures prennent aussi de la place

**2. La priorité que vous voulez**
- Frais élevés = traitement rapide (comme un courrier express)
- Frais bas = traitement plus lent (comme un courrier normal)

---

## Exemple de calcul de frais

**Transaction simple :**
- 1 entrée (une pièce utilisée)
- 2 sorties (destinataire + monnaie)
- Taille : environ 250 octets

---

## Exemple de calcul de frais

**Si vous choisissez :**
- Frais rapides : 50 satoshis par octet → 250 × 50 = 12 500 satoshis
- Frais normaux : 10 satoshis par octet → 250 × 10 = 2 500 satoshis

**Note :** Les transactions modernes (SegWit) sont moins chères car les signatures prennent moins de place.

---

## L'identifiant d'une transaction (TXID)

Chaque transaction reçoit un **identifiant unique**, comme un numéro de suivi.

**Caractéristiques :**
- C'est une longue chaîne de lettres et chiffres (comme un code-barres)
- Il est unique : impossible d'avoir deux transactions avec le même identifiant
- Il permet de retrouver votre transaction sur la blockchain

---

## Le TXID ne change jamais

- Il ne change jamais : même si vous consultez la transaction plus tard, l'identifiant reste le même

**Utilité :**
- Vérifier qu'une transaction a bien été envoyée
- Suivre le statut d'un paiement
- Référencer une transaction dans le futur

---

## Voir les transactions dans Sparrow

**Étape 1 : Ouvrir l'onglet Transactions**
- Sélectionner votre wallet dans Sparrow
- Cliquer sur l'onglet **Transactions** (en bas de l'interface)
- Vous verrez la liste de toutes vos transactions

---

## Consulter les détails d'une transaction

**Étape 2 : Consulter les détails d'une transaction**
- Double-cliquer sur une transaction dans la liste
- Une fenêtre s'ouvre avec tous les détails de la transaction

---

## Voir le TXID dans Sparrow

**Méthode 1 : Dans la liste des transactions**
- L'onglet **Transactions** affiche le TXID de chaque transaction
- C'est la première colonne (longue chaîne de lettres et chiffres)
- Vous pouvez cliquer dessus pour le copier

---

## Voir le TXID dans Sparrow

**Méthode 2 : Dans les détails d'une transaction**
- Double-cliquer sur une transaction
- Le TXID est affiché en haut de la fenêtre de détails
- Vous pouvez cliquer dessus pour le copier

---

## Voir le TXID dans Sparrow

**Méthode 3 : Menu contextuel**
- Clic droit sur une transaction dans la liste
- Sélectionner **"Copy Transaction ID"** (Copier l'ID de transaction)
- Le TXID est copié dans le presse-papiers

---

## Informations visibles dans Sparrow

**Informations de base :**
- Le **TXID** (identifiant unique)
- Le **montant** envoyé ou reçu
- La **date et l'heure** de la transaction
- Le **nombre de confirmations**

---

## Détails techniques dans Sparrow

**Détails techniques :**
- Les **entrées** (inputs) : quelles pièces ont été utilisées
- Les **sorties** (outputs) : à qui l'argent a été envoyé
- Les **frais** payés
- La **taille** de la transaction (en vBytes)

---

## Statut d'une transaction dans Sparrow

**Statut :**
- **En attente** : transaction non confirmée
- **Confirmée** : nombre de blocs depuis la confirmation
- **Finalisée** : transaction complètement confirmée

---

## Une transaction ne peut pas être perdue

**Garantie Bitcoin :**

Une transaction Bitcoin ne peut **jamais** être perdue. Il n'y a que deux états possibles :

---

## État 1 : La transaction est minée

**1. La transaction est minée**
- Elle est incluse dans un bloc de la blockchain
- Elle est confirmée et irréversible
- Votre argent a été transféré

---

## État 2 : Aucune opération effectuée

**2. Aucune opération n'a été effectuée**
- La transaction n'a jamais été diffusée sur le réseau
- Ou elle a été rejetée avant d'être minée
- Votre argent n'a jamais quitté votre portefeuille

**Il n'y a pas d'états intermédiaires :**
- Pas de "transaction en transit" qui pourrait disparaître
- Pas de "limbo" où votre argent serait bloqué
- Soit c'est fait, soit ce n'est pas fait

---

## Les différents formats de transactions

Bitcoin a évolué et propose aujourd'hui plusieurs formats de transactions. Chaque format a ses avantages en termes de coût et de fonctionnalités.

---

## Comparaison des formats : Legacy, SegWit, Taproot

| Format      | Nom technique | Année | Caractéristiques                                | Coût relatif         |
| ----------- | ------------- | ----- | ----------------------------------------------- | -------------------- |
| **Legacy**  | P2PKH         | 2009  | Format original, signatures dans la transaction | Le plus cher         |
| **SegWit**  | P2WPKH        | 2017  | Signatures séparées, 4x moins cher              | Réduction importante |
| **Taproot** | P2TR          | 2021  | Format le plus moderne, signatures optimisées   | Le moins cher        |

**En pratique :** Les formats modernes (SegWit et Taproot) vous font économiser de l'argent sur les frais !

---

## Les transactions modernes (SegWit)

**Avant (ancien format Legacy) :**
- Les signatures étaient dans la transaction principale
- Transactions plus lourdes = frais plus élevés
- Format : P2PKH (Pay-to-Public-Key-Hash)

---

## SegWit : les avantages

**Maintenant (SegWit) :**
- Les signatures sont séparées (dans le "witness")
- Transactions plus légères = frais moins élevés
- Environ 4 fois moins cher pour les signatures
- Formats : P2WPKH, P2WSH

**Avantage :** Vous payez moins de frais pour la même transaction !

---

## Coût des différents formats d'entrée

Quand vous utilisez une pièce Bitcoin dans une transaction, le coût dépend du format :

| Type d'entrée            | Format      | Taille approximative | Coût relatif      |
| ------------------------ | ----------- | -------------------- | ----------------- |
| **Legacy**               | P2PKH       | ~148 vBytes          | Le plus cher      |
| **SegWit intermédiaire** | P2SH-P2WPKH | ~91 vBytes           | Réduction modérée |
| **SegWit natif**         | P2WPKH      | ~41 vBytes           | Très efficace     |
| **Taproot**              | P2TR        | ~16-57 vBytes        | Optimal           |

---

## Économie avec SegWit

**Exemple concret :**
- Utiliser une pièce Legacy : coûte environ 148 unités
- Utiliser une pièce SegWit : coûte environ 41 unités
- **Économie :** Environ 70% de frais en moins avec SegWit !

---

## Coût des différents formats de sortie

Quand vous envoyez de l'argent à quelqu'un, le format de l'adresse de destination affecte aussi la taille :

| Type de sortie | Format | Taille approximative |
| -------------- | ------ | -------------------- |
| **Legacy**     | P2PKH  | ~34 vBytes           |
| **SegWit**     | P2WPKH | ~31 vBytes           |
| **Taproot**    | P2TR   | ~43 vBytes           |

**Note :** La différence est moins importante pour les sorties, mais SegWit reste légèrement plus efficace.

---

## Exemple de comparaison de frais

**Transaction avec 1 entrée et 2 sorties :**

| Format      | Taille totale | Frais (à 20 sat/vByte) | Économie       |
| ----------- | ------------- | ---------------------- | -------------- |
| **Legacy**  | ~250 vBytes   | ~5 000 satoshis        | -              |
| **SegWit**  | ~117 vBytes   | ~2 340 satoshis        | 53% moins cher |
| **Taproot** | ~100 vBytes   | ~2 000 satoshis        | 60% moins cher |

**Conclusion :** Utiliser des formats modernes peut vous faire économiser plus de la moitié des frais !

---

## Taproot : le format le plus moderne

**Taproot (P2TR)** est le format le plus récent et le plus avancé :

**Avantages :**
- **Frais encore plus bas** : Signatures optimisées (Schnorr)
- **Plus de confidentialité** : Toutes les transactions Taproot se ressemblent
- **Plus de flexibilité** : Permet des scripts complexes sans révéler leur existence
- **Meilleure efficacité** : Encodage optimisé

---

## Quand utiliser Taproot ?

**Quand l'utiliser ?**
- Si votre portefeuille le supporte (portefeuilles modernes)
- Pour bénéficier des frais les plus bas
- Pour plus de confidentialité

**Note :** Tous les portefeuilles ne supportent pas encore Taproot, mais c'est le format de l'avenir.

---

## Organisation du bloc

Les transactions ne sont pas traitées une par une. Elles sont regroupées dans des **blocs**, comme des pages d'un livre de comptes.

**Un bloc contient :**
- Un en-tête (comme la page de garde d'un livre)
- Une liste de transactions (comme les lignes d'un registre)

---

## Taille et fréquence des blocs

**Taille d'un bloc :**
- Maximum environ 1 Mo de données
- Peut contenir plusieurs milliers de transactions
- Un nouveau bloc est créé environ toutes les 10 minutes

---

## La Coinbase

Dans chaque bloc, la **première transaction est spéciale** :

**La transaction coinbase :**
- Crée de nouveaux bitcoins (la récompense du mineur)
- Collecte tous les frais des transactions du bloc
- C'est comme le salaire du mineur pour son travail

---

## Exemple de récompense du mineur

**Exemple :**
- Récompense du bloc : 3.125 BTC (actuellement)
- Frais collectés : 0.5 BTC
- **Total pour le mineur :** 3.625 BTC

---

## Ordre des transactions

**Règle simple :**
1. La coinbase est toujours en premier
2. Les autres transactions peuvent être dans n'importe quel ordre
3. **Sauf** : si une transaction B dépense de l'argent créé dans une transaction A, alors A doit être avant B

---

## Pourquoi cette règle ?

**Pourquoi ?**
- C'est comme dans la vraie vie : vous ne pouvez pas dépenser de l'argent que vous n'avez pas encore reçu !

---

## Exemple d'ordre des transactions

**Exemple :**
- Transaction A : Alice reçoit 0.1 BTC
- Transaction B : Alice envoie 0.05 BTC à Bob
- B doit venir **après** A dans le bloc

---

## L'arbre de Merkle
**le sceau de sécurité du bloc**

L'arbre de Merkle est un système qui crée une **empreinte unique** pour toutes les transactions d'un bloc.


---

## L'arbre de Merkle
**Analogie simple :**
Imaginez un livre avec 1000 pages. Au lieu de vérifier chaque page, vous créez un "sommaire magique" qui résume tout le livre en une seule ligne. Si quelqu'un modifie ne serait-ce qu'une lettre dans le livre, le sommaire change complètement.

---

## Usage de l'arbre de Merkle

**1. Détecter les modifications**
- Si quelqu'un essaie de modifier une transaction dans le bloc, l'empreinte change
- C'est comme un sceau de cire : si on le brise, on le voit immédiatement
- Impossible de falsifier un bloc sans que ça se voie

---

## Vérifier rapidement une transaction

**2. Vérifier rapidement une transaction**
- Vous pouvez prouver qu'une transaction est dans le bloc **sans télécharger toutes les transactions**
- C'est comme vérifier qu'un mot est dans un dictionnaire sans lire toutes les pages
- Très utile pour les portefeuilles légers sur téléphone

---

## Économiser de l'espace et de la bande passante

**3. Économiser de l'espace et de la bande passante**
- Au lieu de stocker toutes les transactions, on peut juste vérifier l'empreinte
- Les portefeuilles mobiles peuvent fonctionner sans télécharger toute la blockchain

---

## Comment ça marche ?

**Étape 1 :** Chaque transaction reçoit une "empreinte" unique (comme un code-barres)

**Étape 2 :** On regroupe les empreintes par paires et on crée une nouvelle empreinte pour chaque paire

**Étape 3 :** On répète jusqu'à obtenir une seule empreinte finale : le **Merkle Root**

**Résultat :** Une seule empreinte représente toutes les transactions du bloc !

Cette empreinte finale est stockée dans l'en-tête du bloc.

---

## Structure de l'arbre de Merkle

<img src="presentations/04-block-tx/merkle.png" alt="Structure de l'arbre de Merkle" style="height: 300px; width: auto; background-color: white; padding: 20px; border-radius: 8px;">

---

## Pourquoi c'est utile en pratique ?

**Scénario 1 : Vérifier votre paiement**
- Vous voulez vérifier que votre transaction est bien dans un bloc
- **Sans Merkle :** Vous devriez télécharger toutes les transactions du bloc (peut-être 3000 transactions = plusieurs Mo)
- **Avec Merkle :** Vous téléchargez juste quelques petites empreintes (quelques Ko) et vous pouvez prouver que votre transaction est là !

---

## Pourquoi c'est utile en pratique ?

**Scénario 2 : Portefeuille sur téléphone**
- Votre téléphone n'a pas assez d'espace pour stocker toute la blockchain (plusieurs centaines de Go)
- **Avec Merkle :** Votre portefeuille peut vérifier vos transactions sans tout télécharger
- C'est comme avoir un résumé du livre au lieu du livre entier

---

## Sécurité avec l'arbre de Merkle

**Scénario 3 : Sécurité**
- Si un pirate essaie de modifier une transaction dans un bloc
- L'empreinte Merkle change immédiatement
- Tous les nœuds du réseau rejettent le bloc modifié
- C'est impossible de falsifier sans que tout le monde le sache

---

## Résumé simple

L'arbre de Merkle, c'est :
- ✅ Un **sceau de sécurité** : impossible de modifier un bloc sans que ça se voie
- ✅ Un **système de vérification rapide** : prouver qu'une transaction existe sans tout télécharger
- ✅ Une **économie d'espace** : les portefeuilles légers peuvent fonctionner sans la blockchain complète

---

## Résumé simple

**En une phrase :**

C'est comme un sommaire magique qui change si on modifie ne serait-ce qu'une lettre dans le livre, et qui permet de vérifier qu'une page existe sans lire tout le livre.

---

## Validation d'un bloc

Avant qu'un bloc soit accepté, il doit être **validé** :

**Vérifications :**
- Toutes les transactions sont valides (signatures correctes)
- Personne n'a dépensé de l'argent qu'il n'a pas
- Aucune transaction n'est en double
- Les montants sont corrects (sorties ≤ entrées)
- L'empreinte Merkle est correcte

**Si tout est bon :** Le bloc est ajouté à la blockchain
**Si quelque chose est faux :** Le bloc est rejeté

---

## Observer un bloc dans mempool.space

**Étape 1 : Depuis les détails d'une transaction dans Sparrow**
- Ouvrir Sparrow et aller dans l'onglet **Transactions**
- Double-cliquer sur une transaction confirmée
- Dans les détails, cliquer sur le **hash du bloc** ou le **numéro de bloc**
- Cela ouvre automatiquement le bloc dans mempool.space

---

## Observer un bloc dans mempool.space

**Étape 2 : Ouvrir mempool.space**
- Aller sur [mempool.space](https://mempool.space) dans votre navigateur
- Ou utiliser [mempool.space/signet](https://mempool.space/signet) pour Signet

---

## Observer un bloc dans mempool.space

**Étape 3 : Rechercher le bloc**
- Utiliser la barre de recherche en haut de la page
- Entrer le numéro de bloc ou le hash du bloc
- Cliquer sur le résultat pour voir tous les détails du bloc

---

## Ce que vous pouvez voir dans mempool.space

**Informations sur le bloc :**
- Le **hash du bloc** et le **numéro de bloc**
- Le **nombre de transactions** dans le bloc
- La **taille du bloc** (en Mo)
- Les **frais collectés** par le mineur
- La **récompense du bloc** (coinbase)
- Le **Merkle Root** (empreinte de toutes les transactions)

---

## Ce que vous pouvez voir dans mempool.space

**Liste des transactions :**
- Toutes les transactions du bloc dans l'ordre
- La transaction coinbase en premier
- Les détails de chaque transaction (TXID, montants, frais)

---

## Résumé : Une transaction Bitcoin

Une transaction Bitcoin, c'est comme un chèque numérique qui :
- Prend de l'argent que vous avez déjà reçu
- L'envoie à quelqu'un d'autre (ou vous le renvoie)
- Inclut votre signature pour prouver que c'est vous

---

## Résumé : Une transaction Bitcoin

**Contient :**
- Les pièces que vous utilisez (entrées)
- À qui vous envoyez (sorties)
- Votre signature

---

## Résumé : Une transaction Bitcoin

**Ne contient pas :**
- Votre nom ou identité
- Votre solde total
- Votre adresse email

---

## Résumé : Les frais de transaction

Les frais dépendent de :
- **La taille** de votre transaction (nombre de pièces utilisées, nombre de destinataires)
- **Le format** utilisé (Legacy, SegWit, Taproot)
- **La priorité** que vous choisissez (rapide = cher, lent = moins cher)

---

## Pourquoi des frais ?

**Pourquoi des frais ?**
- Rémunèrent les mineurs pour leur travail
- Évitent le spam et protègent le réseau
- Incitent à un traitement rapide des transactions

---

## Comparaison des formats

**Comparaison des formats :**
- **Legacy** : Le plus cher (~250 vBytes pour une transaction simple)
- **SegWit** : Environ 2x moins cher (~117 vBytes)
- **Taproot** : Le moins cher (~100 vBytes)

---

## Résumé : L'identifiant (TXID)

Chaque transaction a un **identifiant unique** :
- C'est comme un numéro de suivi
- Il permet de retrouver votre transaction
- Il ne change jamais
- Vous pouvez le partager pour prouver un paiement

**Où le trouver ?** Dans votre portefeuille, après avoir envoyé une transaction.

---

## Résumé : Les blocs

Les transactions sont regroupées dans des **blocs** :
- Un bloc = une page du livre de comptes Bitcoin
- Environ 1 Mo maximum
- Un nouveau bloc toutes les 10 minutes
- La première transaction est toujours la coinbase (récompense du mineur)

**L'ordre :**
- Coinbase en premier
- Autres transactions dans n'importe quel ordre
- Sauf si une transaction dépend d'une autre

---

## Résumé : L'arbre de Merkle

L'arbre de Merkle crée une **empreinte unique** du bloc :
- **Sécurité** : Impossible de modifier un bloc sans que l'empreinte change
- **Vérification rapide** : Prouver qu'une transaction existe sans télécharger tout le bloc
- **Économie d'espace** : Les portefeuilles légers peuvent fonctionner sans la blockchain complète

---

## Points clés à retenir

- ✅ Une transaction prend de l'argent que vous avez et l'envoie ailleurs
- ✅ Les frais dépendent de la taille et de la priorité
- ✅ Chaque transaction a un identifiant unique (TXID)
- ✅ Les transactions sont regroupées dans des blocs
- ✅ La première transaction d'un bloc est toujours la coinbase
- ✅ L'arbre de Merkle garantit que personne ne peut modifier un bloc

---
