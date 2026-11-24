---
id: volume1-chapter-06-section-6-9
title: "6.9 Luxemburgische MwSt auf Waren (Sätze 3 %, 8 %, 14 %, 17 %)"
sidebar_position: 10
slug: /volume1/chapter-06/section-6-9
---

# 6.9 Luxemburgische MwSt auf Waren (Sätze 3 %, 8 %, 14 %, 17 %)

### MwSt-Sätze auf Waren

Luxemburg hat vier MwSt-Sätze, die auf verschiedene Warentypen angewendet werden :

- **3 %** : Lebensmittelprodukte und nichtalkoholische Getränke, Bücher, Arzneimittel, Kinderbekleidung
- **8 %** : Gas, Strom, Friseurdienstleistungen, kleine Reparaturen
- **14 %** : Bestimmte Weine (bis 13 % vol.), einige Waren
- **17 %** : Die meisten Waren und Dienstleistungen (Standardsatz), einschließlich Bier und Spirituosen

### MwSt auf häufige Warentypen

#### Lebensmittelprodukte (MwSt 3 %)

**Gilt für :**
- Lebensmittelprodukte für menschlichen Verzehr
- Wasser (außer Mineral-/Sprudelwasser)
- Tierfutter
- Samen und Pflanzen für Lebensmittelproduktion

**Beispiel :** Kauf von 1.000 € Lebensmittelprodukten

**Journaleintrag :**
```
361    Vorräte                   €1,000
421611 MwSt-Vorsteuer               30   (3%)
44111  Verbindlichkeiten aus L.u.L.                        €1,030
```

#### Kinderbekleidung (MwSt 3 %)

**Gilt für :**
- Bekleidung und Schuhe für Kinder
- Altersgrenzen gelten (typischerweise bis 14 Jahre)

**Beispiel :** Kauf von 500 € Kinderbekleidung

**Journaleintrag :**
```
361    Vorräte                   €500
421611 MwSt-Vorsteuer               15   (3%)
44111  Verbindlichkeiten aus L.u.L.                          €515
```

#### Bestimmte Weine (MwSt 14 %)

**Gilt für :**
- Bestimmte Weine (bis 13 % vol.)
- Wenn als Waren verkauft (nicht im Restaurant)
- Bier, Spirituosen und anderer Alkohol unterliegen **nicht** 14 %: sie werden mit dem Normalsatz von 17 % besteuert (und im Restaurant servierte alkoholische Getränke immer mit 17 %)

**Beispiel :** Kauf von 1.000 € Wein (12 % vol.) zum Einzelhandelsverkauf

**Journaleintrag :**
```
361    Vorräte                   €1,000
421611 MwSt-Vorsteuer              140   (14%)
44111  Verbindlichkeiten aus L.u.L.                        €1,140
```

#### Standard-Waren (MwSt 17 %)

**Gilt für :**
- Die meisten nicht spezifisch aufgelisteten Waren
- Elektronik, Möbel, allgemeine Bekleidung usw.

**Beispiel :** Kauf von 2.000 € allgemeinen Waren

**Journaleintrag :**
```
361    Vorräte                   €2,000
421611 MwSt-Vorsteuer              340   (17%)
44111  Verbindlichkeiten aus L.u.L.                        €2,340
```

### MwSt auf Verkäufe

**Gleiche Sätze gelten für Verkäufe :**

**Beispiel : Gemischte Verkäufe**

Einzelhandelsgeschäft verkauft :
- Kinder-T-Shirt : 20 € (MwSt 3 %)
- Erwachsenen-T-Shirt : 30 € (MwSt 17 %)
- Buch : 15 € (MwSt 3 %)

**Journaleinträge :**

**Verkauf 1 : Kinder-T-Shirt**
```
5131   Kasse                        €20.60
7061   Umsatzerlöse                           €20.00
461411 MwSt-Verbindlichkeiten (3%)                           €0.60
```

**Verkauf 2 : Erwachsenen-T-Shirt**
```
5131   Kasse                        €35.10
7061   Umsatzerlöse                           €30.00
461411 MwSt-Verbindlichkeiten (17%)                          €5.10
```

**Verkauf 3 : Buch**
```
5131   Kasse                        €15.45
7061   Umsatzerlöse                           €15.00
461411 MwSt-Verbindlichkeiten (3%)                           €0.45
```

### MwSt-Verfolgung für Rückgaben

**Wichtig :** Muss MwSt nach Satz für ordnungsgemäße MwSt-Erklärungsvorbereitung verfolgen.

**Beispiel :** Kunde gibt Kinder-T-Shirt zurück (MwSt 3 %)

**Journaleintrag :**
```
709    Verkaufsrückgaben               €20.00
461411 MwSt-Verbindlichkeiten (3%)                           €0.60
5131   Kasse (oder 4011   Forderungen)                €20.60
Um Rückgabe von Waren zu erfassen
```

### Luxemburgische MwSt-Erklärungsvorbereitung

**Für MwSt-Erklärung (eCDF) :**
- Muss Verkäufe nach MwSt-Satz melden
- Muss Käufe nach MwSt-Satz melden
- Muss Nett-MwSt berechnen (Verbindlichkeiten - Vorsteuer)
- Muss vor Frist einreichen (monatlich/vierteljährlich/jährlich)

**Beispiel MwSt-Zusammenfassung :**
```
MwSt-Verbindlichkeiten :
  Verkäufe MwSt 3 % : 500 € × 3 % = 15,00 €
  Verkäufe MwSt 17 % : 2.000 € × 17 % = 340,00 €
  Gesamt-MwSt-Verbindlichkeiten : 355,00 €

MwSt-Vorsteuer :
  Käufe MwSt 3 % : 300 € × 3 % = 9,00 €
  Käufe MwSt 17 % : 1.500 € × 17 % = 255,00 €
  Gesamt-MwSt-Vorsteuer : 264,00 €

Nett-MwSt zu zahlen : 355,00 € - 264,00 € = 91,00 €
```

### Luxemburg-Compliance-Hinweis

Für MwSt auf Waren in Luxemburg :
- Muss korrekten MwSt-Satz für jeden Artikel verwenden
- Muss MwSt nach Satz für MwSt-Erklärung verfolgen
- Muss MwSt separat erfassen (nicht in Vorratskosten)
- Muss MwSt-Erklärungen rechtzeitig einreichen (eCDF)
- Muss ordnungsgemäße Dokumentation führen
- Verschiedene Sätze erfordern sorgfältige Buchhaltung

### Häufige MwSt-Fehler zu vermeiden

1. **Falsche Satzanwendung** : 17 % statt 3 % für Lebensmittel verwenden
2. **Fehlende MwSt-Verfolgung** : MwSt nicht nach Satz verfolgen
3. **MwSt in Vorratskosten** : MwSt in Vorräte einschließen (sollte separat sein)
4. **Falsche Rückgaben** : MwSt auf Rückgaben nicht anpassen
5. **Fehlende Dokumentation** : MwSt-Berechnungen nicht unterstützen

### Nachdenken

Ein luxemburgisches Einzelhandelsgeschäft verkauft sowohl Kinderbekleidung (MwSt 3 %) als auch Erwachsenenbekleidung (MwSt 17 %). Wie sollte das Unternehmen diese Verkäufe für die MwSt-Erklärungsvorbereitung verfolgen ? Welche Konten und Verfahren sind erforderlich ?

---

