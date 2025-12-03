# be-BOP

04 décembre 2025

Découvrez be-BOP, un logiciel libre pour gérer vos ventes en toute indépendance. Aucune commission, aucune censure.

---

## L'outil de vente éthique et indépendant

### Un logiciel libre

- Ce n'est pas une plateforme
- Logiciel libre et copyleft
- Vous possédez et contrôlez tout

---

## L'outil de vente éthique et indépendant

- Aucune commission
- Aucune censure
- Aucune dépendance à un tiers

---

## Pour qui est be-BOP ?

### Public cible

- Créateurs
- Entrepreneurs
- Communautés

---

## Pour qui est be-BOP ?

### Outils intégrés

- Financer votre travail
- Gérer vos ventes et abonnements
- Organiser vos événements
- Animer votre communauté

---

## Qu'est-ce que be-BOP ?

be-BOP n'est pas une plateforme. C'est un logiciel libre et copyleft que vous possédez et contrôlez entièrement.

- Logiciel libre et auto-hébergé
- Architecture ouverte et modulaire
- Paiements en ligne et sur site
- Personnalisation et intégration sans limites
- Sans installation ni support inclus

---

[![bip-21](presentations/03-be-bop/bip-21.png)](https://bip-21.fr/)

---

[![BitcoinStore](presentations/03-be-bop/bitcoinstore.png)](https://bitcoinstore.fr/)

---

[![Suif & Praline](presentations/03-be-bop/sulinaderm.png)](https://sulinaderm.com/)

---

[![Marketplace CryptoXR](presentations/03-be-bop/cryptoxr.png)](https://market.cryptoxr.fr/)

---

## Fonctionnalités

### Commerce

- **Boutique en ligne** : Gestion complète de vos ventes
- **Abonnements** : Gestion d'abonnements récurrents
- **Événements** : Création et billetterie
- **Communauté** : Outils pour animer votre communauté

---

## Fonctionnalités

### Paiements & Liberté

- **Paiements** : En ligne et sur site, sans commission
- **0% de commission** : Tous vos revenus vous appartiennent
- **Indépendance totale** : Vos données, votre infrastructure

---

## Pourquoi be-BOP ?

### Contrôle total

Déployez votre propre environnement et gardez le contrôle total sur vos outils, vos données et vos revenus.

---

## Pourquoi be-BOP

### Liberté totale

**0% de commission**
Aucune plateforme ne prend de commission sur vos ventes.

**Liberté totale**
Vous décidez de ce que vous vendez, personne ne peut vous bloquer.

---

## Installation

### Prérequis

1. Un serveur Linux (Debian ou Ubuntu LTS)
2. Un nom de domaine que vous contrôlez
3. Accès à la configuration DNS
4. Une adresse e-mail (pour Let's Encrypt)

---

## Prérequis

### Le serveur

**Serveur Linux** (Debian ou Ubuntu LTS)

- Minimum : 2 Go de RAM
- Espace disque : 40 Go
- Accès internet

---

## Prérequis

### Domaine & DNS

**Un nom de domaine** que vous contrôlez
Exemple : `example.com`

**Configuration DNS** requise :

- `example.com` → IP de votre serveur
- `s3.example.com` → IP de votre serveur

---

## Étape 1

### Obtenir un serveur

Vous aurez besoin d'un serveur où exécuter des commandes :

- VPS chez n'importe quel hébergeur
- Machine dédiée
- Machine de rechange chez vous sous Linux

---

## Étape 1

### Modes d'accès

**Comment accéder au serveur :**

- Via SSH (terminal ou client SSH)
- Via console web du fournisseur

**Pour Windows :**
[Git for Windows](https://gitforwindows.org/)

---

## Étape 2

### Obtenir un nom de domaine

Enregistrez un domaine chez le fournisseur de votre choix :

- Domaine racine : `example.com`
- Ou sous-domaine : `boutique.example.com`

Vous configurerez le DNS à l'étape suivante.

---

## Étape 2

### Configurer le DNS (IPv4)

Créez deux enregistrements A (IPv4) :

```text
mondomaine.com      → A → IPv4 de votre serveur
s3.mondomaine.com   → A → IPv4 de votre serveur
```

---

## Étape 2

### Configurer le DNS (IPv6)

Ajoutez aussi des enregistrements AAAA :

```text
mondomaine.com      → AAAA → IPv6 de votre serveur
s3.mondomaine.com   → AAAA → IPv6 de votre serveur
```

**Note :** Attendez la propagation DNS

---

## Étape 3

### Vérifier l'accès au serveur

Essayez une commande simple pour confirmer l'accès au serveur :

```text
ssh root@mondomaine.com
```

---

## Étape 4

### Lancer l'installation

**Modifiez cette commande avec vos informations :**

```bash
bash <(curl -fsSL https://be-bop.io/wizard/install.sh) \
  --domain "mondomaine.com" \
  --email "adresse@e-mail.com"
```

**Avant d'exécuter :**

- Remplacez `mondomaine.com` par votre domaine
- Remplacez `adresse@e-mail.com` par votre email

Le script affiche toutes les tâches prévues et demande confirmation avant modifications.

---

## Installation en cours

### Durée : 3 à 10 minutes

Le script fait tout automatiquement :

- Installation des dépendances
- Configuration des services
- Génération des certificats SSL
- Préparation de be-BOP

---

## Après l'installation

### Visitez votre domaine dans un navigateur

be-BOP sera prêt pour la configuration initiale via l'interface web.

Suivez l'assistant de configuration pour :

- Créer votre compte administrateur
- Configurer vos paramètres de paiement
- Personnaliser votre boutique

---

## Besoin d'aide ?

### En cas de problème

Contactez le support avec :

- Votre fournisseur d'hébergement
- Votre nom de domaine
- Une capture d'écran de l'erreur

---

## Documentation

[Tous les détails sur be-bop.io](https://be-bop.io/get-started-diy)

---

## Prêt à démarrer ?

### Votre indépendance numérique commence ici

[Découvrir be-BOP](https://be-bop.io/)

---

## À vous de jouer

- Ajoutez vos produits & services
- Créez vos pages CMS
- Configurer BIP-84
- Configurer PhoenixD
- Configurer Swiss Bitcoin Pay
