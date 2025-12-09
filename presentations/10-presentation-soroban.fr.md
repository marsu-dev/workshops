# Présentation Soroban

non planifié

Soroban est une messagerie éphémère décentralisée qui permet l'échange de messages éphémères et l'automatisation de protocoles interactifs.

Basé sur la librairie [libp2p](https://libp2p.io/), il communique via Tor pour garantir l'anonymat et la résistance à la censure.

---

## Objectifs

- Comprendre Soroban et son architecture
- Architecture technique (JSON-RPC, clé/valeur, GOSSIP)
- Intégration avec Tor
- Historique et applications réelles
- Cas d'usage pratiques
- Installation et démonstration

---

## Qu'est-ce que Soroban ?

Messagerie éphémère décentralisée

- Réseau pair-à-pair ([libp2p](https://libp2p.io/))
- Messages éphémères
- Automatisation de protocoles interactifs
- Communication via Tor
- Anonymat et résistance à la censure
- Open source AGPL 3.0

---

## Architecture technique

Serveur JSON-RPC avec système clé/valeur

- **Serveur JSON-RPC** : API standardisée
- **Système clé/valeur générique** : Stockage distribué
- **Réseau P2P avec GOSSIP** : Synchronisation automatique
- **Chiffrement à charge de l'application** : Flexibilité maximale
- **Client HTTP + proxy SOCKS** : Utilisation simple avec Tor

Un nœud Soroban diffuse les données sur le réseau P2P via le protocole GOSSIP.

---

## Clé / Valeur

### Flexibilité

- Structure libre : la clé et la valeur sont définies par l'application
- Multiples valeurs : plusieurs entrées peuvent partager la même clé
- Éphémère : TTL configurable selon les besoins

**Model de données** : Document Model No-SQL

---

## Intégration Tor

Communication anonyme et résistante à la censure

- Routage via Tor (hidden services)
- Génération d'adresses .onion vanity
- Protection de l'identité
- Résistance à la surveillance

---

## Operations possibles

- **Ajout** : `directory.Add`
  - Ajouter une entrée avec une clé et une valeur
  - Mode de durée de vie configurable

---

## Operations possibles

- **Lister** : `directory.List`
  - Lister toutes les entrées pour une clé donnée
  - Si plusieurs entrées existent, toutes sont renvoyées

---

## Durée de vie des messages

TTL (Time To Live) selon le mode

| Mode                 | Durée       |
| -------------------- | ----------- |
| `fast`               | 15 secondes |
| `short`              | 1 minute    |
| `normal` / `default` | 3 minutes   |
| `long`               | 5 minutes   |

---

## Première application : Cahoot (Samourai Wallet)

Évolution du projet et cas d'usage réels

- Échange de PSBT pour les payjoin Cahoot
- Synchronisation entre partenaires de transaction
- Protocole interactif automatisé

---

## Tentative Whirlpool

Projet de décentralisation

- Projet de décentralisation de Whirlpool
- N'a pas abouti

---

## Ashigaru Wallet

En production

- Payjoin
- Intégration du client RPC dans le wallet

---

## Dojo PushTx

Feature PushTx dans Dojo

- Feature PushTx dans Dojo
- Envoi de transactions via le cluster Soroban
- Sélection aléatoire d'un nœud pour le broadcast
- Distribution de la charge sur le réseau Bitcoin pour une meilleure confidentialité

**Toujour Compatible avec Samourai Wallet**

---

## Messagerie éphémère

Cas d'usage potentiels

- Synchronisation de partenaires (payjoin, Ō-uzu)
- Authentification Auth47 / [PayNym](https://paynym.rs/)
- Coordination décentralisée

---

## Réplication de données de backup chiffré

Cas d'usage potentiels

- Wallets (Sparrow, etc.)
- Coldcard
- BullBitcoin

**Sauvegarde distribuée sécurisée**

---

## Amélioration des protocoles interactifs

Cas d'usage potentiels

- Multi-sig dans Sparrow
- Coordination de signatures
- Protocoles Bitcoin complexes

---

## Ō-uzu (grand vortex)

Cas d'usage potentiels

- Protocole de mix a plusieurs
- Coordinateur indépendant
- Décentralisée

**Le coordinateur peut définir ses frais**

---

## État actuel du projet

Cluster Dojo et développement

- **Dépôt** : Dojo-Open-Source-Project
- **URL** : https://github.com/Dojo-Open-Source-Project/soroban
- **Cluster Dojo** : ~150 nœuds actifs
- **Dernière version** : 0.4.2 ([Changelog](https://github.com/Dojo-Open-Source-Project/soroban/blob/v0.4.2/Changelog.md))
- **Dapps** : Permet de réaliser des applications distribuées

---

## Installation via Docker

Mettre en place un nœud Soroban local

### Prérequis

- Docker
- Tor 
- Client HTTP (curl, etc.)

---

## Installation via Docker

### Commandes

```bash
# Clonage du dépôt (version 0.4.2)
git clone https://github.com/Dojo-Open-Source-Project/soroban.git -b v0.4.2
cd soroban

# Build des images
bash soroban.sh server_build

# Démarrage du serveur
bash soroban.sh server_start
```

---

## Installation depuis sources

Mettre en place un nœud Soroban local

### Prérequis

- Go
- Tor, Tor Borwser
- Client HTTP (curl, etc.)

---

## Installation depuis sources

### Commandes

```bash
# Clonage du dépôt (version 0.4.2)
git clone https://github.com/Dojo-Open-Source-Project/soroban.git -b v0.4.2
cd soroban

# Build
make soroban

# Lancement
go run cmd/server/main.go --hostname=0.0.0.0 --port=4242
```

---

## Configuration

Paramètres principaux

- **Port** : Port du serveur (défaut: 4242)
- **Seed** : Seed pour générer l'adresse .onion
- **Prefix** : Préfixe pour adresse vanity
- **P2P Bootstrap** : Adresse pour rejoindre le réseau
- **P2P Room** : Ségrégation de clusters

---

## Démonstration pratique

Création d'un nœud et échange de messages

### Construction et démarrage du serveur

```bash
# Construction des images Docker
./soroban.sh server_build

# Démarrage du serveur
./soroban.sh server_start

# Vérification du statut
./soroban.sh server_status

# Consultation des logs
./soroban.sh server_logs
```

---

### Génération d'une adresse .onion vanity

```bash
go run ./cmd/server --prefix=sci --genCount=1
```

---

### Lancement d'un nœud Soroban local (alternative)

```bash
go run cmd/server/main.go \
  --seed 169fc9f1925eec11b6a728044c9f4e6dd1a676a4f4e6f640c4100015644914e8 \
  --hostname=0.0.0.0 \
  --port=4242
```

---

### Configuration du endpoint

```bash
soroban_endpoint="http://sorzvujomsfbibm7yo3k52f3t2bl6roliijnm7qql43bcoe2kxwhbcyd.onion"
```

---

### Ajout d'une entrée

```bash
curl -s --socks5-hostname 127.0.0.1:9150 \
  -X POST \
  -H 'Content-Type: application/json' \
  -d "{
    \"jsonrpc\": \"2.0\",
    \"id\": 42,
    \"method\": \"directory.Add\",
    \"params\": [{
      \"Name\": \"marseille.bitcoin.soroban\",
      \"Entry\": \"Marseille Bitcoin (Only) - ¯\\\\_(ツ)_/¯ - $(date -u)\",
      \"Mode\": \"short\"
    }]
  }" \
  "$soroban_endpoint/rpc" | jq .result
```

---

### Liste des entrées

```bash
curl -s --socks5-hostname 127.0.0.1:9150 \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": 42,
    "method": "directory.List",
    "params": [{
      "Name": "marseille.bitcoin.soroban"
    }]
  }' \
  "$soroban_endpoint/rpc" \
  | jq -r .result
```

---

## Réseau pair-à-pair

Connexion au réseau décentralisé

- **Bootstrap** : Adresse d'un nœud existant
- **Découverte de pairs** : Via DHT
- **Synchronisation** : Propagation GOSSIP automatique
- **Rooms** : Ségrégation de clusters (p2pRoom)
- **Résilience** : Pas de point de défaillance unique

**Exemple de connexion** :
```bash
go run cmd/server/main.go \
  --p2pBootstrap /onion3/.../p2p/... \
  --withTor=true \
  --p2pRoom soroban-p2p
```

---

## Conclusion

Soroban : Infrastructure pour Dapps décentralisées

- Messagerie éphémère décentralisée
- Protocoles interactifs automatisés
- Infrastructure flexible et extensible
- Anonymat via Tor
- Utilisation simple (HTTP + SOCKS)
- Cluster Dojo : ~150 nœuds
- Licence : Open source AGPL 3.0

---

## Ressources
- Dépôt : https://github.com/Dojo-Open-Source-Project/soroban
- libp2p : https://libp2p.io
- Paynym : https://paynym.rs
- Ashigaru : https://ashigarumobile.org/
