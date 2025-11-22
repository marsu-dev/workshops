# Multi-Signatur-Wallet

24. November 2025

Erstellen und verwalten Sie eine Multi-Signatur-Wallet, um Ihre Bitcoins mit mehreren Schlüsseln zu sichern.

---

## Ziele

- Das Multi-Signatur-Konzept verstehen
- Eine Multi-Signatur-Wallet erstellen
- Schlüssel und Wiederherstellungswörter (BIP-39) verstehen
- Mögliche Konfigurationen entdecken
- Ein Multi-Sig in Sparrow erstellen
- Bitcoins auf einer Multi-Sig-Wallet empfangen
- Von einem Multi-Sig mit PSBT ausgeben

---

## Was ist Multi-Signatur?

Ein **Multi-Sig** = ein Bitcoin-Tresor, der mehrere Schlüssel zum Ausgeben benötigt

- Im Gegensatz zu einer Standard-Wallet (1 Schlüssel)
- Mehrere Schlüssel müssen signieren, um eine Ausgabe zu autorisieren

---

## Beispiel: 2 von 3

**2-of-3** : Sie benötigen **2 Schlüssel von 3** zum Signieren einer Ausgabe

- Sie haben insgesamt 3 Schlüssel
- Zum Ausgeben müssen Sie mindestens 2 dieser Schlüssel verwenden
- Ein einzelner Schlüssel reicht nicht aus

---

## Vorteile von Multi-Sig

### Erhöhte Sicherheit

- **Wenn ein Schlüssel verloren geht** : Die Gelder bleiben mit den anderen Schlüsseln zugänglich
- **Ein Schlüssel gestohlen** : Der Angreifer kann allein nichts tun
- **Schutz vor Diebstahl** : Erfordert mehrere Signaturen

---

## Anwendungsfälle - Persönliche Sicherheit

- Schlüssel auf verschiedene Geräte verteilen
- Ein Schlüssel auf Computer, einer auf Telefon, einer auf Hardware-Wallet
- Schutz auch wenn ein Gerät kompromittiert ist

---

## Anwendungsfälle - Unternehmen / Verein

- Mehrere Personen müssen Ausgaben genehmigen
- Kontrolle über Unternehmensgelder
- Kollaborative Verwaltung von Bitcoins

---

## Anwendungsfälle - Familie

- Mehrere Familienmitglieder müssen signieren
- Schutz von Erbschaften
- Gemeinsame finanzielle Entscheidungen

---

## Schlüssel und Wiederherstellungswörter

### BIP-39: Standard für Seed-Phrasen

- Ein **Seed** = eine Phrase aus **12 oder 24 Wörtern**
- BIP-39-Standard, der von allen Bitcoin-Wallets verwendet wird
- Aus diesem Seed generiert Sparrow alle Ihre Schlüssel

---

## Schlüsselgenerierung

- Die Seed-Phrase generiert einen Master-Schlüssel
- Dieser Master-Schlüssel generiert alle anderen Schlüssel
- Jeder Schlüssel kann Transaktionen signieren

⚠️ **KRITISCH** : Teilen Sie niemals Ihre Wiederherstellungswörter

---

## Multi-Sig und öffentliche Schlüssel

### xpub: Erweiterter öffentlicher Schlüssel

- Multi-Sig verwendet nur **xpubs** (erweiterte öffentliche Schlüssel)
- **Niemals die Wiederherstellungswörter** (Seed-Phrase)
- xpubs ermöglichen das Generieren von Adressen ohne die privaten Schlüssel preiszugeben

---

## Warum xpubs verwenden?

- **Sicherheit** : xpubs können nicht zum Ausgeben verwendet werden
- **Flexibilität** : Jeder Teilnehmer behält seinen privaten Seed
- **Vertrauen** : Keine Notwendigkeit, Wiederherstellungswörter zu teilen

---

## Mögliche Konfigurationen

### 2-of-3 (am häufigsten)

- **2 Signaturen erforderlich** von 3 Schlüsseln
- Gutes Gleichgewicht zwischen Sicherheit und Praktikabilität
- Ideal zum Einstieg in Multi-Sig

---

## Mögliche Konfigurationen

### 3-of-5

- **3 Signaturen erforderlich** von 5 Schlüsseln
- Mehr Sicherheit
- Nützlich für Unternehmen, Vereine
- Mehr Flexibilität bei Schlüsselverlust

---

## Andere Konfigurationen

Sparrow unterstützt bis zu **15 Schlüssel** im SegWit-Modus

- 2-of-3, 3-of-5, 4-of-7, usw.
- Mehr Schlüssel = mehr Sicherheit, aber komplexer

⚠️ **Für Anfänger** : Mit 2-of-3 beginnen

---

## Ein Multi-Sig in Sparrow erstellen

### Schritt 1: Sparrow öffnen

- Sparrow Wallet öffnen
- Menü → **File** → **New Wallet**

---

## Ein Multi-Sig in Sparrow erstellen

### Schritt 2: Multi-Signatur wählen

- **Multi-signature Wallet** auswählen
- Netzwerk wählen: Mainnet / Testnet / Signet

**Für diesen Workshop** : **Signet** verwenden

---

## Ein Multi-Sig in Sparrow erstellen

### Schritt 3: Schwellenwert wählen

- Schema auswählen: **2-of-3**, **3-of-5**, usw.
- Beispiel: **2-of-3** zum Einstieg wählen

---

## Ein Multi-Sig in Sparrow erstellen

### Schritt 4A: Keystores in Sparrow generieren

- Sparrow generiert automatisch die erforderlichen Keystores
- Jeder Keystore hat seine eigene Seed-Phrase
- Für jeden Keystore: Seed-Phrase generieren und speichern

---

## Ein Multi-Sig in Sparrow erstellen

### Schritt 4B: Über xpubs importieren

- Wenn Sie bereits Schlüssel haben (Hardware-Wallets, andere Wallets)
- **xpubs** (erweiterte öffentliche Schlüssel) der Teilnehmer importieren
- Jeder Teilnehmer behält seinen privaten Seed

**Vorteil** : Keine Notwendigkeit, neue Schlüssel zu generieren

---

## Keystores in Sparrow generieren

- Sparrow generiert automatisch die erforderlichen Keystores
- Für jeden Keystore:
  - Seed-Phrase generieren
  - Sofort auf Papier speichern
  - Niemals teilen

⚠️ **KRITISCH** : Jede Seed-Phrase separat speichern

---

## xpubs importieren

- Wenn Sie bereits Schlüssel haben (Hardware-Wallets, andere Wallets)
- **xpubs** (erweiterte öffentliche Schlüssel) importieren
- Jeder Teilnehmer behält seinen privaten Seed

**Vorteil** : Keine Notwendigkeit, neue Schlüssel zu generieren

---

## Der Descriptor

### Ausweis des Multi-Sig

- Sparrow zeigt den **Descriptor** der Wallet an
- Es ist der "Ausweis" des Multi-Sig
- Enthält alle Informationen, die zum Rekonstruieren der Wallet benötigt werden

---

## Der Descriptor - Beispiel

Der Descriptor sieht so aus:

```
wsh(sortedmulti(2,xpub1...,xpub2...,xpub3...))
```

- `wsh` : Witness Script Hash (SegWit)
- `sortedmulti(2,...)` : 2 Signaturen erforderlich unter den aufgelisteten Schlüsseln
- `xpub...` : Erweiterte öffentliche Schlüssel

---

## Wallet bereit

Sobald Keystores hinzugefügt wurden:

- Die Wallet ist erstellt
- Bereit zum Empfangen von Geldern
- Adressen werden automatisch generiert

---

## Bitcoins empfangen

### BIP-48 Standard

- Multi-Sig verwendet einen Standard namens **BIP-48**
- Sparrow generiert automatisch Adressen
- Multi-Sig-Adressen unterscheiden sich von Standard-Adressen

---

## Multi-Sig-Adressen

### Adressformat

- **Mainnet** : Beginnen mit `bc1...`
- **Testnet/Signet** : Beginnen mit `tb1...`
- Visuell identisch mit Standard-Adressen
- Erfordern aber mehrere Signaturen zum Ausgeben

---

## Eine Empfangsadresse generieren

- Ihre Multi-Sig-Wallet öffnen
- Zum Tab **Receive** gehen
- Auf "Create new receiving address" klicken
- Eine neue Adresse wird automatisch generiert

---

## Die Adresse verwenden

- Adresse kopieren oder QR-Code anzeigen
- Bitcoins an diese Adresse senden
- Die Transaktion wird im Tab **Transactions** sichtbar sein

⚠️ **Wichtig** : Für jede Transaktion eine neue Adresse verwenden

---

## PSBT: Partially Signed Bitcoin Transaction

### Was ist eine PSBT?

- **PSBT** = Partially Signed Bitcoin Transaction
- Standardformat für Multi-Sig-Transaktionen
- Ermöglicht das Signieren einer Transaktion in mehreren Schritten

---

## Warum PSBTs verwenden?

### Interaktives Signieren

- Jeder Teilnehmer signiert separat
- Die Transaktion wird nicht gesendet, bis alle Signaturen gesammelt sind
- Sicher und flexibel

---

## Eine Transaktion erstellen

### Schritt 1: Transaktion vorbereiten

- Tab **Send** öffnen
- Zieladresse eingeben
- Zu sendenden Betrag eingeben
- Gebühren konfigurieren

---

## Eine Transaktion erstellen

### Schritt 2: PSBT generieren

- Auf **"Create Transaction"** klicken
- Sparrow generiert eine **PSBT**
- Die Transaktion ist noch nicht vollständig signiert

---

## PSBT exportieren

### Methode 1: Datei

- PSBT als Datei speichern
- Datei an andere Teilnehmer übertragen
- Einfache und direkte Methode

---

## PSBT exportieren

### Methode 2: Copy PSBT

- **Copy PSBT** → Kopiert PSBT Base64 in die Zwischenablage
- Text übertragen (E-Mail, Messaging, usw.)
- Der Empfänger verwendet **Open Transaction → From Text**
- Praktisch für schnelle Textübertragung

**Für diesen Workshop** : Wir verwenden **Methode 2: Copy PSBT**

---

## PSBT exportieren

### Methode 3: QR-Code

- PSBT als QR-Code anzeigen
- Mit einem anderen Gerät scannen
- Praktisch für schnelle Übertragung zwischen Geräten

---

## PSBT exportieren

### Methode 4: USB-Übertragung

- Datei auf einen USB-Stick kopieren
- Physisch übertragen
- Sichere Methode ohne Netzwerkverbindung

---

## PSBT signieren

### Schritt 1: PSBT öffnen

- Jeder Teilnehmer öffnet die PSBT in Sparrow
- **Für diesen Workshop** : Menü → **File** → **Open Transaction** → **From Text**
- Empfangenes PSBT Base64 einfügen

---

## PSBT signieren

### Schritt 2: Signatur hinzufügen

- Transaktionsdetails überprüfen
- Zieladresse
- Betrag
- Gebühren
- Wechselgeldadresse

⚠️ **KRITISCH** : Vor dem Signieren überprüfen

---

## PSBT signieren

### Schritt 3: Signieren

- Auf **"Sign"** klicken
- Passwort eingeben, falls angefordert
- Signatur wird zur PSBT hinzugefügt
- Aktualisierte PSBT speichern

---

## Signaturen sammeln

### Iterativer Prozess

1. Teilnehmer 1 signiert → PSBT mit 1 Signatur
2. PSBT an Teilnehmer 2 übertragen
3. Teilnehmer 2 signiert → PSBT mit 2 Signaturen
4. Wenn 2-of-3: ausreichend zum Finalisieren

---

## Transaktion finalisieren

### Wenn alle Signaturen gesammelt sind

- Sparrow erkennt, dass die erforderliche Anzahl von Signaturen erreicht ist
- Der Button **"Finalize"** wird verfügbar
- Auf **"Finalize"** klicken

---

## Transaktion übertragen

### Letzter Schritt

- Nach der Finalisierung auf **"Broadcast Transaction"** klicken
- Die Transaktion wird an das Bitcoin-Netzwerk gesendet
- Auf Bestätigungen warten
- Im Tab **Transactions** verfolgen

---

## Das Herzstück von Multi-Sig

### Grundprinzip

**Mehrere Personen müssen signieren, bevor das Geld ausgegeben werden kann**

- Erhöhte Sicherheit
- Schutz vor Diebstahl
- Gemeinsame Kontrolle über Gelder

---

## Überprüfungen vor dem Signieren

### Checkliste für jeden Teilnehmer

- [ ] Zieladresse korrekt
- [ ] Betrag korrekt
- [ ] Gebühren akzeptabel
- [ ] Wechselgeldadresse überprüft
- [ ] Alle Outputs sind überprüft
- [ ] Ich verstehe, was ich tue

---

## Best Practices - Backup

### Für jeden Keystore

- ✅ Seed-Phrase auf Papier
- ✅ An verschiedenen Orten aufbewahren
- ✅ Seed-Phrasen niemals teilen
- ❌ Niemals auf Computer/Cloud/E-Mail

---

## Best Practices - Sicherheit

### Schlüsselverwaltung

- ✅ Schlüssel auf verschiedene Geräte verteilen
- ✅ Hardware-Wallets verwenden, wenn möglich
- ✅ Schlüssel an sicheren Orten aufbewahren
- ✅ PSBTs immer vor dem Signieren überprüfen

---

## Best Practices - Koordination

### Im Team arbeiten

- ✅ Klar mit anderen Teilnehmern kommunizieren
- ✅ Identität der anderen Unterzeichner überprüfen
- ✅ Sichere Kanäle zum Übertragen von PSBTs verwenden
- ✅ Aufzeichnung der Transaktionen führen

---

## Was wir gelernt haben

- ✅ Das Multi-Signatur-Konzept verstehen
- ✅ Schlüssel und Wiederherstellungswörter (BIP-39) verstehen
- ✅ Mögliche Konfigurationen entdecken (2-of-3, 3-of-5, usw.)
- ✅ Eine Multi-Sig-Wallet in Sparrow erstellen
- ✅ Bitcoins auf einer Multi-Sig-Wallet empfangen
- ✅ PSBTs erstellen und signieren
- ✅ Von einem Multi-Sig mit mehreren Signaturen ausgeben

---

## Wichtige Punkte - Sicherheit

⚠️ **Sicherheit**

- Multi-Sig erfordert mehrere Signaturen zum Ausgeben
- Wenn ein Schlüssel verloren geht, bleiben Gelder zugänglich
- Ein gestohlener Schlüssel kann nicht zum Ausgeben verwendet werden
- PSBTs immer vor dem Signieren überprüfen

---

## Wichtige Punkte - Schlüssel und xpubs

🔑 **Schlüssel und xpubs**

- Multi-Sig verwendet nur xpubs, niemals Seed-Phrasen
- Jeder Teilnehmer behält seinen privaten Seed
- xpubs ermöglichen das Generieren von Adressen ohne die privaten Schlüssel preiszugeben

---

## Wichtige Punkte - PSBT

📝 **PSBT**

- Standardformat für Multi-Sig-Transaktionen
- Ermöglicht das Signieren einer Transaktion in mehreren Schritten
- Mehrere Personen müssen signieren, bevor das Geld ausgegeben werden kann

---

## Nächste Workshops

- Be-BOP
- Block transaction
- Liana basics
- Liana advanced
