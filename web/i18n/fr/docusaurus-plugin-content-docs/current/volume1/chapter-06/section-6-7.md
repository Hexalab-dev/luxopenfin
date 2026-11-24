---
id: volume1-chapter-06-section-6-7
title: "6.7 Annexe : Analyser et enregistrer les transactions pour les achats et ventes de marchandises en utilisant le système d'inventaire périodique"
sidebar_position: 8
slug: /volume1/chapter-06/section-6-7
---

# 6.7 Annexe : Analyser et enregistrer les transactions pour les achats et ventes de marchandises en utilisant le système d'inventaire périodique

### Aperçu du système d'inventaire périodique

Le **système d'inventaire périodique** met à jour les registres d'inventaire uniquement en fin de période. Pendant la période, les achats sont enregistrés dans un compte Achats, et le coût des marchandises vendues est calculé en fin de période.

### Différences clés par rapport au système perpétuel

**Système perpétuel :**
- Stocks mis à jour à chaque achat
- Coût des marchandises vendues enregistré à chaque vente
- Solde des stocks toujours actuel

**Système périodique :**
- Achats enregistrés dans le compte Achats
- Pas de coût des marchandises vendues au moment de la vente
- Coût des marchandises vendues calculé en fin de période
- Nécessite un comptage physique de l'inventaire

### Enregistrement des achats (Système périodique)

**Transaction :** Achat de marchandises à crédit

**Exemple :** Achat de 5 000 € de marchandises (TVA exclue), TVA 17 %, récupérable.

**Écriture de journal :**
```
6061   Achats (Classe 6)         €5,000
421611 TVA récupérable              850
44111  Dettes fournisseurs                        €5,850
Pour enregistrer l'achat de marchandises (système périodique)
```

**Différence clé :** Utilise le compte "Achats" (6061) au lieu du compte "Stocks".

**Compte PCN :**
- 6061 : Achats de marchandises (Classe 6 - Compte de charges dans le système périodique)

### Enregistrement des ventes (Système périodique)

**Transaction :** Vendre des marchandises

**Exemple :** Vendre 1 000 € de marchandises en espèces (TVA exclue), TVA 17 %.

**Écriture de journal :**
```
5131   Trésorerie                       €1,170
7061   Revenus de ventes                          €1,000
461411 TVA à payer                              €170
Pour enregistrer la vente de marchandises (système périodique)
```

**Différence clé :** Pas d'écriture de coût des marchandises vendues au moment de la vente. Le coût est calculé en fin de période.

### Calcul du coût des marchandises vendues (Système périodique)

**Formule :**
**Coût des marchandises vendues = Stock initial + Achats - Stock final**

**Étapes :**
1. Prendre le stock initial (de la période précédente)
2. Ajouter les achats pendant la période
3. Soustraire le stock final (du comptage physique)
4. Le résultat est le coût des marchandises vendues

**Exemple :**
- Stock initial : 10 000 €
- Achats : 30 000 €
- Stock final (comptage physique) : 12 000 €
- Coût des marchandises vendues : 10 000 € + 30 000 € - 12 000 € = 28 000 €

**Écriture d'ajustement en fin de période :**
```
607    Coût des marchandises vendues          €28,000
361    Stocks (initial)                   €10,000
6061   Achats                                 €30,000
361    Stocks (final)                        €12,000
Pour calculer et enregistrer le coût des marchandises vendues
```

En fait, les écritures de clôture périodiques appropriées sont :

**Étape 1 : Transférer le stock initial et les achats au CMV**
```
607    Coût des marchandises vendues          €40,000
361    Stocks (initial)                   €10,000
6061   Achats                                 €30,000
```

**Étape 2 : Enregistrer le stock final**
```
361    Stocks (final)          €12,000
607    Coût des marchandises vendues                      €12,000
```

**Résultat :** Coût des marchandises vendues = 40 000 € - 12 000 € = 28 000 €

### Comptage physique de l'inventaire

**Requis pour le système périodique :**
- Doit compter tous les stocks en fin de période
- Le comptage détermine la valeur du stock final
- Utilisé pour calculer le coût des marchandises vendues
- Doit être précis

**Processus :**
1. Compter tous les articles en stock
2. Évaluer chaque article (au coût)
3. Calculer le stock final total
4. Utiliser dans le calcul du coût des marchandises vendues

### Avantages et inconvénients

**Avantages du système périodique :**
- Plus simple pendant la période
- Moins de tenue de registres détaillée
- Adapté aux petites entreprises
- Coût inférieur

**Inconvénients du système périodique :**
- Ne pas connaître les niveaux de stocks pendant la période
- Coût des marchandises vendues uniquement en fin de période
- Nécessite un comptage physique
- Moins de contrôle des stocks
- Plus difficile de détecter le vol

### Contexte luxembourgeois

**Utilisation du système périodique :**
- Moins courant au Luxembourg
- Principalement très petites entreprises
- Entreprises avec opérations simples
- Systèmes comptables manuels

**Recommandation Luxembourg :** Utiliser le système perpétuel pour la plupart des entreprises en raison de :
- Besoins de conformité TVA
- Meilleur contrôle des stocks
- Plusieurs taux de TVA
- Systèmes comptables modernes

### Note de conformité Luxembourg

Si utilisation du système périodique au Luxembourg :
- Doit toujours suivre les classifications PCN
- Doit évaluer correctement les stocks
- Doit calculer le coût des marchandises vendues avec précision
- Les comptages physiques doivent être documentés
- Doit se conformer aux exigences TVA
- Doit déposer des états financiers précis

---

