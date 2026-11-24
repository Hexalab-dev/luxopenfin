---
id: volume3-chapter-29-section-29-5
title: "29.5 Lohnbuchhaltung in PCN"
sidebar_position: 6
slug: /volume3/chapter-29/section-29-5
---

# 29.5 Lohnbuchhaltung in PCN

### Lohnbuchhaltung verstehen

Die Lohnbuchhaltung in Luxemburg muss PCN (Plan Comptable Normalisé) Standards folgen. Alle Lohnabrechnungstransaktionen müssen mit angemessenen PCN-Konten erfasst werden, um Compliance und genaue Finanzberichterstattung sicherzustellen.

### PCN-Konten für Lohnabrechnung

#### Gehaltsausgabenkonten

**Konto 6211: Bruttogehälter (Salaires bruts)**
- Erfasst an Mitarbeiter gezahlte Bruttolöhne (Grundgehälter 62111, Prämien 62114, Sachbezüge 62115)
- Soll: Wenn Gehälter gezahlt werden
- Umfasst alle Gehaltskomponenten (Grund, Boni, Überstunden)

**Konto 623: Soziale Abgaben (Arbeitgeberanteil)**
- Erfasst Arbeitgebersozialabgabenausgaben (6231 Rentenbeiträge, 6232 sonstige Sozialversicherungsbeiträge)
- Soll: Wenn Arbeitgebersozialabgaben gezahlt werden
- Umfasst alle Arbeitgeberbeiträge

#### Sozialabgabenverbindlichkeitskonten

**Konto 4621: Sozialabgaben zu zahlen – CCSS (Centre commun de la sécurité sociale)**
- Erfasst geschuldete Sozialabgaben (Mitarbeiter + Arbeitgeber)
- Haben: Wenn Sozialabgaben berechnet werden
- Soll: Wenn Sozialabgaben gezahlt werden
- Saldo: Zeigt unbezahlte Sozialabgaben

Die von den Gehältern einbehaltene Lohnsteuer (retenue d'impôt sur traitements et salaires) wird auf Konto 46124 und die dem Personal geschuldeten Nettogehälter auf Konto 4714 gebucht.

#### Kassen-/Bankkonten

**Konto 5131: Bankkonto**
- Erfasst Gehaltszahlungen
- Haben: Wenn Gehälter und Sozialabgaben von der Bank gezahlt werden

**Konto 516: Kasse**
- Erfasst Bar-Gehaltszahlungen (falls zutreffend)
- Selten für Lohnabrechnung in modernen Unternehmen verwendet

### Lohnabrechnungsbuchungen

#### Buchung 1: Lohnabrechnung berechnen und erfassen

**Transaktion**: Mitarbeiter €3.500 Bruttolohn zahlen, €453,25 Mitarbeitersozialabgaben, €439,95 Arbeitgebersozialabgaben (Sätze 2026, siehe Abschnitt 29.4)

**PCN-Buchhaltung:**
- **Soll**: Konto 6211 (Bruttogehälter) - €3.500,00
- **Soll**: Konto 623 (Arbeitgebersozialabgaben) - €439,95
- **Haben**: Konto 4621 (Sozialabgaben zu zahlen – CCSS) - €893,20
- **Haben**: Konto 5131 (Bank) - €3.046,75

**Erklärung:**
- Soll 6211: Bruttolohnausgabe erfassen
- Soll 623: Arbeitgebersozialabgabenausgabe erfassen
- Haben 4621: Gesamte Sozialabgaben zu zahlen erfassen (Mitarbeiter + Arbeitgeber)
- Haben 5131: Nettolohn an Mitarbeiter zahlen

#### Buchung 2: Sozialabgaben zahlen

**Transaktion**: Sozialabgaben an CCSS zahlen

**PCN-Buchhaltung:**
- **Soll**: Konto 4621 (Sozialabgaben zu zahlen – CCSS) - €893,20
- **Haben**: Konto 5131 (Bank) - €893,20

**Erklärung:**
- Soll 4621: Sozialabgaben zu zahlen reduzieren
- Haben 5131: Sozialabgaben von Bank zahlen

### Monatlicher Lohnabrechnungsprozess

#### Schritt 1: Lohnabrechnung berechnen

- Bruttolöhne für alle Mitarbeiter berechnen
- Mitarbeitersozialabgaben berechnen
- Arbeitgebersozialabgaben berechnen
- Nettolöhne berechnen

#### Schritt 2: Lohnabrechnung erfassen

- Buchung für jeden Mitarbeiter (oder Sammelbuchung)
- Bruttolohnausgabe erfassen
- Arbeitgebersozialabgabenausgabe erfassen
- Sozialabgaben zu zahlen erfassen
- Nettolohnzahlung erfassen

#### Schritt 3: Mitarbeiter zahlen

- Nettolöhne auf Mitarbeiterbankkonten überweisen
- Bankkontenaufzeichnungen aktualisieren

#### Schritt 4: Sozialabgaben zahlen

- Sozialabgaben an CCSS zahlen
- Zahlung im Buchhaltungssystem erfassen

### Periodenrechnung für Lohnabrechnung

#### Monatsendabgrenzungen

**Wenn Lohnabrechnung im folgenden Monat gezahlt:**

**Monatsendbuchung (Lohnabrechnung abgrenzen):**
- **Soll**: Konto 6211 (Bruttogehälter) - €3.500,00
- **Soll**: Konto 623 (Arbeitgebersozialabgaben) - €439,95
- **Haben**: Konto 4621 (Sozialabgaben zu zahlen – CCSS) - €893,20
- **Haben**: Konto 4714 (Gehälter zu zahlen – Verbindlichkeiten gegenüber dem Personal) - €3.046,75

**Folgender Monat (Lohnabrechnung zahlen):**
- **Soll**: Konto 4714 (Gehälter zu zahlen – Verbindlichkeiten gegenüber dem Personal) - €3.046,75
- **Haben**: Konto 5131 (Bank) - €3.046,75

### Unterkonten für Details

#### Mitarbeiterspezifische Konten

**Struktur:**
- 621111: Gehälter - Mitarbeiter 1 (Unterkonto von 62111)
- 621112: Gehälter - Mitarbeiter 2
- 621113: Gehälter - Mitarbeiter 3

**Vorteile:**
- Detailliertes Tracking nach Mitarbeiter
- Einfachere Abstimmung
- Bessere Berichterstattung

#### Abteilungsspezifische Konten

**Struktur:**
- 621111: Gehälter - Produktion (alternative Struktur, Unterkonto von 62111)
- 621112: Gehälter - Vertrieb
- 621113: Gehälter - Verwaltung

**Vorteile:**
- Kostenverteilung nach Abteilung
- Abteilungsberichterstattung
- Budgetanalyse

### Luxemburg-Compliance-Hinweis

**Wichtige Anforderungen:**
- **PCN-Compliance**: Richtige PCN-Konten verwenden
- **Genaue Erfassung**: Alle Lohnabrechnungstransaktionen genau erfassen
- **Pünktliche Erfassung**: In richtiger Rechnungslegungsperiode erfassen
- **Abstimmung**: Lohnabrechnungskonten regelmäßig abstimmen
- **Dokumentation**: Unterstützende Dokumentation aufbewahren

**Häufige Probleme:**
- **Falsche Konten**: Falsche PCN-Konten verwenden
- **Timing-Fehler**: In falscher Periode erfassen
- **Berechnungsfehler**: Falsche Beträge erfasst
- **Fehlende Buchungen**: Nicht alle Lohnabrechnungstransaktionen erfassen

### Nachdenken

*Artisan Boulangerie* zahlt drei Mitarbeiter am Monatsende:
- Mitarbeiter 1: €3.500 brutto, €453,25 Mitarbeiterabgaben, €439,95 Arbeitgeberabgaben
- Mitarbeiter 2: €2.800 brutto, €362,60 Mitarbeiterabgaben, €351,96 Arbeitgeberabgaben
- Mitarbeiter 3: €3.200 brutto, €414,40 Mitarbeiterabgaben, €402,24 Arbeitgeberabgaben

Zeigen Sie die Buchungen zur Erfassung dieser Lohnabrechnung.

### Konzepte in der Praxis

**Vollständige Lohnbuchhaltung**

Monatliche Lohnabrechnung *TechLux Solutions*:

**Mitarbeiter:**
- 5 Mitarbeiter, gesamt brutto: €20.000
- Gesamte Mitarbeitersozialabgaben: €2.590 (12,95 %)
- Gesamte Arbeitgebersozialabgaben: €2.514 (12,57 %, Mutualité-Klasse 1)

**Buchung:**
- **Soll**: Konto 6211 (Bruttogehälter) - €20.000,00
- **Soll**: Konto 623 (Arbeitgebersozialabgaben) - €2.514,00
- **Haben**: Konto 4621 (Sozialabgaben zu zahlen – CCSS) - €5.104,00
- **Haben**: Konto 5131 (Bank) - €17.410,00

**Zahlungsbuchung:**
- **Soll**: Konto 4621 (Sozialabgaben zu zahlen – CCSS) - €5.104,00
- **Haben**: Konto 5131 (Bank) - €5.104,00

**Gesamte Lohnabrechnungskosten**: €22.514,00

---

