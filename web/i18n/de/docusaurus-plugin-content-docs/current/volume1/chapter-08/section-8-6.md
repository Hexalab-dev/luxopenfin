---
id: volume1-chapter-08-section-8-6
title: "8.6 Zweck einer Bankabstimmung definieren und eine Bankabstimmung und ihre zugehörigen Journalbuchungen vorbereiten"
sidebar_position: 7
slug: /volume1/chapter-08/section-8-6
---

# 8.6 Zweck einer Bankabstimmung definieren und eine Bankabstimmung und ihre zugehörigen Journalbuchungen vorbereiten

### Was ist eine Bankabstimmung ?

Eine **Bankabstimmung** ist der Prozess des Vergleichs der Kassenaufzeichnungen des Unternehmens (Kassenkonto im Hauptbuch) mit den Aufzeichnungen der Bank (Kontoauszug) und der Erklärung von Unterschieden.

### Zweck der Bankabstimmung

**Warum abstimmen ?**

1. **Genauigkeit überprüfen** : Sicherstellen, dass Aufzeichnungen mit Kontoauszug übereinstimmen
2. **Fehler erkennen** : Fehler in Aufzeichnungen oder Kontoauszug finden
3. **Betrug erkennen** : Unbefugte Transaktionen identifizieren
4. **Aufzeichnungen aktualisieren** : Transaktionen erfassen, die noch nicht in den Büchern sind
5. **Compliance** : Erforderlich für genaue Jahresabschlüsse

### Zeitpunkt

**Häufigkeit :**
- **Monatlich** : Standardpraxis
- **Wöchentlich** : Für Unternehmen mit vielen Transaktionen
- **Täglich** : Für Unternehmen mit hohem Transaktionsvolumen

**Wann :**
- Nach Erhalt des Kontoauszugs
- Vor Vorbereitung der Jahresabschlüsse
- Regelmäßig geplant (z. B. erster jedes Monats)

### Kontoauszug

**Was enthalten ist :**
- Anfangssaldo
- Einzahlungen
- Abhebungen
- Eingelöste Schecks
- Elektronische Zahlungen
- Bankgebühren
- Erzielte Zinsen
- Endsaldo

### Häufige Unterschiede

**Elemente in Büchern, aber nicht auf Kontoauszug :**
- **Ausstehende Schecks** : Geschriebene Schecks, aber noch nicht eingelöst
- **Einzahlungen in Transit** : Gemachte Einzahlungen, aber noch nicht von Bank erfasst

**Elemente auf Kontoauszug, aber nicht in Büchern :**
- **Bankgebühren** : Von Bank berechnete Gebühren
- **Erzielte Zinsen** : Zinsen auf Konto
- **Nicht gedeckte Schecks** : Zurückgegebene Schecks (nicht ausreichende Mittel)
- **Elektronische Zahlungen** : Automatische Zahlungen nicht erfasst
- **Bankfehler** : Fehler der Bank

### Format der Bankabstimmung

**Standardformat :**

```
Bankabstimmung
[Firmenname]
[Datum]

Saldo laut Kontoauszug                    €X,XXX
Hinzufügen : Einzahlungen in Transit         XXX
Weniger : Ausstehende Schecks                (XXX)
Angepasster Banksaldo                       €X,XXX

Saldo laut Büchern                          €X,XXX
Hinzufügen : Erzielte Zinsen                   XX
Weniger : Bankgebühren                         (XX)
Weniger : Nicht gedeckte Schecks               (XX)
Weniger : Andere Bankgebühren                  (XX)
Angepasster Buchsaldo                        €X,XXX

Abgestimmter Saldo                          €X,XXX
```

### Beispiel : Vollständige Bankabstimmung

**Le Petit Bistro - 30. November 2024**

**Kontoauszug :**
- Endsaldo : €5,000

**Kassenkonto (Bücher) :**
- Endsaldo : €4,900

**Zusätzliche Informationen :**
- Einzahlung von €200 am 30. November (noch nicht auf Kontoauszug)
- Scheck #501 von €100 ausgestellt, aber noch nicht eingelöst
- Bankgebühr von €10 (auf Auszug, nicht in Büchern erfasst)
- Erzielte Zinsen von €5 (auf Auszug, nicht in Büchern erfasst)

**Bankabstimmung :**

```
Le Petit Bistro
Bankabstimmung
30. November 2024

Saldo laut Kontoauszug                    €5,000
Hinzufügen : Einzahlungen in Transit        200
Weniger : Ausstehende Schecks :
  Scheck #501                                (100)
Angepasster Banksaldo                       €5,100

Saldo laut Büchern                          €4,900
Hinzufügen : Erzielte Zinsen                    5
Weniger : Bankgebühren                         (10)
Angepasster Buchsaldo                       €4,895
```

**Hinweis :** Die angepassten Salden stimmen nicht überein. Es muss ein zusätzliches Element oder ein Fehler geben. In diesem Beispiel gibt es eine Differenz von €205, die weitere Untersuchung erfordert.

### Korrigiertes und ausgeglichenes Beispiel

**Kontoauszug :** €5,000
**Bücher :** €4,900
**Einzahlung in Transit :** €200
**Ausstehender Scheck :** €100
**Bankgebühr :** €10 (Bank hat, Bücher haben nicht)
**Zinsen :** €5 (Bank hat, Bücher haben nicht)
**Zusätzlicher ausstehender Scheck :** €205

**Abstimmung :**

```
Saldo laut Kontoauszug                    €5,000
Hinzufügen : Einzahlungen in Transit        200
Weniger : Ausstehende Schecks :
  Scheck #1                                  (100)
  Scheck #2                                  (205)
Angepasster Banksaldo                       €4,895

Saldo laut Büchern                          €4,900
Hinzufügen : Erzielte Zinsen                    5
Weniger : Bankgebühren                         (10)
Angepasster Buchsaldo                       €4,895

Abgestimmter Saldo                          €4,895 ✓
```

### Journalbuchungen für Abstimmungselemente

**Elemente, die Journalbuchungen erfordern (Elemente auf Kontoauszug, nicht in Büchern) :**

**1. Bankgebühr :**
```
6133   Bankgebühren      €10
5131   Kasse (Bank)                           €10
Zur Erfassung der Bankgebühr
```

**2. Erzielte Zinsen :**
```
5131   Kasse (Bank)               €5
7552   Zinserträge                           €5
Zur Erfassung der erzielten Zinsen
```

**3. Nicht gedeckter Scheck (falls zutreffend) :**
```
4011   Forderungen aus Lieferungen und Leistungen       €[Betrag]
5131   Kasse (Bank)                           €[Betrag]
Zur Erfassung des zurückgegebenen nicht gedeckten Schecks
```

**4. Elektronische Zahlungen (falls nicht erfasst) :**
```
[Angemessenes Ausgabenkonto]    €[Betrag]
5131   Kasse (Bank)                           €[Betrag]
Zur Erfassung der elektronischen Zahlung
```

### Luxemburgische Banküberlegungen

**Luxemburgische Banken :**
- Mehrere Banken verfügbar
- SEPA-Überweisungen üblich
- Elektronisches Banking Standard
- Mehrere Währungen unterstützt
- Internationale Überweisungen

**Abstimmungsfunktionen :**
- Online-Kontoauszüge
- Elektronische Auszugsdownloads
- Automatisierte Abstimmungstools
- Multi-Währungs-Konten

### Luxemburgische Compliance-Hinweis

Bankabstimmung in Luxemburg :
- Sollte monatlich durchgeführt werden (beste Praxis)
- Erforderlich für genaue Jahresabschlüsse
- Wichtig für MwSt-Compliance
- Unterstützt Prüfungsanforderungen
- Muss dokumentiert und aufbewahrt werden

### Nachdenken

Warum ist Bankabstimmung wichtig ? Was könnte passieren, wenn ein Unternehmen sein Bankkonto nicht regelmäßig abstimmt ?

---

