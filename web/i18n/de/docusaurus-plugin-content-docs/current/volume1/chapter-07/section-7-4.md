---
id: volume1-chapter-07-section-7-4
title: "7.4 Ein Nebenbuch vorbereiten"
sidebar_position: 5
slug: /volume1/chapter-07/section-7-4
---

# 7.4 Ein Nebenbuch vorbereiten

### Was ist ein Nebenbuch?

Ein **Nebenbuch** (auch Unterbuch genannt) enthält detaillierte Informationen über einzelne Elemente, die einen Hauptbuchkontensaldo bilden.

**Zweck:**
- Detaillierte Informationen für Hauptbuchkonten bereitstellen
- Einzelne Kunden, Lieferanten, Lagerartikel verfolgen
- Forderungs- und Verbindlichkeitsverwaltung unterstützen
- Detaillierte Berichterstattung ermöglichen

### Nebenbücher vs. Hauptbuch

**Hauptbuch:**
- Enthält Zusammenfassungskonten (Kontrollkonten)
- Zeigt Gesamtsalden
- Beispiel: Forderungen aus Lieferungen und Leistungen (Summe aller Kunden)

**Nebenbuch:**
- Enthält einzelne Konten
- Zeigt Details für jeden Kunden, Lieferanten, etc.
- Beispiel: Konto Kunde A, Konto Kunde B, etc.

**Beziehung:**
- Summe des Nebenbüchers = Hauptbuch-Kontrollkonto
- Muss abgestimmt werden (ausgleichen)

### Arten von Nebenbüchern

Häufige Nebenbücher umfassen:

1. **Forderungen-Nebenbücher**: Einzelne Kundenkonten
2. **Verbindlichkeiten-Nebenbücher**: Einzelne Lieferantenkonten
3. **Lagerbestand-Nebenbücher**: Einzelne Lagerartikelkonten
4. **Anlagevermögen-Nebenbücher**: Einzelne Vermögenskonten

### Forderungen-Nebenbücher

**Zweck:** Von einzelnen Kunden geschuldete Beträge verfolgen

**Format:**
```
Kundenkonto: Kunde A
Kontonummer: 40111

Datum    Referenz    Soll    Haben    Saldo
─────────────────────────────────────────────────
5. Nov   INV-001     €1,170              €1,170
15. Nov  Zahlung              €1,170        €0
─────────────────────────────────────────────────
```

**Beispiel: Mehrere Kunden**

**Konto Kunde A (40111):**
```
Datum       Referenz    Soll      Haben     Saldo
─────────────────────────────────────────────────────
5. Nov      INV-001      €1,170                 €1,170
15. Nov     Zahlung               €1,170          €0
20. Nov     INV-004      €2,340                 €2,340
─────────────────────────────────────────────────────
Saldo : €2,340
```

**Konto Kunde B (40112):**
```
Datum       Referenz    Soll      Haben     Saldo
─────────────────────────────────────────────────────
10. Nov     INV-002      €3,000                 €3,000
25. Nov     Zahlung               €1,500        €1,500
─────────────────────────────────────────────────────
Saldo : €1,500
```

**Hauptbuch-Kontrollkonto:**
```
4011   Forderungen aus Lieferungen und Leistungen (Kontrolle)
─────────────────────────────
30. Nov  Verkaufsjournal    €6,510  │  30. Nov  Kasseneingangsjournal    €2,670
─────────────────────────────
Saldo  €3,840
```

**Verifizierung:**
- Kunde A : €2,340
- Kunde B : €1,500
- Nebenbücher-Summe : €3,840
- Hauptbuch-Kontrolle : €3,840 ✓

### Verbindlichkeiten-Nebenbücher

**Zweck:** An einzelne Lieferanten geschuldete Beträge verfolgen

**Format:**
```
Lieferantenkonto: Lieferant X
Kontonummer: 441111

Datum    Referenz    Soll    Haben    Saldo
─────────────────────────────────────────────────
8. Nov   SUP-001              €2,340    €2,340
12. Nov  Zahlung     €2,340              €0
─────────────────────────────────────────────────
```

**Beispiel: Mehrere Lieferanten**

**Konto Lieferant X (441111):**
```
Datum       Referenz    Soll      Haben     Saldo
─────────────────────────────────────────────────────
8. Nov      SUP-001                 €2,340      €2,340
12. Nov     Zahlung      €2,340                  €0
20. Nov     SUP-003                 €1,500      €1,500
─────────────────────────────────────────────────────
Saldo : €1,500
```

**Konto Lieferant Y (400002):**
```
Datum       Referenz    Soll      Haben     Saldo
─────────────────────────────────────────────────────
15. Nov     SUP-002                 €3,000      €3,000
─────────────────────────────────────────────────────
Saldo : €3,000
```

**Hauptbuch-Kontrollkonto:**
```
44111  Verbindlichkeiten aus Lieferungen und Leistungen (Kontrolle)
─────────────────────────────
        │  30. Nov  Einkaufsjournal  €6,840
30. Nov  Kassenausgangsjournal     €2,340  │
─────────────────────────────
        │  Saldo  €4,500
```

**Verifizierung:**
- Lieferant X : €1,500
- Lieferant Y : €3,000
- Nebenbücher-Summe : €4,500
- Hauptbuch-Kontrolle : €4,500 ✓

### Lagerbestand-Nebenbücher

**Zweck:** Einzelne Lagerartikel verfolgen

**Format:**
```
Lagerartikel: T-Shirt - Rot - Mittel
Artikelcode: TS-RED-M

Datum    Referenz    Eingang    Ausgang    Saldo
───────────────────────────────────────────
1. Nov   Anfang            -     50 Einheiten
5. Nov   Einkauf     20             70 Einheiten
10. Nov  Verkauf                 -5     65 Einheiten
───────────────────────────────────────────
```

**Luxemburgische Überlegungen:**
- Möglicherweise muss nach MwSt-Satz verfolgt werden
- Muss Lagerbewertung unterstützen
- Muss sich mit Kassensystemen integrieren

### Abstimmung

**Abstimmungsprozess:**
1. Alle Nebenbücherkonten summieren
2. Mit Hauptbuch-Kontrollkonto vergleichen
3. Unterschiede untersuchen und beheben
4. Abstimmung dokumentieren

**Beispiel-Abstimmung:**
```
Forderungen-Abstimmung
30. November 2024

Nebenbücher-Summen :
  Kunde A :                    €2,340
  Kunde B :                    €1,500
  Kunde C :                      €800
  Nebenbücher-Summe :       €4,640

Hauptbuch-Kontrollkonto :  €4,640

Differenz :                      €0 ✓
```

### Luxemburgische Compliance-Hinweis

Nebenbücher in Luxemburg müssen:
- PCN-Kontenstruktur unterstützen
- Ordentlichen Prüfpfad führen
- Für FAIA exportierbar sein
- MwSt-Verfolgung unterstützen
- 10 Jahre aufbewahrt werden
- Mit Hauptbuch abgestimmt werden

### Nachdenken

Warum ist es wichtig, dass Nebenbücher-Summen dem Hauptbuch-Kontrollkonto entsprechen? Was würde auf einen Fehler hindeuten, wenn sie nicht übereinstimmen?

---

