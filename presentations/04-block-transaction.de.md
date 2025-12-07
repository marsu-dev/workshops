# Blöcke & Transaktionen

08. Dezember 2025

Verstehe den Aufbau von Bitcoin-Blöcken und den Prozess der Transaktionsvalidierung auf der Blockchain.

---

## Einführung

Die Grundlagen von Bitcoin verstehen: Blockstruktur und Transaktionsvalidierung

---

## Ziele

- Verstehen, was eine Bitcoin-Transaktion ist
- Verstehen, wie Transaktionen in Blöcken zusammengefasst werden
- Verstehen, warum man Gebühren zahlt
- Die verschiedenen Formate verstehen (Legacy, SegWit, Taproot)
- Die Kennung einer Transaktion (TXID) verstehen
- Den Merkle-Baum und seine Rolle für die Blocksicherheit verstehen

---

## Was ist eine Bitcoin-Transaktion?

Eine Bitcoin-Transaktion ist wie ein **digitaler Scheck**, der:

- Geld **nimmt**, das du bereits erhalten hast (deine Bitcoin-Coins)
- Dieses Geld **sendet** an jemand anderen (oder als "Wechselgeld" an dich selbst)

---

## Bitcoin-Coins (UTXO)

Stell dir vor, du hast mehrere Bitcoin-Coins erhalten:

- Eine Coin über 0,1 BTC
- Eine Coin über 0,05 BTC
- Eine Coin über 0,02 BTC

Um 0,15 BTC zu senden, musst du deine vorhandenen Coins verwenden. Das ist wie beim Bezahlen mit Scheinen: Wenn du 15 € zahlen willst und einen 20-€-Schein hast, musst du ihn benutzen und 5 € zurückbekommen.

---

## Einfache Transaktionsstruktur

Eine Transaktion enthält im Wesentlichen:

**1. Inputs**
- Welche Coins du verwendest (Verweis auf die erhaltenen Coins)

**2. Outputs**
- An wen du das Geld sendest (Betrag + Adresse)
- Dein Wechselgeld (falls du mehr als nötig genutzt hast)

**3. Die Signatur**
- Dein Nachweis, dass dir die Coins gehören

---

## Konkretes Beispiel

**Situation:** Alice möchte 0,1 BTC an Bob senden

**Was Alice hat:**
- Eine 0,15-BTC-Coin, die sie zuvor erhalten hat

---

## Konkretes Beispiel

**Die Transaktion:**
- **Input:** Verwendet Alices 0,15-BTC-Coin
- **Output 1:** 0,1 BTC an Bob
- **Output 2:** 0,0499 BTC an Alice (ihr Wechselgeld)
- **Gebühr:** 0,0001 BTC (die Differenz)


---

## Konkretes Beispiel

**Ergebnis:** Bob erhält 0,1 BTC, Alice bekommt fast den ganzen Rest zurück und die Miner erhalten die Gebühren.

---

## Transaktionsgebühren

Warum Gebühren zahlen?

- Miner müssen deine Transaktion prüfen und in einen Block aufnehmen
- Es ist wie beim Postversand: je dringender, desto teurer
- Gebühren motivieren Miner, deine Transaktion schnell zu verarbeiten

---

## Gebühren verhindern Spam

**Gebühren verhindern Spam:** Ohne Gebühren könnte jeder tausende sinnlose Transaktionen senden und das Netzwerk verstopfen

---

## Wie werden Gebühren berechnet?

Gebühren hängen von **zwei Dingen** ab:

**1. Der Größe deiner Transaktion**
- Je mehr Coins (Inputs) du verwendest, desto größer
- Je mehr Empfänger (Outputs), desto größer
- Signaturen brauchen ebenfalls Platz

**2. Der gewünschten Priorität**
- Hohe Gebühr = schnelle Verarbeitung (wie Expresspost)
- Niedrige Gebühr = langsamere Verarbeitung (wie Standardpost)

---

## Beispiel für Gebührenberechnung

**Einfache Transaktion:**
- 1 Input (eine verwendete Coin)
- 2 Outputs (Empfänger + Wechselgeld)
- Größe: etwa 250 Bytes

---

## Beispiel für Gebührenberechnung

**Wenn du wählst:**
- Schnelle Gebühren: 50 Satoshis pro Byte → 250 × 50 = 12.500 Satoshis
- Normale Gebühren: 10 Satoshis pro Byte → 250 × 10 = 2.500 Satoshis

**Hinweis:** Moderne Transaktionen (SegWit) sind günstiger, weil Signaturen weniger Platz benötigen.

---

## Transaktionskennung (TXID)

Jede Transaktion erhält eine **eindeutige Kennung**, ähnlich einer Sendungsnummer.

**Merkmale:**
- Eine lange Zeichenkette aus Buchstaben und Zahlen (wie ein Barcode)
- Sie ist eindeutig: Es kann keine zwei Transaktionen mit derselben Kennung geben
- Damit findest du deine Transaktion auf der Blockchain

---

## Die TXID ändert sich nie

- Sie ändert sich nie: Auch wenn du die Transaktion später ansiehst, bleibt die Kennung gleich

**Nützlich für:**
- Prüfen, dass eine Transaktion gesendet wurde
- Den Status einer Zahlung verfolgen
- Eine Transaktion später referenzieren

---

## Transaktionen in Sparrow ansehen

**Schritt 1: Reiter Transactions öffnen**
- Wähle dein Wallet in Sparrow
- Klicke unten auf den Reiter **Transactions**
- Du siehst die Liste all deiner Transaktionen

---

## Transaktionsdetails ansehen

**Schritt 2: Details einer Transaktion öffnen**
- Doppelklicke auf eine Transaktion in der Liste
- Ein Fenster mit allen Details der Transaktion öffnet sich

---

## TXID in Sparrow sehen

**Methode 1: In der Transaktionsliste**
- Der Reiter **Transactions** zeigt die TXID jeder Transaktion
- Das ist die erste Spalte (lange Zeichenkette)
- Du kannst darauf klicken, um sie zu kopieren

---

## TXID in Sparrow sehen

**Methode 2: In den Transaktionsdetails**
- Doppelklicke auf eine Transaktion
- Die TXID steht oben im Detailfenster
- Du kannst darauf klicken, um sie zu kopieren

---

## TXID in Sparrow sehen

**Methode 3: Kontextmenü**
- Rechtsklick auf eine Transaktion in der Liste
- **"Copy Transaction ID"** auswählen
- Die TXID wird in die Zwischenablage kopiert

---

## Sichtbare Informationen in Sparrow

**Basisinformationen:**
- Die **TXID** (eindeutige Kennung)
- Der **Betrag**, gesendet oder empfangen
- **Datum und Uhrzeit** der Transaktion
- Die **Anzahl der Bestätigungen**

---

## Technische Details in Sparrow

**Technische Details:**
- Die **Inputs**: welche Coins verwendet wurden
- Die **Outputs**: wer das Geld erhalten hat
- Die **Gebühren**, die gezahlt wurden
- Die **Größe** der Transaktion (in vBytes)

---

## Transaktionsstatus in Sparrow

**Status:**
- **Ausstehend:** unbestätigte Transaktion
- **Bestätigt:** Anzahl der Blöcke seit der Bestätigung
- **Finalisiert:** vollständig bestätigte Transaktion

---

## Eine Transaktion kann nicht verloren gehen

**Bitcoin-Garantie:**

Eine Bitcoin-Transaktion kann **nie** verloren gehen. Es gibt nur zwei mögliche Zustände:

---

## Zustand 1: Die Transaktion ist gemint

**1. Die Transaktion ist gemint**
- Sie ist in einem Block der Blockchain enthalten
- Sie ist bestätigt und unumkehrbar
- Dein Geld wurde übertragen

---

## Zustand 2: Keine Aktion erfolgt

**2. Keine Aktion erfolgt**
- Die Transaktion wurde nie ins Netzwerk gesendet
- Oder sie wurde vor dem Minen abgelehnt
- Dein Geld hat dein Wallet nie verlassen

**Es gibt keine Zwischenzustände:**
- Keine "Transaktion unterwegs", die verschwinden könnte
- Kein "Limbo", in dem dein Geld festhängt
- Entweder erledigt oder nicht

---

## Die verschiedenen Transaktionsformate

Bitcoin hat sich weiterentwickelt und bietet heute mehrere Transaktionsformate. Jedes Format hat Vorteile bei Kosten und Funktionen.

---

## Formatvergleich: Legacy, SegWit, Taproot

| Format      | Technischer Name | Jahr | Eigenschaften                               | Relativer Preis       |
| ----------- | ---------------- | ---- | ------------------------------------------- | --------------------- |
| **Legacy**  | P2PKH            | 2009 | Ursprüngliches Format, Signaturen im Inhalt | Am teuersten          |
| **SegWit**  | P2WPKH           | 2017 | Signaturen getrennt, 4x günstiger           | Deutliche Ersparnis   |
| **Taproot** | P2TR             | 2021 | Modernstes Format, optimierte Signaturen    | Am günstigsten        |

**In der Praxis:** Moderne Formate (SegWit und Taproot) sparen dir Gebühren!

---

## Moderne Transaktionen (SegWit)

**Früher (altes Legacy-Format):**
- Signaturen waren in der Haupttransaktion
- Schwerere Transaktionen = höhere Gebühren
- Format: P2PKH (Pay-to-Public-Key-Hash)

---

## SegWit: Vorteile

**Jetzt (SegWit):**
- Signaturen sind getrennt (im "Witness")
- Leichtere Transaktionen = niedrigere Gebühren
- Etwa 4x günstiger bei den Signaturen
- Formate: P2WPKH, P2WSH

**Vorteil:** Du zahlst weniger Gebühren für dieselbe Transaktion!

---

## Kosten der verschiedenen Input-Formate

Wenn du eine Bitcoin-Coin in einer Transaktion verwendest, hängen die Kosten vom Format ab:

| Input-Typ              | Format      | Ungefähre Größe    | Relativer Preis    |
| ---------------------- | ----------- | ------------------ | ------------------ |
| **Legacy**             | P2PKH       | ~148 vBytes        | Am teuersten       |
| **Verschachteltes SegWit** | P2SH-P2WPKH | ~91 vBytes       | Moderate Ersparnis |
| **Natives SegWit**     | P2WPKH      | ~41 vBytes         | Sehr effizient     |
| **Taproot**            | P2TR        | ~16-57 vBytes      | Optimal            |

---

## Ersparnis mit SegWit

**Konkretes Beispiel:**
- Eine Legacy-Coin nutzen: kostet etwa 148 Einheiten
- Eine SegWit-Coin nutzen: kostet etwa 41 Einheiten
- **Ersparnis:** Rund 70% weniger Gebühren mit SegWit!

---

## Kosten der verschiedenen Output-Formate

Wenn du Geld an jemanden sendest, beeinflusst das Adressformat ebenfalls die Größe:

| Output-Typ  | Format | Ungefähre Größe |
| ----------- | ------ | --------------- |
| **Legacy**  | P2PKH  | ~34 vBytes      |
| **SegWit**  | P2WPKH | ~31 vBytes      |
| **Taproot** | P2TR   | ~43 vBytes      |

**Hinweis:** Der Unterschied ist bei Outputs kleiner, aber SegWit bleibt etwas effizienter.

---

## Beispiel für Gebührenvergleich

**Transaktion mit 1 Input und 2 Outputs:**

| Format      | Gesamtgröße | Gebühren (bei 20 sat/vByte) | Ersparnis        |
| ----------- | ----------- | --------------------------- | ---------------- |
| **Legacy**  | ~250 vBytes | ~5.000 Satoshis             | -                |
| **SegWit**  | ~117 vBytes | ~2.340 Satoshis             | 53% günstiger    |
| **Taproot** | ~100 vBytes | ~2.000 Satoshis             | 60% günstiger    |

**Fazit:** Mit modernen Formaten sparst du mehr als die Hälfte der Gebühren!

---

## Taproot: das modernste Format

**Taproot (P2TR)** ist das neueste und fortschrittlichste Format:

**Vorteile:**
- **Noch niedrigere Gebühren:** Optimierte Schnorr-Signaturen
- **Mehr Privatsphäre:** Alle Taproot-Transaktionen sehen ähnlich aus
- **Mehr Flexibilität:** Ermöglicht komplexe Skripte, ohne sie offenzulegen
- **Bessere Effizienz:** Optimiertes Encoding

---

## Wann Taproot verwenden?

**Wann nutzen?**
- Wenn dein Wallet es unterstützt (moderne Wallets)
- Um die niedrigsten Gebühren zu bekommen
- Für mehr Privatsphäre

**Hinweis:** Noch nicht alle Wallets unterstützen Taproot, aber es ist das Format der Zukunft.

---

## Blockorganisation

Transaktionen werden nicht einzeln verarbeitet. Sie werden zu **Blöcken** zusammengefasst, wie Seiten in einem Kassenbuch.

**Ein Block enthält:**
- Einen Header (wie das Deckblatt eines Buches)
- Eine Liste von Transaktionen (wie die Zeilen eines Registers)

---

## Blockgröße und -frequenz

**Blockgröße:**
- Maximal etwa 1 MB an Daten
- Kann mehrere tausend Transaktionen enthalten
- Etwa alle 10 Minuten entsteht ein neuer Block

---

## Die Coinbase

In jedem Block ist die **erste Transaktion besonders**:

**Die Coinbase-Transaktion:**
- Erzeugt neue Bitcoins (Belohnung des Miners)
- Sammelt alle Gebühren der Blocktransaktionen ein
- Das ist wie der Lohn des Miners für seine Arbeit

---

## Beispiel für Miner-Belohnung

**Beispiel:**
- Blockbelohnung: 3,125 BTC (aktuell)
- Eingenommene Gebühren: 0,5 BTC
- **Gesamt für den Miner:** 3,625 BTC

---

## Reihenfolge der Transaktionen

**Einfache Regel:**
1. Die Coinbase steht immer zuerst
2. Die anderen Transaktionen können in beliebiger Reihenfolge stehen
3. **Außer:** Wenn Transaktion B Geld aus Transaktion A ausgibt, muss A vor B stehen

---

## Warum diese Regel?

**Warum?**
- Wie im echten Leben: Du kannst kein Geld ausgeben, das du noch nicht erhalten hast!

---

## Beispiel für Transaktionsreihenfolge

**Beispiel:**
- Transaktion A: Alice erhält 0,1 BTC
- Transaktion B: Alice sendet 0,05 BTC an Bob
- B muss **nach** A im Block stehen

---

## Der Merkle-Baum
**das Sicherheitssiegel des Blocks**

Der Merkle-Baum ist ein System, das einen **einzigartigen Fingerabdruck** für alle Transaktionen eines Blocks erstellt.


---

## Der Merkle-Baum
**Einfache Analogie:**
Stell dir ein Buch mit 1.000 Seiten vor. Statt jede Seite zu prüfen, erstellst du ein "magisches Inhaltsverzeichnis", das das ganze Buch in einer Zeile zusammenfasst. Wenn jemand auch nur einen Buchstaben ändert, verändert sich die Zusammenfassung komplett.

---

## Nutzung des Merkle-Baums

**1. Änderungen erkennen**
- Versucht jemand, eine Transaktion im Block zu ändern, ändert sich der Fingerabdruck
- Es ist wie ein Wachssiegel: Wenn es gebrochen ist, siehst du es sofort
- Ein Block lässt sich nicht fälschen, ohne dass es auffällt

---

## Eine Transaktion schnell prüfen

**2. Eine Transaktion schnell prüfen**
- Du kannst nachweisen, dass eine Transaktion im Block ist, **ohne alle Transaktionen herunterzuladen**
- Es ist wie zu prüfen, ob ein Wort im Wörterbuch steht, ohne jede Seite zu lesen
- Sehr nützlich für leichte Wallets auf dem Handy

---

## Platz und Bandbreite sparen

**3. Platz und Bandbreite sparen**
- Statt alle Transaktionen zu speichern, kannst du nur den Fingerabdruck prüfen
- Mobile Wallets können funktionieren, ohne die gesamte Blockchain herunterzuladen

---

## Wie funktioniert das?

**Schritt 1:** Jede Transaktion erhält einen einzigartigen "Fingerabdruck" (wie ein Barcode)

**Schritt 2:** Die Fingerabdrücke werden paarweise kombiniert, und für jedes Paar entsteht ein neuer Fingerabdruck

**Schritt 3:** Wiederholen, bis ein einziger Fingerabdruck übrig bleibt: die **Merkle Root**

**Ergebnis:** Ein einziger Fingerabdruck repräsentiert alle Transaktionen im Block!

Dieser finale Fingerabdruck wird im Block-Header gespeichert.

---

## Struktur des Merkle-Baums

<img src="presentations/04-block-tx/merkle.png" alt="Struktur des Merkle-Baums" style="height: 300px; width: auto; background-color: white; padding: 20px; border-radius: 8px;">

---

## Warum ist das praktisch nützlich?

**Szenario 1: Deine Zahlung prüfen**
- Du möchtest prüfen, dass deine Transaktion in einem Block ist
- **Ohne Merkle:** Du müsstest alle Transaktionen des Blocks herunterladen (vielleicht 3.000 Transaktionen = mehrere MB)
- **Mit Merkle:** Du lädst nur ein paar kleine Fingerabdrücke (einige KB) und kannst beweisen, dass deine Transaktion enthalten ist!

---

## Warum ist das praktisch nützlich?

**Szenario 2: Wallet auf dem Telefon**
- Dein Telefon hat nicht genug Platz für die gesamte Blockchain (hunderte GB)
- **Mit Merkle:** Dein Wallet kann Transaktionen prüfen, ohne alles herunterzuladen
- Es ist wie eine Zusammenfassung des Buches statt des ganzen Buches

---

## Sicherheit mit dem Merkle-Baum

**Szenario 3: Sicherheit**
- Wenn ein Angreifer versucht, eine Transaktion in einem Block zu ändern
- Der Merkle-Fingerabdruck ändert sich sofort
- Alle Knoten im Netzwerk lehnen den veränderten Block ab
- Fälschen ist unmöglich, ohne dass es jeder merkt

---

## Kurze Zusammenfassung

Der Merkle-Baum ist:
- ✅ Ein **Sicherheitssiegel**: Ein Block kann nicht verändert werden, ohne dass sich der Fingerabdruck ändert
- ✅ Ein **Schnellprüfsystem**: Nachweisen, dass eine Transaktion existiert, ohne alles herunterzuladen
- ✅ Ein **Speichersparer**: Leichte Wallets können ohne die komplette Blockchain arbeiten

---

## Kurze Zusammenfassung

**In einem Satz:**

Er ist wie ein magisches Inhaltsverzeichnis, das sich ändert, wenn du auch nur einen Buchstaben im Buch änderst, und das dir zeigt, dass eine Seite existiert, ohne das ganze Buch zu lesen.

---

## Validierung eines Blocks

Bevor ein Block akzeptiert wird, muss er **validiert** werden:

**Prüfungen:**
- Alle Transaktionen sind gültig (korrekte Signaturen)
- Niemand hat Geld ausgegeben, das er nicht besitzt
- Keine Transaktion doppelt
- Beträge sind korrekt (Outputs ≤ Inputs)
- Der Merkle-Fingerabdruck ist korrekt

**Wenn alles passt:** Der Block wird zur Blockchain hinzugefügt
**Wenn etwas falsch ist:** Der Block wird verworfen

---

## Einen Block auf mempool.space ansehen

**Schritt 1: Aus den Transaktionsdetails in Sparrow**
- Öffne Sparrow und gehe zum Reiter **Transactions**
- Doppelklicke auf eine bestätigte Transaktion
- Klicke in den Details auf den **Block-Hash** oder die **Blocknummer**
- Dadurch wird der Block automatisch auf mempool.space geöffnet

---

## Einen Block auf mempool.space ansehen

**Schritt 2: mempool.space öffnen**
- Gehe in deinem Browser auf [mempool.space](https://mempool.space)
- Oder nutze [mempool.space/signet](https://mempool.space/signet) für Signet

---

## Einen Block auf mempool.space ansehen

**Schritt 3: Den Block suchen**
- Verwende die Suchleiste oben auf der Seite
- Gib die Blocknummer oder den Block-Hash ein
- Klicke auf das Ergebnis, um alle Blockdetails zu sehen

---

## Was du auf mempool.space sehen kannst

**Blockinformationen:**
- Den **Block-Hash** und die **Blocknummer**
- Die **Anzahl der Transaktionen** im Block
- Die **Blockgröße** (in MB)
- Die **eingenommenen Gebühren** des Miners
- Die **Blockbelohnung** (Coinbase)
- Die **Merkle Root** (Fingerabdruck aller Transaktionen)

---

## Was du auf mempool.space sehen kannst

**Transaktionsliste:**
- Alle Transaktionen des Blocks in Reihenfolge
- Die Coinbase-Transaktion zuerst
- Details jeder Transaktion (TXID, Beträge, Gebühren)

---

## Zusammenfassung: Eine Bitcoin-Transaktion

Eine Bitcoin-Transaktion ist wie ein digitaler Scheck, der:
- Geld nimmt, das du bereits hast
- Es an jemand anderen sendet (oder an dich zurück)
- Deine Signatur enthält, um zu beweisen, dass du es bist

---

## Zusammenfassung: Eine Bitcoin-Transaktion

**Enthält:**
- Die Coins, die du verwendest (Inputs)
- Wen du bezahlst (Outputs)
- Deine Signatur

---

## Zusammenfassung: Eine Bitcoin-Transaktion

**Enthält nicht:**
- Deinen Namen oder deine Identität
- Deinen Gesamtsaldo
- Deine E-Mail-Adresse

---

## Zusammenfassung: Transaktionsgebühren

Gebühren hängen ab von:
- **Der Größe** deiner Transaktion (Anzahl der genutzten Coins, Anzahl der Empfänger)
- **Dem Format** (Legacy, SegWit, Taproot)
- **Der Priorität**, die du wählst (schnell = teurer, langsam = günstiger)

---

## Warum Gebühren?

**Warum Gebühren?**
- Sie bezahlen Miner für ihre Arbeit
- Sie verhindern Spam und schützen das Netzwerk
- Sie motivieren eine schnelle Transaktionsverarbeitung

---

## Formatvergleich

**Formatvergleich:**
- **Legacy:** Am teuersten (~250 vBytes für eine einfache Transaktion)
- **SegWit:** Etwa 2x günstiger (~117 vBytes)
- **Taproot:** Am günstigsten (~100 vBytes)

---

## Zusammenfassung: Die Kennung (TXID)

Jede Transaktion hat eine **eindeutige Kennung**:
- Wie eine Sendungsnummer
- Damit findest du deine Transaktion
- Sie ändert sich nie
- Du kannst sie teilen, um eine Zahlung zu beweisen

**Wo findest du sie?** In deinem Wallet, nachdem du eine Transaktion gesendet hast.

---

## Zusammenfassung: Die Blöcke

Transaktionen werden in **Blöcken** zusammengefasst:
- Ein Block = eine Seite im Bitcoin-Kassenbuch
- Etwa 1 MB maximal
- Alle 10 Minuten ein neuer Block
- Die erste Transaktion ist immer die Coinbase (Miner-Belohnung)

**Reihenfolge:**
- Coinbase zuerst
- Andere Transaktionen in beliebiger Reihenfolge
- Außer wenn eine Transaktion von einer anderen abhängt

---

## Zusammenfassung: Der Merkle-Baum

Der Merkle-Baum erstellt einen **einzigartigen Fingerabdruck** des Blocks:
- **Sicherheit:** Ein Block kann nicht geändert werden, ohne dass sich der Fingerabdruck ändert
- **Schnelle Prüfung:** Nachweisen, dass eine Transaktion existiert, ohne den ganzen Block herunterzuladen
- **Speicherersparnis:** Leichte Wallets können ohne die komplette Blockchain arbeiten

---

## Wichtige Punkte zum Merken

- ✅ Eine Transaktion nimmt Geld, das du hast, und sendet es weiter
- ✅ Gebühren hängen von Größe und Priorität ab
- ✅ Jede Transaktion hat eine eindeutige Kennung (TXID)
- ✅ Transaktionen werden in Blöcken gruppiert
- ✅ Die erste Transaktion eines Blocks ist immer die Coinbase
- ✅ Der Merkle-Baum stellt sicher, dass niemand einen Block ändern kann

---
