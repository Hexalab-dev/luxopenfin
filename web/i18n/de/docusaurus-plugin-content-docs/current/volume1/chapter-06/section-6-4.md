---
id: volume1-chapter-06-section-6-4
title: "6.4 Transaktionen für den Verkauf von Waren mit dem permanenten Lagerbestandssystem analysieren und erfassen"
sidebar_position: 5
slug: /volume1/chapter-06/section-6-4
---

# 6.4 Transaktionen für den Verkauf von Waren mit dem permanenten Lagerbestandssystem analysieren und erfassen

### Warenverkauf

Wenn ein Handelsunternehmen Lagerbestände verkauft, muss es erfassen :
- Den Verkauf (Umsatz und Forderungen/Kasse)
- Die Kosten der verkauften Waren (Reduzierung der Vorräte)
- Die MwSt auf den Verkauf

### Grundlegende Verkaufs-Transaktion

**Transaktion :** Waren bar verkaufen

**Beispiel :** Einzelhandelsgeschäft verkauft 1.000 € Kleidung bar (MwSt ausgeschlossen), MwSt 17 %. Die Kosten der verkauften Waren betragen 600 €.

**Journaleinträge (zwei Einträge) :**

**Eintrag 1 : Verkauf erfassen**
```
5131   Kasse                       €1,170
7061   Umsatzerlöse (Klasse 7)              €1,000
461411 MwSt-Verbindlichkeiten (Klasse 4)                    €170
Um Barverkauf von Waren zu erfassen
```

**Eintrag 2 : Kosten der verkauften Waren erfassen**
```
607    Kosten der verkauften Waren (Klasse 6) €600
361    Vorräte (Klasse 3)                    €600
Um Kosten der verkauften Waren zu erfassen
```

**PCN-Konten :**
- 5131 : Kasse (Klasse 5)
- 7061 : Umsatzerlöse (Klasse 7)
- 461411 : MwSt-Verbindlichkeiten (Klasse 4)
- 607 : Kosten der verkauften Waren (Klasse 6)
- 361 : Vorräte (Klasse 3)

**Nach Einträgen :**
- Umsatzerlöse : 1.000 €
- Kosten der verkauften Waren : 600 €
- Bruttogewinn : 400 €
- Vorräte um 600 € reduziert

### Verkauf auf Kredit

**Transaktion :** Waren auf Kredit verkaufen

**Beispiel :** Verkauf von 2.000 € Waren auf Kredit (MwSt ausgeschlossen), MwSt 17 %. Die Kosten betragen 1.200 €.

**Journaleinträge :**

**Eintrag 1 : Verkauf erfassen**
```
4011   Forderungen aus L.u.L.        €2,340
7061   Umsatzerlöse                          €2,000
461411 MwSt-Verbindlichkeiten                              €340
Um Verkauf von Waren auf Kredit zu erfassen
```

**Eintrag 2 : Kosten der verkauften Waren erfassen**
```
607    Kosten der verkauften Waren         €1,200
361    Vorräte                              €1,200
Um Kosten der verkauften Waren zu erfassen
```

### Rückgaben und Rabatte auf Verkäufe

**Verkaufsrückgabe :** Kunde gibt Waren zurück

**Beispiel :** Kunde gibt 500 € Waren zurück (MwSt ausgeschlossen), die für 500 € mit Kosten von 300 € verkauft wurden.

**Journaleinträge :**

**Eintrag 1 : Verkauf umkehren**
```
709    Verkaufsrückgaben (oder Umsatzerlöse reduzieren) €500
461411 MwSt-Verbindlichkeiten                             €85
4011   Forderungen aus L.u.L. (oder 5131   Kasse)            €585
Um Rückgabe von Waren zu erfassen
```

**Eintrag 2 : Vorräte zurückgeben**
```
361    Vorräte                  €300
607    Kosten der verkauften Waren                     €300
Um Waren zu Vorräten zurückzugeben
```

**PCN-Hinweis :** Verkaufsrückgaben können sein :
- Separates Konto : 709 Verkaufsrückgaben (Klasse 7 - Gegenertrag)
- Oder gegen Umsatzerlöse verrechnet

**Verkaufsrabatt :** Preisreduktion für beschädigte Waren, die vom Kunden behalten werden

**Beispiel :** Gewährung von 100 € Rabatt (MwSt ausgeschlossen) für leicht beschädigte Waren.

**Journaleintrag :**
```
709    Verkaufsrabatte (Klasse 7)  €100
461411 MwSt-Verbindlichkeiten                             €17
4011   Forderungen aus L.u.L. (oder 5131   Kasse)            €117
Um Verkaufsrabatt zu erfassen
```

**Hinweis :** Keine Vorratsanpassung (Kunde behält Waren).

### Skonti auf Verkäufe

**Verkaufsskonto :** Rabatt für frühe Zahlung durch Kunden

**Beispiel :** Verkauf von 5.000 € auf Kredit, Bedingungen 2/10, n/30. Kunde zahlt innerhalb von 10 Tagen.

**Anfänglicher Verkauf :**
```
4011   Forderungen aus L.u.L.        €5,850
7061   Umsatzerlöse                          €5,000
461411 MwSt-Verbindlichkeiten                              €850
```

**Zahlung innerhalb der Skontofrist :**
```
5131   Kasse                       €5,733
709    Verkaufsskonti (Klasse 7)    €100  (2% von €5,000)
4011   Forderungen aus L.u.L.                    €5,850
Um Zahlung innerhalb der Skontofrist zu erfassen
(MwSt bereits auf ursprünglichen Verkauf erfasst)
```

**PCN-Hinweis :** Verkaufsskonti : 709 (Klasse 7 - Gegenertrag)

### Luxemburgische MwSt auf Verkäufe

**Verschiedene MwSt-Sätze für verschiedene Waren :**

**Beispiel : Restaurant verkauft verschiedene Artikel**

**Transaktion :** Restaurant verkauft :
- Essen (vor Ort) : 100 € (MwSt ausgeschlossen), MwSt 3 %
- Wein (zum Essen serviert) : 50 € (MwSt ausgeschlossen), MwSt 17 %
- Essen zum Mitnehmen : 30 € (MwSt ausgeschlossen), MwSt 3 %

**Journaleintrag :**
```
5131   Kasse                       €192.40
703    Dienstleistungserlöse (Essen)                €100.00
703    Dienstleistungserlöse (Getränke)             €50.00
703    Dienstleistungserlöse (Zum Mitnehmen)             €30.00
461411 MwSt-Verbindlichkeiten                              €12.40
Um Verkäufe mit verschiedenen MwSt-Sätzen zu erfassen
(MwSt : €3.00 + €8.50 + €0.90 = €12.40)
```

**Kosten-Einträge (falls zutreffend) :**
```
607    Kosten der verkauften Waren         €[Kosten]
361    Vorräte                              €[Kosten]
```

### Berechnung der Nettoumsätze

**Nettoumsätze** = Bruttoumsätze - Verkaufsrückgaben - Verkaufsrabatte - Verkaufsskonti

**Beispiel :**
- Bruttoumsätze : 50.000 €
- Verkaufsrückgaben : 2.000 €
- Verkaufsrabatte : 500 €
- Verkaufsskonti : 1.000 €
- Nettoumsätze : 50.000 € - 2.000 € - 500 € - 1.000 € = 46.500 €

### Luxemburg-Compliance-Hinweis

Beim Verkauf von Waren in Luxemburg :
- Umsatz zum Nettobetrag (MwSt ausgeschlossen) erfassen
- MwSt-Verbindlichkeiten zum korrekten Satz erfassen
- Kosten der verkauften Waren sofort erfassen (permanentes System)
- Korrekten MwSt-Satz für jeden Artikeltyp verwenden
- Ordnungsgemäße Dokumentation führen
- Verkäufe nach MwSt-Satz für MwSt-Erklärungsvorbereitung verfolgen

### Nachdenken

Ein luxemburgisches Einzelhandelsgeschäft verkauft ein Kinder-T-Shirt (MwSt 3 %) für 20 € und ein Erwachsenen-T-Shirt (MwSt 17 %) für 30 €. Die Kosten des Kinder-T-Shirts betrugen 10 €, und die Kosten des Erwachsenen-T-Shirts betrugen 15 €. Erfassen Sie beide Verkäufe mit ordnungsgemäßen MwSt- und Kosten der verkauften Waren-Einträgen.

---

