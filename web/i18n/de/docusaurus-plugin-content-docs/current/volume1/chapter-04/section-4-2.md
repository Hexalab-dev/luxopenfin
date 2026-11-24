---
id: volume1-chapter-04-section-4-2
title: "4.2 Den Anpassungsprozess diskutieren und gängige Arten von Anpassungsbuchungen veranschaulichen"
sidebar_position: 3
slug: /volume1/chapter-04/section-4-2
---

# 4.2 Den Anpassungsprozess diskutieren und gängige Arten von Anpassungsbuchungen veranschaulichen

### Arten von Anpassungsbuchungen

Es gibt vier Hauptarten von Anpassungsbuchungen:

1. **Vorausbezahlte Aufwendungen** (Rechnungsabgrenzungsposten)
2. **Nicht verdiente Erträge** (Rechnungsabgrenzungsposten)
3. **Abgegrenzte Aufwendungen** (Abgegrenzte Verbindlichkeiten)
4. **Abgegrenzte Erträge** (Abgegrenzte Vermögenswerte)

Zusätzlich gibt es:
5. **Abschreibung** (spezielle Art von vorausbezahlten Aufwendungen)
6. **Forderungsausfälle** (Wertberichtigung auf Forderungen)

Lassen Sie uns jeden Typ im Detail untersuchen.

### Typ 1: Vorausbezahlte Aufwendungen (Rechnungsabgrenzungsposten)

**Definition:** Im Voraus gezahlte Aufwendungen, die zukünftigen Perioden zugutekommen.

**Beispiele:**
- Vorausbezahlte Versicherung
- Vorausbezahlte Miete
- Vorräte auf Lager
- Vorausbezahlte Werbung

**Erstbuchung:** Wird als **Vermögenswert** erfasst, wenn gezahlt

**Anpassungsbuchung:** Übertragen des verwendeten/abgelaufenen Teils auf **Aufwand**

**Beispiel 1: Vorausbezahlte Versicherung**

**Situation:** Marie zahlt am 1. Januar 2024 1.200 € für ein Jahr Versicherung. Die Police deckt den Zeitraum vom 1. Januar bis 31. Dezember.

**Erstbuchung (1. Januar):**
```
481    Vorausbezahlte Versicherung (Vermögenswert)    €1,200
5131   Kasse                                      €1,200
Zahlung der Jahresversicherung buchen
```

**Anpassungsbuchung (Ende jedes Monats):**
Jeden Monat laufen 100 € (1.200 € ÷ 12 Monate) ab und werden zu einem Aufwand.

**Anpassungsbuchung (Ende November):**
```
614    Versicherungsaufwand            €100
481    Vorausbezahlte Versicherung            €100
Versicherungsaufwand für November buchen
(€1,200 ÷ 12 Monate = €100/Monat)
```

**PCN-Konten:**
- 614: Versicherungsaufwand (Klasse 6)
- 481: Rechnungsabgrenzungsposten (Klasse 4) oder als 614 mit separater Nachverfolgung

**Nach Anpassung:**
- Vorausbezahlte Versicherung (Vermögenswert): 200 € verbleibend (1.200 € - 1.000 € verwendet)
- Versicherungsaufwand: 100 € für November

**Beispiel 2: Vorausbezahlte Miete**

**Situation:** Das Restaurant zahlt am 1. November 2.400 € für drei Monate Miete im Voraus.

**Erstbuchung (1. November):**
```
481    Vorausbezahlte Miete (Vermögenswert)         €2,400
5131   Kasse                                      €2,400
Vorauszahlung von drei Monaten Miete buchen
```

**Anpassungsbuchung (Ende November):**
Ein Monat (800 €) wurde verwendet.

```
6111   Mietaufwand                 €800
481    Vorausbezahlte Miete                             €800
Mietaufwand für November buchen
(€2,400 ÷ 3 Monate = €800/Monat)
```

**PCN-Konten:**
- 6111: Mietaufwand (Klasse 6)
- 481: Rechnungsabgrenzungsposten (Klasse 4)

### Typ 2: Nicht verdiente Erträge (Rechnungsabgrenzungsposten)

**Definition:** Im Voraus erhaltenes Geld für Dienstleistungen, die in Zukunft erbracht werden.

**Beispiele:**
- Vorauszahlungen für Dienstleistungen
- Verkaufte Geschenkgutscheine
- Im Voraus erhaltene Abonnementeinnahmen
- Erhaltene Anzahlungen

**Erstbuchung:** Wird als **Verbindlichkeit** erfasst, wenn Geld erhalten wird

**Anpassungsbuchung:** Übertragen des verdienten Teils auf **Ertrag**

**Beispiel: Nicht verdiente Dienstleistungserlöse**

**Situation:** Das Restaurant erhält am 1. November 3.000 € für Catering-Dienstleistungen, die über drei Monate (November, Dezember, Januar) erbracht werden.

**Erstbuchung (1. November):**
```
5131   Kasse                         €3,000
482    Nicht verdiente Erträge (Verbindlichkeit)            €3,000
Vorauszahlung für Catering-Dienstleistungen buchen
```

**Anpassungsbuchung (Ende November):**
Ein Monat (1.000 €) wurde verdient.

```
482    Nicht verdiente Erträge             €1,000
703    Dienstleistungserlöse                          €1,000
Im November verdiente Erträge buchen
(€3,000 ÷ 3 Monate = €1,000/Monat)
```

**PCN-Konten:**
- 482: Nicht verdiente Erträge/Rechnungsabgrenzungsposten (Klasse 4)
- 703: Dienstleistungserlöse (Klasse 7)

**Nach Anpassung:**
- Nicht verdiente Erträge (Verbindlichkeit): 2.000 € verbleibend
- Dienstleistungserlöse: 1.000 € im November verdient

### Typ 3: Abgegrenzte Aufwendungen (Abgegrenzte Verbindlichkeiten)

**Definition:** Entstandene, aber noch nicht gezahlte oder erfasste Aufwendungen.

**Beispiele:**
- Abgegrenzte Gehälter/Löhne
- Abgegrenzte Zinsen
- Abgegrenzte Nebenkosten
- Abgegrenzte Steuern

**Erstbuchung:** Keine Buchung vorgenommen (Aufwand noch nicht erfasst)

**Anpassungsbuchung:** **Aufwand** und **Verbindlichkeit** erfassen

**Beispiel 1: Abgegrenzte Gehälter**

**Situation:** Das Restaurant zahlt Mitarbeiter alle zwei Wochen. Die Lohnperiode endet am 30. November, aber Mitarbeiter werden erst am 5. Dezember bezahlt. Gehälter für die letzte Woche November betragen insgesamt 1.500 €.

**Anpassungsbuchung (Ende November):**
```
6211   Gehaltsaufwand             €1,500
4714   Gehaltsverbindlichkeiten (Verbindlichkeit)            €1,500
Abgegrenzte Gehälter für letzte Woche November buchen
```

**PCN-Konten:**
- 6211: Gehaltsaufwand (Klasse 6)
- 4714: Gehaltsverbindlichkeiten (Klasse 4)

**Zahlungsbuchung (5. Dezember):**
```
4714   Gehaltsverbindlichkeiten             €1,500
5131   Kasse                                      €1,500
Zahlung abgegrenzter Gehälter buchen
```

**Beispiel 2: Abgegrenzte Zinsen**

**Situation:** Das Restaurant hat ein Bankdarlehen von 20.000 € zu 6 % Jahreszins. Zinsen werden vierteljährlich gezahlt, aber wir müssen Zinsen für November abgrenzen.

**Berechnung:**
- Jahreszinsen: 20.000 € × 6 % = 1.200 €
- Monatszinsen: 1.200 € ÷ 12 = 100 €

**Anpassungsbuchung (Ende November):**
```
6552   Zinsaufwand             €100
4718   Zinsverbindlichkeiten (Verbindlichkeit)             €100
Abgegrenzte Zinsen für November buchen
```

**PCN-Konten:**
- 6552: Zinsaufwand (Klasse 6)
- 4718: Sonstige Verbindlichkeiten (Klasse 4) oder spezifisches Zinsverbindlichkeitskonto

### Typ 4: Abgegrenzte Erträge (Abgegrenzte Vermögenswerte)

**Definition:** Verdiente, aber noch nicht erhaltene oder erfasste Erträge.

**Beispiele:**
- Erbrachte, aber noch nicht abgerechnete Dienstleistungen
- Verdiente, aber noch nicht erhaltene Zinsen
- Verdiente, aber noch nicht eingenommene Miete

**Erstbuchung:** Keine Buchung vorgenommen (Ertrag noch nicht erfasst)

**Anpassungsbuchung:** **Ertrag** und **Vermögenswert** (Forderung) erfassen

**Beispiel: Abgegrenzte Dienstleistungserlöse**

**Situation:** Das Restaurant erbringt im November Catering-Dienstleistungen, wird den Kunden aber erst im Dezember abrechnen. Die Dienstleistung ist 2.000 € wert.

**Anpassungsbuchung (Ende November):**
```
4011   Forderungen aus Lieferungen und Leistungen (Vermögenswert)  €2,000
703    Dienstleistungserlöse                          €2,000
Verdiente, aber noch nicht abgerechnete Erträge buchen
```

**PCN-Konten:**
- 4011: Forderungen aus Lieferungen und Leistungen (Klasse 4)
- 703: Dienstleistungserlöse (Klasse 7)

**Abrechnungsbuchung (Dezember):**
```
4011   Forderungen aus Lieferungen und Leistungen          €2,000
703    Dienstleistungserlöse                          €2,000
(Bereits erfasst, oder Rechnung erstellen)
```

### Typ 5: Abschreibung

**Definition:** Systematische Verteilung der Kosten eines langfristigen Vermögenswerts über seine Nutzungsdauer.

**Warum es benötigt wird:** Vermögenswerte wie Ausrüstung verlieren im Laufe der Zeit an Wert. Die Abschreibung ordnet diese Kosten den Perioden zu, die von dem Vermögenswert profitieren.

**Merkmale:**
- Nicht-kassenwirksamer Aufwand
- Reduziert den Vermögenswert (über kumulierte Abschreibung)
- Ordnet Aufwand den durch Vermögenswert generierten Erträgen zu

**Beispiel: Ausrüstungsabschreibung**

**Situation:** Das Restaurant hat Ausrüstung im Wert von 30.000 € mit einer Nutzungsdauer von 5 Jahren (60 Monate). Verwendung der linearen Abschreibung.

**Berechnung:**
- Monatliche Abschreibung: 30.000 € ÷ 60 Monate = 500 €/Monat

**Anpassungsbuchung (Ende jedes Monats):**
```
633    Abschreibungsaufwand         €500
2229   Kumulierte Abschreibung - Ausrüstung     €500
Monatliche Abschreibung auf Ausrüstung buchen
```

**PCN-Konten:**
- 633: Abschreibungsaufwand (Klasse 6)
- 2229: Kumulierte Abschreibung - Ausrüstung (Klasse 2)

**Hinweis:** Das Ausrüstungskonto (222) bleibt zu Anschaffungskosten. Kumulierte Abschreibung ist ein Gegenaktivkonto, das den Buchwert des Vermögenswerts reduziert.

**Bilanzdarstellung:**
```
Ausrüstung (222)                  €30,000
Abzüglich: Kumulierte Abschreibung      (5,500)  (11 Monate × €500)
Buchwert                          €24,500
```

### Typ 6: Forderungsausfälle (Wertberichtigung auf Forderungen)

**Definition:** Geschätzter Betrag der Forderungen, der möglicherweise nicht eingezogen werden kann.

**Warum es benötigt wird:** Einige Kunden zahlen möglicherweise nicht. Die Rückstellungsmethode schätzt uneinbringliche Forderungen und ordnet den Aufwand der Verkaufsperiode zu.

**Beispiel: Wertberichtigung auf Forderungen**

**Situation:** Das Restaurant hat 10.000 € in Forderungen. Basierend auf vergangenen Erfahrungen können 2 % uneinbringlich sein.

**Berechnung:**
- Geschätzte Forderungsausfälle: 10.000 € × 2 % = 200 €

**Anpassungsbuchung (Ende der Periode):**
```
6351   Forderungsausfälle             €200
4019   Wertberichtigung auf Forderungen          €200
Geschätzte uneinbringliche Forderungen buchen
```

**PCN-Konten:**
- 6351: Forderungsausfälle (Klasse 6)
- 4019: Wertberichtigung auf Forderungen (Klasse 4 - Gegenaktivkonto)

**Bilanzdarstellung:**
```
Forderungen aus Lieferungen und Leistungen (4011)        €10,000
Abzüglich: Wertberichtigung auf Forderungen (200)
Nettoforderungen             €9,800
```

### Zusammenfassung der Arten von Anpassungsbuchungen

| Typ | Erstbuchung | Anpassungsbuchung | Betroffene Konten |
|------|-------------|-------------------|-------------------|
| Vorausbezahlte Aufwendungen | Vermögenswert | Vermögenswert ↓, Aufwand ↑ | Vermögenswert, Aufwand |
| Nicht verdiente Erträge | Verbindlichkeit | Verbindlichkeit ↓, Ertrag ↑ | Verbindlichkeit, Ertrag |
| Abgegrenzte Aufwendungen | Keine | Aufwand ↑, Verbindlichkeit ↑ | Aufwand, Verbindlichkeit |
| Abgegrenzte Erträge | Keine | Vermögenswert ↑, Ertrag ↑ | Vermögenswert, Ertrag |
| Abschreibung | Vermögenswert (zu Kosten) | Aufwand ↑, Gegenaktivkonto ↑ | Aufwand, Kumulierte Abschreibung |
| Forderungsausfälle | Keine | Aufwand ↑, Gegenaktivkonto ↑ | Aufwand, Wertberichtigung |

### Luxemburg-Compliance-Hinweis

Alle Anpassungsbuchungen in Luxemburg müssen:
- Periodenrechnung befolgen
- Ordnungsgemäße PCN-Kontenklassifizierungen verwenden
- Durch Berechnungen unterstützt werden
- Dokumentiert und aufbewahrt werden
- Vor der Einreichung von Jahresabschlüssen vorgenommen werden

### Nachdenken

Ein Unternehmen zahlt am 1. Oktober 6.000 € für sechs Monate Miete im Voraus. Welche Anpassungsbuchung ist am Ende von Oktober erforderlich? Welche Konten sind betroffen, und welche sind die PCN-Kontonummern?

---

