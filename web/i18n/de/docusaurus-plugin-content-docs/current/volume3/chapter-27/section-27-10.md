---
id: volume3-chapter-27-section-27-10
title: "27.10 MwSt-Buchhaltung in PCN (Klasse-4-Konten)"
sidebar_position: 11
slug: /volume3/chapter-27/section-27-10
---

# 27.10 MwSt-Buchhaltung in PCN (Klasse-4-Konten)

### MwSt-Konten in PCN-Struktur

MwSt-Konten sind Teil der **PCN-Klasse 4 (Dritter-Konten)**. Alle MwSt-Transaktionen müssen mit PCN-Klasse-4-MwSt-Konten erfasst werden, um Compliance und ordnungsgemäße Berichterstattung sicherzustellen.

### Haupt-MwSt-Konten

#### Konto 421611: Vorsteuer zurückforderbar (TVA en amont)

**Zweck**: Erfasst MwSt, die auf Käufe gezahlt wurde (Vorsteuer). Das Konto gehört zur Gruppe 42 (Sonstige Forderungen).

**Verwendung:**
- **Soll**: Beim Zahlen von MwSt auf Käufe
- **Haben**: Beim Verrechnen gegen Ausgangssteuer in Erklärung
- **Saldo**: Zeigt zurückforderbare MwSt, die noch nicht verrechnet wurde

**Beispiel:**
- Kauf €117 Handelswaren (€100 + €17 MwSt)
- **Soll**: Konto 421611 - €17,00
- **Soll**: Konto 6061 (Wareneinkäufe) - €100,00
- **Haben**: Konto 44111 (Lieferanten) - €117,00

#### Konto 461412: MwSt-Schuld gegenüber der AED (TVA à payer)

**Zweck**: Erfasst Netto-MwSt, die nach jeder Erklärung an die Steuerverwaltung (AED) zu zahlen ist. Das Konto gehört zur Gruppe 46 (Steuer- und Sozialversicherungsverbindlichkeiten). Ein Netto-Guthaben wird stattdessen auf Konto 421612 (MwSt-Forderung) gebucht.

**Verwendung:**
- **Soll**: Beim Zahlen von MwSt an Behörden
- **Haben**: Wenn Netto-MwSt berechnet wird (Ausgangssteuer - Vorsteuer)
- **Saldo**: Zeigt MwSt, die Behörden geschuldet wird

**Beispiel (MwSt-Erklärungseinreichung):**
- Ausgangssteuer: €1.000
- Vorsteuer: €600
- Netto-MwSt: €400
- **Soll**: Konto 461411 - €1.000,00
- **Haben**: Konto 421611 - €600,00
- **Haben**: Konto 461412 - €400,00

**Beim Zahlen von MwSt:**
- **Soll**: Konto 461412 - €400,00
- **Haben**: Konto 5131 (Bank) - €400,00

#### Konto 461411: Ausgangssteuer (TVA en aval)

**Zweck**: Erfasst MwSt, die auf Verkäufe erhoben wurde (Ausgangssteuer). Das Konto gehört zur Gruppe 46 (Steuer- und Sozialversicherungsverbindlichkeiten).

**Verwendung:**
- **Haben**: Beim Erheben von MwSt auf Verkäufe
- **Soll**: Beim Verrechnen gegen Vorsteuer in Erklärung
- **Saldo**: Zeigt erhobene MwSt, die noch nicht abgeführt wurde

**Beispiel:**
- €117 Waren verkaufen (€100 + €17 MwSt)
- **Soll**: Konto 516 (Kasse) - €117,00
- **Haben**: Konto 7061 (Warenverkäufe) - €100,00
- **Haben**: Konto 461411 - €17,00

### MwSt-Kontenstruktur

#### Unterkonten für verschiedene Sätze

Sie können unterhalb des offiziellen Kontos Unterkonten erstellen, um MwSt nach Satz zu verfolgen:

**Struktur:**
- 4614111: Ausgangssteuer bei 17%
- 4614112: Ausgangssteuer bei 14%
- 4614113: Ausgangssteuer bei 8%
- 4614114: Ausgangssteuer bei 3%

**Vorteile:**
- Einfachere MwSt-Erklärungsvorbereitung
- Bessere Verfolgung nach Satz
- Vereinfachte Berichterstattung

### MwSt-Erklärungsbuchhaltungsprozess

#### Schritt 1: Periodensummen berechnen

- **Ausgangssteuer**: Alle Haben-Buchungen auf Konto 461411 summieren
- **Vorsteuer**: Alle Soll-Buchungen auf Konto 421611 summieren
- **Netto-MwSt**: Ausgangssteuer - Vorsteuer

#### Schritt 2: MwSt-Erklärung erfassen

**Wenn Netto-MwSt zu zahlen:**
- **Soll**: Konto 461411 (Ausgangssteuer) - Gesamtausgangssteuer
- **Haben**: Konto 421611 (Vorsteuer) - Gesamtvorsteuer
- **Haben**: Konto 461412 (MwSt-Schuld gegenüber der AED) - Netto-MwSt

**Wenn Netto-MwSt zurückzuerstatten:**
- **Soll**: Konto 461411 (Ausgangssteuer) - Gesamtausgangssteuer
- **Haben**: Konto 421611 (Vorsteuer) - Gesamtvorsteuer
- **Soll**: Konto 421612 (MwSt-Forderung gegenüber der AED) - Netto-Rückerstattung

#### Schritt 3: MwSt zahlen

**Beim Zahlen von MwSt:**
- **Soll**: Konto 461412 (MwSt-Schuld)
- **Haben**: Konto 5131 (Bankkonto)

**Beim Erhalten von Rückerstattung:**
- **Soll**: Konto 5131 (Bankkonto)
- **Haben**: Konto 421612 (MwSt-Forderung)

### MwSt-Kontenabstimmungen

#### Monatliche Abstimmung

- **Ausgangssteuer**: Verifizieren, dass alle Verkaufs-MwSt erfasst wurde
- **Vorsteuer**: Verifizieren, dass alle Kauf-MwSt erfasst wurde
- **Salden**: Kontosalden mit Berechnungen abgleichen
- **Abweichungen**: Alle Unterschiede untersuchen und korrigieren

#### Vierteljährliche Abstimmung

- **Periodensummen**: Alle MwSt-Transaktionen für Quartal summieren
- **MwSt-Erklärung**: Mit MwSt-Erklärungszahlen vergleichen
- **Zahlungen**: Verifizieren, dass alle MwSt-Zahlungen erfasst wurden
- **Rückerstattungen**: Verifizieren, dass alle MwSt-Rückerstattungen erhalten wurden

### Häufige MwSt-Buchhaltungseinträge

#### Verkauf mit MwSt

**Transaktion**: €117 Waren verkaufen (€100 + €17 MwSt)

**PCN-Eintrag:**
- Soll 516 (Kasse): €117,00
- Haben 7061 (Warenverkäufe): €100,00
- Haben 461411 (Ausgangssteuer): €17,00

#### Kauf mit MwSt

**Transaktion**: €234 Ausrüstung kaufen (€200 + €34 MwSt)

**PCN-Eintrag:**
- Soll 222 (Technische Anlagen und Maschinen): €200,00
- Soll 421611 (Vorsteuer): €34,00
- Haben 5131 (Bank): €234,00

#### MwSt-Erklärungseinreichung

**Transaktion**: MwSt-Erklärung einreichen (Ausgangssteuer: €1.000, Vorsteuer: €600, Netto: €400)

**PCN-Eintrag:**
- Soll 461411 (Ausgangssteuer): €1.000,00
- Haben 421611 (Vorsteuer): €600,00
- Haben 461412 (MwSt-Schuld): €400,00

#### MwSt-Zahlung

**Transaktion**: €400 MwSt an Behörden zahlen

**PCN-Eintrag:**
- Soll 461412 (MwSt-Schuld): €400,00
- Haben 5131 (Bank): €400,00

### MwSt-Kontensalden

#### Normale Salden

- **Konto 421611 (Vorsteuer)**: Sollsaldo (gezahlte MwSt)
- **Konto 461411 (Ausgangssteuer)**: Habensaldo (erhobene MwSt)
- **Konto 461412 (MwSt-Schuld)**: Habensaldo (geschuldete MwSt); ein Erstattungsanspruch erscheint stattdessen als Sollsaldo auf Konto 421612 (MwSt-Forderung)

#### Nach MwSt-Erklärung

- **Konto 421611**: Sollte null sein (gegen Ausgangssteuer verrechnet)
- **Konto 461411**: Sollte null sein (gegen Vorsteuer verrechnet)
- **Konto 461412 / 421612**: Zeigt Netto-MwSt zu zahlen oder zurückzuerstatten

### Luxemburg-Compliance-Hinweis

**PCN-Anforderungen:**
- **PCN-Konten verwenden**: Alle MwSt muss Klasse-4-Konten verwenden
- **Ordentliche Klassifizierung**: Korrekte Konten verwenden (421611, 461411, 461412, 421612)
- **Unterkonten**: Kann Unterkonten für detaillierte Verfolgung verwenden
- **Abstimmung**: MwSt-Konten regelmäßig abstimmen
- **Dokumentation**: Unterstützende Dokumentation aufrechterhalten

**Häufige Fehler:**
- **Falsche Konten**: Nicht-PCN-Konten für MwSt verwenden
- **Falsche Einträge**: Soll/Haben-Einträge umkehren
- **Fehlende Einträge**: Nicht alle MwSt-Transaktionen erfassen
- **Nicht abgestimmt**: MwSt-Konten nicht abstimmen

### Nachdenken

Am Monatsende hat Maries Restaurant €2.000 in Konto 461411 (Ausgangssteuer) und €1.200 in Konto 421611 (Vorsteuer). Wie sollte sie die MwSt-Erklärung erfassen? Wie werden die Kontosalden nach der Erklärung sein?

### Konzepte in der Praxis

**Monatliche MwSt-Buchhaltung**

Monatlicher MwSt-Prozess von *Le Petit Bistro*:

**Monatsend-Salden:**
- Konto 461411 (Ausgangssteuer): €2.000 Haben
- Konto 421611 (Vorsteuer): €1.200 Soll

**MwSt-Erklärungseintrag:**
- Soll 461411 (Ausgangssteuer): €2.000,00
- Haben 421611 (Vorsteuer): €1.200,00
- Haben 461412 (MwSt-Schuld): €800,00

**Nach Eintrag:**
- Konto 421611: €0,00
- Konto 461411: €0,00
- Konto 461412: €800,00 Haben (MwSt zu zahlen)

**Zahlungseintrag:**
- Soll 461412 (MwSt-Schuld): €800,00
- Haben 5131 (Bank): €800,00

**Endsalden:**
- Alle MwSt-Konten: €0,00
- MwSt-Erklärung eingereicht und gezahlt

---

