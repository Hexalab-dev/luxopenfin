---
id: volume1-chapter-03-section-3-6
title: "3.6 Saldenliste erstellen"
sidebar_position: 7
slug: /volume1/chapter-03/section-3-6
---

# 3.6 Saldenliste erstellen

### Was ist eine Saldenliste?

Eine **Saldenliste** ist eine Liste aller Konten und ihrer Salden zu einem bestimmten Zeitpunkt. Sie verifiziert, dass Gesamt Soll Gesamt Haben entspricht.

**Zweck:**
- Mathematische Genauigkeit überprüfen
- Übertragungsfehler identifizieren
- Vorbereitung für Finanzberichte
- Erforderlicher Schritt im Buchhaltungszyklus

### Saldenlisten-Format

**Standardformat:**
```
Firmenname
Saldenliste
Datum

Konto                          Soll      Haben
─────────────────────────────────────────────────
[Kontoname (Nummer)]           €X,XXX
[Kontoname (Nummer)]                       €X,XXX
...
─────────────────────────────────────────────────
Summen                         €XX,XXX    €XX,XXX
```

### Erstellung einer Saldenliste

**Schritte:**
1. Alle Konten mit Salden auflisten
2. Sollsalden in Soll-Spalte eintragen
3. Habensalden in Haben-Spalte eintragen
4. Beide Spalten summieren
5. Überprüfen, dass Summen gleich sind

### Beispiel: Vollständige Saldenliste

Unter Verwendung der Transaktionen aus Abschnitt 3.5 erstellen wir eine Saldenliste:

**Alle Konten mit Salden:**

**Vermögen (Sollsalden) :**
- Kasse (5131): €5,290
- Ausstattung (222): €13,000
- Vorräte (361): €3,000
- Forderungen (4011): €1,755
- MwSt-Vorsteuer (421611): €850

**Verbindlichkeiten (Habensalden) :**
- Lieferanten (44111): €1,000
- MwSt-Verbindlichkeit (461411): €595 (€340 + €255)
- Wechselverbindlichkeiten (4421): €10,000 (aus Transaktion 1, Abschnitt 3.4)

**Eigenkapital (Habensalden) :**
- Grundkapital (101): €20,000

**Erträge (Habensalden) :**
- Dienstleistungserlöse (703): €2,000
- Umsatzerlöse (7061): €1,500

**Aufwendungen (Sollsalden) :**
- Miete (6111): €1,200

**Saldenliste:**
```
Le Petit Bistro
Saldenliste
30. November 2024

Konto                          Soll      Haben
─────────────────────────────────────────────────
VERMÖGEN
5131   Kasse                    €5,290
4011   Forderungen               1,755
361    Vorräte                   3,000
222    Ausstattung              13,000
421611 MwSt-Vorsteuer              850
                                 ───────
Gesamt Vermögen                                €24,895

VERBINDLICHKEITEN
44111  Lieferanten                        €1,000
461411 MwSt-Verbindlichkeit                   595
4421   Wechselverbindlichkeiten           10,000
                                 ───────
Gesamt Verbindlichkeiten                     €11,595

EIGENKAPITAL
101    Grundkapital                        €20,000

ERTRÄGE
7061   Umsatzerlöse                         €1,500
703    Dienstleistungserlöse                2,000
                                 ───────
Gesamt Erträge                                €3,500

AUFWENDUNGEN
6111   Miete                    €1,200
                                 ───────
Gesamt Aufwendungen              €1,200

─────────────────────────────────────────────────
SUMMEN                         €26,095    €26,095
```

**Überprüfung:** Gesamt Soll (€26,095) = Gesamt Haben (€26,095) ✓

### Was eine Saldenliste beweist und nicht beweist

**Eine Saldenliste beweist:**
- Mathematische Genauigkeit (Soll = Haben)
- Alle Transaktionen wurden übertragen
- Keine Einzelbuchungsfehler

**Eine Saldenliste beweist NICHT:**
- Alle Transaktionen wurden erfasst
- Transaktionen wurden korrekt erfasst
- Transaktionen wurden in den richtigen Konten erfasst
- Keine kompensierenden Fehler (Fehler, die sich gegenseitig aufheben)

### Häufige Fehler, die von Saldenliste nicht erkannt werden

1. **Ausgelassene Transaktionen** : Transaktion überhaupt nicht erfasst
2. **Falsches Konto** : Transaktion im falschen Konto erfasst
3. **Kompensierende Fehler** : Zwei Fehler, die sich gegenseitig aufheben
4. **Ursprüngliche Eingabefehler** : Falscher Betrag im Buchungssatz (aber Soll entspricht immer Haben)

### Fehlerkorrektur

Wenn die Saldenliste nicht ausgeglichen ist:

1. **Addition** der Saldenlisten-Spalten überprüfen
2. **Kontensalden** im Hauptbuch verifizieren
3. **Übertragung** vom Journal zum Hauptbuch überprüfen
4. **Buchungssätze** verifizieren (Soll = Haben)
5. **Belege** überprüfen

### Luxemburgische Einhaltungsnotiz

In Luxemburg müssen Unternehmen Saldenlisten erstellen:
- Mindestens monatlich (für Management)
- Am Periodenende (für Finanzberichte)
- Vor Einreichung der Jahresabschlüsse
- Für Prüfungszwecke

Saldenlisten müssen:
- PCN-Kontenklassifikationen verwenden
- Kontonummern einschließen
- 10 Jahre aufbewahrt werden
- Vorbereitung von Finanzberichten unterstützen

### Denken Sie nach

Eine Saldenliste zeigt Gesamt Soll von 50.000 € und Gesamt Haben von 49.500 €. Welche Schritte würden Sie unternehmen, um den Fehler zu finden und zu korrigieren?

---

