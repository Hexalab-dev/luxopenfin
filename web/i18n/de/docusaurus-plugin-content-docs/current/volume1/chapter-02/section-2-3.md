---
id: volume1-chapter-02-section-2-3
title: "2.3 Finanzberichte Schritt für Schritt erstellen"
sidebar_position: 4
slug: /volume1/chapter-02/section-2-3
---

# 2.3 GuV, Eigenkapitalveränderungsrechnung und Bilanz erstellen

## Beispiel: Tech Solutions SARL

Trial Balance per 31.12.2024 (PCN-Konten):

```
Cash (5131)                     25 000 €
Forderungen (4011)              15 000
Anlagen (222)                  30 000
Lieferanten (44111)                        8 000 €
TVA-Verbindlichkeit (461411)                2 000
Bankdarlehen (1942)                      20 000
Kapital (101)                          15 000
Gewinnvortrag (141)                    10 000
Serviceerlöse (703)                    50 000
Löhne (6211)                 25 000
Miete (6111)                  6 000
Utilities (6184)              1 500
Sonstige Aufwendungen (6188)  2 500
Totals                         105 000     105 000
```

## Schritt 1 – Gewinn- und Verlustrechnung


**Abbildung 2.3:** Bilanz Beispiel

| Bilanz (Bilan) | PCN | Betrag (€) |
|-----------------------|-----|------------|
| **Le Petit Bistro** | | |
| **Stand November 30, 2024** | | |
| | | |
| **ASSETS (Actif)** | | |
| **Umlaufvermögen** | | |
| Liquide Mittel | 5131 | 5,000.00 |
| Forderungen | 4011 | 500.00 |
| Vorräte | 361 | 2,000.00 |
| **Total Umlaufvermögen** | | **7,500.00** |
| **Anlagevermögen** | | |
| Anlagen | 222 | 15,000.00 |
| **Total Anlagevermögen** | | **15,000.00** |
| **GESAMT ASSETS** | | **22,500.00** |
| | | |
| **LIABILITIES (Passif)** | | |
| **Kurzfristige Verbindlichkeiten** | | |
| Verbindlichkeiten | 44111 | 8,000.00 |
| **Total Kurzfristige Verbindlichkeiten** | | **8,000.00** |
| **Langfristige Verbindlichkeiten** | | |
| Bankkredit | 1942 | 2,000.00 |
| **Total Langfristige Verbindlichkeiten** | | **2,000.00** |
| **GESAMT LIABILITIES** | | **10,000.00** |
| | | |
| **EQUITY (Capitaux Propres)** | | |
| Eigenkapital (from Eigenkapitalveränderungsrechnung) | 101 | 12,500.00 |
| **GESAMT EQUITY** | | **12,500.00** |
| **GESAMT LIABILITIES AND EQUITY** | | **22,500.00** |

*Alternativtext: Balance sheet for Le Petit Bistro as of November 30, 2024, showing total assets of €22,500.00 (current assets €7,500.00, non-current assets €15,000.00), total liabilities of €10,000.00 (current €8,000.00, non-current €2,000.00), and equity of €12,500.00, with PCN account codes for each account, demonstrating the accounting equation balance.*

```
GuV 2024
Erlöse                                  50 000 €
Löhne                                   25 000
Miete                                    6 000
Utilities                                1 500
Sonstiges                                2 500
Gesamtaufwand                          (35 000)
Nettoergebnis                          15 000 €
```

## Schritt 2 – Eigenkapitalveränderungsrechnung

```
Eigenkapital 01.01.2024 (Kapital + Gewinnvortrag)        25 000 €
+ Nettoergebnis                                           15 000
– Ausschüttungen                                               0
Eigenkapital 31.12.2024                                   40 000 €
```

## Schritt 3 – Bilanz

```
AKTIVA
  Umlaufvermögen: Cash 25 000 + Forderungen 15 000 = 40 000 €
  Anlagevermögen: Equipment 30 000 €
Gesamtvermögen                                           70 000 €

PASSIVA
  Kurzfristig: Lieferanten 8 000 + TVA 2 000 = 10 000 €
  Langfristig: Darlehen 20 000 €
Gesamtverbindlichkeiten                                  30 000 €

EIGENKAPITAL
  Kapital 15 000 + Gewinnrücklagen 25 000 = 40 000 €

PASSIVA + EK                                             70 000 €
```

## Verprobung

- GuV → EK-Rechnung: 15 000 € ✔  
- EK-Rechnung → Bilanz: 40 000 € ✔  
- Bilanzgleichung: 70 000 = 30 000 + 40 000 ✔

## PCN- und RCS-Anforderungen

- PCN-Layout (Kontonummern, Bezeichnungen) verwenden.  
- Sprache FR/DE/EN.  
- Gesellschaftsform, Geschäftsjahresende, Anhang angeben.  
- Bilanz und GuV strukturiert auf eCDF erstellen, dann über das LBR-Portal beim RCS hinterlegen (Anhang als PDF).

## Was passiert bei Verlust?

Nettoverlust 5 000 € → EK sinkt auf 20 000 €, Bilanz passt sich an, Gleichung bleibt gültig.

## Abgekürzte Abschlüsse

Unternehmen, die in zwei aufeinanderfolgenden Jahren nicht 2 von 3 Schwellen überschreiten (Umsatz ≤ 15 Mio €, Bilanzsumme ≤ 7,5 Mio €, ≤ 50 Mitarbeitende), dürfen **comptes abrégés** einreichen; größere Gesellschaften benötigen vollständige Abschlüsse samt ausführlicher Anhangsangaben und ggf. Audit.

