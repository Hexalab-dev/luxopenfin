---
id: volume2-chapter-21-section-21-5
title: "21.5 Buchungssätze für ein Prozesskostenrechnungssystem vorbereiten"
sidebar_position: 6
slug: /volume2/chapter-21/section-21-5
---

# 21.5 Buchungssätze für ein Prozesskostenrechnungssystem vorbereiten

### Buchungssatzfluss

Die Prozesskostenrechnung erfordert Buchungssätze, um Kosten zu erfassen, während sie durch den Produktionsprozess fließen. Die Sätze unterscheiden sich von der Auftragskostenrechnung, da Kosten nach Prozess und nicht nach Auftrag akkumuliert werden.

### 1. Rohstoffe kaufen

**Transaktion :** Materialien für Produktion kaufen

**Buchungssatz :**
```
301    Rohstoffbestand              €5 000
421611 MwSt erstattungsfähig         850
   44111  Verbindlichkeiten                        €5 850
Zum Erfassen des Einkaufs von Rohstoffen
```

**PCN-Konten :**
- 301 : Rohstoffe (Klasse 3)
- 421611 : MwSt erstattungsfähig (Klasse 4)
- 44111 : Verbindlichkeiten (Klasse 4)

### 2. Materialien für Produktion ausgeben (Prozess 1)

**Transaktion :** Materialien an Mischabteilung ausgeben

**Buchungssatz :**
```
311    Unfertige Erzeugnisse - Mischen       €4 000
   301    Rohstoffbestand                                  €4 000
Zum Erfassen der an Mischabteilung ausgegebenen Materialien
```

**PCN-Konto :**
- 311 : Unfertige Erzeugnisse (Klasse 3)
- Kann Unterkonten verwenden : 310001 (Mischen), 310002 (Backen), usw.

### 3. Direkte Arbeit erfassen (Prozess 1)

**Transaktion :** Direkte Arbeit in Mischabteilung verursachen

**Buchungssatz :**
```
311    Unfertige Erzeugnisse - Mischen       €1 500
   4714   Gehälter zu zahlen                          €1 500
Zum Erfassen der direkten Arbeit in Mischabteilung
```

### 4. Fertigungsgemeinkosten verursachen

**Transaktion :** Fabrikmiete zahlen (Gemeinkosten)

**Buchungssatz :**
```
MOH    Fertigungsgemeinkosten         €2 000
   5131   Kasse                                      €2 000
Zum Erfassen tatsächlicher Fertigungsgemeinkosten
```

**PCN-Konto :**
- MOH : Fertigungsgemeinkosten (cost-accounting clearing account outside the PCN)

### 5. Fertigungsgemeinkosten anwenden

**Transaktion :** Gemeinkosten auf Mischabteilung anwenden (basierend auf Zuteilung)

**Buchungssatz :**
```
311    Unfertige Erzeugnisse - Mischen       €1 200
   MOH    Fertigungsgemeinkosten                              €1 200
Zum Anwenden von Gemeinkosten auf Mischabteilung
```

### 6. Von Prozess 1 zu Prozess 2 übertragen

**Transaktion :** Abgeschlossene Einheiten von Mischen an Backabteilung übertragen

**Buchungssatz :**
```
311    Unfertige Erzeugnisse - Backen       €6 700
   311    Unfertige Erzeugnisse - Mischen                 €6 700
Zum Übertragen von Kosten von Mischen an Backabteilung
(€4 000 Materialien + €1 500 Arbeit + €1 200 Gemeinkosten)
```

**Hinweis :** In der Praxis könnten Sie separate Konten oder Unterkonten für jede Abteilung verwenden.

### 7. Kosten in Prozess 2 hinzufügen

**Transaktion :** Materialien, Arbeit und Gemeinkosten in Backabteilung hinzufügen

**Buchungssätze :**
```
311    Unfertige Erzeugnisse - Backen       €800
   301    Rohstoffbestand                                    €800
Zum Erfassen der in Backabteilung hinzugefügten Materialien

311    Unfertige Erzeugnisse - Backen       €1 000
   4714   Gehälter zu zahlen                          €1 000
Zum Erfassen der direkten Arbeit in Backabteilung

311    Unfertige Erzeugnisse - Backen       €600
   MOH    Fertigungsgemeinkosten                              €600
Zum Anwenden von Gemeinkosten auf Backabteilung
```

### 8. An Fertige Erzeugnisse übertragen

**Transaktion :** Abgeschlossene Einheiten von Backen an Fertige Erzeugnisse übertragen

**Buchungssatz :**
```
321    Fertige Erzeugnisse                 €9 100
   311    Unfertige Erzeugnisse - Backen                 €9 100
Zum Übertragen abgeschlossener Einheiten an Fertige Erzeugnisse
(€6 700 übertragen + €800 Materialien + €1 000 Arbeit + €600 Gemeinkosten)
```

**PCN-Konto :**
- 321 : Fertige Erzeugnisse (Klasse 3)

### 9. Fertige Erzeugnisse verkaufen

**Transaktion :** 800 Einheiten für €12 000 (ohne MwSt) verkaufen, MwSt 17%

**Buchungssätze (Zwei) :**

**Satz 1 : Verkauf erfassen**
```
5131   Kasse (oder 4011   Forderungen)   €14 040
   7061   Umsatzerlöse                          €12 000
   461411 MwSt zu zahlen                              €2 040
Zum Erfassen des Verkaufs von Fertigen Erzeugnissen
```

**Satz 2 : Herstellungskosten erfassen**
```
607    Herstellungskosten             €9 100
   321    Fertige Erzeugnisse                          €9 100
Zum Erfassen der Herstellungskosten
(800 Einheiten × €11,375 Durchschnittskosten)
```

**PCN-Konten :**
- 5131 : Kasse (Klasse 5)
- 4011 : Forderungen (Klasse 4)
- 7061 : Umsatzerlöse (Klasse 7)
- 461411 : MwSt zu zahlen (Klasse 4)
- 607 : Kosten der verkauften Fertigprodukte (Klasse 6)
- 321 : Fertige Erzeugnisse (Klasse 3)

### Vollständiges Beispiel : Monat der Produktion

**Luxemburgisches Lebensmittelverarbeitungsunternehmen - November :**

**1. Nov : Materialien kaufen**
```
301    Rohstoffe                  €10 000
421611 MwSt erstattungsfähig         1 700
   44111  Verbindlichkeiten                        €11 700
```

**1-30. Nov : Materialien an Prozess 1 ausgeben**
```
311    Unfertige Erzeugnisse - Prozess 1    €8 000
   301    Rohstoffe                            €8 000
```

**1-30. Nov : Direkte Arbeit in Prozess 1**
```
311    Unfertige Erzeugnisse - Prozess 1    €3 000
   4714   Gehälter zu zahlen                          €3 000
```

**1-30. Nov : Gemeinkosten auf Prozess 1 anwenden**
```
311    Unfertige Erzeugnisse - Prozess 1    €2 000
   MOH    Fertigungsgemeinkosten                              €2 000
```

**30. Nov : Von Prozess 1 zu Prozess 2 übertragen**
```
311    Unfertige Erzeugnisse - Prozess 2   €13 000
   311    Unfertige Erzeugnisse - Prozess 1              €13 000
```

**1-30. Nov : Kosten in Prozess 2 hinzufügen**
```
311    Unfertige Erzeugnisse - Prozess 2    €1 500
   301    Rohstoffe                            €1 500

311    Unfertige Erzeugnisse - Prozess 2    €2 000
   4714   Gehälter zu zahlen                          €2 000

311    Unfertige Erzeugnisse - Prozess 2    €1 200
   MOH    Fertigungsgemeinkosten                              €1 200
```

**30. Nov : An Fertige Erzeugnisse übertragen**
```
321    Fertige Erzeugnisse                €17 700
   311    Unfertige Erzeugnisse - Prozess 2              €17 700
```

**30. Nov : 1 000 Einheiten verkaufen**
```
4011   Forderungen           €20 000
   7061   Umsatzerlöse                          €20 000
   461411 MwSt zu zahlen                              €3 400

607    Herstellungskosten            €17 700
   321    Fertige Erzeugnisse                          €17 700
```

### Buchhaltung für Anfang Unfertige Erzeugnisse

Wenn es Anfang Unfertige Erzeugnisse gibt, werden Kosten mit aktuellen Kosten unter Verwendung der gewichteten-Durchschnitts-Methode kombiniert.

**Beispiel :**
- UEF Anfang : €2 000
- Aktuelle Kosten : €13 000
- Gesamtkosten : €15 000
- Äquivalenzmengen : 1 200
- Kosten pro Einheit : €15 000 ÷ 1 200 = €12,50

### Luxemburgische Compliance-Hinweis

In Luxemburg :
- Ordentliche PCN-Konten müssen verwendet werden
- Unfertige Erzeugnisse-Konten für jede Abteilung
- Kostenflüsse müssen ordnungsgemäß erfasst werden
- Bestandsbewertungen unterstützen
- Prozesskostenaufzeichnungen führen
- MwSt korrekt behandelt
- Herstellungskosten ordnungsgemäß berechnet

### Nachdenken

Wie unterscheiden sich Buchungssätze in der Prozesskostenrechnung von der Auftragskostenrechnung? Warum sind die Sätze anders strukturiert?

---

