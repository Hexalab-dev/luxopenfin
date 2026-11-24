---
id: volume2-chapter-25-section-25-4
title: "25.4 Abgezinste Cashflow-Modelle verwenden, um Investitionsentscheidungen zu treffen"
sidebar_position: 5
slug: /volume2/chapter-25/section-25-4
---

# 25.4 Abgezinste Cashflow-Modelle verwenden, um Investitionsentscheidungen zu treffen

### Net Present Value (NPV)

**NPV** ist die Summe der Barwerte aller Cash-Eingänge und -Ausgänge. Sie misst den durch das Projekt geschaffenen Wert.

**Formel :**
**NPV = Σ [Ct ÷ (1 + r)^t] - C0**
- Ct = Cashflow zum Zeitpunkt t
- r = Diskontierungssatz
- C0 = Anfangsinvestition

**Entscheidungsregel :**
- NPV > 0 : Projekt akzeptieren
- NPV < 0 : Projekt ablehnen

**Beispiel :**
- Anfangsinvestition : €250.000
- Cash-Eingänge : €70k, €80k, €90k, €100k, €110k
- Diskontierungssatz : 8%
- NPV = -250.000 + Σ (Ct / 1,08^t) = €36.670 (positiv → akzeptieren)

### Internal Rate of Return (IRR)

**IRR** ist der Diskontierungssatz, der NPV = 0 macht.

**Entscheidungsregel :**
- IRR > erforderliche Rendite : Akzeptieren
- IRR < erforderliche Rendite : Ablehnen

**Beispiel :**
- Excel IRR-Funktion oder Finanzrechner verwenden

**Vorteile :**
- Berücksichtigt Zeitwert des Geldes
- Bietet Rendite

**Nachteile :**
- Kann mehrere IRRs haben (nicht-konventionelle Cashflows)
- Nimmt Reinvestition bei IRR an (NPV nimmt Reinvestition bei Kapitalkosten an)

### Profitability Index (PI)

**PI = PV zukünftiger Cash-Eingänge ÷ Anfangsinvestition**
- PI > 1 : Akzeptieren
- Nützlich bei Kapitalrationierung (relative Maßnahme)

### Abgezinste Payback

Wie zuvor beschrieben, berücksichtigt abgezinste Payback Zeitwert des Geldes. Nützlich für Risiko, ignoriert aber immer noch späte Cashflows.

### NPV vs. IRR vergleichen

- NPV misst absoluten geschaffenen Wert
- IRR bietet Rendite
- Wenn Projekte unabhängig sind (nicht gegenseitig ausschließend), stimmen beide Methoden typischerweise überein
- Wenn Projekte gegenseitig ausschließend sind, auf NPV verlassen, da es tatsächlichen geschaffenen Wert misst

### Gegenseitig ausschließende Projekte

Bei der Wahl zwischen gegenseitig ausschließenden Projekten (nur eines kann ausgewählt werden) NPV verwenden, um das Projekt mit dem höchsten Wert auszuwählen. IRR kann irreführend sein, wenn Projektgrößen sich unterscheiden.

### Beispiel : Gegenseitig ausschließend

**Projekt A :**
- Anfang : €200k
- NPV : €40k
- IRR : 16%

**Projekt B :**
- Anfang : €500k
- NPV : €60k
- IRR : 14%

**Entscheidung :** Projekt B wählen (höhere NPV)

### Sensitivitätsanalyse

Annahmen variieren (Cashflows, Diskontierungssätze, Kosten), um Auswirkungen auf NPV und IRR zu sehen.

### Szenarioanalyse

Basis-, Best-, Worst-Case-Szenarien bewerten. Unterstützt Risikobewertung.

### Monte-Carlo-Simulation

Fortgeschrittene Technik, um unsichere Variablen zu modellieren und Wahrscheinlichkeitsverteilung von NPV zu bewerten.

### Luxemburg-Compliance-Hinweis

Banken und Investoren in Luxemburg erwarten abgezinste Cashflow-Analyse (NPV, IRR) für Finanzierungsvorschläge. Projekte, die von staatlicher Beihilfe unterstützt werden (z. B. Investitionszuschüsse), erfordern detaillierte Cashflow-Prognosen und DCF-Analyse.

### Nachdenken

Warum könnten zwei Projekte mit ähnlichen IRRs unterschiedliche NPVs haben ? Welches Maß spiegelt Aktionärswert besser wider ?

---

