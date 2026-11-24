---
id: volume2-chapter-20-section-20-7
title: "20.7 Buchungssätze für ein Auftragskostenrechnungssystem vorbereiten"
sidebar_position: 8
slug: /volume2/chapter-20/section-20-7
---

# 20.7 Buchungssätze für ein Auftragskostenrechnungssystem vorbereiten

### Vollständiger Buchungssatzfluss

Die Auftragskostenrechnung erfordert Buchungssätze während des gesamten Produktions- und Verkaufsprozesses. Hier ist der vollständige Fluss mit Buchungssätzen.

### 1. Rohstoffe kaufen

**Transaktion :** Materialien auf Rechnung kaufen

**Buchungssatz :**
```
301    Rohstoffbestand              €5.000
421611 MwSt erstattungsfähig         850
   44111  Verbindlichkeiten                        €5.850
Zum Erfassen des Einkaufs von Rohstoffen
```

**PCN-Konten :**
- 301 : Rohstoffe (Klasse 3)
- 421611 : MwSt erstattungsfähig (Klasse 4)
- 44111 : Verbindlichkeiten (Klasse 4)

### 2. Materialien für Produktion ausgeben

**Transaktion :** Materialien für Auftrag #101 ausgeben

**Buchungssatz :**
```
311    Unfertige Erzeugnisse - Auftrag #101     €400
   301    Rohstoffbestand                                    €400
Zum Erfassen der für Auftrag #101 ausgegebenen Materialien
```

**PCN-Konten :**
- 311 : Unfertige Erzeugnisse (Klasse 3)
- 301 : Rohstoffe (Klasse 3)

### 3. Direkte Arbeit erfassen

**Transaktion :** Direkte Arbeitskosten für Auftrag #101 verursachen

**Buchungssatz :**
```
311    Unfertige Erzeugnisse - Auftrag #101     €290
   4714   Gehälter zu zahlen                                  €290
Zum Erfassen der direkten Arbeit für Auftrag #101
```

**PCN-Konten :**
- 311 : Unfertige Erzeugnisse (Klasse 3)
- 4714 : Gehälter zu zahlen (Klasse 4)

**Bei Zahlung :**
```
4714   Gehälter zu zahlen               €290
   5131   Kasse                                      €290
Zum Erfassen der Gehaltszahlung
```

### 4. Tatsächliche Fertigungsgemeinkosten verursachen

**Transaktion :** Miete zahlen (Gemeinkosten)

**Buchungssatz :**
```
MOH    Fertigungsgemeinkosten         €500
   5131   Kasse                                      €500
Zum Erfassen tatsächlicher Fertigungsgemeinkosten (Miete)
```

**PCN-Konto :**
- MOH : Fertigungsgemeinkosten (cost-accounting clearing account outside the PCN)

**Andere Gemeinkosten :**
```
MOH    Fertigungsgemeinkosten         €200
   5131   Kasse                                      €200
Zum Erfassen von Nebenkosten (Gemeinkosten)

MOH    Fertigungsgemeinkosten         €150
   2229   Kumulierte Abschreibung                 €150
Zum Erfassen von Abschreibung (Gemeinkosten)
```

### 5. Fertigungsgemeinkosten anwenden

**Transaktion :** Gemeinkosten auf Auftrag #101 anwenden (10 Stunden × €15/Stunde = €150)

**Buchungssatz :**
```
311    Unfertige Erzeugnisse - Auftrag #101     €150
   MOH    Fertigungsgemeinkosten                              €150
Zum Anwenden von Gemeinkosten auf Auftrag #101
```

**Hinweis :** Dies belastet Fertigungsgemeinkosten (angewandt) und belastet Unfertige Erzeugnisse.

### 6. Auftrag abschließen

**Transaktion :** Auftrag #101 ist abgeschlossen

**Buchungssatz :**
```
321    Fertige Erzeugnisse                 €840
   311    Unfertige Erzeugnisse - Auftrag #101                €840
Zum Erfassen des Abschlusses von Auftrag #101
(€400 Materialien + €290 Arbeit + €150 Gemeinkosten)
```

**PCN-Konten :**
- 321 : Fertige Erzeugnisse (Klasse 3)
- 311 : Unfertige Erzeugnisse (Klasse 3)

### 7. Auftrag verkaufen

**Transaktion :** Auftrag #101 für €1.500 (ohne MwSt) verkaufen, MwSt 17%

**Buchungssätze (Zwei) :**

**Satz 1 : Verkauf erfassen**
```
4011   Forderungen                       €1.755
   7061   Umsatzerlöse (€1.500)                     €1.500
   461411 MwSt zu zahlen (17%)                         €255
Zum Erfassen des Verkaufs von Auftrag #101
```

**Satz 2 : Herstellungskosten erfassen**
```
607    Herstellungskosten                €840
   321    Fertige Erzeugnisse                            €840
Zum Erfassen der Kosten von verkauftem Auftrag #101
```

**PCN-Konten :**
- 4011 : Forderungen (Klasse 4)
- 7061 : Umsatzerlöse (Klasse 7)
- 461411 : MwSt zu zahlen (Klasse 4)
- 607 : Herstellungskosten (Klasse 6)
- 321 : Fertige Erzeugnisse (Klasse 3)

### 8. Unterangewandte/überangewandte Gemeinkosten abschließen

**Transaktion :** Unterangewandte Gemeinkosten von €200 abschließen

**Buchungssatz :**
```
607    Herstellungskosten                €200
   MOH    Fertigungsgemeinkosten                              €200
Zum Abschließen unterangewandter Gemeinkosten
```

### Vollständiges Beispiel : Mehrere Transaktionen

**Maries Catering - November-Transaktionen :**

**1. Nov : Materialien kaufen**
```
301    Rohstoffe                      €2.000
421611 MwSt erstattungsfähig           340
   44111  Verbindlichkeiten                        €2.340
```

**5. Nov : Materialien für Auftrag #101 ausgeben**
```
311    Unfertige Erzeugnisse - Auftrag #101     €400
   301    Rohstoffe                                        €400
```

**6. Nov : Materialien für Auftrag #102 ausgeben**
```
311    Unfertige Erzeugnisse - Auftrag #102     €1.750
   301    Rohstoffe                                      €1.750
```

**10. Nov : Direkte Arbeit für Auftrag #101**
```
311    Unfertige Erzeugnisse - Auftrag #101     €290
   4714   Gehälter zu zahlen                              €290
```

**12. Nov : Direkte Arbeit für Auftrag #102**
```
311    Unfertige Erzeugnisse - Auftrag #102     €910
   4714   Gehälter zu zahlen                              €910
```

**15. Nov : Gemeinkosten anwenden (50% der Arbeit)**
```
311    Unfertige Erzeugnisse - Auftrag #101     €145
311    Unfertige Erzeugnisse - Auftrag #102      455
   MOH    Fertigungsgemeinkosten                              €600
```

**20. Nov : Auftrag #101 abschließen**
```
321    Fertige Erzeugnisse                 €835
   311    Unfertige Erzeugnisse - Auftrag #101                €835
```

**25. Nov : Auftrag #101 verkaufen**
```
4011   Forderungen                       €1.755
   7061   Umsatzerlöse                                  €1.500
   461411 MwSt zu zahlen                                  €255

607    Herstellungskosten                €835
   321    Fertige Erzeugnisse                            €835
```

**30. Nov : Tatsächliche Gemeinkosten**
```
MOH    Fertigungsgemeinkosten         €12.000
   5131   Kasse (verschiedene)                        €12.000
```

**30. Nov : Unterangewandte Gemeinkosten abschließen (€12.000 tatsächlich - €10.000 angewandt = €2.000)**
```
607    Herstellungskosten                €2.000
   MOH    Fertigungsgemeinkosten                              €2.000
```

### Luxemburgische Compliance-Hinweis

In Luxemburg :
- Ordentliche PCN-Konten müssen verwendet werden
- Buchungssätze müssen genau sein
- Alle Transaktionen mit Dokumentation unterstützen
- MwSt muss korrekt behandelt werden
- Kostenflüsse müssen ordnungsgemäß erfasst werden
- Auftragskostenaufzeichnungen führen

### Nachdenken

Warum gibt es zwei separate Buchungssätze, wenn ein Auftrag verkauft wird? Welche Konten sind betroffen und warum?

---

