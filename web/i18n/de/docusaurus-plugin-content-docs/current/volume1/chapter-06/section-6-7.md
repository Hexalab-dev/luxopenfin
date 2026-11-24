---
id: volume1-chapter-06-section-6-7
title: "6.7 Anhang: Transaktionen für Warenkäufe und -verkäufe mit dem periodischen Lagerbestandssystem analysieren und erfassen"
sidebar_position: 8
slug: /volume1/chapter-06/section-6-7
---

# 6.7 Anhang: Transaktionen für Warenkäufe und -verkäufe mit dem periodischen Lagerbestandssystem analysieren und erfassen

### Überblick über das periodische Lagerbestandssystem

Das **periodische Lagerbestandssystem** aktualisiert Lagerbestandsaufzeichnungen nur am Periodenende. Während der Periode werden Käufe in einem Käufe-Konto erfasst, und die Kosten der verkauften Waren werden am Periodenende berechnet.

### Schlüsseldifferenzen zum permanenten System

**Permanentes System :**
- Vorräte werden bei jedem Kauf aktualisiert
- Kosten der verkauften Waren werden bei jedem Verkauf erfasst
- Vorratssaldo immer aktuell

**Periodisches System :**
- Käufe werden im Käufe-Konto erfasst
- Keine Kosten der verkauften Waren zum Verkaufszeitpunkt
- Kosten der verkauften Waren am Periodenende berechnet
- Erfordert physische Lagerbestandszählung

### Erfassung von Käufen (Periodisches System)

**Transaktion :** Waren auf Kredit kaufen

**Beispiel :** Kauf von 5.000 € Waren (MwSt ausgeschlossen), MwSt 17 %, erstattungsfähig.

**Journaleintrag :**
```
6061   Käufe (Klasse 6)         €5,000
421611 MwSt-Vorsteuer              850
44111  Verbindlichkeiten aus L.u.L.                        €5,850
Um Kauf von Waren zu erfassen (periodisches System)
```

**Schlüsseldifferenz :** Verwendet "Käufe"-Konto (6061) statt "Vorräte"-Konto.

**PCN-Konto :**
- 6061 : Warenkäufe (Klasse 6 - Aufwendungskonto im periodischen System)

### Erfassung von Verkäufen (Periodisches System)

**Transaktion :** Waren verkaufen

**Beispiel :** Verkauf von 1.000 € Waren bar (MwSt ausgeschlossen), MwSt 17 %.

**Journaleintrag :**
```
5131   Kasse                       €1,170
7061   Umsatzerlöse                          €1,000
461411 MwSt-Verbindlichkeiten                              €170
Um Verkauf von Waren zu erfassen (periodisches System)
```

**Schlüsseldifferenz :** Kein Kosten der verkauften Waren-Eintrag zum Verkaufszeitpunkt. Kosten werden am Periodenende berechnet.

### Berechnung der Kosten der verkauften Waren (Periodisches System)

**Formel :**
**Kosten der verkauften Waren = Anfangsbestand + Käufe - Endbestand**

**Schritte :**
1. Anfangsbestand nehmen (von vorheriger Periode)
2. Käufe während der Periode hinzufügen
3. Endbestand abziehen (von physischer Zählung)
4. Ergebnis sind die Kosten der verkauften Waren

**Beispiel :**
- Anfangsbestand : 10.000 €
- Käufe : 30.000 €
- Endbestand (physische Zählung) : 12.000 €
- Kosten der verkauften Waren : 10.000 € + 30.000 € - 12.000 € = 28.000 €

**Anpassungseintrag am Periodenende :**
```
607    Kosten der verkauften Waren          €28,000
361    Vorräte (Anfang)                   €10,000
6061   Käufe                                 €30,000
361    Vorräte (Ende)                        €12,000
Um Kosten der verkauften Waren zu berechnen und zu erfassen
```

Eigentlich sind die ordnungsgemäßen periodischen Abschlussbuchungen :

**Schritt 1 : Anfangsbestand und Käufe zu COGS übertragen**
```
607    Kosten der verkauften Waren          €40,000
361    Vorräte (Anfang)                   €10,000
6061   Käufe                                 €30,000
```

**Schritt 2 : Endbestand erfassen**
```
361    Vorräte (Ende)          €12,000
607    Kosten der verkauften Waren                      €12,000
```

**Ergebnis :** Kosten der verkauften Waren = 40.000 € - 12.000 € = 28.000 €

### Physische Lagerbestandszählung

**Erforderlich für periodisches System :**
- Muss alle Vorräte am Periodenende zählen
- Zählung bestimmt Endbestandswert
- Wird zur Berechnung der Kosten der verkauften Waren verwendet
- Muss genau sein

**Prozess :**
1. Alle Vorratsartikel zählen
2. Jeden Artikel bewerten (zu Kosten)
3. Gesamt-Endbestand berechnen
4. In Berechnung der Kosten der verkauften Waren verwenden

### Vorteile und Nachteile

**Vorteile des periodischen Systems :**
- Einfacher während der Periode
- Weniger detaillierte Aufzeichnungen
- Geeignet für kleine Unternehmen
- Niedrigere Kosten

**Nachteile des periodischen Systems :**
- Kennt Lagerbestandsniveaus während der Periode nicht
- Kosten der verkauften Waren nur am Periodenende
- Erfordert physische Zählung
- Weniger Lagerkontrolle
- Schwerer, Diebstahl zu erkennen

### Luxemburgischer Kontext

**Verwendung des periodischen Systems :**
- Weniger häufig in Luxemburg
- Hauptsächlich sehr kleine Unternehmen
- Unternehmen mit einfachen Operationen
- Manuelle Buchhaltungssysteme

**Luxemburgische Empfehlung :** Permanentes System für die meisten Unternehmen verwenden aufgrund von :
- MwSt-Compliance-Bedürfnissen
- Besserer Lagerkontrolle
- Mehreren MwSt-Sätzen
- Modernen Buchhaltungssystemen

### Luxemburg-Compliance-Hinweis

Wenn periodisches System in Luxemburg verwendet wird :
- Muss weiterhin PCN-Klassifizierungen befolgen
- Muss Vorräte ordnungsgemäß bewerten
- Muss Kosten der verkauften Waren genau berechnen
- Physische Zählungen müssen dokumentiert werden
- Muss MwSt-Anforderungen einhalten
- Muss genaue Jahresabschlüsse einreichen

---

