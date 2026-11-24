---
id: volume2-chapter-21-section-21-3
title: "21.3 Äquivalenzmengen und Gesamtkosten der Produktion in einer anfänglichen Verarbeitungsstufe erklären und berechnen"
sidebar_position: 4
slug: /volume2/chapter-21/section-21-3
---

# 21.3 Äquivalenzmengen und Gesamtkosten der Produktion in einer anfänglichen Verarbeitungsstufe erklären und berechnen

### Äquivalenzmengen-Konzept

**Äquivalenzmengen** repräsentieren die Anzahl vollständiger Einheiten, die hätten produziert werden können, gegeben die tatsächlich an teilweise abgeschlossenen Einheiten geleistete Arbeit.

**Zweck :**
- Berücksichtigen der an teilweise abgeschlossenen Einheiten geleisteten Arbeit
- Berechnen genauer Stückkosten
- Zuteilen von Kosten zwischen abgeschlossenen und in Bearbeitung befindlichen Einheiten

### Warum Äquivalenzmengen benötigt werden

In der Prozesskostenrechnung sind Einheiten oft in verschiedenen Vollendungsstadien am Periodenende :
- Einige Einheiten abgeschlossen
- Einige Einheiten teilweise abgeschlossen
- Müssen die an allen Einheiten geleistete Arbeit berücksichtigen

**Beispiel :**
- 1 000 Einheiten abgeschlossen (100% vollständig)
- 200 Einheiten 50% vollständig
- Äquivalenzmengen : 1 000 + (200 × 50%) = 1 100 Äquivalenzmengen

### Berechnung von Äquivalenzmengen

**Formel :**
**Äquivalenzmengen = Abgeschlossene Einheiten + (Einheiten in Bearbeitung × Vollendungsprozentsatz)**

**Beispiel :**
- Abgeschlossene Einheiten : 800
- Einheiten in Bearbeitung : 200 (60% vollständig)
- Äquivalenzmengen : 800 + (200 × 60%) = 800 + 120 = 920 Äquivalenzmengen

### Separate Berechnung für Materialien und Umwandlung

Materialien und Umwandlungskosten sind oft auf verschiedenen Vollendungsniveaus, daher werden Äquivalenzmengen separat berechnet.

**Material-Äquivalenzmengen :**
- Materialien können zu Beginn des Prozesses hinzugefügt werden
- Wenn zu Beginn hinzugefügt : Einheiten in Bearbeitung = 100% vollständig für Materialien
- Wenn während des gesamten Prozesses hinzugefügt : Prozentsatz bestimmen müssen

**Umwandlungs-Äquivalenzmengen :**
- Umwandlung (Arbeit + Gemeinkosten) tritt während des gesamten Prozesses auf
- Einheiten in Bearbeitung sind teilweise vollständig für Umwandlung
- Basierend auf Vollendungsprozentsatz berechnen

### Prozesskostenbericht - Anfängliche Stufe

Ein **Prozesskostenbericht** (auch Produktionskostenbericht genannt) fasst zusammen :
1. Physischen Fluss der Einheiten
2. Äquivalenzmengen
3. Zu berücksichtigende Kosten
4. Kosten pro Äquivalenzmenge
5. Kostenverteilung

### Beispiel : Anfängliche Verarbeitungsstufe

**Luxemburgische Bäckerei - Mischabteilung (Anfängliche Stufe) :**

**Physischer Fluss :**
- Begonnene Einheiten : 1 000
- Abgeschlossene Einheiten : 800
- Einheiten in Bearbeitung (Ende) : 200 (100% vollständig für Materialien, 60% vollständig für Umwandlung)

**Kosten :**
- Direkte Materialien : €650
- Direkte Arbeit : €200
- Fertigungsgemeinkosten : €150
- **Gesamt : €1 000**

**Schritt 1 : Äquivalenzmengen berechnen**

**Materialien :**
- Abgeschlossen : 800 Einheiten × 100% = 800
- In Bearbeitung : 200 Einheiten × 100% = 200
- **Gesamt Äquivalenzmengen : 1 000**

**Umwandlung :**
- Abgeschlossen : 800 Einheiten × 100% = 800
- In Bearbeitung : 200 Einheiten × 60% = 120
- **Gesamt Äquivalenzmengen : 920**

**Schritt 2 : Kosten pro Äquivalenzmenge berechnen**

**Materialien :**
€650 ÷ 1 000 = €0,65 pro Äquivalenzmenge

**Umwandlung :**
€350 ÷ 920 = €0,38 pro Äquivalenzmenge (gerundet)

**Gesamt :**
€0,65 + €0,38 = €1,03 pro Äquivalenzmenge

**Schritt 3 : Kosten zuteilen**

**An abgeschlossene Einheiten :**
- Materialien : 800 × €0,65 = €520
- Umwandlung : 800 × €0,38 = €304
- **Gesamt : €824**

**An Einheiten in Bearbeitung :**
- Materialien : 200 × €0,65 = €130
- Umwandlung : 120 × €0,38 = €46
- **Gesamt : €176**

**Überprüfung :**
€824 + €176 = €1 000 ✓

### Prozesskostenbericht-Format

```
═══════════════════════════════════════════════════════
PROZESSKOSTENBERICHT - MISCHABTEILUNG
Periode : November 2024
═══════════════════════════════════════════════════════

PHYSISCHER FLUSS :
───────────────────────────────────────────────────────
Begonnene Einheiten                                   1 000
Abgeschlossene Einheiten                                     800
Einheiten in Bearbeitung (Ende)                                200
───────────────────────────────────────────────────────
Gesamt berücksichtigte Einheiten                         1 000

ÄQUIVALENZMENGEN :
───────────────────────────────────────────────────────
                    Materialien    Umwandlung
Abgeschlossen              800          800
In Bearbeitung (200 @ 100%, 60%)  200        120
───────────────────────────────────────────────────────
Gesamt Äquivalenzmengen       1 000        920

KOSTEN :
───────────────────────────────────────────────────────
                    Materialien    Umwandlung    Gesamt
Zu berücksichtigende Kosten :
  UEF Anfang         €0          €0        €0
  Aktuelle Kosten        650         350     1 000
───────────────────────────────────────────────────────
Gesamtkosten           €650        €350    €1 000

KOSTEN PRO ÄQUIVALENZMENGE :
───────────────────────────────────────────────────────
Materialien :    €650 ÷ 1 000 = €0,65
Umwandlung :   €350 ÷ 920   = €0,38
───────────────────────────────────────────────────────
Gesamtkosten pro Einheit : €1,03

KOSTENVERTEILUNG :
───────────────────────────────────────────────────────
Abgeschlossene Einheiten (800) :
  Materialien :    800 × €0,65 = €520
  Umwandlung :   800 × €0,38 = €304
  Gesamt                        €824

Einheiten in Bearbeitung (200) :
  Materialien :    200 × €0,65 = €130
  Umwandlung :   120 × €0,38 = €46
  Gesamt                        €176
───────────────────────────────────────────────────────
Gesamt berücksichtigte Kosten              €1 000
═══════════════════════════════════════════════════════
```

### Wenn Materialien zu verschiedenen Zeitpunkten hinzugefügt werden

**Materialien zu Beginn hinzugefügt :**
- Alle Einheiten in Bearbeitung sind 100% vollständig für Materialien
- Material-Äquivalenzmengen = Gesamte Einheiten (abgeschlossen + in Bearbeitung)

**Materialien während des gesamten Prozesses hinzugefügt :**
- Einheiten in Bearbeitung sind teilweise vollständig für Materialien
- Material-Äquivalenzmengen basierend auf Vollendung berechnen

**Materialien am Ende hinzugefügt :**
- Einheiten in Bearbeitung sind 0% vollständig für Materialien
- Nur abgeschlossene Einheiten haben Materialien

### Luxemburgische Compliance-Hinweis

In Luxemburg :
- Äquivalenzmengen müssen genau berechnet werden
- Separate Berechnung für Materialien und Umwandlung
- Prozesskostenberichte sollten geführt werden
- PCN-Konten ordnungsgemäß verwenden
- Kostenverteilung muss angemessen sein
- Unterstützung der Herstellungskostenberechnungen

### Nachdenken

Warum berechnen wir Äquivalenzmengen separat für Materialien und Umwandlung? Was passiert, wenn wir teilweise abgeschlossene Einheiten nicht berücksichtigen?

---

