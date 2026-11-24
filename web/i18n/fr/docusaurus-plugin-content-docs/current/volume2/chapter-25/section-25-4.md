---
id: volume2-chapter-25-section-25-4
title: "25.4 Utiliser les modèles de flux de trésorerie actualisés pour prendre des décisions d'investissement en capital"
sidebar_position: 5
slug: /volume2/chapter-25/section-25-4
---

# 25.4 Utiliser les modèles de flux de trésorerie actualisés pour prendre des décisions d'investissement en capital

### Valeur actuelle nette (VAN)

**La VAN** est la somme des valeurs actuelles de toutes les entrées et sorties de trésorerie. Elle mesure la valeur ajoutée par le projet.

**Formule :**
**VAN = Σ [Ct ÷ (1 + r)^t] - C0**
- Ct = flux de trésorerie au temps t
- r = taux d'actualisation
- C0 = investissement initial

**Règle de décision :**
- VAN > 0 : Accepter le projet
- VAN < 0 : Rejeter le projet

**Exemple :**
- Investissement initial : €250 000
- Entrées de trésorerie : €70k, €80k, €90k, €100k, €110k
- Taux d'actualisation : 8%
- VAN = -250 000 + Σ (Ct / 1,08^t) = €36 670 (positif → accepter)

### Taux de rendement interne (TRI)

**Le TRI** est le taux d'actualisation qui rend la VAN = 0.

**Règle de décision :**
- TRI > taux de rendement requis : Accepter
- TRI < taux de rendement requis : Rejeter

**Exemple :**
- Utiliser la fonction TRI d'Excel ou une calculatrice financière

**Avantages :**
- Considère la valeur temporelle de l'argent
- Fournit un taux de rendement

**Inconvénients :**
- Peut avoir plusieurs TRI (flux de trésorerie non conventionnels)
- Suppose un réinvestissement au TRI (la VAN suppose un réinvestissement au coût du capital)

### Indice de rentabilité (IP)

**IP = VA des entrées de trésorerie futures ÷ Investissement initial**
- IP > 1 : Accepter
- Utile en cas de rationnement du capital (mesure relative)

### Récupération actualisée

Comme décrit précédemment, la récupération actualisée tient compte de la valeur temporelle de l'argent. Utile pour le risque mais ignore toujours les flux de trésorerie tardifs.

### Comparaison VAN vs. TRI

- La VAN mesure la valeur absolue ajoutée
- Le TRI fournit un taux de rendement
- Lorsque les projets sont indépendants (non mutuellement exclusifs), les deux méthodes sont généralement d'accord
- Lorsque les projets sont mutuellement exclusifs, s'appuyer sur la VAN car elle mesure la valeur réelle ajoutée

### Projets mutuellement exclusifs

Lors du choix entre des projets mutuellement exclusifs (un seul peut être sélectionné), utilisez la VAN pour sélectionner le projet avec la valeur la plus élevée. Le TRI peut être trompeur si les tailles des projets diffèrent.

### Exemple : Mutuellement exclusifs

**Projet A :**
- Initial : €200k
- VAN : €40k
- TRI : 16%

**Projet B :**
- Initial : €500k
- VAN : €60k
- TRI : 14%

**Décision :** Choisir le Projet B (VAN plus élevée)

### Analyse de sensibilité

Varier les hypothèses (flux de trésorerie, taux d'actualisation, coûts) pour voir l'impact sur la VAN et le TRI.

### Analyse de scénarios

Évaluer les scénarios de base, meilleur et pire cas. Soutient l'évaluation des risques.

### Simulation de Monte Carlo

Technique avancée pour modéliser des variables incertaines et évaluer la distribution de probabilité de la VAN.

### Note de conformité Luxembourg

Les banques et investisseurs au Luxembourg attendent une analyse des flux de trésorerie actualisés (VAN, TRI) pour les propositions de financement. Les projets soutenus par l'aide d'État (ex. subventions d'investissement) nécessitent des prévisions de flux de trésorerie détaillées et une analyse DCF.

### Réfléchir

Pourquoi deux projets avec des TRI similaires pourraient-ils avoir des VAN différentes ? Quelle mesure reflète mieux la valeur actionnariale ?

---

