---
id: volume2-chapter-20-section-20-3
title: "20.3 Die Auftragskostenrechnung verwenden, um den Fluss der Produktkosten durch die Bestandskonten zu verfolgen"
sidebar_position: 4
slug: /volume2/chapter-20/section-20-3
---

# 20.3 Die Auftragskostenrechnung verwenden, um den Fluss der Produktkosten durch die Bestandskonten zu verfolgen

### Kostenfluss in der Auftragskostenrechnung

Bei der Auftragskostenrechnung fließen die Kosten durch mehrere Bestandskonten, bevor sie zu Herstellungskosten werden. Das Verständnis dieses Flusses ist für eine ordnungsgemäße Auftragskostenrechnung unerlässlich.

### Bestandskonten

**Drei Hauptbestandskonten :**

1. **Rohstoffbestand** : Noch nicht in der Produktion verwendete Materialien
2. **Unfertige Erzeugnisse** : In Bearbeitung befindliche Aufträge (teilweise abgeschlossen)
3. **Fertige Erzeugnisse** : Abgeschlossene Aufträge, die noch nicht verkauft wurden

### Kostenflusssequenz

**Schritt 1 : Rohstoffe kaufen**
- Materialien gekauft und gelagert
- Belastung Rohstoffbestand
- Gutschrift Verbindlichkeiten (oder Kasse)

**Schritt 2 : Materialien für Produktion ausgeben**
- In Aufträgen verwendete Materialien
- Belastung Unfertige Erzeugnisse
- Gutschrift Rohstoffbestand

**Schritt 3 : Direkte Arbeit verursachen**
- Arbeitskosten für Aufträge
- Belastung Unfertige Erzeugnisse
- Gutschrift Gehälter/Löhne zu zahlen

**Schritt 4 : Fertigungsgemeinkosten anwenden**
- Auf Aufträge zugeordnete Gemeinkosten
- Belastung Unfertige Erzeugnisse
- Gutschrift Fertigungsgemeinkosten

**Schritt 5 : Aufträge abschließen**
- Fertiggestellte Aufträge
- Belastung Fertige Erzeugnisse
- Gutschrift Unfertige Erzeugnisse

**Schritt 6 : Aufträge verkaufen**
- An Kunden verkaufte Aufträge
- Belastung Herstellungskosten
- Gutschrift Fertige Erzeugnisse

### Detailliertes Flussbeispiel

**Maries Catering-Geschäft - Auftrag #101 (Büromittagessen für 50 Personen) :**

**Schritt 1 : Materialien kaufen**
```
Rohstoffbestand              €500
    Verbindlichkeiten                        €500
Zum Erfassen des Einkaufs von Zutaten
```

**Schritt 2 : Materialien für Auftrag #101 ausgeben**
```
Unfertige Erzeugnisse - Auftrag #101     €400
    Rohstoffbestand                                    €400
Zum Erfassen der in Auftrag #101 verwendeten Materialien
```

**Schritt 3 : Direkte Arbeit für Auftrag #101 erfassen**
```
Unfertige Erzeugnisse - Auftrag #101     €290
    Gehälter zu zahlen                                 €290
Zum Erfassen der direkten Arbeit für Auftrag #101
```

**Schritt 4 : Gemeinkosten auf Auftrag #101 anwenden**
```
Unfertige Erzeugnisse - Auftrag #101     €200
    Fertigungsgemeinkosten                             €200
Zum Anwenden der Gemeinkosten auf Auftrag #101
```

**Auftrag #101 Kostenübersicht :**
- Direkte Materialien : €400
- Direkte Arbeit : €290
- Angewandte Gemeinkosten : €200
- **Gesamt : €890**

**Schritt 5 : Auftrag #101 abschließen**
```
Fertige Erzeugnisse                  €890
    Unfertige Erzeugnisse - Auftrag #101                €890
Zum Erfassen des Abschlusses von Auftrag #101
```

**Schritt 6 : Auftrag #101 verkaufen (Umsatz €1.500)**
```
Forderungen                        €1.755
    Umsatzerlöse (€1.500)                              €1.500
    MwSt zu zahlen (17%)                                 €255
Zum Erfassen des Verkaufs von Auftrag #101

Herstellungskosten                  €890
    Fertige Erzeugnisse                                 €890
Zum Erfassen der Kosten von verkauftem Auftrag #101
```

### Auftragskostenblatt

Ein **Auftragskostenblatt** ist ein Dokument, das alle Kosten für einen spezifischen Auftrag sammelt.

**Format :**
```
Auftragskostenblatt
Auftragsnummer : 101
Kunde : ABC Company
Beschreibung : Büromittagessen - 50 Personen
Startdatum : 1. November 2024
Abschlussdatum : 5. November 2024

Direkte Materialien :
  Zutaten              €200
  Getränke              150
  Verpackung             50
  Gesamt Materialien  €400

Direkte Arbeit :
  Koch (8 Stunden × €25)    €200
  Kellner (6 Stunden × €15)   90
  Gesamt Arbeit             €290

Angewandte Gemeinkosten :
  (Angewandt mit 50% der direkten Arbeit)
  €290 × 50%              €145

Gesamte Auftragskosten            €835
```

### Unfertige Erzeugnisse-Konto

Das Unfertige Erzeugnisse-Konto sammelt Kosten für alle in Bearbeitung befindlichen Aufträge.

**Beispiel :**
```
Unfertige Erzeugnisse
─────────────────────────────────────
Materialien - Auftrag #101      €400
Arbeit - Auftrag #101           290
Gemeinkosten - Auftrag #101     200
Materialien - Auftrag #102       600
Arbeit - Auftrag #102           400
Gemeinkosten - Auftrag #102     200
─────────────────────────────────────
Saldo                        €2.090
```

Wenn Auftrag #101 abgeschlossen ist :
```
Unfertige Erzeugnisse
─────────────────────────────────────
Saldo (Anfang)            €2.090
Weniger : Auftrag #101 abgeschlossen   (890)
─────────────────────────────────────
Saldo (Ende)             €1.200
```

### PCN-Kontenklassifizierungen

**Luxemburgische PCN-Konten :**

**Rohstoffe :**
- **301** : Rohstoffe (Matières Premières)

**Unfertige Erzeugnisse :**
- **311** : Unfertige Erzeugnisse (En Cours de Fabrication)

**Fertige Erzeugnisse :**
- **321** : Fertige Erzeugnisse (Produits Finis)

**Herstellungskosten :**
- **607** : Kosten der verkauften Fertigprodukte (Coût des Produits Vendus)

**Fertigungsgemeinkosten :**
- **60–62 (analytical overhead)** : Fertigungsgemeinkosten (Charges de Production)

### Luxemburgische Compliance-Hinweis

In Luxemburg :
- PCN-Kontenklassifizierungen müssen verwendet werden
- Kosten müssen ordnungsgemäß durch Konten fließen
- Auftragskostenaufzeichnungen sollten geführt werden
- Unterstützung der Herstellungskosten für Steuerzwecke
- MwSt in Kostenverfolgung berücksichtigen (erstattungsfähige MwSt ausschließen)

### Nachdenken

Warum ist es wichtig, Kosten durch die Bestandskonten zu verfolgen? Was passiert, wenn Kosten nicht ordnungsgemäß durch den Fluss verfolgt werden?

---

