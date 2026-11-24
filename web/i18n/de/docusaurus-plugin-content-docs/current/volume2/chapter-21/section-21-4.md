---
id: volume2-chapter-21-section-21-4
title: "21.4 Äquivalenzmengen und Gesamtkosten der Produktion in einer nachfolgenden Verarbeitungsstufe erklären und berechnen"
sidebar_position: 5
slug: /volume2/chapter-21/section-21-4
---

# 21.4 Äquivalenzmengen und Gesamtkosten der Produktion in einer nachfolgenden Verarbeitungsstufe erklären und berechnen

### Mehrstufige Prozesse

Viele Fertigungsprozesse haben mehrere Stufen. Jede Stufe ist ein separater Prozess, und Einheiten fließen von einer Stufe zur nächsten.

**Beispiel :**
Brotproduktion :
- Stufe 1 : Mischabteilung
- Stufe 2 : Backabteilung
- Stufe 3 : Verpackungsabteilung

### Kostenfluss in mehrstufigen Prozessen

**Stufe 1 (Mischen) :**
- Kosten : Direkte Materialien, direkte Arbeit, Gemeinkosten
- Ausgabe : Teilweise abgeschlossene Einheiten
- Übertragen an Stufe 2

**Stufe 2 (Backen) :**
- Kosten : Zusätzliche Materialien (falls vorhanden), direkte Arbeit, Gemeinkosten
- Eingabe : Einheiten von Stufe 1 (mit bereits angehängten Kosten)
- Ausgabe : Weiter verarbeitete Einheiten
- Übertragen an Stufe 3

**Stufe 3 (Verpacken) :**
- Kosten : Verpackungsmaterialien, direkte Arbeit, Gemeinkosten
- Eingabe : Einheiten von Stufe 2
- Ausgabe : Fertige Erzeugnisse

### Übertragene Kosten

**Übertragene Kosten** sind die in vorherigen Verarbeitungsstufen akkumulierten Kosten, die zusammen mit den Einheiten an die aktuelle Stufe übertragen werden.

**Wichtig :**
- Übertragene Kosten sind wie Materialien, die zu Beginn hinzugefügt werden
- Sie repräsentieren alle Kosten aus vorherigen Stufen
- Übertragene Einheiten sind 100% vollständig für übertragene Kosten

### Beispiel : Nachfolgende Verarbeitungsstufe

**Luxemburgische Bäckerei - Backabteilung (Stufe 2) :**

**Physischer Fluss :**
- Von Mischen übertragene Einheiten : 800
- Abgeschlossene Einheiten : 750
- Einheiten in Bearbeitung (Ende) : 50 (100% vollständig für übertragene Kosten, 80% vollständig für hier hinzugefügte Materialien, 70% vollständig für Umwandlung)

**Kosten :**
- Übertragene Kosten : €824 (von Mischabteilung)
- In Backen hinzugefügte Materialien : €100
- Direkte Arbeit : €150
- Fertigungsgemeinkosten : €100
- **Gesamt : €1 174**

**Schritt 1 : Äquivalenzmengen berechnen**

**Übertragene Kosten :**
- Abgeschlossen : 750 × 100% = 750
- In Bearbeitung : 50 × 100% = 50
- **Gesamt : 800**

**In Backen hinzugefügte Materialien :**
- Abgeschlossen : 750 × 100% = 750
- In Bearbeitung : 50 × 80% = 40
- **Gesamt : 790**

**Umwandlung :**
- Abgeschlossen : 750 × 100% = 750
- In Bearbeitung : 50 × 70% = 35
- **Gesamt : 785**

**Schritt 2 : Kosten pro Äquivalenzmenge berechnen**

**Übertragene Kosten :**
€824 ÷ 800 = €1,03 pro Äquivalenzmenge

**Hinzugefügte Materialien :**
€100 ÷ 790 = €0,127 pro Äquivalenzmenge (gerundet)

**Umwandlung :**
€250 ÷ 785 = €0,318 pro Äquivalenzmenge (gerundet)

**Gesamtkosten pro Einheit :**
€1,03 + €0,127 + €0,318 = €1,475 pro Äquivalenzmenge

**Schritt 3 : Kosten zuteilen**

**An abgeschlossene Einheiten (750) :**
- Übertragene Kosten : 750 × €1,03 = €772,50
- Materialien : 750 × €0,127 = €95,25
- Umwandlung : 750 × €0,318 = €238,50
- **Gesamt : €1 106,25**

**An Einheiten in Bearbeitung (50) :**
- Übertragene Kosten : 50 × €1,03 = €51,50
- Materialien : 40 × €0,127 = €5,08
- Umwandlung : 35 × €0,318 = €11,13
- **Gesamt : €67,71**

**Überprüfung :**
€1 106,25 + €67,71 = €1 173,96 ≈ €1 174 ✓ (Rundung)

### Prozesskostenbericht - Nachfolgende Stufe

```
═══════════════════════════════════════════════════════
PROZESSKOSTENBERICHT - BACKABTEILUNG
Periode : November 2024
═══════════════════════════════════════════════════════

PHYSISCHER FLUSS :
───────────────────────────────────────────────────────
Übertragene Einheiten                               800
Abgeschlossene Einheiten                                     750
Einheiten in Bearbeitung (Ende)                               50
───────────────────────────────────────────────────────
Gesamt berücksichtigte Einheiten                          800

ÄQUIVALENZMENGEN :
───────────────────────────────────────────────────────
              Übertragene Kosten    Materialien    Umwandlung
Abgeschlossen         750             750          750
In Bearbeitung (50)    50              40           35
───────────────────────────────────────────────────────
Gesamt             800             790          785

KOSTEN :
───────────────────────────────────────────────────────
              Übertragene Kosten    Materialien    Umwandlung    Gesamt
Zu berücksichtigende Kosten :
  Übertragene Kosten   €824            €0          €0        €824
  Aktuelle Kosten      0            100         250         350
───────────────────────────────────────────────────────
Gesamtkosten       €824           €100        €250      €1 174

KOSTEN PRO ÄQUIVALENZMENGE :
───────────────────────────────────────────────────────
Übertragene Kosten :  €824 ÷ 800 = €1,03
Materialien :       €100 ÷ 790 = €0,127
Umwandlung :      €250 ÷ 785 = €0,318
───────────────────────────────────────────────────────
Gesamtkosten pro Einheit : €1,475

KOSTENVERTEILUNG :
───────────────────────────────────────────────────────
Abgeschlossene Einheiten (750) :
  Übertragene Kosten :  750 × €1,03  = €772,50
  Materialien :       750 × €0,127 = €95,25
  Umwandlung :      750 × €0,318 = €238,50
  Gesamt                           €1 106,25

Einheiten in Bearbeitung (50) :
  Übertragene Kosten :   50 × €1,03  = €51,50
  Materialien :        40 × €0,127 = €5,08
  Umwandlung :       35 × €0,318 = €11,13
  Gesamt                           €67,71
───────────────────────────────────────────────────────
Gesamt berücksichtigte Kosten              €1 174
═══════════════════════════════════════════════════════
```

### Gewichtete-Durchschnitts-Methode vs. FIFO-Methode

**Gewichtete-Durchschnitts-Methode :**
- Kombiniert UEF-Anfangskosten mit aktuellen Kosten
- Einfachere Berechnung
- Häufiger verwendet
- In obigen Beispielen verwendet

**FIFO-Methode :**
- Trennt UEF-Anfang von aktuellen Kosten
- Komplexer
- Nimmt an, dass UEF-Anfang zuerst abgeschlossen wird
- Genauer, wenn sich Kosten erheblich ändern

**Dieses Kapitel konzentriert sich auf die gewichtete-Durchschnitts-Methode (häufigste).**

### Kostenakkumulation über Stufen

**Gesamtkosten pro Einheit :**
- Stufe 1 Kosten : €1,03
- Stufe 2 Kosten : €0,445 (€0,127 + €0,318)
- **Gesamt : €1,475**

**Für abgeschlossene Einheiten :**
- Alle Kosten aus allen Stufen sind enthalten
- Übertragene Kosten akkumulieren sich über Stufen
- Endkosten umfassen alle Verarbeitung

### Luxemburgische Compliance-Hinweis

In Luxemburg :
- Mehrstufige Prozesse erfordern sorgfältige Kostenverfolgung
- Übertragene Kosten müssen ordnungsgemäß berücksichtigt werden
- Äquivalenzmengen für jede Stufe berechnet
- Prozesskostenberichte für jede Stufe
- PCN-Konten für jede Abteilung/Prozess verwenden
- Kostenakkumulation unterstützt Bestandsbewertung

### Nachdenken

Wie akkumulieren sich Kosten, wenn Einheiten durch mehrere Verarbeitungsstufen gehen? Warum werden übertragene Kosten anders behandelt als Materialien, die in der aktuellen Stufe hinzugefügt werden?

---

