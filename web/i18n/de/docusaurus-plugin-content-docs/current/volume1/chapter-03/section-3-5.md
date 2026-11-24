---
id: volume1-chapter-03-section-3-5
title: "3.5 Buchungssätze verwenden, um Transaktionen zu buchen und auf T-Konten zu übertragen"
sidebar_position: 6
slug: /volume1/chapter-03/section-3-5
---

# 3.5 Buchungssätze verwenden, um Transaktionen zu buchen und auf T-Konten zu übertragen

### Buchungssätze

Ein **Buchungssatz** ist die formale Erfassung einer Transaktion im Buchhaltungssystem. In Luxemburg müssen Buchungssätze PCN-Kontonummern und ordentliche Klassifikationen enthalten.

### Buchungssatz-Format

**Standardformat:**
```
Datum: JJJJ-MM-TT

Kontoname (Kontonummer)        Soll      Haben
─────────────────────────────────────────────────────
Zu belastendes Konto (PCN no.)  €X,XXX
Zu gutschreibendes Konto (PCN no.)              €X,XXX
Beschreibung der Transaktion
```

### Regeln für Buchungssätze

1. **Jeder Buchungssatz muss mindestens ein Soll und ein Haben haben**
2. **Gesamt Soll muss Gesamt Haben entsprechen**
3. **Soll wird zuerst gebucht, dann Haben (eingerückt)**
4. **PCN-Kontonummern einschließen**
5. **Klare Beschreibung einschließen**

### Häufige Buchungssatz-Beispiele

#### Beispiel 1: Eigentümerinvestition

**Transaktion:** Eigentümer investiert 20.000 € Bargeld in das Unternehmen.

**Buchungssatz:**
```
Datum: 2024-11-01

5131   Kasse (Klasse 5)                    €20,000
101    Grundkapital (Klasse 1)                         €20,000
Zur Erfassung der Eigentümerinvestition
```

#### Beispiel 2: Ausstattungskauf gegen Bargeld

**Transaktion:** Kauf von 8.000 € Ausstattung, Zahlung bar.

**Buchungssatz:**
```
Datum: 2024-11-05

222    Ausstattung (Klasse 2)              €8,000
5131   Kasse (Klasse 5)                                €8,000
Zur Erfassung des Ausstattungskaufs
```

#### Beispiel 3: Vorratskauf auf Kredit

**Transaktion:** Kauf von 3.000 € Vorräten auf Kredit von einem Lieferanten.

**Buchungssatz:**
```
Datum: 2024-11-10

361    Vorräte (Klasse 3)                  €3,000
44111  Lieferanten (Klasse 4)                          €3,000
Zur Erfassung des Vorratskaufs auf Kredit
```

#### Beispiel 4: Verkauf mit MwSt (Bargeld)

**Transaktion:** Dienstleistungen für 2.000 € (netto MwSt) verkaufen, Bargeld erhalten. MwSt-Satz 17%.

**Buchungssatz:**
```
Datum: 2024-11-15

5131   Kasse (Klasse 5)                    €2,340
703    Dienstleistungserlöse (Klasse 7)                €2,000
461411 MwSt-Verbindlichkeit (Klasse 4)                    €340
Zur Erfassung des Barverkaufs mit MwSt (17%)
```

#### Beispiel 5: Verkauf auf Kredit

**Transaktion:** Waren für 1.500 € (netto MwSt) auf Kredit verkaufen. MwSt-Satz 17%.

**Buchungssatz:**
```
Datum: 2024-11-18

4011   Forderungen (Klasse 4)              €1,755
7061   Umsatzerlöse (Klasse 7)                         €1,500
461411 MwSt-Verbindlichkeit (Klasse 4)                    €255
Zur Erfassung des Kreditverkaufs mit MwSt (17%)
```

#### Beispiel 6: Aufwand zahlen

**Transaktion:** 1.200 € Miete zahlen.

**Buchungssatz:**
```
Datum: 2024-11-20

6111   Miete (Klasse 6)                    €1,200
5131   Kasse (Klasse 5)                                €1,200
Zur Erfassung der Mietzahlung
```

#### Beispiel 7: Kauf mit abzugsfähiger MwSt

**Transaktion:** Kauf von 5.000 € Ausstattung (netto MwSt), Zahlung bar. MwSt 17%, abzugsfähig.

**Buchungssatz:**
```
Datum: 2024-11-22

222    Ausstattung (Klasse 2)              €5,000
421611 MwSt-Vorsteuer (Klasse 4)            €850
5131   Kasse (Klasse 5)                                €5,850
Zur Erfassung des Ausstattungskaufs mit abzugsfähiger MwSt
```

#### Beispiel 8: Lieferanten zahlen

**Transaktion:** 2.000 € an Lieferanten für vorherigen Kauf zahlen.

**Buchungssatz:**
```
Datum: 2024-11-25

44111  Lieferanten (Klasse 4)              €2,000
5131   Kasse (Klasse 5)                                €2,000
Zur Erfassung der Zahlung an Lieferanten
```

### T-Konten

**T-Konten** sind visuelle Darstellungen von Konten, geformt wie der Buchstabe "T".

**Format:**
```
Kontoname (Kontonummer)
─────────────────────────────
        Soll        Haben
─────────────────────────────
[Buchungen]    │    [Buchungen]
─────────────────────────────
Saldo          │    Saldo
```

**Regeln:**
- Linke Seite = Soll
- Rechte Seite = Haben
- Normalsaldo auf der Seite, die das Konto erhöht

### Übertragung auf T-Konten

Übertragen wir die obigen Buchungssätze auf T-Konten:

#### Kassenkonto

```
Kasse (5131)
─────────────────────────────
01. Nov  J1    €20,000  │
15. Nov  J4     €2,340  │  05. Nov  J2     €8,000
                       │  20. Nov  J6     €1,200
                       │  22. Nov  J7     €5,850
                       │  25. Nov  J8     €2,000
─────────────────────────────
Saldo  €5,290
```

#### Ausstattungskonto

```
Ausstattung (222)
─────────────────────────────
05. Nov  J2     €8,000  │
22. Nov  J7     €5,000  │
─────────────────────────────
Saldo €13,000
```

#### Lieferantenkonto

```
Lieferanten (44111)
─────────────────────────────
        │  10. Nov  J3     €3,000
        │
25. Nov  J8     €2,000  │
─────────────────────────────
        │  Saldo  €1,000
```

#### Dienstleistungserlöse-Konto

```
Dienstleistungserlöse (703)
─────────────────────────────
        │  15. Nov  J4     €2,000
─────────────────────────────
        │  Saldo  €2,000
```

### Normalsalden

Jeder Kontotyp hat einen **Normalsaldo** (die Seite, auf der Erhöhungen gebucht werden):

| Kontotyp | Normalsaldo | Erhöhungen | Verringerungen |
|----------|-------------|------------|----------------|
| Vermögen | Soll | Soll | Haben |
| Verbindlichkeiten | Haben | Haben | Soll |
| Eigenkapital | Haben | Haben | Soll |
| Erträge | Haben | Haben | Soll |
| Aufwendungen | Soll | Soll | Haben |

### Luxemburgische Einhaltungsnotiz

In Luxemburg müssen Unternehmen führen:
- **Journal Général (Journal Général)**: Alle Transaktionen chronologisch
- **Hauptbuch (Grand Livre)**: Alle Konten mit Salden
- **Nebenbücher**: Detaillierte Konten (Kunden, Lieferanten)

Alle müssen:
- PCN-Kontonummern verwenden
- 10 Jahre aufbewahrt werden
- Für Prüfungen verfügbar sein
- Alle Buchungen mit Belegen belegen

### Denken Sie nach

Warum ist es wichtig, dass Gesamt Soll Gesamt Haben in jedem Buchungssatz entspricht? Was würde passieren, wenn sie nicht ausgeglichen wären?

---

