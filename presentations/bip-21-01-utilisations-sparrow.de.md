# Sparrow Wallet

10. November 2025

Lernen Sie, eine Wallet zu erstellen, Passphrasen zu verwenden, Konten zu verwalten, Bitcoins zu empfangen und zu senden, und die Münzauswahl zu beherrschen.

---

## Ziele

- Wallet-Erstellung
- BIP39-Passphrase
- Kontoverwaltung
- Empfangen und Senden
- Münzauswahl

**Umgebung**: *Signet*

---

## Warum Signet?

Bitcoin-Testnetzwerk

- Keine echten Gelder
- Funktionen identisch mit Mainnet
- Faucets verfügbar

---

## Installation

Von der offiziellen Website herunterladen

- macOS / Windows / Linux
- GPG-Signatur überprüfen

---

## Netzwerkkonfiguration

### Mögliche Verbindungen

1. Electrum-Server
2. Bitcoin Core (RPC)
3. Öffentliche Electrum-Server

---

## Signet-Konfiguration

### In Sparrow

1. Einstellungen → Server / Verbindungen
2. Signet-Netzwerk wählen
3. Signet Electrum-Server hinzufügen
4. "Verbunden" überprüfen

---

## Wallet-Erstellung

### Verfügbare Typen

- Standard Single-Key-Wallet (BIP39)
- Descriptors (bech32 native segwit)

---

## Erstellung - Schritte

1. Menü → Neues Wallet → Standard-Wallet
2. Einen Namen wählen
3. Format: Native SegWit (P2WPKH)
4. Seed generieren (12 Wörter + Passphrase)
5. Auf Papier speichern ⚠️

---

## BIP39-Passphrase

### Konzept

Optionale Passphrase

- `Seed + Passphrase` = Wallet A
- `Seed allein` = Wallet B

Völlig verschiedene Adressen

---

## Passphrase - Vorteile

- Verteidigung in der Tiefe
- Zusätzlicher Schutz
- Separates Wallet mit gleichem Seed

---

## Passphrase - Risiken

⚠️ **Verlust der Passphrase = Verlust der Gelder**

- Getrennt vom Seed speichern
- Sicherer Manager
- Niemals öffentlich anzeigen

---

## Passphrase - Demo

1. Passphrase in Einstellungen aktivieren
2. Eine Passphrase eingeben
3. Verschiedene Adressen beobachten
4. Mit anderer Passphrase testen

---

## Kontoverwaltung

### Konzepte

- Konten: `m/84'/1'/0'`, `m/84'/1'/1'`
- Labels: Markierung von Adressen/UTXO
- Nur-Lesen: über xpub/descriptor

---

## Konten - Demo

1. Zweites Konto erstellen
2. Eine Adresse beschriften
3. xpub als Nur-Lesen importieren
4. Nach Label / Konto filtern

---

## Bitcoins empfangen

### Adresstypen

- Empfangen: zum Empfangen
- Wechselgeld: für Wechselgeld-Ausgabe

Neue Adressen für Privatsphäre verwenden

---

## Empfangen - Demo

1. Wallet → Empfangen → Adresse generieren
2. QR-Code anzeigen
3. Signet-Faucet verwenden
4. Transaktion beobachten

---

## Empfangen - Konzepte

- Bestätigungen: Anzahl der Blöcke
- Reife: UTXO müssen bestätigt sein
- Anzeige: txid, vout, Betrag, Bestätigungen

---

## Bitcoins senden

### Funktionen

- Gebühren-Schieberegler (sats/vB)
- Replace-By-Fee (RBF)
- Child-Pays-For-Parent (CPFP)
- Manuelle Münzauswahl

---

## Senden - Demo

1. Wallet → Senden → Zieladresse
2. Betrag eingeben
3. Gebühr auswählen
4. RBF bei Bedarf aktivieren
5. Signieren und übertragen

---

## Senden - Überprüfungen

⚠️ **Die Ausgaben überprüfen**

- Kein Wechselgeld an nicht kontrollierte Adresse lassen
- Gebührenauswirkung verstehen
- Vor dem Signieren Vorschau anzeigen

---

## Münzauswahl

### Warum kontrollieren?

- Privatsphäre: Korrelation vermeiden
- Gebühren: Kosten optimieren
- Konsolidierung: UTXO gruppieren

---

## Münzauswahl - Demo

1. Registerkarte Münzen/UTXO öffnen
2. txid, vout, Betrag, Bestätigungen anzeigen
3. In Senden → Eingaben auswählen
4. UTXO manuell wählen

---

## UTXO einfrieren

Verhindern, dass ein UTXO ausgewählt wird

- Nützlich zum Behalten von Geldern
- Versehentliches Ausgeben vermeiden
- UTXO-Sperre

---

## Einfrieren - Demo

1. Ein UTXO auswählen
2. Rechtsklick → Einfrieren
3. In Senden überprüfen (nicht ausgewählt)
4. Auftauen demonstrieren

---

## Best Practices

✅ **Wesentliche Checkliste**

- Seed + Passphrase (getrennt) speichern
- Persönlicher Node für Privatsphäre
- Münzkontrolle & Einfrieren
- Systematische Labels
- Ausgaben überprüfen

---

## Ressourcen

- Sparrow Wallet Dokumentation
- Signet-Faucets
- Bitcoin Core Signet-Dokumentation

---

## Fragen?

**BIP-21 Workshop - Teil 01: Sparrow-Verwendung**

*Signet-Netzwerk - Kein echter Wert*
