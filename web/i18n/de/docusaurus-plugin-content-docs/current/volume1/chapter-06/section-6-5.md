---
id: volume1-chapter-06-section-6-5
title: "6.5 Transaktionen mit den beiden häufig verwendeten Frachtmethoden diskutieren und erfassen"
sidebar_position: 6
slug: /volume1/chapter-06/section-6-5
---

# 6.5 Transaktionen mit den beiden häufig verwendeten Frachtmethoden diskutieren und erfassen

### Fracht eingehend (Transportkosten)

**Fracht eingehend** (auch Transport eingehend genannt) bezieht sich auf die Kosten für den Versand von Waren vom Lieferanten zum Unternehmen.

**Wichtiger Punkt :** Fracht eingehend ist Teil der Vorratskosten, keine separate Aufwendung.

### Zwei Methoden zur Erfassung von Fracht eingehend

1. **In Vorratskonto einschließen** (Bevorzugte Methode)
2. **Separates Fracht eingehend-Konto** (Alternative Methode)

### Methode 1 : In Vorratskonto einschließen

**Wie es funktioniert :**
- Frachtkosten werden direkt zum Vorratskonto hinzugefügt
- Kein separates Frachtkonto
- Einfacher und direkter

**Beispiel :** Kauf von 5.000 € Waren, Zahlung von 200 € Fracht. MwSt 17 % auf Waren, Fracht kann MwSt haben oder nicht.

**Journaleintrag :**
```
361    Vorräte                   €5,200  (€5,000 + €200)
421611 MwSt-Vorsteuer              850   (auf Waren)
44111  Verbindlichkeiten aus L.u.L. (oder 5131   Kasse)            €6,050
Um Kauf einschließlich Fracht eingehend zu erfassen
```

**Vorteile :**
- Einfacher
- Fracht ist Teil der Vorratskosten
- Kein separates Konto zu verfolgen
- Direkte Kostenallokation

**Nachteile :**
- Kann Frachtkosten nicht leicht separat sehen
- Möglicherweise Verfolgung erforderlich, wenn Frachtkosten analysiert werden

### Methode 2 : Separates Fracht eingehend-Konto

**Wie es funktioniert :**
- Frachtkosten in separatem Konto erfasst (6161 : Fracht eingehend)
- Am Periodenende zu Vorräten oder Kosten der verkauften Waren übertragen
- Ermöglicht separate Verfolgung von Frachtkosten

**Beispiel :** Kauf von 5.000 € Waren, Zahlung von 200 € Fracht separat.

**Anfänglicher Kauf :**
```
361    Vorräte                   €5,000
421611 MwSt-Vorsteuer              850
44111  Verbindlichkeiten aus L.u.L.                        €5,850
```

**Frachtzahlung :**
```
6161   Fracht eingehend (Klasse 6)        €200
5131   Kasse (oder 44111  Verbindlichkeiten aus L.u.L.)            €200
Um Fracht eingehend-Kosten zu erfassen
```

**Am Periodenende (oder bei Berechnung der COGS) :**
Fracht zu Vorräten übertragen oder in Kosten der verkauften Waren einschließen :
```
361    Vorräte                   €200
6161   Fracht eingehend                              €200
Um Fracht eingehend zu Vorratskosten zu übertragen
```

**Oder, wenn direkt in COGS eingeschlossen :**
```
607    Kosten der verkauften Waren          €200
6161   Fracht eingehend                              €200
```

**PCN-Konto :**
- 6161 : Fracht eingehend (Klasse 6 - Aufwendung, aber Teil der Vorratskosten)

**Vorteile :**
- Kann Frachtkosten separat verfolgen
- Nützlich für Analyse
- Kann Frachttrends identifizieren

**Nachteile :**
- Komplexer
- Erfordert Übertragung am Periodenende
- Zusätzlicher Schritt in der Buchhaltung

### Luxemburgische MwSt auf Fracht

**MwSt-Behandlung von Fracht :**
- Frachtdienstleistungen haben typischerweise 17 % MwSt
- MwSt auf Fracht ist normalerweise erstattungsfähig (wenn für Geschäft)
- Muss separat erfasst werden, wenn unterschiedlich von Waren-MwSt

**Beispiel :** Kauf von 5.000 € Waren (MwSt 17 %) mit 200 € Fracht (MwSt 17 %).

**Journaleintrag (Methode 1) :**
```
361    Vorräte                   €5,200
421611 MwSt-Vorsteuer              918   (€850 + €34 auf Fracht)
44111  Verbindlichkeiten aus L.u.L.                        €6,118
Um Kauf einschließlich Fracht mit MwSt zu erfassen
```

**MwSt-Berechnung :**
- Waren-MwSt : 5.000 € × 17 % = 850 €
- Fracht-MwSt : 200 € × 17 % = 34 €
- Gesamt-MwSt : 884 €

### Welche Methode verwenden ?

**Methode 1 verwenden (In Vorräte einschließen), wenn :**
- Einfache Operationen
- Frachtkosten relativ gering
- Keine separate Frachtverfolgung erforderlich
- Einfachere Buchhaltung gewünscht

**Methode 2 verwenden (Separates Konto), wenn :**
- Frachtkostenanalyse erforderlich
- Fracht ist erheblich
- Frachttrends verfolgen möchten
- Mehrere Lieferanten mit verschiedenen Frachtbedingungen

**Luxemburgische Empfehlung :** Methode 1 ist im Allgemeinen für Einfachheit bevorzugt, aber Methode 2 kann für Analyse nützlich sein.

### Fracht ausgehend (Lieferung an Kunden)

**Fracht ausgehend** (auch Lieferaufwand genannt) sind die Kosten für den Versand von Waren an Kunden.

**Wichtig :** Fracht ausgehend ist eine **Betriebsaufwendung**, NICHT Teil der Vorratskosten.

**Beispiel :** Zahlung von 50 € für Versand von Waren an Kunden.

**Journaleintrag :**
```
6162   Lieferaufwand (Klasse 6)  €50
5131   Kasse                                      €50
Um Fracht ausgehend (Lieferaufwand) zu erfassen
```

**PCN-Konto :**
- 6162 : Liefer-/Transportaufwand (Klasse 6)

**Hinweis :** Fracht ausgehend ist eine Aufwendung, nicht zu Vorräten oder Kosten der verkauften Waren hinzugefügt.

### Luxemburg-Compliance-Hinweis

Für Fracht eingehend in Luxemburg :
- Fracht ist Teil der Vorratskosten
- MwSt auf Fracht ist normalerweise erstattungsfähig
- Muss ordnungsgemäß dokumentiert werden
- Kann beide Methoden verwenden (Vorräte oder separates Konto)
- Muss in Vorratsbewertung für Jahresabschlüsse eingeschlossen werden

### Nachdenken

Ein Unternehmen kauft 10.000 € Waren und zahlt 500 € Fracht. Sollte die Fracht in die Vorratskosten eingeschlossen oder als separate Aufwendung erfasst werden ? Warum ? Welche PCN-Konten sind beteiligt ?

---

