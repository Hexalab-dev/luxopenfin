---
id: volume1-chapter-07-section-7-2
title: "7.2 Den Zweck spezieller Journale und ihre Bedeutung für Stakeholder beschreiben und erklären"
sidebar_position: 3
slug: /volume1/chapter-07/section-7-2
---

# 7.2 Den Zweck spezieller Journale und ihre Bedeutung für Stakeholder beschreiben und erklären

### Was sind spezielle Journale?

**Spezielle Journale** sind Journale, die zur Erfassung spezifischer Transaktionstypen verwendet werden. Anstatt alle Transaktionen in einem Hauptjournal zu erfassen, verwenden Unternehmen separate Journale für verschiedene Transaktionstypen.

**Zweck:**
- **Effizienz**: Schnellere Erfassung wiederholter Transaktionen
- **Organisation**: Ähnliche Transaktionen zusammenfassen
- **Kontrolle**: Einfachere Überprüfung und Verifizierung spezifischer Transaktionstypen
- **Arbeitsteilung**: Verschiedene Personen können verschiedene Journale bearbeiten

### Arten spezieller Journale

Häufige spezielle Journale umfassen:

1. **Verkaufsjournal**: Erfasst Kreditverkäufe
2. **Einkaufsjournal**: Erfasst Kreditkäufe
3. **Kasseneingangsjournal**: Erfasst erhaltene Barmittel
4. **Kassenausgangsjournal**: Erfasst ausgezahlte Barmittel

**Hauptjournal**: Wird weiterhin für Transaktionen verwendet, die nicht in spezielle Journale passen (Abschlussbuchungen, Korrekturbuchungen, etc.)

### Verkaufsjournal

**Zweck:** Alle Kreditverkäufe (Verkäufe auf Rechnung) erfassen

**Format:**
```
Verkaufsjournal
Datum    Rechnung #    Kunde    Konto    Betrag    MwSt    Gesamt
─────────────────────────────────────────────────────────────────
```

**Beispiel:**
```
Verkaufsjournal
Datum       Rechnung #    Kunde          Betrag    MwSt 17%    Gesamt
─────────────────────────────────────────────────────────────────
15. Nov     INV-001     Kunde A        €1,000     €170      €1,170
18. Nov     INV-002     Kunde B         2,000      340       2,340
22. Nov     INV-003     Kunde A         1,500      255       1,755
─────────────────────────────────────────────────────────────────
Summen                                  €4,500     €765      €5,265
```

**Buchung:**
- Einzelbeträge auf Kundenkonten gebucht (Nebenbücher)
- Summe auf Verkaufserlöse und Forderungen aus Lieferungen und Leistungen gebucht (Hauptbuch)

**Luxemburgische Überlegungen:**
- Muss MwSt nach Satz verfolgen
- Muss PCN-Kontonummern enthalten
- Muss Anforderungen an digitale Rechnungsstellung unterstützen

### Einkaufsjournal

**Zweck:** Alle Kreditkäufe (Käufe auf Rechnung) erfassen

**Format:**
```
Einkaufsjournal
Datum    Rechnung #    Lieferant    Konto    Betrag    MwSt    Gesamt
─────────────────────────────────────────────────────────────────
```

**Beispiel:**
```
Einkaufsjournal
Datum       Rechnung #    Lieferant        Betrag    MwSt 17%    Gesamt
─────────────────────────────────────────────────────────────────
10. Nov     SUP-001     Lieferant X      €2,000     €340      €2,340
15. Nov     SUP-002     Lieferant Y       3,000      510       3,510
20. Nov     SUP-003     Lieferant X       1,500      255       1,755
─────────────────────────────────────────────────────────────────
Summen                                  €6,500   €1,105      €7,605
```

**Buchung:**
- Einzelbeträge auf Lieferantenkonten gebucht (Nebenbücher)
- Summe auf Lagerbestand/Einkäufe und Verbindlichkeiten aus Lieferungen und Leistungen gebucht (Hauptbuch)

### Kasseneingangsjournal

**Zweck:** Alle erhaltenen Barmittel erfassen (Bargeldverkäufe, Einzahlungen von Kunden, etc.)

**Format:**
```
Kasseneingangsjournal
Datum    Quelle    Konto    Kasse    Verkäufe    Forderungen    Sonstiges
─────────────────────────────────────────────────────────────────
```

**Beispiel:**
```
Kasseneingangsjournal
Datum       Quelle          Kasse      Verkäufe    Forderungen    MwSt
─────────────────────────────────────────────────────────────────
12. Nov     Bargeldverkauf €1,170    €1,000        -         €170
15. Nov     Einzahlung       2,340        -      €2,340         -
18. Nov     Bargeldverkauf     1,755     1,500         -         255
─────────────────────────────────────────────────────────────────
Summen                    €5,265    €2,500    €2,340       €425
```

**Buchung:**
- Kassenspalte auf Kassenkonto gebucht
- Verkaufsspalte auf Verkaufserlöse gebucht
- Forderungsspalte auf Forderungen aus Lieferungen und Leistungen gebucht
- MwSt-Spalte auf MwSt-Verbindlichkeit gebucht

### Kassenausgangsjournal

**Zweck:** Alle ausgezahlten Barmittel erfassen (Käufe, Ausgaben, Zahlungen an Lieferanten, etc.)

**Format:**
```
Kassenausgangsjournal
Datum    Zahlungsempfänger    Konto    Kasse    Einkäufe    Verbindlichkeiten    Ausgaben
─────────────────────────────────────────────────────────────────
```

**Beispiel:**
```
Kassenausgangsjournal
Datum       Zahlungsempfänger          Kasse    Einkäufe    Verbindlichkeiten    Ausgaben
─────────────────────────────────────────────────────────────────
10. Nov     Lieferant X    €2,340        -       €2,340         -
15. Nov     Miete           1,200        -          -        €1,200
20. Nov     Lieferant Y     3,510        -        3,510          -
25. Nov     Gehälter         4,000        -          -         4,000
─────────────────────────────────────────────────────────────────
Summen                  €11,050        -      €5,850      €5,200
```

**Buchung:**
- Kassenspalte auf Kassenkonto gebucht
- Einkaufsspalte auf Lagerbestand/Einkäufe gebucht
- Verbindlichkeitsspalte auf Verbindlichkeiten aus Lieferungen und Leistungen gebucht
- Ausgaben auf entsprechende Ausgabenkonten gebucht

### Vorteile spezieller Journale

**Effizienz:**
- Schnellere Erfassung wiederholter Transaktionen
- Weniger Schreibarbeit (ähnliche Transaktionen zusammenfassen)
- Einfachere Suche nach spezifischen Transaktionen

**Organisation:**
- Ähnliche Transaktionen zusammenfassen
- Einfachere Überprüfung und Verifizierung
- Besser für Prüfungszwecke

**Kontrolle:**
- Einfachere Fehlererkennung
- Bessere Arbeitsteilung
- Klarerer Prüfpfad

**Skalierbarkeit:**
- Kann hohes Transaktionsvolumen bewältigen
- Mehrere Personen können an verschiedenen Journalen arbeiten
- Besser für größere Unternehmen

### Luxemburgischer Kontext

**Spezielle Journale in Luxemburg:**
- Muss PCN-Kontenklassifikationen unterstützen
- Muss MwSt nach Satz verfolgen
- Muss ordnungsgemäßen Prüfpfad führen
- Muss eCDF- und FAIA-Anforderungen unterstützen
- Oft in Rechnungslegungssoftware integriert

**Software-Integration:**
- Moderne Rechnungslegungssoftware (Sage BOB, Odoo) enthält Funktionalität für spezielle Journale
- Erstellt automatisch Journale aus Transaktionen
- Generiert Berichte aus Journaldaten
- Exportiert Daten für Compliance

### Luxemburgische Compliance-Hinweis

Spezielle Journale in Luxemburg müssen:
- PCN-Kontenklassifikationen unterstützen
- MwSt nach Satz verfolgen
- Prüfpfad führen
- Für FAIA exportierbar sein
- Digitale Rechnungsstellung unterstützen
- 10 Jahre aufbewahrt werden

### Nachdenken

Warum würde ein Unternehmen spezielle Journale verwenden, anstatt alle Transaktionen in einem Hauptjournal zu erfassen? Was sind die Vorteile für ein luxemburgisches KMU mit vielen täglichen Transaktionen?

---

