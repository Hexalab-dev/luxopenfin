---
id: volume1-chapter-15-section-15-4
title: "15.4 Buchungen vorbereiten, um Aufnahme und Ausscheiden eines Partners zu erfassen"
sidebar_position: 5
slug: /volume1/chapter-15/section-15-4
---

# 15.4 Buchungen vorbereiten, um Aufnahme und Ausscheiden eines Partners zu erfassen

### Aufnahme eines neuen Partners

**Methoden :**
- Kauf von bestehendem Partner (kein neues Kapital zur Personengesellschaft)
- Investition in Personengesellschaft (neues Kapital hinzugefügt)
- Kombination (teilweiser Kauf, teilweise Investition)

**Methode 1 : Kauf von bestehendem Partner**
- Neuer Partner kauft Anteil von bestehendem Partner
- Keine Änderung in Personengesellschaftsvermögen
- Nur Kapitalkonten ändern sich

**Beispiel :**
- Partner A verkauft 50% seines Anteils (€30,000) an Partner C
- Partner C zahlt €30,000 an Partner A (nicht an Personengesellschaft)

**Buchung :**
```
1041   Partner A, Kapital         €30,000
1043   Partner C, Kapital                      €30,000
Zur Erfassung der Aufnahme von Partner C (Kauf von Partner A)
```

**Methode 2 : Investition in Personengesellschaft**
- Neuer Partner investiert Kasse/Vermögenswerte
- Personengesellschaft erhält neues Kapital
- Kann Prämie an bestehende Partner oder neuen Partner erfordern

**Beispiel : Neuer Partner investiert zum Buchwert :**
- Neuer Partner C investiert €40,000
- Erhält 1/3 Anteil (Personengesellschaft jetzt €120,000 wert)
- Keine Prämie erforderlich

**Buchung :**
```
5131   Kasse                       €40,000
1043   Partner C, Kapital                      €40,000
Zur Erfassung der Aufnahme von Partner C
```

**Beispiel : Neuer Partner investiert mit Prämie an bestehende Partner :**
- Personengesellschaft wert €100,000 (Partner A : €60,000, Partner B : €40,000)
- Partner C investiert €60,000 für 1/3 Anteil
- Gesamt nach Investition : €160,000
- Partner C sollte haben : €160,000 × 1/3 = €53,333
- Prämie an bestehende Partner : €60,000 - €53,333 = €6,667
- Prämie teilen : Partner A (60%) : €4,000, Partner B (40%) : €2,667

**Buchung :**
```
5131   Kasse                       €60,000
1041   Partner A, Kapital                       €4,000
1042   Partner B, Kapital                       2,667
1043   Partner C, Kapital                       €53,333
Zur Erfassung der Aufnahme von Partner C mit Prämie an bestehende Partner
```

**Beispiel : Neuer Partner investiert mit Prämie an neuen Partner :**
- Personengesellschaft wert €100,000
- Partner C investiert €40,000 für 1/3 Anteil
- Gesamt nach Investition : €140,000
- Partner C sollte haben : €140,000 × 1/3 = €46,667
- Prämie an Partner C : €46,667 - €40,000 = €6,667
- Bestehende Partner reduzieren : Partner A (60%) : €4,000, Partner B (40%) : €2,667

**Buchung :**
```
5131   Kasse                       €40,000
1041   Partner A, Kapital                      (€4,000)
1042   Partner B, Kapital                       (2,667)
1043   Partner C, Kapital                       €46,667
Zur Erfassung der Aufnahme von Partner C mit Prämie an neuen Partner
```

### Ausscheiden eines Partners

**Methoden :**
- Anteil an verbleibende Partner verkaufen (keine Änderung in Personengesellschaftsvermögen)
- Personengesellschaft kauft Partner aus (Personengesellschaft zahlt Partner)
- Vermögenswerte erhalten (kann nicht-bare Vermögenswerte erhalten)

**Methode 1 : Verkauf an verbleibende Partner**
- Ausscheidender Partner verkauft an verbleibende Partner
- Keine Änderung in Personengesellschaftsvermögen
- Nur Kapitalkonten ändern sich

**Beispiel :**
- Partner A verkauft Anteil (€60,000) an Partner B und C
- Partner B und C zahlen Partner A direkt

**Buchung :**
```
1041   Partner A, Kapital         €60,000
1042   Partner B, Kapital                      €36,000
1043   Partner C, Kapital                      24,000
Zur Erfassung des Ausscheidens von Partner A (Verkauf an verbleibende Partner)
```

**Methode 2 : Personengesellschaft kauft Partner aus**
- Personengesellschaft zahlt ausscheidenden Partner
- Kann zum Buchwert oder angepasstem Wert zahlen
- Kann Prämie einschließen

**Beispiel : Zahlung zum Buchwert :**
- Partner A scheidet aus
- Kapitalbestand : €60,000
- Erhält €60,000 Kasse

**Buchung :**
```
1041   Partner A, Kapital         €60,000
5131   Kasse                                   €60,000
Zur Erfassung des Partnerausscheidens zum Buchwert
```

**Beispiel : Zahlung mit Prämie :**
- Partner A scheidet aus
- Kapitalbestand : €60,000
- Erhält €70,000 (Prämie von €10,000)
- Prämie reduziert Kapital verbleibender Partner

**Buchung :**
```
1041   Partner A, Kapital         €60,000
1042   Partner B, Kapital                       (€6,000)
1043   Partner C, Kapital                        (4,000)
5131   Kasse                                   €70,000
Zur Erfassung des Partnerausscheidens mit Prämie
```

**Beispiel : Zahlung unter Buchwert :**
- Partner A scheidet aus
- Kapitalbestand : €60,000
- Erhält €55,000 (€5,000 Prämie an verbleibende Partner)

**Buchung :**
```
1041   Partner A, Kapital         €60,000
1042   Partner B, Kapital                        €3,000
1043   Partner C, Kapital                        2,000
5131   Kasse                                   €55,000
Zur Erfassung des Partnerausscheidens unter Buchwert
```

### Luxemburgische Compliance-Hinweis

Partneränderungen in Luxemburg :
- Muss Gesellschaftsvertrag aktualisieren
- Muss beim RCS hinterlegen
- Muss ordentliche Konten verwenden
- Muss Recht einhalten

### Nachdenken

Welche Probleme entstehen, wenn ein Partner aufgenommen wird oder ausscheidet ? Wie sollten sie behandelt werden ?

---

