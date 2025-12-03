# be-BOP

4. Dezember 2025

Entdecken Sie be-BOP, eine freie Software zur Verwaltung Ihrer Verkäufe in völliger Unabhängigkeit. Keine Provisionen, keine Zensur.

---

## Das ethische und unabhängige Verkaufstool

### Freie Software

- Es ist keine Plattform
- Freie und Copyleft-Software
- Sie besitzen und kontrollieren alles

---

## Das ethische und unabhängige Verkaufstool

- Keine Provisionen
- Keine Zensur
- Keine Abhängigkeit von Dritten

---

## Für wen ist be-BOP?

### Zielgruppe

- Kreative
- Unternehmer
- Gemeinschaften

---

## Für wen ist be-BOP?

### Integrierte Tools

- Finanzieren Sie Ihre Arbeit
- Verwalten Sie Ihre Verkäufe und Abonnements
- Organisieren Sie Ihre Veranstaltungen
- Beleben Sie Ihre Gemeinschaft

---

## Was ist be-BOP?

be-BOP ist keine Plattform. Es ist eine freie und Copyleft-Software, die Sie vollständig besitzen und kontrollieren.

- Freie und selbst gehostete Software
- Offene und modulare Architektur
- Online- und Vor-Ort-Zahlungen
- Unbegrenzte Anpassung und Integration
- Keine Installation oder Support enthalten

---

[![bip-21](presentations/03-be-bop/bip-21.png)](https://bip-21.fr/)

---

[![BitcoinStore](presentations/03-be-bop/bitcoinstore.png)](https://bitcoinstore.fr/)

---

[![Suif & Praline](presentations/03-be-bop/sulinaderm.png)](https://sulinaderm.com/)

---

[![Marketplace CryptoXR](presentations/03-be-bop/cryptoxr.png)](https://market.cryptoxr.fr/)

---

## Funktionen

### Handel

- **Online-Shop**: Vollständige Verwaltung Ihrer Verkäufe
- **Abonnements**: Verwaltung wiederkehrender Abonnements
- **Veranstaltungen**: Erstellung und Ticketing
- **Gemeinschaft**: Tools zur Belebung Ihrer Gemeinschaft

---

## Funktionen

### Zahlungen & Freiheit

- **Zahlungen**: Online und vor Ort, ohne Provisionen
- **0% Provision**: Alle Ihre Einnahmen gehören Ihnen
- **Völlige Unabhängigkeit**: Ihre Daten, Ihre Infrastruktur

---

## Warum be-BOP?

### Vollständige Kontrolle

Stellen Sie Ihre eigene Umgebung bereit und behalten Sie die vollständige Kontrolle über Ihre Tools, Ihre Daten und Ihre Einnahmen.

---

## Warum be-BOP

### Völlige Freiheit

**0% Provision**
Keine Plattform erhebt eine Provision auf Ihre Verkäufe.

**Völlige Freiheit**
Sie entscheiden, was Sie verkaufen, niemand kann Sie blockieren.

---

## Installation

### Voraussetzungen

1. Ein Linux-Server (Debian oder Ubuntu LTS)
2. Ein Domain-Name, den Sie kontrollieren
3. Zugriff auf die DNS-Konfiguration
4. Eine E-Mail-Adresse (für Let's Encrypt)

---

## Voraussetzungen

### Der Server

**Linux-Server** (Debian oder Ubuntu LTS)

- Minimum: 2 GB RAM
- Festplattenspeicher: 40 GB
- Internetzugang

---

## Voraussetzungen

### Domain & DNS

**Ein Domain-Name**, den Sie kontrollieren
Beispiel: `example.com`

**Erforderliche DNS-Konfiguration:**

- `example.com` → IP Ihres Servers
- `s3.example.com` → IP Ihres Servers

---

## Schritt 1

### Server beschaffen

Sie benötigen einen Server, auf dem Sie Befehle ausführen können:

- VPS bei jedem Hosting-Anbieter
- Dedizierter Server
- Ersatzrechner zu Hause mit Linux

---

## Schritt 1

### Zugriffsmethoden

**So greifen Sie auf den Server zu:**

- Über SSH (Terminal oder SSH-Client)
- Über die Web-Konsole des Anbieters

**Für Windows:**
[Git for Windows](https://gitforwindows.org/)

---

## Schritt 2

### Domain-Name beschaffen

Registrieren Sie eine Domain bei einem Anbieter Ihrer Wahl:

- Root-Domain: `example.com`
- Oder Subdomain: `boutique.example.com`

Sie konfigurieren das DNS im nächsten Schritt.

---

## Schritt 2

### DNS konfigurieren (IPv4)

Erstellen Sie zwei A-Einträge (IPv4):

```text
ihredomain.com      → A → IPv4 Ihres Servers
s3.ihredomain.com   → A → IPv4 Ihres Servers
```

---

## Schritt 2

### DNS konfigurieren (IPv6)

Fügen Sie auch AAAA-Einträge hinzu:

```text
ihredomain.com      → AAAA → IPv6 Ihres Servers
s3.ihredomain.com   → AAAA → IPv6 Ihres Servers
```

**Hinweis:** Warten Sie auf die DNS-Propagierung

---

## Schritt 3

### Serverzugriff überprüfen

Versuchen Sie einen einfachen Befehl, um den Serverzugriff zu bestätigen:

```text
ssh root@ihredomain.com
```

---

## Schritt 4

### Installation starten

**Ändern Sie diesen Befehl mit Ihren Informationen:**

```bash
bash <(curl -fsSL https://be-bop.io/wizard/install.sh) \
  --domain "ihredomain.com" \
  --email "adresse@email.com"
```

**Vor der Ausführung:**

- Ersetzen Sie `ihredomain.com` durch Ihre Domain
- Ersetzen Sie `adresse@email.com` durch Ihre E-Mail

Das Skript zeigt alle geplanten Aufgaben an und fragt vor Änderungen nach Bestätigung.

---

## Installation läuft

### Dauer: 3 bis 10 Minuten

Das Skript erledigt alles automatisch:

- Installation der Abhängigkeiten
- Konfiguration der Dienste
- Generierung der SSL-Zertifikate
- Vorbereitung von be-BOP

---

## Nach der Installation

### Besuchen Sie Ihre Domain in einem Browser

be-BOP ist bereit für die erste Konfiguration über die Weboberfläche.

Folgen Sie dem Setup-Assistenten, um:

- Ihr Administrator-Konto zu erstellen
- Ihre Zahlungseinstellungen zu konfigurieren
- Ihren Shop anzupassen

---

## Benötigen Sie Hilfe?

### Bei Problemen

Kontaktieren Sie den Support mit:

- Ihrem Hosting-Anbieter
- Ihrem Domain-Namen
- Einem Screenshot des Fehlers

---

## Dokumentation

[Alle Details auf be-bop.io](https://be-bop.io/get-started-diy)

---

## Bereit zum Start?

### Ihre digitale Unabhängigkeit beginnt hier

[be-BOP entdecken](https://be-bop.io/)

---

## Sie sind dran

- Fügen Sie Ihre Produkte & Dienstleistungen hinzu
- Erstellen Sie Ihre CMS-Seiten
- Konfigurieren Sie BIP-84
- Konfigurieren Sie PhoenixD
- Konfigurieren Sie Swiss Bitcoin Pay
