---
id: volume2-chapter-25-section-25-2
title: "25.2 Payback und Accounting Rate of Return in Investitionsentscheidungen bewerten"
sidebar_position: 3
slug: /volume2/chapter-25/section-25-2
---

# 25.2 Payback und Accounting Rate of Return in Investitionsentscheidungen bewerten

### Payback-Periode

**Payback-Periode** misst die Zeit, die benötigt wird, um die Anfangsinvestition in Cash-Begriffen zurückzugewinnen. Sie ist einfach und konzentriert sich auf Liquidität, ignoriert aber den Zeitwert des Geldes und Cashflows nach Payback.

**Formel (Gleiche Cashflows) :**
**Payback-Periode = Anfangsinvestition ÷ Jährlicher Cash-Eingang**

**Formel (Ungleiche Cashflows) :**
- Cash-Eingänge akkumulieren, bis sie der Anfangsinvestition entsprechen

**Beispiel :**
- Anfangsinvestition : €150.000
- Jährlicher Cash-Eingang : €50.000
- Payback : €150.000 ÷ €50.000 = 3 Jahre

**Beispiel (Ungleich) :**
- Anfangsinvestition : €200.000
- Jahr 1 : €60.000
- Jahr 2 : €70.000 (kumuliert €130.000)
- Jahr 3 : €80.000 (kumuliert €210.000)
- Payback : 2 + (€70.000 benötigt / €80.000 in Jahr 3) = 2,875 Jahre

**Vorteile :**
- Einfach zu berechnen
- Konzentriert sich auf Liquidität und Risiko (schnellerer Payback = niedrigeres Risiko)
- Nützlich, wenn Cash knapp ist

**Nachteile :**
- Ignoriert Zeitwert des Geldes
- Ignoriert Cashflows nach Payback
- Bias zu kurzfristigen Projekten

### Abgezinste Payback-Periode


**Abbildung 25.2:** Capital Budgeting Methods Comparison

| Method | Time Value of Money | Liquide Mittel Flows After Payback | Complexity | Best For |
|--------|-------------------|------------------------|------------|----------|
| **Payback Period** | No | Ignores | Simple | Quick liquidity assessment |
| **Discounted Payback** | Yes | Ignores | Moderate | Liquidity with time value |
| **Accounting Rate of Return** | No | Includes | Simple | Accounting profit focus |
| **Net Present Value (NPV)** | Yes | Includes | Moderate | Most accurate, widely used |
| **Internal Rate of Return (IRR)** | Yes | Includes | Moderate | Percentage return focus |
| **Profitability Index (PI)** | Yes | Includes | Moderate | Resource-constrained projects |

*Alternativtext: Comparison table showing six capital budgeting methods (Payback Period, Discounted Payback, Accounting Rate of Return, NPV, IRR, Profitability Index) across five criteria: whether they consider time value of money, whether they include cash flows after payback, complexity level, and best use cases, demonstrating the different approaches to evaluating capital investments.*

**Abgezinste Payback** berücksichtigt Zeitwert des Geldes, indem Cashflows vor der Berechnung des Paybacks abgezinst werden.

**Schritte :**
1. Jeden Cash-Eingang auf Barwert abzinsen
2. Abgezinste Cashflows akkumulieren
3. Bestimmen, wann kumulierte abgezinste Eingänge = Anfangsinvestition

**Beispiel :**
- Anfangsinvestition : €200.000
- Diskontierungssatz : 8%
- Cash-Eingänge : €60.000, €70.000, €80.000, €90.000
- Jeden Eingang abzinsen : Jahr 1 PV = €60.000 / (1,08)^1 = €55.556
- PVs akkumulieren, bis Payback erreicht

### Accounting Rate of Return (ARR)

**ARR** (auch Return on Average Investment genannt) misst den durchschnittlichen Buchgewinn relativ zur Investition.

**Formel :**
**ARR = Durchschnittlicher jährlicher Buchgewinn ÷ Anfangsinvestition**

oder

**ARR = Durchschnittlicher jährlicher Buchgewinn ÷ Durchschnittsinvestition**

**Beispiel :**
- Anfangsinvestition : €100.000
- Nutzungsdauer : 5 Jahre
- Restwert : €10.000
- Durchschnittsinvestition : (Anfang + Restwert) / 2 = (€100.000 + €10.000) ÷ 2 = €55.000
- Jährlicher Buchgewinn : €15.000
- ARR = €15.000 ÷ €55.000 = 27,27%

**Vorteile :**
- Verwendet Buchhaltungsdaten (leicht zu verstehen)
- Berücksichtigt gesamte Lebensdauer des Projekts

**Nachteile :**
- Ignoriert Zeitwert des Geldes
- Verwendet Buchgewinn, nicht Cashflow
- Hängt von Abschreibungsmethode ab

### Vergleich : Payback vs. ARR

| Methode | Fokus | Vorteile | Nachteile |
|---------|-------|----------|-----------|
| Payback | Liquidität, Risiko | Einfach, hebt Risiko hervor | Ignoriert Zeitwert & spätere Cashflows |
| Abgezinste Payback | Liquidität mit Zeitwert | Verbessert Payback | Ignoriert immer noch Cashflows nach Payback |
| ARR | Buchrentabilität | Verwendet gesamte Lebensdauer | Ignoriert Cashflows & Zeitwert |

### Luxemburg-Compliance-Hinweis

Banken und Investoren in Luxemburg können Payback- und ARR-Metriken anfordern, erwarten aber auch NPV/IRR für größere Investitionen. ARR muss mit luxemburgischen GAAP/IFRS-Abschreibungs- und Steuerregeln übereinstimmen.

### Nachdenken

In welchen Situationen könnte Payback trotz seiner Einschränkungen immer noch eine nützliche Entscheidungsmetrik sein ? Wie könnte ARR irreführend sein ?

---

