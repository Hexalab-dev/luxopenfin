---
id: volume1-chapter-06-section-6-3
title: "6.3 Transaktionen für Warenkäufe mit dem permanenten Lagerbestandssystem analysieren und erfassen"
sidebar_position: 4
slug: /volume1/chapter-06/section-6-3
---

# 6.3 Transaktionen für Warenkäufe mit dem permanenten Lagerbestandssystem analysieren und erfassen

### Warenkäufe

Wenn ein Handelsunternehmen Lagerbestände kauft, muss es erfassen :
- Die Kosten der Waren
- Alle Transportkosten
- Die MwSt (wenn erstattungsfähig)
- Zahlungsbedingungen

### Grundlegende Kauf-Transaktion

**Transaktion :** Waren auf Kredit kaufen

**Beispiel :** Einzelhandelsgeschäft kauft 5.000 € Kleidung auf Kredit von einem Lieferanten (MwSt ausgeschlossen), MwSt 17 %, erstattungsfähig.

**Journaleintrag :**
```
361    Vorräte (Klasse 3)         €5,000
421611 MwSt-Vorsteuer (Klasse 4)    850
44111  Verbindlichkeiten aus L.u.L. (Klasse 4)            €5,850
Um Kauf von Waren auf Kredit zu erfassen
```

**PCN-Konten :**
- 361 : Waren (Klasse 3 - Vermögenswert)
- 421611 : MwSt-Vorsteuer (Klasse 4 - Vermögenswert)
- 44111 : Verbindlichkeiten aus L.u.L. (Klasse 4 - Verbindlichkeit)

### Kauf mit Barzahlung

**Transaktion :** Waren kaufen, bar zahlen

**Beispiel :** Kauf von 2.000 € Waren, Barzahlung (MwSt ausgeschlossen), MwSt 17 %, erstattungsfähig.

**Journaleintrag :**
```
361    Vorräte                   €2,000
421611 MwSt-Vorsteuer              340
5131   Kasse (Klasse 5)                  €2,340
Um Kauf von Waren bar zu erfassen
```

### Rückgaben und Rabatte auf Käufe

**Kaufrückgabe :** Waren an Lieferanten zurückgeben

**Beispiel :** Rückgabe von 500 € defekter Waren (MwSt ausgeschlossen) von einem vorherigen Kauf.

**Journaleintrag :**
```
44111  Verbindlichkeiten aus L.u.L.            €585
361    Vorräte                                   €500
421611 MwSt-Vorsteuer                          €85
Um Rückgabe von Waren an Lieferanten zu erfassen
```

**Hinweis :** Reduziert Vorräte und Verbindlichkeiten aus L.u.L. Die MwSt-Vorsteuer wird ebenfalls reduziert.

**Kaufsrabatt :** Preisreduktion für beschädigte Waren, die behalten werden

**Beispiel :** Erhalt von 200 € Rabatt für leicht beschädigte Waren (MwSt ausgeschlossen).

**Journaleintrag :**
```
44111  Verbindlichkeiten aus L.u.L.            €234
361    Vorräte                                   €200
421611 MwSt-Vorsteuer                          €34
Um Kaufsrabatt zu erfassen
```

### Skonti auf Käufe

**Kaufskonto :** Rabatt für frühe Zahlung

**Beispiel :** Kauf von 10.000 € Waren, Bedingungen 2/10, n/30 (2 % Rabatt, wenn innerhalb von 10 Tagen gezahlt, netto 30 Tage).

**Anfänglicher Kauf :**
```
361    Vorräte                  €10,000
421611 MwSt-Vorsteuer             1,700
44111  Verbindlichkeiten aus L.u.L.                       €11,700
```

**Wenn innerhalb von 10 Tagen gezahlt (Skonto genommen) :**
```
44111  Verbindlichkeiten aus L.u.L.           €11,700
361    Vorräte                                  €200  (2% von €10,000)
421611 MwSt-Vorsteuer                             €34  (MwSt auf Skonto)
5131   Kasse                                €11,466
Um Zahlung innerhalb der Skontofrist zu erfassen
```

**Hinweis :** Skonto reduziert die Vorratskosten (kein separates Ertragskonto).

**Wenn nach 10 Tagen gezahlt (kein Skonto) :**
```
44111  Verbindlichkeiten aus L.u.L.           €11,700
5131   Kasse                                €11,700
Um Zahlung nach der Skontofrist zu erfassen
```

### Luxemburgische MwSt-Überlegungen

**Verschiedene MwSt-Sätze :**
- Standardsatz : 17 %
- Ermäßigte Sätze : 14 %, 8 %, 3 %

**Beispiel : Restaurant kauft verschiedene Artikel**

**Transaktion :** Restaurant kauft :
- Lebensmittelzutaten : 1.000 € (MwSt ausgeschlossen), MwSt 3 %
- Wein (bis 13 % vol.) : 500 € (MwSt ausgeschlossen), MwSt 14 %
- Ausrüstung : 2.000 € (MwSt ausgeschlossen), MwSt 17 %

**Journaleintrag :**
```
361    Vorräte - Lebensmittel            €1,000
361    Vorräte - Getränke               500
222    Ausrüstung                   2,000
421611 MwSt-Vorsteuer                 440  (€30 + €70 + €340)
44111  Verbindlichkeiten aus L.u.L.                         €3,940
Um Käufe mit verschiedenen MwSt-Sätzen zu erfassen
```

**MwSt-Berechnung :**
- Lebensmittel : 1.000 € × 3 % = 30 €
- Wein : 500 € × 14 % = 70 €
- Ausrüstung : 2.000 € × 17 % = 340 €
- Gesamt-MwSt : 440 €

**PCN-Hinweis :** Kann Unterkonten für verschiedene Vorratstypen verwenden :
- 3611 : Lebensmittelvorräte
- 3612 : Getränkevorräte
- Oder separat für MwSt-Zwecke verfolgen

### Luxemburg-Compliance-Hinweis

Beim Kauf von Waren in Luxemburg :
- Netto-Kosten (MwSt ausgeschlossen) in Vorräten erfassen
- MwSt-Vorsteuer separat erfassen (421611)
- Korrekten MwSt-Satz für jeden Artikel verwenden
- Ordnungsgemäße Dokumentation führen
- Sicherstellen, dass MwSt erstattet werden kann (geschäftliche Nutzung)
- Verschiedene Vorratstypen verfolgen, wenn verschiedene MwSt-Sätze gelten

### Nachdenken

Ein luxemburgisches Einzelhandelsgeschäft kauft Kinderbekleidung (MwSt 3 %) und Erwachsenenbekleidung (MwSt 17 %) in derselben Transaktion. Wie sollte dies erfasst werden ? Welche PCN-Konten sind beteiligt ?

---

