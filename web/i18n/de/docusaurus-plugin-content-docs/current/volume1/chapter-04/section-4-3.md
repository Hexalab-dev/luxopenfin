---
id: volume1-chapter-04-section-4-3
title: "4.3 Die gängigen Arten von Anpassungsbuchungen buchen und übertragen"
sidebar_position: 4
slug: /volume1/chapter-04/section-4-3
---

# 4.3 Die gängigen Arten von Anpassungsbuchungen buchen und übertragen

### Buchung von Anpassungsbuchungen

Anpassungsbuchungen werden auf die gleiche Weise wie reguläre Journaleinträge gebucht, aber sie werden am Ende der Periode nach Erfassung aller regulären Transaktionen vorgenommen.

### Schritt-für-Schritt-Prozess

1. **Konten identifizieren, die Anpassung benötigen**
2. **Anpassungsbetrag berechnen**
3. **Soll und Haben bestimmen**
4. **Journaleintrag vorbereiten**
5. **Auf Hauptbuchkonten übertragen**

### Umfassendes Beispiel: Vollständiger Anpassungsprozess

Lassen Sie uns ein vollständiges Beispiel für Maries Restaurant am Ende von November 2024 durcharbeiten.

#### Unangepasste Probebilanz (Vor Anpassungen)

```
Le Petit Bistro
Unangepasste Probebilanz
30. November 2024

Konto                          Soll      Haben
─────────────────────────────────────────────────
5131   Kasse                       €15,000
4011   Forderungen aus L.u.L.         3,000
361    Vorräte                   5,000
481    Vorausbezahlte Versicherung           1,200
222    Ausrüstung                  30,000
44111  Verbindlichkeiten aus L.u.L.                    €8,000
461411 MwSt-Verbindlichkeiten                           500
482    Nicht verdiente Erträge                     3,000
1942   Bankdarlehen                       20,000
101    Grundkapital                       20,000
141    Gewinnrücklagen                   2,600
703    Dienstleistungserlöse                     12,000
6211   Gehaltsaufwand           8,000
6111   Mietaufwand               2,400
6184   Nebenkostenaufwand          1,500
─────────────────────────────────────────────────
Summen                         €66,100    €66,100
```

**Hinweis:** Die unangepasste Probebilanz muss bereits ausgeglichen sein (jede gebuchte Buchung hatte gleiche Soll- und Habenbeträge). Anpassungen „reparieren“ keine Probebilanz; sie aktualisieren einzelne Salden, damit Erträge und Aufwendungen der richtigen Periode zugeordnet werden, und jede Anpassungsbuchung ist selbst ausgeglichen.

#### Informationen für Anpassungen

1. **Vorausbezahlte Versicherung:** 1.200 € für 12 Monate am 1. Januar gezahlt. 100 € pro Monat laufen ab.
2. **Ausrüstung:** Kosten 30.000 €, Nutzungsdauer 5 Jahre, lineare Abschreibung. 500 € pro Monat.
3. **Nicht verdiente Erträge:** 3.000 € für 3 Monate Catering (November, Dezember, Januar) erhalten. 1.000 € im November verdient.
4. **Abgegrenzte Gehälter:** Mitarbeiter arbeiteten letzte Woche November (1.500 €), werden aber erst am 5. Dezember bezahlt.
5. **Abgegrenzte Zinsen:** Darlehen von 20.000 € zu 6 % Jahreszins. 100 € Zinsen für November abgegrenzt.
6. **Vorräte auf Lager:** Inventar zeigt 5.000 €, aber 1.000 € wurden während November verwendet.

#### Anpassungsbuchung 1: Vorausbezahlte Versicherung

**Berechnung:** 1.200 € ÷ 12 Monate = 100 €/Monat
**In November verwendeter Betrag:** 100 €

```
Datum: 2024-11-30

614    Versicherungsaufwand           €100
481    Vorausbezahlte Versicherung                      €100
Versicherungsaufwand für November buchen
```

#### Anpassungsbuchung 2: Abschreibung

**Berechnung:** 30.000 € ÷ 60 Monate = 500 €/Monat
**Abschreibung für November:** 500 €

```
Datum: 2024-11-30

633    Abschreibungsaufwand        €500
2229   Kumulierte Abschreibung - Ausrüstung    €500
Monatliche Abschreibung auf Ausrüstung buchen
```

#### Anpassungsbuchung 3: Nicht verdiente Erträge

**Berechnung:** 3.000 € ÷ 3 Monate = 1.000 €/Monat
**Im November verdiente Erträge:** 1.000 €

```
Datum: 2024-11-30

482    Nicht verdiente Erträge            €1,000
703    Dienstleistungserlöse                       €1,000
Im November verdiente Erträge buchen
```

#### Anpassungsbuchung 4: Abgegrenzte Gehälter

**Betrag:** 1.500 €

```
Datum: 2024-11-30

6211   Gehaltsaufwand            €1,500
4714   Gehaltsverbindlichkeiten                       €1,500
Abgegrenzte Gehälter für letzte Woche November buchen
```

#### Anpassungsbuchung 5: Abgegrenzte Zinsen

**Berechnung:** 20.000 € × 6 % ÷ 12 = 100 €/Monat
**Zinsen für November:** 100 €

```
Datum: 2024-11-30

6552   Zinsaufwand            €100
4718   Zinsverbindlichkeiten                       €100
Abgegrenzte Zinsen für November buchen
```

#### Anpassungsbuchung 6: Verwendete Vorräte

**Berechnung:** 1.000 € Vorräte verwendet
**Hinweis:** Dies setzt voraus, dass Vorräte separat verfolgt werden oder Teil des Inventars sind

```
Datum: 2024-11-30

6185   Materialaufwand            €1,000
361    Vorräte (oder 301    Material)         €1,000
Während November verwendete Vorräte buchen
```

### Übertragung von Anpassungsbuchungen auf T-Konten

Übertragen wir diese Anpassungsbuchungen auf T-Konten:

#### Vorausbezahlte Versicherung

```
Vorausbezahlte Versicherung (481)
─────────────────────────────
Nov 01  Saldo  €1,200  │
                        │  Nov 30  Adj1     €100
─────────────────────────────
Saldo  €1,100
```

#### Versicherungsaufwand

```
Versicherungsaufwand (614)
─────────────────────────────
Nov 30  Adj1      €100   │
─────────────────────────────
Saldo  €100
```

#### Ausrüstung und Kumulierte Abschreibung

```
Ausrüstung (222)
─────────────────────────────
Nov 01  Saldo  €30,000 │
─────────────────────────────
Saldo €30,000

Kumulierte Abschreibung - Ausrüstung (2229)
─────────────────────────────
        │  Nov 30  Adj2     €500
─────────────────────────────
        │  Saldo  €500
```

#### Nicht verdiente Erträge

```
Nicht verdiente Erträge (482)
─────────────────────────────
Nov 30  Adj3      €1,000 │  Nov 01  Saldo  €3,000
─────────────────────────────
        │  Saldo  €2,000
```

#### Dienstleistungserlöse

```
Dienstleistungserlöse (703)
─────────────────────────────
        │  Nov 01-30  Erlöse  €12,000
        │  Nov 30  Adj3        €1,000
─────────────────────────────
        │  Saldo  €13,000
```

#### Gehaltsaufwand und Gehaltsverbindlichkeiten

```
Gehaltsaufwand (6211)
─────────────────────────────
Nov 01-30  Gezahlt   €8,000 │
Nov 30  Adj4      €1,500 │
─────────────────────────────
Saldo  €9,500

Gehaltsverbindlichkeiten (4714)
─────────────────────────────
        │  Nov 30  Adj4     €1,500
─────────────────────────────
        │  Saldo  €1,500
```

#### Zinsaufwand und Zinsverbindlichkeiten

```
Zinsaufwand (6552)
─────────────────────────────
Nov 30  Adj5      €100   │
─────────────────────────────
Saldo  €100

Zinsverbindlichkeiten (4718)
─────────────────────────────
        │  Nov 30  Adj5     €100
─────────────────────────────
        │  Saldo  €100
```

### Luxemburg-Compliance-Hinweis

Beim Übertragen von Anpassungsbuchungen in Luxemburg:
- Ordnungsgemäße PCN-Kontonummern verwenden
- Klare Prüfspur aufrechterhalten
- Berechnungen dokumentieren
- Alle Anpassungsbuchungen 10 Jahre aufbewahren
- Sicherstellen, dass Buchungen vor Einreichung von Jahresabschlüssen vorgenommen werden

### Nachdenken

Warum ist es wichtig, Anpassungsbuchungen auf T-Konten zu übertragen, bevor die angepasste Probebilanz erstellt wird? Was würde passieren, wenn Anpassungsbuchungen nicht übertragen würden?

---

