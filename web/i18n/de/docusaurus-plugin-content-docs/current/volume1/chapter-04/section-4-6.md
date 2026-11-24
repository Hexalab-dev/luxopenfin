---
id: volume1-chapter-04-section-4-6
title: "4.6 Luxemburgspezifische Anpassungen: MwSt-Abgrenzungen, Sozialabgaben, Rückstellungen"
sidebar_position: 7
slug: /volume1/chapter-04/section-4-6
---

# 4.6 Luxemburgspezifische Anpassungen: MwSt-Abgrenzungen, Sozialabgaben, Rückstellungen

### Luxemburgspezifische Anpassungsbuchungen

Zusätzlich zu Standard-Anpassungsbuchungen müssen luxemburgische Unternehmen spezifische Anpassungen vornehmen, die sich auf beziehen:
- MwSt (Mehrwertsteuer)
- Sozialabgaben (Arbeitnehmerleistungen)
- Rückstellungen (Rücklagen für zukünftige Verpflichtungen)

Diese Anpassungen stellen die Einhaltung der luxemburgischen Steuer- und Rechnungslegungsvorschriften sicher.

### MwSt-Abgrenzungen

#### MwSt-Verbindlichkeiten-Anpassung

**Situation:** Auf Verkäufen erhobene MwSt muss in der Periode erfasst werden, in der der Verkauf stattfand, auch wenn sie noch nicht an Steuerbehörden gezahlt wurde.

**Beispiel:** Restaurant macht Verkäufe im November mit 1.700 € erhobener MwSt. MwSt-Erklärung wird im Dezember eingereicht und gezahlt.

**Anpassungsbuchung (Ende November):**
```
461411 MwSt-Verbindlichkeiten                  €1,700
461411 MwSt-Verbindlichkeiten (oder separates Konto)            €1,700
MwSt-Verbindlichkeiten für November-Verkäufe abgrenzen
```

**Tatsächlich wird MwSt normalerweise zum Zeitpunkt des Verkaufs erfasst. Aber wenn nicht:**

**Wenn MwSt nicht beim Verkauf erfasst wurde:**
```
461411 MwSt-Verbindlichkeiten                  €1,700
7061   Umsatzerlöse (oder Anpassungskonto)        €1,700
MwSt-Verbindlichkeiten auf November-Verkäufe buchen
```

**PCN-Konten:**
- 461411: MwSt-Verbindlichkeiten (Klasse 4)

#### MwSt-Vorsteuer-Anpassung

**Situation:** Auf Einkäufen gezahlte MwSt kann erstattungsfähig sein. Es muss sichergestellt werden, dass sie ordnungsgemäß erfasst ist.

**Beispiel:** Restaurant hat 850 € erstattungsfähige MwSt von November-Einkäufen, die nicht erfasst wurde.

**Anpassungsbuchung (Ende November):**
```
421611 MwSt-Vorsteuer              €850
421611 MwSt-Vorsteuer (oder Aufwandsminderung)       €850
Erstattungsfähige MwSt auf November-Einkäufe buchen
```

**PCN-Konten:**
- 421611: MwSt-Vorsteuer (Klasse 4)

#### MwSt-Abwicklung-Anpassung

**Situation:** Am Periodenende Netto-MwSt-Position berechnen (MwSt-Verbindlichkeiten - MwSt-Vorsteuer).

**Beispiel:**
- MwSt-Verbindlichkeiten: 1.700 €
- MwSt-Vorsteuer: 850 €
- Netto-MwSt zu zahlen: 850 €

**Anpassungsbuchung (wenn Rückstellung erstellt wird):**
```
461411 MwSt-Verbindlichkeiten                  €850
421611 MwSt-Vorsteuer              €850
461412 MwSt-Abwicklung Verbindlichkeiten                    €850
Netto-MwSt-Verbindlichkeiten für November buchen
```

**Oder einfacher (Verrechnung):**
```
421611 MwSt-Vorsteuer              €850
461411 MwSt-Verbindlichkeiten                              €850
MwSt-Vorsteuer gegen MwSt-Verbindlichkeiten verrechnen
Netto-MwSt-Verbindlichkeiten: €850
```

### Sozialabgaben-Abgrenzungen

#### Abgegrenzte Sozialabgaben (Arbeitnehmeranteil)

**Situation:** Arbeitnehmer-Sozialabgaben werden von Gehältern abgezogen, werden aber möglicherweise erst später an Behörden gezahlt.

**Beispiel:** November-Gehälter enthalten 1.200 € Arbeitnehmer-Sozialabgaben, die im Dezember gezahlt werden.

**Anpassungsbuchung (Ende November):**
```
6211   Gehaltsaufwand (oder 4714) €1,200
4621   Sozialversicherungsverbindlichkeiten                  €1,200
Abgegrenzte Arbeitnehmer-Sozialabgaben für November buchen
```

**PCN-Konten:**
- 4621: Sozialversicherungsverbindlichkeiten (Klasse 4)
- 6211: Gehaltsaufwand (Klasse 6)

#### Abgegrenzte Sozialabgaben (Arbeitgeberanteil)

**Situation:** Arbeitgeber muss zusätzliche Sozialabgaben zusätzlich zum Bruttogehalt zahlen.

**Beispiel:** Arbeitgeber-Sozialabgaben für November betragen insgesamt 1.500 €, werden im Dezember gezahlt.

**Anpassungsbuchung (Ende November):**
```
623    Sozialabgabenaufwand (Arbeitgeber) €1,500
4621   Sozialversicherungsverbindlichkeiten                  €1,500
Abgegrenzte Arbeitgeber-Sozialabgaben für November buchen
```

**PCN-Konten:**
- 623: Sozialabgaben (Arbeitgeber) (Klasse 6)
- 4621: Sozialversicherungsverbindlichkeiten (Klasse 4)

#### Vollständiges Sozialabgaben-Beispiel

**Situation:**
- Bruttogehälter: 10.000 €
- Arbeitnehmer-Sozialabgaben (12,95 %): 1.295 €
- Arbeitgeber-Sozialabgaben (12,57 %): 1.257 €
- Nettolohn an Arbeitnehmer (vor Lohnsteuerabzug): 8.705 €

*CCSS-Sätze zum 1. Januar 2026 (jedes Jahr auf ccss.lu prüfen): Arbeitnehmer 2,80 % + 0,25 % Krankenversicherung, 8,50 % Rente, 1,40 % Pflegeversicherung (gesetzlich auf Brutto abzüglich 1/4 des sozialen Mindestlohns; hier vereinfacht auf das gesamte Brutto); Arbeitgeber 2,80 % + 0,25 % Krankenversicherung, 8,50 % Rente, 0,65 % Unfall, 0,14 % Arbeitsmedizin, 0,23 % Mutualité (Klasse 1 angenommen).*

**Journaleinträge:**

**Gehaltszahlung:**
```
6211   Gehaltsaufwand            €10,000
4714   Gehaltsverbindlichkeiten                       €8,705
4621   Sozialversicherungsverbindlichkeiten                 €1,295
November-Gehälter buchen
```

**Arbeitgeber-Sozialabgaben:**
```
623    Sozialabgabenaufwand      €1,257
4621   Sozialversicherungsverbindlichkeiten                 €1,257
Arbeitgeber-Sozialabgaben für November buchen
```

**Summe Sozialversicherungsverbindlichkeiten:** 1.295 € + 1.257 € = 2.552 €

### Rückstellungen

#### Rückstellung für Risiken und Belastungen

**Situation:** Unternehmen müssen Rückstellungen für geschätzte zukünftige Verpflichtungen erstellen.

**Beispiele:**
- Garantieverpflichtungen
- Rechtsstreitigkeiten
- Umstrukturierungskosten
- Umweltsanierung

**Beispiel: Garantierückstellung**

**Situation:** Restaurant schätzt 500 € Garantiekosten für mit Garantien verkaufte Ausrüstung.

**Anpassungsbuchung (Ende der Periode):**
```
649    Rückstellungsaufwand           €500
18     Rückstellungen für Risiken und Belastungen         €500
Rückstellung für geschätzte Garantiekosten buchen
```

**PCN-Konten:**
- 648: Sonstige betriebliche Aufwendungen (Klasse 6) oder spezifischer Rückstellungsaufwand
- 18: Rückstellungen für Risiken und Belastungen (Klasse 1)

#### Pensionsrückstellung

**Situation:** Wenn Unternehmen Pensionsverpflichtungen hat, können Rückstellungen erforderlich sein.

**Beispiel:** Geschätzte Pensionsrückstellung von 2.000 € für die Periode.

**Anpassungsbuchung:**
```
6231   Pensionsaufwand             €2,000
181    Pensionsrückstellungen                 €2,000
Pensionsrückstellung für die Periode buchen
```

**PCN-Konten:**
- 6231: Pensionsbeiträge (Klasse 6)
- 181: Pensionsrückstellungen (Klasse 1)

### Luxemburg-Compliance-Anforderungen

#### MwSt-Anpassungen

- Müssen vor Einreichung der MwSt-Erklärung (eCDF) vorgenommen werden
- Müssen sicherstellen, dass MwSt in richtiger Periode erfasst ist
- Netto-MwSt-Position muss genau sein
- Müssen MwSt-Sätzen entsprechen (3 %, 8 %, 14 %, 17 %)

#### Sozialabgaben-Anpassungen

- Müssen Arbeitgeber- und Arbeitnehmeranteile abgrenzen
- Müssen in verdienter Periode erfasst werden
- Müssen bis zu erforderlichen Fristen gezahlt werden
- Müssen luxemburgischen Sozialversicherungssätzen entsprechen

#### Rückstellungen

- Müssen auf vernünftigen Schätzungen basieren
- Müssen regelmäßig überprüft und angepasst werden
- Müssen PCN-Anforderungen entsprechen
- Müssen in Anhang zu Jahresabschlüssen offengelegt werden

### Luxemburg-Compliance-Hinweis

Luxemburgspezifische Anpassungen müssen:
- PCN-Kontenklassifizierungen befolgen
- Steuervorschriften entsprechen
- Vor Einreichung von Jahresabschlüssen vorgenommen werden
- Durch Berechnungen unterstützt werden
- 10 Jahre aufbewahrt werden
- Von Steuerbehörden bei Prüfungen überprüft werden

### Nachdenken

Ein luxemburgisches Unternehmen hat am Monatsende 5.000 € MwSt-Verbindlichkeiten und 2.000 € MwSt-Vorsteuer. Welche Anpassungsbuchung ist erforderlich? Wie ist die Netto-MwSt-Position, und welche PCN-Konten sind betroffen?

---

