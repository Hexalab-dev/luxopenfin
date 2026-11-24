---
id: volume1-chapter-07-section-7-3
title: "7.3 Transaktionen unter Verwendung spezieller Journale analysieren und buchen"
sidebar_position: 4
slug: /volume1/chapter-07/section-7-3
---

# 7.3 Transaktionen unter Verwendung spezieller Journale analysieren und buchen

### Verwendung spezieller Journale

Lassen Sie uns Beispiele für die Erfassung von Transaktionen in speziellen Journalen für ein luxemburgisches Einzelhandelsunternehmen durcharbeiten.

### Beispielunternehmen: Mode Luxembourg SARL

Ein Bekleidungseinzelhandelsgeschäft mit den folgenden Transaktionen im November:

### Transaktion 1: Kreditverkauf

**Transaktion:** Verkauf von €1,000 Waren auf Kredit an Kunde A (ohne MwSt), MwSt 17 %. Rechnung INV-001.

**Verkaufsjournalbuchung:**
```
Verkaufsjournal
Datum       Rechnung #    Kunde      Betrag    MwSt 17%    Gesamt
─────────────────────────────────────────────────────────────────
5. Nov      INV-001     Kunde A    €1,000     €170      €1,170
```

**Buchung:**
- Auf Konto von Kunde A im Forderungen-Nebenbücher: €1,170
- Auf Verkaufserlöse (Hauptbuch): €1,000
- Auf MwSt-Verbindlichkeit (Hauptbuch): €170
- Auf Forderungen aus Lieferungen und Leistungen (Hauptbuch): €1,170

### Transaktion 2: Kreditkauf

**Transaktion:** Kauf von €2,000 Lagerbestand auf Kredit von Lieferant X (ohne MwSt), MwSt 17 %, erstattungsfähig. Rechnung SUP-001.

**Einkaufsjournalbuchung:**
```
Einkaufsjournal
Datum       Rechnung #    Lieferant      Betrag    MwSt 17%    Gesamt
─────────────────────────────────────────────────────────────────
8. Nov      SUP-001     Lieferant X    €2,000     €340      €2,340
```

**Buchung:**
- Auf Konto von Lieferant X im Verbindlichkeiten-Nebenbücher: €2,340
- Auf Lagerbestand (Hauptbuch): €2,000
- Auf MwSt-Vorsteuer (Hauptbuch): €340
- Auf Verbindlichkeiten aus Lieferungen und Leistungen (Hauptbuch): €2,340

### Transaktion 3: Bargeldverkauf

**Transaktion:** Verkauf von €500 Waren gegen Bargeld (ohne MwSt), MwSt 17 %.

**Kasseneingangsjournalbuchung:**
```
Kasseneingangsjournal
Datum       Quelle        Kasse      Verkäufe    Forderungen    MwSt
─────────────────────────────────────────────────────────────────
10. Nov     Bargeldverkauf    €585      €500         -          €85
```

**Buchung:**
- Auf Kasse (Hauptbuch): €585
- Auf Verkaufserlöse (Hauptbuch): €500
- Auf MwSt-Verbindlichkeit (Hauptbuch): €85

### Transaktion 4: Zahlung an Lieferant

**Transaktion:** Zahlung von €2,340 an Lieferant X für vorherigen Kauf.

**Kassenausgangsjournalbuchung:**
```
Kassenausgangsjournal
Datum       Zahlungsempfänger          Kasse    Einkäufe    Verbindlichkeiten    Ausgaben
─────────────────────────────────────────────────────────────────
12. Nov     Lieferant X    €2,340      -        €2,340         -
```

**Buchung:**
- Auf Kasse (Hauptbuch): €2,340 (Abnahme)
- Auf Verbindlichkeiten aus Lieferungen und Leistungen (Hauptbuch): €2,340 (Abnahme)
- Auf Konto von Lieferant X im Verbindlichkeiten-Nebenbücher: €2,340

### Transaktion 5: Einzahlung vom Kunden

**Transaktion:** Erhalt von €1,170 Zahlung von Kunde A.

**Kasseneingangsjournalbuchung:**
```
Kasseneingangsjournal
Datum       Quelle          Kasse      Verkäufe    Forderungen    MwSt
─────────────────────────────────────────────────────────────────
15. Nov     Einzahlung     €1,170      -      €1,170          -
```

**Buchung:**
- Auf Kasse (Hauptbuch): €1,170
- Auf Forderungen aus Lieferungen und Leistungen (Hauptbuch): €1,170 (Abnahme)
- Auf Konto von Kunde A im Forderungen-Nebenbücher: €1,170

### Transaktion 6: Ausgabenzahlung

**Transaktion:** Zahlung von €1,200 Miete.

**Kassenausgangsjournalbuchung:**
```
Kassenausgangsjournal
Datum       Zahlungsempfänger      Kasse    Einkäufe    Verbindlichkeiten    Ausgaben
─────────────────────────────────────────────────────────────────
18. Nov     Miete      €1,200      -           -        €1,200
                                                      (Miete)
```

**Buchung:**
- Auf Kasse (Hauptbuch): €1,200 (Abnahme)
- Auf Mietausgaben (Hauptbuch): €1,200

### Luxemburgische MwSt-Überlegungen

**Mehrere MwSt-Sätze:**

**Beispiel:** Restaurant mit verschiedenen MwSt-Sätzen

**Verkaufsjournalbuchung:**
```
Verkaufsjournal
Datum       Rechnung #    Kunde    Betrag    MwSt 3%    MwSt 14%    MwSt 17%    Gesamt
─────────────────────────────────────────────────────────────────────────────────
20. Nov     INV-002     Kunde B  €100      €3        -          -         €103
           (Essen)
20. Nov     INV-003     Kunde B  €50       -         €7         -          €57
           (Wein)
─────────────────────────────────────────────────────────────────────────────────
Summen                 €150        €3        €7         -         €160
```

**Buchung:**
- Verkaufserlöse: €150
- MwSt-Verbindlichkeit (3 %): €3
- MwSt-Verbindlichkeit (14 %): €7
- Forderungen aus Lieferungen und Leistungen: €160

### Buchung aus speziellen Journalen

**Buchungsregeln:**

1. **Einzelne Positionen**: Auf Nebenbücher buchen (Kunden-/Lieferantenkonten)
2. **Spaltensummen**: Auf Hauptbuchkonten buchen
3. **Häufigkeit**: Kann täglich, wöchentlich oder monatlich gebucht werden
4. **Verifizierung**: Summe des Nebenbüchers sollte dem Hauptbuch-Kontrollkonto entsprechen

**Beispiel: Buchung der Verkaufsjournalsummen**

**Verkaufsjournalsumme:**
- Gesamtverkäufe: €4,500
- Gesamt-MwSt: €765
- Gesamtforderungen: €5,265

**Hauptbuchbuchung:**
```
7061   Verkaufserlöse
─────────────────────────────
        │  30. Nov  Verkaufsjournal    €4,500

461411 MwSt-Verbindlichkeit
─────────────────────────────
        │  30. Nov  Verkaufsjournal      €765

4011   Forderungen aus Lieferungen und Leistungen
─────────────────────────────
30. Nov  Verkaufsjournal    €5,265  │
```

### Luxemburgische Compliance-Hinweis

Bei Verwendung spezieller Journale in Luxemburg:
- Muss MwSt nach Satz verfolgen
- Muss PCN-Kontonummern enthalten
- Muss ordnungsgemäßen Prüfpfad führen
- Muss FAIA-Export unterstützen
- Muss für eCDF exportierbar sein
- Software behandelt dies oft automatisch

### Nachdenken

Ein Unternehmen hat 50 Kreditverkäufe pro Monat. Vergleichen Sie die Effizienz der Erfassung dieser in einem Hauptjournal gegenüber einem Verkaufsjournal. Wie viel Zeit und Aufwand würde gespart werden?

---

