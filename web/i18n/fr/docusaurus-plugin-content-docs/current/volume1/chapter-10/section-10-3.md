---
id: volume1-chapter-10-section-10-3
title: "10.3 Calculer le coût des marchandises vendues et l'inventaire final en utilisant la méthode perpétuelle"
sidebar_position: 4
slug: /volume1/chapter-10/section-10-3
---

# 10.3 Calculer le coût des marchandises vendues et l'inventaire final en utilisant la méthode perpétuelle

### Système d'inventaire perpétuel

Dans un **système d'inventaire perpétuel**, les registres d'inventaire sont mis à jour en continu avec chaque achat et vente. Le coût des marchandises vendues est enregistré au moment de chaque vente.

### Coût des marchandises vendues (Perpétuel)

**Comment cela fonctionne :**
- Chaque vente déclenche une écriture de coût des marchandises vendues
- Le coût est déterminé en utilisant l'hypothèse de flux de coûts (FIFO, moyenne pondérée)
- L'inventaire est réduit du montant du coût
- Le solde de l'inventaire est toujours actuel

### Exemple : FIFO avec système perpétuel

**Transactions :**
- 1er jan : Achat de 100 unités @ €10
- 10 jan : Achat de 150 unités @ €12
- 15 jan : Vente de 120 unités
- 20 jan : Achat de 200 unités @ €14
- 25 jan : Vente de 150 unités

**Flux de coûts FIFO :**

**1er jan : Achat**
```
361    Stocks                   €1,000
44111  Dettes fournisseurs                        €1,000
Achat de 100 unités @ €10
```

**10 jan : Achat**
```
361    Stocks                   €1,800
44111  Dettes fournisseurs                        €1,800
Achat de 150 unités @ €12
```

**Solde de l'inventaire :**
- 100 unités @ €10 = €1,000
- 150 unités @ €12 = €1,800
- Total : 250 unités = €2,800

**15 jan : Vente (120 unités)**
- FIFO : Vendre les plus anciennes en premier
- 100 unités @ €10 + 20 unités @ €12 = €1,000 + €240 = €1,240

**Écriture de vente :**
```
5131   Trésorerie (ou 4011   Créances) €[prix de vente]
7061   Revenus de ventes                          €[prix de vente]
```

**Écriture CMV :**
```
607    Coût des marchandises vendues          €1,240
361    Stocks                               €1,240
```

**Inventaire restant :**
- 130 unités @ €12 = €1,560

**20 jan : Achat**
```
361    Stocks                   €2,800
44111  Dettes fournisseurs                        €2,800
Achat de 200 unités @ €14
```

**Solde de l'inventaire :**
- 130 unités @ €12 = €1,560
- 200 unités @ €14 = €2,800
- Total : 330 unités = €4,360

**25 jan : Vente (150 unités)**
- FIFO : Vendre les plus anciennes en premier
- 130 unités @ €12 + 20 unités @ €14 = €1,560 + €280 = €1,840

**Écriture CMV :**
```
607    Coût des marchandises vendues          €1,840
361    Stocks                               €1,840
```

**Inventaire final :**
- 180 unités @ €14 = €2,520

**Résumé :**
- Coût des marchandises vendues : €1,240 + €1,840 = €3,080
- Inventaire final : €2,520
- Total : €5,600 ✓

### Exemple : Moyenne pondérée avec système perpétuel

**Mêmes transactions avec moyenne pondérée :**

**1er jan : Achat de 100 unités @ €10**
- Inventaire : 100 unités @ €10 = €1,000
- Moyenne : €10

**10 jan : Achat de 150 unités @ €12**
- Inventaire : 250 unités = €2,800
- Moyenne : €2,800 ÷ 250 = €11,20

**15 jan : Vente de 120 unités @ €11,20**
- CMV : 120 × €11,20 = €1,344
- Restant : 130 unités @ €11,20 = €1,456

**20 jan : Achat de 200 unités @ €14**
- Inventaire : 330 unités = €4,256
- Moyenne : €4,256 ÷ 330 = €12,90

**25 jan : Vente de 150 unités @ €12,90**
- CMV : 150 × €12,90 = €1,935
- Restant : 180 unités @ €12,90 = €2,322

**Résumé :**
- Coût des marchandises vendues : €1,344 + €1,935 = €3,279
- Inventaire final : €2,322
- Total : €5,601 (différence d'arrondi)

### Comparaison perpétuel vs. périodique

**Mêmes données, méthodes différentes :**

**FIFO :**
- CMV périodique : €3,080
- CMV perpétuel : €3,080
- **Même résultat** (FIFO donne le même résultat dans les deux systèmes)

**Moyenne pondérée :**
- CMV périodique : €3,361 (une moyenne pour la période)
- CMV perpétuel : €3,279 (moyenne mobile)
- **Résultat différent** (la moyenne mobile recalcule avec chaque achat)

### Avantages du système perpétuel

**Avantages :**
- Toujours connaître l'inventaire actuel
- Coût des marchandises vendues enregistré à la vente
- Meilleur contrôle de l'inventaire
- Plus facile de détecter le vol
- Pas besoin d'attendre le comptage physique

### Considérations luxembourgeoises

**Système perpétuel :**
- La plupart des entreprises modernes utilisent le perpétuel
- Requis pour un meilleur contrôle de l'inventaire
- Soutient le suivi de la TVA
- Plus facile pour plusieurs taux de TVA
- Mieux pour la conformité

### Note de conformité luxembourgeoise

Pour l'inventaire perpétuel au Luxembourg :
- Doit utiliser une méthode d'évaluation cohérente
- Doit mettre à jour avec chaque transaction
- Doit réconcilier avec les comptages physiques
- Doit se conformer au PCN Classe 3
- Doit soutenir les valeurs d'inventaire
- Doit gérer la TVA correctement

### Réfléchir

Pourquoi la moyenne pondérée donne-t-elle des résultats différents dans les systèmes périodique vs. perpétuel ? Quelle méthode est plus précise ?

---

