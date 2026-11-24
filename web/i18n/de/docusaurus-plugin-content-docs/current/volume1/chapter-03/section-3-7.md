---
id: volume1-chapter-03-section-3-7
title: "3.7 Luxemburgisches PCN-Kontonummerierungssystem und Transaktionszuordnung"
sidebar_position: 8
slug: /volume1/chapter-03/section-3-7
---

# 3.7 Luxemburgisches PCN-Kontonummerierungssystem und Transaktionszuordnung

### PCN-Kontonummerierungsstruktur

Der Normalisierte Kontenplan (PCN 2020, großherzogliche Verordnung vom 12. September 2019) verwendet eine **hierarchische Dezimalnummerierung**, organisiert in sieben Klassen. Kontonummern haben **keine feste Länge**: Jede zusätzliche Ziffer macht das Konto genauer.

**Struktur:**
- **Erste Ziffer (1-7):** Kontenklasse (z.B. 4 = Konten Dritter)
- **Zwei Ziffern:** Kontengruppe (z.B. 40 = Forderungen aus Lieferungen und Leistungen)
- **Drei oder mehr Ziffern:** Zunehmend detaillierte Konten (z.B. 401 → 4011 Kunden; 461 → 4614 → 46141 → 461411 Ausgangs-MwSt.)
- **Regel:** Gebucht wird nur auf das detaillierteste offizielle Konto (*compte d'imputation*); eigene Unterkonten dürfen darunter angelegt werden (z.B. 40111 für einen Kunden), nie daneben
- **Beispiel:** 5131 = Klasse 5 (Finanzkonten) → 51 (Bankguthaben und Kassenbestand) → 513 (Banken) → 5131 (Bankkonten mit Sollsaldo)

> **Hinweis zu diesem Lehrbuch:** In Buchungssätzen bedeutet „Kasse“ das Geld auf dem Bankkonto des Unternehmens und wird auf **5131** gebucht. Bargeld in der Kasse wird auf Konto **516** (Caisse) gebucht.

### Kontenklassen-Bereiche

| Klasse | Bereich | Beschreibung |
|--------|---------|--------------|
| 1 | 10–19 | Kapital, Rückstellungen, Finanzschulden |
| 2 | 20–29 | Anlagevermögen und Gründungskosten |
| 3 | 30–39 | Vorratskonten |
| 4 | 40–49 | Drittparteikonten |
| 5 | 50–59 | Finanzkonten (Kasse, Banken) |
| 6 | 60–69 | Aufwandskonten |
| 7 | 70–79 | Ertragskonten |

### Unterkonten-Nummerierung

Unternehmen können **Unterkonten** für detaillierte Nachverfolgung erstellen:

**Beispiel:**
- 4011 : Forderungen (allgemein)
- 40111 : Forderungen - Kunde A
- 40112 : Forderungen - Kunde B
- 40113 : Forderungen - Kunde C

### Transaktionszuordnung zu PCN

Bei der Erfassung von Transaktionen müssen Sie die richtigen PCN-Konten identifizieren:

#### Zuordnungsprozess

1. **Transaktionstyp identifizieren**
2. **Betroffene Konten bestimmen**
3. **PCN-Kontonummern finden**
4. **Kontenklassifikation überprüfen**
5. **Mit richtigen Nummern erfassen**

### Häufige Transaktionszuordnungen

#### Barverkäufe

**Transaktion:** Waren für 1.000 € bar verkaufen (netto MwSt), MwSt 17%

**PCN-Zuordnung:**
- Erhaltene Kasse: 5131 (Klasse 5 - Finanzkonten)
- Umsatzerlöse: 7061 (Klasse 7 - Ertragskonten)
- MwSt-Verbindlichkeit: 461411 (Klasse 4 - Steuerbehörden)

**Buchungssatz:**
```
5131   Kasse                           €1,170
7061   Umsatzerlöse                                €1,000
461411 MwSt-Verbindlichkeit                         €170
```

#### Kreditkäufe

**Transaktion:** Vorräte 2.000 € auf Kredit kaufen (netto MwSt), MwSt 17%, abzugsfähig

**PCN-Zuordnung:**
- Vorräte: 361 (Klasse 3 - Vorräte)
- MwSt-Vorsteuer: 421611 (Klasse 4 - Steuerbehörden)
- Lieferanten: 44111 (Klasse 4 - Lieferanten)

**Buchungssatz:**
```
361    Vorräte                         €2,000
421611 MwSt-Vorsteuer                   €340
44111  Lieferanten                                   €2,340
```

#### Aufwandszahlungen

**Transaktion:** 500 € Nebenkosten zahlen

**PCN-Zuordnung:**
- Nebenkosten: 6184 (Klasse 6 - Externe Leistungen)
- Kasse: 5131 (Klasse 5 - Finanzkonten)

**Buchungssatz:**
```
6184   Nebenkosten                     €500
5131   Kasse                                        €500
```

#### Ausstattungskauf

**Transaktion:** 10.000 € Ausstattung kaufen, 3.000 € bar zahlen und 7.000 € Wechsel

**PCN-Zuordnung:**
- Ausstattung: 222 (Klasse 2 - Sachanlagen)
- Kasse: 5131 (Klasse 5 - Finanzkonten)
- Wechselverbindlichkeiten: 4421 (Klasse 4 - Wechselverbindlichkeiten)

**Buchungssatz:**
```
222    Ausstattung                     €10,000
5131   Kasse                                        €3,000
4421   Wechselverbindlichkeiten                      €7,000
```

### PCN-Kontosuche

Wenn Sie sich über die PCN-Kontonummer nicht sicher sind:

1. **Kontenklasse identifizieren** (1-7)
2. **Kontotyp innerhalb der Klasse bestimmen**
3. **PCN-Referenz konsultieren** (siehe Anhang A)
4. **Mit Buchhalter oder Fiduciaire überprüfen**
5. **Entscheidung dokumentieren** für Konsistenz

### Anpassung des Kontenplans

Während PCN Standardkonten bereitstellt, können Unternehmen:

- **Unterkonten hinzufügen** für Details (z.B. 510001, 5131 für verschiedene Bankkonten)
- **Kontobereiche** innerhalb von Klassen verwenden
- **Konsistenz** über Perioden hinweg aufrechterhalten

**Wichtig:** Muss innerhalb der PCN-Klassenstruktur und des Nummerierungssystems bleiben.

### Luxemburgische Einhaltungsnotiz

Alle Transaktionen müssen mit PCN-Kontonummern erfasst werden. Dies gewährleistet:
- Konsistenz zwischen Unternehmen
- Ordentliche Klassifikation
- Einhaltung der Vorschriften
- Genaue Finanzberichterstattung
- Leichtigkeit der Prüfung und Überprüfung

Software wie Sage BOB enthält PCN-Kontonummern, was die Einhaltung erleichtert.

### Denken Sie nach

Ein luxemburgisches Unternehmen erhält einen Bankkredit von 25.000 €. Welche PCN-Konten sind betroffen? Was sind die Kontonummern und Klassen?

---

