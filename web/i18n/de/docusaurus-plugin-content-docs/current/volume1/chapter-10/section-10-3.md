---
id: volume1-chapter-10-section-10-3
title: "10.3 Die Herstellungskosten der verkauften Waren und das Endinventar mit der perpetuiellen Methode berechnen"
sidebar_position: 4
slug: /volume1/chapter-10/section-10-3
---

# 10.3 Die Herstellungskosten der verkauften Waren und das Endinventar mit der perpetuiellen Methode berechnen

### Perpetuielles Inventarsystem

In einem **perpetuiellen Inventarsystem** werden die Inventaraufzeichnungen kontinuierlich mit jedem Einkauf und Verkauf aktualisiert. Die Herstellungskosten der verkauften Waren werden zum Zeitpunkt jedes Verkaufs erfasst.

### Herstellungskosten der verkauften Waren (Perpetuell)

**Funktionsweise :**
- Jeder Verkauf löst eine Buchung für Herstellungskosten der verkauften Waren aus
- Kosten werden unter Verwendung der Kostenflussannahme bestimmt (FIFO, gewogener Durchschnitt)
- Inventar wird um den Kostenbetrag reduziert
- Inventarsaldo ist immer aktuell

### Beispiel : FIFO mit perpetuiellem System

**Transaktionen :**
- 1. Jan : Kauf von 100 Einheiten @ €10
- 10. Jan : Kauf von 150 Einheiten @ €12
- 15. Jan : Verkauf von 120 Einheiten
- 20. Jan : Kauf von 200 Einheiten @ €14
- 25. Jan : Verkauf von 150 Einheiten

**FIFO-Kostenfluss :**

**1. Jan : Kauf**
```
361    Inventar                   €1,000
44111  Verbindlichkeiten aus Lieferungen und Leistungen                        €1,000
Kauf von 100 Einheiten @ €10
```

**10. Jan : Kauf**
```
361    Inventar                   €1,800
44111  Verbindlichkeiten aus Lieferungen und Leistungen                        €1,800
Kauf von 150 Einheiten @ €12
```

**Inventarsaldo :**
- 100 Einheiten @ €10 = €1,000
- 150 Einheiten @ €12 = €1,800
- Gesamt : 250 Einheiten = €2,800

**15. Jan : Verkauf (120 Einheiten)**
- FIFO : Älteste zuerst verkaufen
- 100 Einheiten @ €10 + 20 Einheiten @ €12 = €1,000 + €240 = €1,240

**Verkaufsbuchung :**
```
5131   Kasse (oder 4011   Forderungen) €[Verkaufspreis]
7061   Umsatzerlöse                          €[Verkaufspreis]
```

**HKV-Buchung :**
```
607    Herstellungskosten der verkauften Waren          €1,240
361    Inventar                               €1,240
```

**Verbleibendes Inventar :**
- 130 Einheiten @ €12 = €1,560

**20. Jan : Kauf**
```
361    Inventar                   €2,800
44111  Verbindlichkeiten aus Lieferungen und Leistungen                        €2,800
Kauf von 200 Einheiten @ €14
```

**Inventarsaldo :**
- 130 Einheiten @ €12 = €1,560
- 200 Einheiten @ €14 = €2,800
- Gesamt : 330 Einheiten = €4,360

**25. Jan : Verkauf (150 Einheiten)**
- FIFO : Älteste zuerst verkaufen
- 130 Einheiten @ €12 + 20 Einheiten @ €14 = €1,560 + €280 = €1,840

**HKV-Buchung :**
```
607    Herstellungskosten der verkauften Waren          €1,840
361    Inventar                               €1,840
```

**Endinventar :**
- 180 Einheiten @ €14 = €2,520

**Zusammenfassung :**
- Herstellungskosten der verkauften Waren : €1,240 + €1,840 = €3,080
- Endinventar : €2,520
- Gesamt : €5,600 ✓

### Beispiel : Gewogener Durchschnitt mit perpetuiellem System

**Gleiche Transaktionen mit gewogenem Durchschnitt :**

**1. Jan : Kauf von 100 Einheiten @ €10**
- Inventar : 100 Einheiten @ €10 = €1,000
- Durchschnitt : €10

**10. Jan : Kauf von 150 Einheiten @ €12**
- Inventar : 250 Einheiten = €2,800
- Durchschnitt : €2,800 ÷ 250 = €11,20

**15. Jan : Verkauf von 120 Einheiten @ €11,20**
- HKV : 120 × €11,20 = €1,344
- Verbleibend : 130 Einheiten @ €11,20 = €1,456

**20. Jan : Kauf von 200 Einheiten @ €14**
- Inventar : 330 Einheiten = €4,256
- Durchschnitt : €4,256 ÷ 330 = €12,90

**25. Jan : Verkauf von 150 Einheiten @ €12,90**
- HKV : 150 × €12,90 = €1,935
- Verbleibend : 180 Einheiten @ €12,90 = €2,322

**Zusammenfassung :**
- Herstellungskosten der verkauften Waren : €1,344 + €1,935 = €3,279
- Endinventar : €2,322
- Gesamt : €5,601 (Rundungsdifferenz)

### Vergleich Perpetuell vs. Periodisch

**Gleiche Daten, verschiedene Methoden :**

**FIFO :**
- Periodische HKV : €3,080
- Perpetuelle HKV : €3,080
- **Gleiches Ergebnis** (FIFO gibt in beiden Systemen das gleiche Ergebnis)

**Gewogener Durchschnitt :**
- Periodische HKV : €3,361 (ein Durchschnitt für die Periode)
- Perpetuelle HKV : €3,279 (gleitender Durchschnitt)
- **Unterschiedliches Ergebnis** (gleitender Durchschnitt berechnet mit jedem Einkauf neu)

### Vorteile des perpetuiellen Systems

**Vorteile :**
- Immer aktuelles Inventar kennen
- Herstellungskosten der verkauften Waren zum Zeitpunkt des Verkaufs erfasst
- Bessere Inventarkontrolle
- Leichterer Diebstahlsnachweis
- Keine Notwendigkeit, auf körperliche Zählung zu warten

### Luxemburgische Überlegungen

**Perpetuielles System :**
- Die meisten modernen Unternehmen verwenden perpetuiell
- Erforderlich für bessere Inventarkontrolle
- Unterstützt MwSt-Verfolgung
- Einfacher für mehrere MwSt-Sätze
- Besser für Compliance

### Luxemburgische Compliance-Hinweis

Für perpetuielles Inventar in Luxemburg :
- Muss konsistente Bewertungsmethode verwenden
- Muss mit jeder Transaktion aktualisieren
- Muss mit körperlichen Zählungen abstimmen
- Muss PCN Klasse 3 einhalten
- Muss Inventarwerte unterstützen
- Muss MwSt korrekt handhaben

### Nachdenken

Warum gibt gewogener Durchschnitt unterschiedliche Ergebnisse in periodischen vs. perpetuiellen Systemen ? Welche Methode ist genauer ?

---

