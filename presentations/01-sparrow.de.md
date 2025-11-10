# Erste Schritte mit Sparrow

10. November 2025

Erfahren Sie, wie Sie Sparrow Wallet mit einem Software-Schlüssel verwenden, um Ihre Bitcoins sicher zu verwalten.

---

## Ziele

- Sparrow Wallet installieren
- Die verschiedenen Bitcoin-Netzwerke verstehen
- Netzwerkverbindung konfigurieren
- Wallet erstellen und sichern
- Konten und Adressen verstehen
- Bitcoins empfangen und senden

---

## Sparrow Download

- Gehen Sie auf die offizielle Website
- Laden Sie die Version für Ihr System herunter

**Ressource** : [Sparrow Download](https://sparrowwallet.com/download/)

---

## Sparrow Verifizierung

- Garantiert die Authentizität der Software
- Schützt vor Malware

⚠️ **Wichtig** : GPG-Signatur der heruntergeladenen Datei überprüfen

**Ressource** : [Sparrow Download](https://sparrowwallet.com/download/)

---

## Sparrow Installation

- **macOS** : .dmg-Datei öffnen und Sparrow in Programme ziehen
- **Windows** : .exe-Datei ausführen
- **Linux** : Archiv entpacken und ausführen

**Ressource** : [Sparrow Quick Start Guide](https://sparrowwallet.com/docs/quick-start.html)

---

## Bitcoin-Netzwerke

### Mainnet

- Hauptnetzwerk
- **Echte Bitcoins** mit Geldwert
- Endgültige und unwiderrufliche Transaktionen

⚠️ **Nur mit echten Bitcoins verwenden**

---

## Bitcoin-Netzwerke

### Testnet

- **Test-Bitcoins** ohne Wert
- Zum Testen und Lernen
- Faucets verfügbar, um Test-Bitcoins zu erhalten

---

## Bitcoin-Netzwerke

### Signet

- **Test-Bitcoins** ohne Wert
- Stabiler als Testnet
- Ideal für Workshops und Schulungen

---

## Netzwerkvergleich

| Merkmal      | Mainnet     | Testnet  | Signet    |
| ------------ | ----------- | -------- | --------- |
| Wert         | Real        | Keiner   | Keiner    |
| Stabilität   | Sehr stabil | Variabel | Stabil    |
| Verwendung   | Produktion  | Test     | Schulung  |

**Für diesen Workshop** : Wir verwenden **Signet**

---

## Verbindungstypen

Sparrow kann auf verschiedene Weise verbinden:

- **Privater Bitcoin Core Node**
- **Öffentlicher Electrum-Server**
- **Privater Electrum-Server**

---

## Bitcoin Core Node

- Ihr eigener Bitcoin-Node
- Maximale Privatsphäre
- Vollständige Kontrolle

---

## Electrum-Server

**Öffentlicher Electrum-Server** :
- Verbindung zu einem Drittanbieter-Server
- Einfacher zu konfigurieren

**Privater Electrum-Server** :
- Ihr eigener Electrum-Server
- Guter Kompromiss zwischen Privatsphäre und Einfachheit

---

## Netzwerkverbindung

### Clearnet

- Standard-Internetverbindung
- Schneller
- Weniger Privatsphäre

---

## Netzwerkverbindung

### Tor

- The Onion Router
- Anonyme Verbindung über das Tor-Netzwerk
- Mehr Privatsphäre
- Kann langsamer sein

**Ressource** : [The Tor Project](https://www.torproject.org/)

---

## Konfiguration

- **Einstellungen** öffnen
- Zu **Server** / **Verbindungen** gehen
- Netzwerk wählen: Mainnet / Testnet / Signet

---

## Konfiguration

- Verbindung konfigurieren:
  - **Öffentlicher Server** : Server auswählen
  - **Privater Server** : Ihr Server
- **Clearnet** oder **Tor** wählen
- Überprüfen, dass der Status **"Verbunden"** anzeigt

**Ressource** : [Sparrow Quick Start Guide](https://sparrowwallet.com/docs/quick-start.html)

---

## Neues Wallet erstellen

- Menü → **Neues Wallet** → **Standard-Wallet**
- Namen für Ihr Wallet wählen
- Format auswählen: **Native SegWit (P2WPKH)**

---

## Native SegWit Format

- Modernes und wirtschaftliches Format
- Adressen beginnen mit
  - `bc1...` (Mainnet)
  - `tb1...` (Testnet/Signet)

---

## Seed-Phrase generieren

Die **Seed-Phrase** ist Ihr Backup-Schlüssel

- Normalerweise **12 oder 24 Wörter**
- Zufällig von Sparrow generiert

⚠️ **KRITISCH** : Sofort auf Papier speichern

---

## Seed speichern

- **Auf Papier schreiben** (niemals auf Computer/Cloud)
- Überprüfen, dass alle Wörter korrekt sind
- An einem sicheren und geheimen Ort aufbewahren
- Niemals mit jemandem teilen

⚠️ Verlust des Seeds = **endgültiger Verlust aller Bitcoins**

---

## Wallet ohne Passphrase

- Standard-Wallet nur mit Seed
- Einfacher zu verwenden
- Wenn Seed kompromittiert ist, sind Gelder zugänglich

---

## Wallet mit Passphrase

- Zusätzlicher Schutz
- `Seed + Passphrase` = anderes Wallet als `nur Seed`
- Gleicher Seed kann mehrere verschiedene Wallets erstellen

---

## Passphrase-Beispiel

- Seed : `Wort1 Wort2 ... Wort12`
- Ohne Passphrase → Wallet A
- Mit Passphrase "MeinGeheimnis123" → Wallet B

---

## Passphrase aktivieren

- In den Wallet-Einstellungen
- Option **Passphrase** aktivieren
- Ihre Passphrase eingeben

**merken oder separat speichern**

⚠️ Verlust der Passphrase = **Verlust der Gelder in diesem Wallet**

---

## Passwort festlegen

Das **Wallet-Passwort** schützt den Zugriff auf Sparrow

- Bei jedem Öffnen des Wallets erforderlich
- Unterscheidet sich von der Passphrase

⚠️ Schützt nicht, wenn jemand Ihren Seed hat

---

## Best Practices

- Starkes Passwort verwenden
- Es merken oder in einem sicheren Passwort-Manager speichern
- Nicht mit Passphrase verwechseln

---

## Kontokonzept

Ein **Konto** ist eine logische Trennung in Ihrem Wallet

- Jedes Konto hat seine eigenen Adressen
- Nützlich zur Organisation Ihrer Gelder
- Beispiel: "Sparen"-Konto, "Ausgaben"-Konto

---

## Ableitungspfad

**Ableitungspfad**
- Mainnet
  - Konto 0 : `m/84'/0'/0'`
  - Konto 1 : `m/84'/0'/1'`

- Signet
  - Konto 0 : `m/84'/1'/0'`
  - Konto 1 : `m/84'/1'/1'`

---

## Unterkonten

- Unterkonten ermöglichen feinere Organisation
- Jedes Konto kann mehrere Unterkonten haben
- Nützlich zur Trennung verschiedener Verwendungen

---

## Empfangsadressen

- Adressen zum **Empfangen** von Bitcoins
- Automatisch vom Wallet generiert
- Jede Transaktion sollte eine **neue Adresse** verwenden

---

## Wechselgeld-Adressen

- Adressen für das **Wechselgeld** beim Senden
- Automatisch vom Wallet generiert

Wenn Sie **0,1 BTC** senden, aber 1,0 BTC ausgeben

**0,9 BTC** kommt als "Wechselgeld" zurück

---

## Wechselgeld-Adressen-Beispiel

- Sie haben 1 BTC
- Sie senden 0,3 BTC an jemanden
- Gebühren : 0,0001 BTC

**Wechselgeld** : 0,6999 BTC kehrt zu Ihrer Wechselgeld-Adresse zurück

---

## Konten in Sparrow anzeigen

- Ihr Wallet öffnen
- Kontoliste in der Seitenleiste ansehen
- Auf ein Konto klicken, um seine Adressen zu sehen
- **Adressen**-Tab : alle Adressen ansehen
  - Empfang
  - Wechselgeld

---

## Empfangsadresse generieren

- Ihr Wallet auswählen
- Zum **Empfangen**-Tab gehen
- Auf "Neue Empfangsadresse erstellen" klicken
  
**Eine neue Adresse wird generiert**

---

## QR-Code anzeigen

- **QR-Code** anzeigen, um das Teilen zu erleichtern
- Adresse kopieren, um sie zu senden

---

## Vorab generierte Adressen

- Sparrow kann mehrere Adressen im Voraus generieren
- Nützlich zum Empfangen mehrerer Zahlungen
- Jede Adresse bleibt eindeutig und gültig

---

## Adresswiederverwendung

⚠️ Adresswiederverwendung **Vermeiden**

- Mehrfache Verwendung derselben Adresse reduziert die Privatsphäre
- Ermöglicht die Verknüpfung Ihrer Transaktionen

Best Practice **eine Adresse = eine Transaktion**

---

## Empfangen - Demonstration

- Wallet → **Empfangen**
- Neue Adresse generieren
- Adresse kopieren oder QR-Code anzeigen
- Signet-Faucet verwenden, um Test-Bitcoins zu erhalten

---

## Empfang überprüfen

- **Bestätigungen** : Anzahl der Blöcke, die seit Ihrer Transaktion gemined wurden
- Mehr Bestätigungen = sicherere Transaktion
- Beobachten, wie die Transaktion im **Transaktionen**-Tab erscheint

---

## Anzahl der Bestätigungen

- Für kleine Beträge : 1 Bestätigung oft ausreichend
- Für große Beträge : 6 Bestätigungen abwarten

---

## Warum zwischen Konten verschieben?

- Gelder organisieren
- Verschiedene Verwendungen trennen
- Zu einem anderen Konto im selben Wallet übertragen

---

## Wie zwischen Konten verschieben

- **Senden**-Tab öffnen
- In **Zahlen an**, eine Zieladresse eingeben
- Zu übertragenden Betrag eingeben
- Gebühren überprüfen
- Transaktion erstellen, signieren und übertragen

**Hinweis** : Es ist technisch eine normale Transaktion, aber zu Ihrem eigenen Wallet

---

## Transaktionserstellung

- **Senden**-Tab öffnen
- In **Zahlen an** :
  - Bitcoin-Adresse des Empfängers eingeben
  - Oder QR-Code scannen
- Zu sendenden **Betrag** eingeben
  - In BTC oder Sats
- **Label** hinzufügen, um die Transaktion zu identifizieren

---

### Gebührenkonfiguration

- **Gebühren-Schieberegler** : Transaktionsgebühren anpassen (Sats/vB)
- Höhere Gebühren = schnellere Bestätigung
- Niedrigere Gebühren = langsamere Bestätigung
- Sparrow schlägt angemessene Gebühren vor

---

### Erweiterte Optionen

- **Replace-By-Fee (RBF)** : Ermöglicht Erhöhung der Gebühren nach dem Senden
- **Coin-Auswahl** : UTXOs manuell zum Ausgeben auswählen

---

### Überprüfung vor dem Signieren

- **Zieladresse** : Ist sie korrekt?
- **Betrag** : Ist er korrekt?
- **Gebühren** : Akzeptabel?

⚠️ **KRITISCHER SCHRITT** - Vor dem Signieren überprüfen

---

## Überprüfung - Wechselgeld-Adresse

- **Wechselgeld-Adresse** : Überprüfen, dass sie Ihnen gehört
  - Muss eine Adresse aus Ihrem Wallet sein

⚠️ Wenn die Wechselgeld-Adresse nicht Ihre ist, verlieren Sie diese Bitcoins

---

### Wechselgeld-Adresse Erklärung

Beim Senden, wenn Sie mehr ausgeben als den zu sendenden Betrag

**Sendebeispiel**
- Sie haben ein UTXO von 1 BTC
- Sie senden 0,3 BTC
- Gebühren : 0,0001 BTC

**Wechselgeld** : 0,6999 BTC muss zu Ihrem Wallet zurückkehren

---

### Wechselgeld-Adresse Regel

Die Wechselgeld-Adresse muss **IMMER** eine Adresse sein, die Sie kontrollieren.

---

## Transaktion signieren

- Nach Überprüfung auf **"Transaktion erstellen"** klicken
- Alle Details erneut überprüfen
- Auf **"Signieren"** klicken
- Ihr Passwort eingeben, falls angefordert
- Transaktion wird mit Ihren privaten Schlüsseln signiert

---

### Transaktion übertragen

- Nach dem Signieren auf **"Transaktion übertragen"** klicken
- Transaktion wird an das Bitcoin-Netzwerk gesendet
- Auf Bestätigungen warten
- Transaktion im **Transaktionen**-Tab verfolgen

---

### Checkliste vor dem Senden

✅ **Endgültige Überprüfungen**

- [ ] Zieladresse korrekt
- [ ] Betrag korrekt
- [ ] Gebühren akzeptabel
- [ ] Wechselgeld-Adresse ist meine
- [ ] Alle Outputs sind überprüft
- [ ] Ich verstehe, was ich tue

---

### Best Practices - Backup

- ✅ Seed-Phrase auf Papier
- ✅ Passphrase separat gespeichert
- ✅ Passwort in einem sicheren Passwort-Manager
- ❌ Niemals auf Computer/Cloud/E-Mail

---

### Best Practices - Privatsphäre

- ✅ Eigenen Node verwenden, wenn möglich
- ✅ Tor für mehr Anonymität verwenden
- ✅ Eine neue Adresse pro Transaktion
- ✅ Wechselgeld-Adressen überprüfen

---

### Best Practices - Überprüfungen

- ✅ Immer Outputs vor dem Signieren überprüfen
- ✅ Zieladresse überprüfen
- ✅ Gebühren verstehen
- ✅ Zuerst auf Signet/Testnet testen

---

## Was wir gelernt haben

- ✅ Sparrow Wallet installieren
- ✅ Bitcoin-Netzwerke verstehen
- ✅ Verbindung konfigurieren
- ✅ Wallet erstellen
- ✅ Konten verstehen
- ✅ Bitcoins empfangen
- ✅ Bitcoins zwischen Konten verschieben
- ✅ Bitcoins senden

---

## Wichtige Punkte - Sicherheit

⚠️ **Sicherheit**

- Seed-Phrase = vollständiger Zugriff auf Bitcoins
- Auf Papier speichern, niemals online
- Immer Wechselgeld-Adressen überprüfen

---

## Wichtige Punkte - Privatsphäre

🔒 **Privatsphäre**

- Eine Adresse = eine Transaktion
- Eigenen Node verwenden, wenn möglich
- Die Auswirkungen jeder Aktion verstehen

---

### Kommende Workshops

- Multisig
- Be-BOP
- Block transaction
