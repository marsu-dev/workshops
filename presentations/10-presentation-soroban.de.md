# Soroban Präsentation

nicht geplant

Soroban ist ein dezentralisiertes, flüchtiges Nachrichtensystem, das den Austausch kurzlebiger Nachrichten und die Automatisierung interaktiver Protokolle ermöglicht.

Basierend auf der Bibliothek [libp2p](https://libp2p.io/) kommuniziert es über Tor, um Anonymität und Zensurresistenz zu gewährleisten.

---

## Ziele

- Soroban und seine Architektur verstehen
- Technische Architektur (JSON-RPC, Key/Value, GOSSIP)
- Integration mit Tor
- Historie und reale Anwendungen
- Praktische Use Cases
- Installation und Demo

---

## Was ist Soroban?

Dezentralisierte, flüchtige Nachrichtenübermittlung

- Peer-to-Peer-Netzwerk ([libp2p](https://libp2p.io/))
- Flüchtige Nachrichten
- Automatisierung interaktiver Protokolle
- Kommunikation über Tor
- Anonymität und Zensurresistenz
- Open Source AGPL 3.0

---

## Technische Architektur

JSON-RPC-Server mit Key/Value-System

- **JSON-RPC-Server**: Standardisierte API
- **Generisches Key/Value-System**: Verteilte Speicherung
- **P2P-Netzwerk mit GOSSIP**: Automatische Synchronisation
- **Verschlüsselung auf Anwendungsebene**: Maximale Flexibilität
- **HTTP-Client + SOCKS-Proxy**: Einfache Nutzung mit Tor

Ein Soroban-Knoten verbreitet Daten im P2P-Netzwerk über das GOSSIP-Protokoll.

---

## Key / Value

### Flexibilität

- Freie Struktur: Schlüssel und Wert werden von der Anwendung definiert
- Mehrere Werte: Mehrere Einträge können denselben Schlüssel teilen
- Flüchtig: TTL nach Bedarf konfigurierbar

**Datenmodell**: Document Model No-SQL

---

## Tor-Integration

Anonyme und zensurresistente Kommunikation

- Routing über Tor (Hidden Services)
- Generierung von .onion-Vanity-Adressen
- Identitätsschutz
- Überwachungsresistenz

---

## Mögliche Operationen

- **Hinzufügen**: `directory.Add`
  - Einen Eintrag mit Schlüssel und Wert hinzufügen
  - Konfigurierbarer Lebensdauermodus

---

## Mögliche Operationen

- **Auflisten**: `directory.List`
  - Alle Einträge für einen gegebenen Schlüssel auflisten
  - Wenn mehrere Einträge existieren, werden alle zurückgegeben

---

## Lebensdauer der Nachrichten

TTL (Time To Live) je nach Modus

| Modus                | Dauer         |
| -------------------- | ------------- |
| `fast`               | 15 Sekunden   |
| `short`              | 1 Minute      |
| `normal` / `default` | 3 Minuten     |
| `long`               | 5 Minuten     |

---

## Erste Anwendung: Cahoot (Samourai Wallet)

Projektevolution und reale Use Cases

- PSBT-Austausch für Cahoot-Payjoins
- Synchronisation zwischen Transaktionspartnern
- Automatisiertes, interaktives Protokoll

---

## Whirlpool-Versuch

Dezentralisierungsprojekt

- Projekt zur Dezentralisierung von Whirlpool
- Kam nicht zustande

---

## Ashigaru Wallet

Im Einsatz

- Payjoin
- RPC-Client im Wallet integriert

---

## Dojo PushTx

PushTx-Funktion in Dojo

- PushTx-Funktion in Dojo
- Versand von Transaktionen über den Soroban-Cluster
- Zufällige Auswahl eines Knotens für den Broadcast
- Lastverteilung im Bitcoin-Netzwerk für bessere Privatsphäre

**Weiterhin kompatibel mit Samourai Wallet**

---

## Flüchtige Nachrichten

Mögliche Use Cases

- Partnersynchronisation (Payjoin, Ō-uzu)
- Auth47- / [PayNym](https://paynym.rs/)-Authentifizierung
- Dezentralisierte Koordination

---

## Replikation verschlüsselter Backups

Mögliche Use Cases

- Wallets (Sparrow usw.)
- Coldcard
- BullBitcoin

**Sichere verteilte Sicherung**

---

## Verbesserung interaktiver Protokolle

Mögliche Use Cases

- Multi-Sig in Sparrow
- Signaturkoordination
- Komplexe Bitcoin-Protokolle

---

## Ō-uzu (großer Wirbel)

Mögliche Use Cases

- Mehrparteien-Mix-Protokoll
- Unabhängiger Koordinator
- Dezentralisiert

**Der Koordinator kann seine Gebühren festlegen**

---

## Aktueller Projektstatus

Dojo-Cluster und Entwicklung

- **Repository**: Dojo-Open-Source-Project
- **URL**: https://github.com/Dojo-Open-Source-Project/soroban
- **Dojo-Cluster**: ~150 aktive Knoten
- **Neueste Version**: 0.4.2 ([Changelog](https://github.com/Dojo-Open-Source-Project/soroban/blob/v0.4.2/Changelog.md))
- **Dapps**: Ermöglicht den Bau verteilter Anwendungen

---

## Installation via Docker

Einen lokalen Soroban-Knoten einrichten

### Voraussetzungen

- Docker
- Tor 
- HTTP-Client (curl usw.)

---

## Installation via Docker

### Befehle

```bash
# Repository klonen (Version 0.4.2)
git clone https://github.com/Dojo-Open-Source-Project/soroban.git -b v0.4.2
cd soroban

# Images bauen
bash soroban.sh server_build

# Server starten
bash soroban.sh server_start
```

---

## Installation aus dem Quellcode

Einen lokalen Soroban-Knoten einrichten

### Voraussetzungen

- Go
- Tor, Tor Browser
- HTTP-Client (curl usw.)

---

## Installation aus dem Quellcode

### Befehle

```bash
# Repository klonen (Version 0.4.2)
git clone https://github.com/Dojo-Open-Source-Project/soroban.git -b v0.4.2
cd soroban

# Build
make soroban

# Start
go run cmd/server/main.go --hostname=0.0.0.0 --port=4242
```

---

## Konfiguration

Zentrale Parameter

- **Port**: Server-Port (Standard: 4242)
- **Seed**: Seed zur Generierung der .onion-Adresse
- **Prefix**: Präfix für Vanity-Adressen
- **P2P Bootstrap**: Adresse zum Beitritt ins Netzwerk
- **P2P Room**: Cluster-Segmentierung

---

## Praktische Demonstration

Einen Knoten erstellen und Nachrichten austauschen

### Build und Start des Servers

```bash
# Docker-Images bauen
./soroban.sh server_build

# Server starten
./soroban.sh server_start

# Status prüfen
./soroban.sh server_status

# Logs ansehen
./soroban.sh server_logs
```

---

### Vanity-.onion-Adresse generieren

```bash
go run ./cmd/server --prefix=sci --genCount=1
```

---

### Lokalen Soroban-Knoten starten (Alternative)

```bash
go run cmd/server/main.go \
  --seed 169fc9f1925eec11b6a728044c9f4e6dd1a676a4f4e6f640c4100015644914e8 \
  --hostname=0.0.0.0 \
  --port=4242
```

---

### Endpoint-Konfiguration

```bash
soroban_endpoint="http://sorzvujomsfbibm7yo3k52f3t2bl6roliijnm7qql43bcoe2kxwhbcyd.onion"
```

---

### Einen Eintrag hinzufügen

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

### Einträge auflisten

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

## Peer-to-Peer-Netzwerk

Verbindung zum dezentralen Netzwerk

- **Bootstrap**: Adresse eines bestehenden Knotens
- **Peer Discovery**: Über DHT
- **Synchronisation**: Automatische GOSSIP-Propagation
- **Rooms**: Cluster-Segmentierung (p2pRoom)
- **Resilienz**: Kein Single Point of Failure

**Verbindungsbeispiel**:
```bash
go run cmd/server/main.go \
  --p2pBootstrap /onion3/.../p2p/... \
  --withTor=true \
  --p2pRoom soroban-p2p
```

---

## Fazit

Soroban: Infrastruktur für dezentrale Dapps

- Dezentralisierte, flüchtige Nachrichtenübermittlung
- Automatisierte interaktive Protokolle
- Flexible und erweiterbare Infrastruktur
- Anonymität über Tor
- Einfache Nutzung (HTTP + SOCKS)
- Dojo-Cluster: ~150 Knoten
- Lizenz: Open Source AGPL 3.0

---

## Ressourcen
- Repository: https://github.com/Dojo-Open-Source-Project/soroban
- libp2p: https://libp2p.io
- Paynym: https://paynym.rs
- Ashigaru: https://ashigarumobile.org/
