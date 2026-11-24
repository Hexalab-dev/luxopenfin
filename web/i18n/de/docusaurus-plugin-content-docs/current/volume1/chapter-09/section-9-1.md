---
id: volume1-chapter-09-section-9-1
title: "9.1 Das Prinzip der Umsatzerlöserfassung erklären und wie es sich auf aktuelle und zukünftige Verkaufs- und Kaufgeschäfte bezieht"
sidebar_position: 2
slug: /volume1/chapter-09/section-9-1
---

# 9.1 Das Prinzip der Umsatzerlöserfassung erklären und wie es sich auf aktuelle und zukünftige Verkaufs- und Kaufgeschäfte bezieht

### Prinzip der Umsatzerlöserfassung

Das **Prinzip der Umsatzerlöserfassung** besagt, dass Umsatzerlöse erfasst (gebucht) werden sollten, wenn sie verdient werden, unabhängig davon, wann Bargeld erhalten wird.

**Schlüsselkonzept :** Umsatzerlöse werden verdient, wenn Waren geliefert oder Dienstleistungen erbracht werden, nicht unbedingt, wenn die Zahlung erhalten wird.

### Wann werden Umsatzerlöse verdient ?


**Abbildung 9.1:** Receivables Lifecycle

```
Sale on Credit
     │
     ↓
Erträge Recognized
(Gewinn- und Verlustrechnung)
     │
     ↓
Forderungen Created
(Bilanz Asset)
     │
     ↓
    ┌─┴─┐
    │   │
Collect  Uncollectible
     │   │
     │   ↓
     │ Bad Debt Expense
     │ (Gewinn- und Verlustrechnung)
     │
     ↓
Liquide Mittel Received
(Bilanz)
```

*Alternativtext: Flowchart showing the receivables lifecycle: starting with a sale on credit, revenue is recognized on the income statement, accounts receivable is created on the balance sheet, then either cash is collected (completing the cycle) or the account becomes uncollectible resulting in bad debt expense, demonstrating the flow from sale to collection or write-off.*

**Für Warenverkäufe :**
- Umsatzerlöse werden verdient, wenn Waren an den Kunden geliefert werden
- Eigentum wird auf den Kunden übertragen
- Kunde hat Zahlungspflicht

**Für Dienstleistungen :**
- Umsatzerlöse werden verdient, wenn Dienstleistungen erbracht werden
- Dienstleistung ist vollständig oder im Wesentlichen vollständig
- Kunde hat Zahlungspflicht

**Für langfristige Projekte :**
- Umsatzerlöse können im Zeitverlauf erfasst werden (Fertigstellungsgrad)
- Oder bei Fertigstellung (Fertigstellungsmethode)

### Umsatzerlöserfassung und Forderungen

**Kreditverkäufe :**
- Umsatzerlöse werden erfasst, wenn der Verkauf getätigt wird (Waren geliefert oder Dienstleistung erbracht)
- Forderungen aus Lieferungen und Leistungen werden erstellt (Vermögen)
- Bargeld wird später erhalten

**Beispiel :**
- Unternehmen verkauft €1,000 Waren auf Kredit am 15. November
- Umsatzerlöse erfasst : 15. November (€1,000)
- Forderungen aus Lieferungen und Leistungen erstellt : 15. November (€1,000)
- Bargeld erhalten : 10. Dezember (€1,000)

**Journalbuchung (Verkauf) :**
```
4011   Forderungen aus Lieferungen und Leistungen        €1,000
7061   Umsatzerlöse                          €1,000
Zur Erfassung des Kreditverkaufs
```

**Journalbuchung (Einzug) :**
```
5131   Kasse                        €1,000
4011   Forderungen aus Lieferungen und Leistungen                                €1,000
Zur Erfassung des Einzugs der Forderung
```

### Barverkäufe vs. Kreditverkäufe

**Barverkäufe :**
- Umsatzerlöse werden erfasst, wenn Bargeld erhalten wird
- Keine Forderung erstellt
- Sofortiger Cashflow

**Kreditverkäufe :**
- Umsatzerlöse werden erfasst, wenn der Verkauf getätigt wird
- Forderung erstellt
- Bargeld wird später erhalten

**Beide folgen dem Prinzip der Umsatzerlöserfassung :** Umsatzerlöse werden erfasst, wenn sie verdient werden (Verkauf getätigt), nicht wenn Bargeld erhalten wird.

### Zukünftige Verkaufs- und Kaufgeschäfte

**Zukünftige Verkäufe (Nicht verdiente Umsatzerlöse) :**
- Bargeld erhalten, bevor Umsatzerlöse verdient werden
- Als Verbindlichkeit erfasst (Nicht verdiente Umsatzerlöse)
- Umsatzerlöse werden erfasst, wenn sie verdient werden

**Beispiel :**
- Kunde zahlt €500 im Voraus für Dienstleistungen
- Bargeld erhalten : 1. November
- Dienstleistungen erbracht : 15. Dezember

**Journalbuchung (Bargeld erhalten) :**
```
5131   Kasse                        €500
482    Nicht verdiente Umsatzerlöse                            €500
Zur Erfassung der Vorauszahlung
```

**Journalbuchung (Umsatzerlöse erfasst) :**
```
482    Nicht verdiente Umsatzerlöse           €500
703    Dienstleistungsumsatz                            €500
Zur Erfassung der Umsatzerlöse, wenn Dienstleistungen erbracht werden
```

**Zukünftige Käufe (Vorausbezahlte Ausgaben) :**
- Bargeld gezahlt, bevor Ausgabe anfällt
- Als Vermögen erfasst (Vorausbezahlte Ausgabe)
- Ausgabe wird erfasst, wenn sie anfällt

**Beispiel :**
- Unternehmen zahlt €1,200 für Jahresversicherung
- Bargeld gezahlt : 1. Januar
- Ausgabe monatlich erfasst : €100 pro Monat

**Journalbuchung (Bargeld gezahlt) :**
```
481    Vorausbezahlte Versicherung          €1,200
5131   Kasse                                    €1,200
Zur Erfassung der vorausbezahlten Versicherung
```

**Journalbuchung (Ausgabe erfasst) :**
```
614    Versicherungsausgabe          €100
481    Vorausbezahlte Versicherung                      €100
Zur Erfassung der Versicherungsausgabe für den Monat
```

### Luxemburgische MwSt-Überlegungen

**MwSt bei Kreditverkäufen :**
- MwSt ist fällig, wenn der Verkauf getätigt wird (Umsatzerlöse erfasst)
- Nicht wenn Bargeld erhalten wird
- MwSt-Verbindlichkeit wird zum Zeitpunkt des Verkaufs erstellt

**Beispiel :**
- Kreditverkauf : €1,000 (ohne MwSt), MwSt 17%
- Umsatzerlöse : €1,000
- MwSt-Verbindlichkeit : €170
- Forderungen aus Lieferungen und Leistungen : €1,170

**Journalbuchung :**
```
4011   Forderungen aus Lieferungen und Leistungen        €1,170
7061   Umsatzerlöse                          €1,000
461411 MwSt-Verbindlichkeit                                  €170
Zur Erfassung des Kreditverkaufs mit MwSt
```

**MwSt bei uneinbringlichen Forderungen :**
- Wenn Forderung uneinbringlich wird, kann MwSt erstattungsfähig sein
- Muss luxemburgische MwSt-Regeln befolgen
- Ordentliche Dokumentation erforderlich

### Luxemburgische Compliance-Hinweis

Umsatzerlöserfassung in Luxemburg muss :
- Rechnungslegungsstandards befolgen
- PCN-Anforderungen einhalten
- MwSt zum Zeitpunkt des Verkaufs erfassen
- Forderungen ordnungsgemäß klassifizieren (Klasse 4)
- Ordentliche Dokumentation führen
- Steuerberichterstattung unterstützen

### Nachdenken

Warum ist es wichtig, Umsatzerlöse zu erfassen, wenn sie verdient werden, anstatt wenn Bargeld erhalten wird ? Wie wirkt sich dies auf Forderungen aus Lieferungen und Leistungen aus ?

---

