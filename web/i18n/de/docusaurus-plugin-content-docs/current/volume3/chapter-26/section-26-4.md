---
id: volume3-chapter-26-section-26-4
title: "26.4 PCN-Kontenzuordnung für gängige KMU-Transaktionen"
sidebar_position: 5
slug: /volume3/chapter-26/section-26-4
---

# 26.4 PCN-Kontenzuordnung für gängige KMU-Transaktionen

### Einführung in die Transaktionszuordnung

Die Zuordnung von Geschäftstransaktionen zu PCN-Konten ist eine grundlegende Rechnungslegungsfähigkeit. Jede Transaktion betrifft mindestens zwei Konten (doppelte Buchführung), und jedes Konto muss nach PCN-Standards klassifiziert werden.

### Einkaufstransaktionen

#### Einkauf von Lagerbeständen (Waren zum Weiterverkauf)

**Transaktion**: Einkauf von €500 Lagerbestand auf Kredit von einem Lieferanten

**PCN-Zuordnung:**
- **Soll**: Konto 6061 (Einkäufe von Handelswaren) - €500
- **Haben**: Konto 44111 (Lieferanten) - €500

**Mit TVA (17%):**
- **Soll**: Konto 6061 (Einkäufe von Handelswaren) - €427,35
- **Soll**: Konto 421611 (Erstattungsfähige Vorsteuer) - €72,65
- **Haben**: Konto 44111 (Lieferanten) - €500,00

#### Einkauf von Anlagevermögen

**Transaktion**: Einkauf von €5.000 Ausrüstung, bezahlt per Banküberweisung

**PCN-Zuordnung:**
- **Soll**: Konto 222 (Technische Anlagen und Maschinen) - €5.000
- **Haben**: Konto 5131 (Bankkonto) - €5.000

**Mit TVA:**
- **Soll**: Konto 222 (Ausrüstung) - €4.273,50
- **Soll**: Konto 421611 (Vorsteuer) - €726,50
- **Haben**: Konto 5131 (Bank) - €5.000,00

### Verkaufstransaktionen

#### Barverkäufe

**Transaktion**: Verkauf von Waren für €200 bar, einschließlich 17% TVA

**PCN-Zuordnung:**
- **Soll**: Konto 516 (Kasse) - €200,00
- **Haben**: Konto 7061 (Verkäufe von Handelswaren) - €170,94
- **Haben**: Konto 461411 (Umsatzsteuer) - €29,06

#### Kreditverkäufe

**Transaktion**: Verkauf von €1.000 Dienstleistungen auf Kredit (TVA 17%)

**PCN-Zuordnung:**
- **Soll**: Konto 4011 (Kunden) - €1.170,00
- **Haben**: Konto 703 (Erbrachte Dienstleistungen) - €1.000,00
- **Haben**: Konto 461411 (Umsatzsteuer) - €170,00

### Zahlungstransaktionen

#### Zahlung an Lieferanten

**Transaktion**: Zahlung von €800 an Lieferanten (einschließlich €136 TVA)

**PCN-Zuordnung:**
- **Soll**: Konto 44111 (Lieferanten) - €800,00
- **Haben**: Konto 5131 (Bankkonto) - €800,00

#### Erhalt von Kundenzahlungen

**Transaktion**: Erhalt von €1.170 von Kunde (Zahlung für Rechnung)

**PCN-Zuordnung:**
- **Soll**: Konto 5131 (Bankkonto) - €1.170,00
- **Haben**: Konto 4011 (Kunden) - €1.170,00

### Lohn- und Gehaltstransaktionen

#### Zahlung von Gehältern

**Transaktion**: Zahlung von €3.000 Bruttogehalt (Mitarbeiteranteil: €600 Sozialabgaben, Arbeitgeberanteil: €900)

**PCN-Zuordnung:**
- **Soll**: Konto 6211 (Bruttogehälter) - €3.000,00
- **Soll**: Konto 623 (Arbeitgeberanteil Sozialversicherung) - €900,00
- **Haben**: Konto 4621 (Sozialversicherung zu zahlen – CCSS) - €1.500,00
- **Haben**: Konto 5131 (Bankkonto) - €2.400,00

### Aufwandstransaktionen

#### Mietzahlung

**Transaktion**: Zahlung von €1.200 monatlicher Miete

**PCN-Zuordnung:**
- **Soll**: Konto 6111 (Miete für Geschäftsräume) - €1.200,00
- **Haben**: Konto 5131 (Bankkonto) - €1.200,00

#### Zahlung von Versorgungsleistungen

**Transaktion**: Zahlung von €150 Stromrechnung (TVA 17%)

**PCN-Zuordnung:**
- **Soll**: Konto 61845 (Strom) - €128,21
- **Soll**: Konto 421611 (Vorsteuer) - €21,79
- **Haben**: Konto 5131 (Bankkonto) - €150,00

### Abschreibungstransaktionen

#### Erfassung von Abschreibungen

**Transaktion**: Erfassung von €200 monatlicher Abschreibung auf Ausrüstung

**PCN-Zuordnung:**
- **Soll**: Konto 6332 (Abschreibungen auf technische Anlagen und Maschinen) - €200,00
- **Haben**: Konto 2229 (Kumulierte Abschreibungen - Ausrüstung) - €200,00

### TVA-Transaktionen

#### TVA-Erklärung

**Transaktion**: Einreichung TVA-Erklärung (TVA gesammelt: €1.000, TVA gezahlt: €600, Netto zu zahlen: €400)

**PCN-Zuordnung:**
- **Soll**: Konto 461411 (Umsatzsteuer) - €1.000,00
- **Haben**: Konto 421611 (Erstattungsfähige Vorsteuer) - €600,00
- **Haben**: Konto 461412 (An die AED zu zahlende TVA) - €400,00

**Bei Zahlung von TVA:**
- **Soll**: Konto 461412 (An die AED zu zahlende TVA) - €400,00
- **Haben**: Konto 5131 (Bankkonto) - €400,00

### Tabelle der gängigen Transaktionszuordnung

| Transaktionstyp | Soll-Konto | Haben-Konto | Hinweise |
|-----------------|------------|-------------|----------|
| Einkauf Handelswaren (Bank) | 6061 (Einkäufe) | 5131 (Bank) | 421611 für TVA hinzufügen |
| Einkauf Handelswaren (Kredit) | 6061 (Einkäufe) | 44111 (Lieferanten) | 421611 für TVA hinzufügen |
| Barverkauf | 516 (Kasse) | 7061 (Warenverkäufe) | 461411 für TVA hinzufügen |
| Kreditverkauf | 4011 (Kunden) | 7061 / 703 (Verkäufe / Dienstleistungen) | 461411 für TVA hinzufügen |
| Zahlung Lieferant | 44111 (Lieferanten) | 5131 (Bank) | |
| Erhalt Zahlung | 5131 (Bank) | 4011 (Kunden) | |
| Gehaltszahlung | 6211 (Gehälter) | 5131 (Bank) | 623 und 4621 für Sozialabgaben einschließen |
| Mietzahlung | 6111 (Miete) | 5131 (Bank) | |
| Abschreibung erfassen | 6332 / 6333 (Abschreibung) | 2229 (Kum. Abschreibung – Unterkonto des Vermögenswerts) | |
| TVA zahlen | 461412 (TVA zu zahlen) | 5131 (Bank) | |

### Luxemburg-Compliance-Hinweis

Alle Transaktionen müssen PCN-Konten zugeordnet werden. Bei Verwendung von Buchhaltungssoftware stellen Sie sicher, dass sie mit PCN 2020-Kontenstruktur konfiguriert ist. Manuelle Journaleinträge sollten immer PCN-Kontonummern referenzieren, nicht nur Kontonamen.

### Nachdenken

Maries Restaurant erhält eine €500-Rechnung für Küchenausrüstungswartung. Die Rechnung enthält €85 TVA (17%). Wie würden Sie diese Transaktion PCN-Konten zuordnen? Was, wenn sie sofort zahlt vs. auf Kreditbedingungen?

### Konzepte in der Praxis

**Tägliche Restaurant-Operationen**

*Le Petit Bistro* verarbeitet diese Transaktionen täglich:

1. **Morgen**: Einkauf €200 Lebensmittellagerbestand (Bargeld, TVA 17%)
   - Soll 601, Soll 421611, Haben 516

2. **Mittagsservice**: €500 Barverkäufe (TVA 17%)
   - Soll 516, Haben 703, Haben 461411

3. **Nachmittag**: Zahlung €150 Versorgungsrechnung (TVA 17%)
   - Soll 61845, Soll 421611, Haben 5131

4. **Tagesende**: Erfassung €50 Abschreibung auf Ausrüstung
   - Soll 6332, Haben 2229

Alle Transaktionen sind ordnungsgemäß PCN-Konten zugeordnet, was Compliance und genaue Berichterstattung gewährleistet.

---

