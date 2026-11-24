---
id: volume1-chapter-10-section-10-2
title: "10.2 Calculer le coût des marchandises vendues et l'inventaire final en utilisant la méthode périodique"
sidebar_position: 3
slug: /volume1/chapter-10/section-10-2
---

# 10.2 Calculer le coût des marchandises vendues et l'inventaire final en utilisant la méthode périodique

### Système d'inventaire périodique

Dans un **système d'inventaire périodique**, les registres d'inventaire sont mis à jour uniquement à la fin de la période. Pendant la période, les achats sont enregistrés dans un compte Achats, et le coût des marchandises vendues est calculé en fin de période.

### Formule du coût des marchandises vendues (Périodique)

**Formule :**
**Coût des marchandises vendues = Stock initial + Achats - Stock final**

**Composantes :**
- **Stock initial** : Inventaire en main au début de la période
- **Achats** : Biens achetés pendant la période
- **Stock final** : Inventaire en main à la fin de la période (du comptage physique)

### Calcul de l'inventaire final (Périodique)

**Étapes :**
1. Effectuer un comptage physique de l'inventaire en fin de période
2. Déterminer le coût de chaque article (en utilisant l'hypothèse de flux de coûts)
3. Calculer la valeur totale de l'inventaire final

### Exemple : FIFO avec système périodique

**Informations :**
- Stock initial (1er jan) : 100 unités @ €10 = €1,000
- Achats :
  - 10 jan : 150 unités @ €12 = €1,800
  - 20 jan : 200 unités @ €14 = €2,800
- Comptage physique (31 jan) : 180 unités en main

**Attribution des coûts FIFO :**
- Les coûts les plus anciens sont dans le CMV, les coûts les plus récents dans l'inventaire final
- Inventaire final (180 unités) : Achats les plus récents
  - 180 unités @ €14 = €2,520 (de l'achat du 20 jan)

**Calcul du coût des marchandises vendues :**
- Stock initial : €1,000
- Achats : €1,800 + €2,800 = €4,600
- Biens disponibles : €1,000 + €4,600 = €5,600
- Inventaire final : €2,520
- **Coût des marchandises vendues : €5,600 - €2,520 = €3,080**

**Vérification :**
- Unités vendues : 100 + 150 + 200 - 180 = 270 unités
- CMV : 100 @ €10 + 150 @ €12 + 20 @ €14 = €1,000 + €1,800 + €280 = €3,080 ✓

### Exemple : Moyenne pondérée avec système périodique

**Mêmes informations :**
- Stock initial : 100 unités @ €10 = €1,000
- Achats :
  - 10 jan : 150 unités @ €12 = €1,800
  - 20 jan : 200 unités @ €14 = €2,800
- Total disponible : 450 unités @ €12,44 moyenne = €5,600
- Comptage physique : 180 unités

**Coût moyen pondéré :**
- Coût total : €5,600
- Unités totales : 450
- Coût moyen : €5,600 ÷ 450 = €12,44 par unité

**Attribution des coûts :**
- Inventaire final : 180 unités @ €12,44 = €2,239
- Coût des marchandises vendues : 270 unités @ €12,44 = €3,361

**Vérification :**
- CMV + Final = €3,361 + €2,239 = €5,600 ✓

### Écritures d'ajustement (Périodique)

**En fin de période :**

**Étape 1 : Transférer le stock initial et les achats au CMV**
```
607    Coût des marchandises vendues          €5,600
361    Stocks (initial)                   €1,000
6061   Achats                                 €4,600
Pour transférer le stock initial et les achats au CMV
```

**Étape 2 : Enregistrer l'inventaire final**
```
361    Stocks (final)          €2,520
607    Coût des marchandises vendues                      €2,520
Pour enregistrer l'inventaire final (exemple FIFO)
```

**Résultat :**
- Coût des marchandises vendues : €5,600 - €2,520 = €3,080
- Stocks : €2,520

### Considérations luxembourgeoises

**Système périodique :**
- Moins courant dans les entreprises modernes
- Encore utilisé par certaines petites entreprises
- Nécessite un comptage physique en fin de période
- Doit utiliser une hypothèse de flux de coûts cohérente

### Note de conformité luxembourgeoise

Pour l'inventaire périodique au Luxembourg :
- Doit utiliser une méthode d'évaluation cohérente (FIFO ou moyenne pondérée)
- Doit effectuer un comptage physique
- Doit évaluer correctement l'inventaire final
- Doit calculer le coût des marchandises vendues avec précision
- Doit se conformer aux exigences PCN Classe 3
- Doit maintenir une documentation appropriée

### Réfléchir

Pourquoi le système périodique nécessite-t-il un comptage physique de l'inventaire ? Que se passerait-il si le comptage était inexact ?

---

