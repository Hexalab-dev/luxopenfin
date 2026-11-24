---
id: volume1-chapter-09-section-9-2
title: "9.2 Comptabiliser les comptes irrécouvrables en utilisant les approches du bilan et du compte de résultat"
sidebar_position: 3
slug: /volume1/chapter-09/section-9-2
---

# 9.2 Comptabiliser les comptes irrécouvrables en utilisant les approches du bilan et du compte de résultat

### Comptes irrécouvrables

Les **comptes irrécouvrables** (également appelés créances douteuses) sont des créances clients qui ne peuvent pas être recouvrées auprès des clients.

**Pourquoi les comptes deviennent irrécouvrables :**
- Faillite du client
- Difficultés financières du client
- Litiges avec le client
- Client disparaît
- Conditions économiques

### Comptabilisation des comptes irrécouvrables

Il existe deux approches pour comptabiliser les comptes irrécouvrables :

1. **Méthode de radiation directe** : Radier les comptes lorsqu'ils deviennent irrécouvrables
2. **Méthode de provision** : Estimer les comptes irrécouvrables et créer une provision

**Exigence luxembourgeoise :** La méthode de provision est préférée et souvent requise pour une comptabilisation financière précise.

### Méthode de radiation directe

**Fonctionnement :**
- Aucune estimation effectuée
- Compte radié lorsqu'il est déterminé irrécouvrable
- Charge de créances douteuses enregistrée à ce moment

**Exemple :**
- Compte client de €500 déterminé irrécouvrable le 15 décembre

**Écriture de journal :**
```
6351   Charges de créances douteuses           €500
4011   Créances clients                                        €500
Pour radier le compte irrécouvrable
```

**Compte PCN :**
- 6351 : Charges de créances douteuses (Classe 6 - Charges)

**Inconvénients :**
- Ne fait pas correspondre la charge avec les revenus (viole le principe de correspondance)
- Créances surestimées jusqu'à la radiation
- Non autorisé sous certaines normes comptables

### Méthode de provision

**Fonctionnement :**
- Estimer les comptes irrécouvrables en fin de période
- Créer un compte de provision (contre-actif)
- Radier des comptes spécifiques lorsqu'ils sont irrécouvrables
- Fait correspondre la charge avec les revenus

**Deux approches :**
1. **Approche du bilan** (Échéancier des créances)
2. **Approche du compte de résultat** (Pourcentage des ventes)

### Approche du bilan (Échéancier des créances)

**Fonctionnement :**
- Analyser les créances par âge
- Appliquer différents pourcentages à chaque catégorie d'âge
- Calculer le total estimé irrécouvrable
- Ajuster la provision à ce montant

**Exemple d'échéancier :**

```
Échéancier des créances clients
31 décembre 2024

Client        Total      Courant    1-30 Jours   31-60 Jours   60+ Jours
─────────────────────────────────────────────────────────────────────
Client A      €2,000     €2,000
Client B      €1,500     €1,000      €500
Client C      €3,000     €1,500      €1,000      €500
Client D      €1,000                              €500        €500
─────────────────────────────────────────────────────────────────────
Totaux        €7,500     €4,500      €1,500      €1,000      €500

% Irrécouvrable estimé :    2%        5%         10%         20%
Irrécouvrable estimé :      €90       €75        €100        €100
─────────────────────────────────────────────────────────────────────
Total Irrécouvrable estimé : €365
```

**Calcul :**
- Courant : €4,500 × 2% = €90
- 1-30 Jours : €1,500 × 5% = €75
- 31-60 Jours : €1,000 × 10% = €100
- 60+ Jours : €500 × 20% = €100
- **Total : €365**

**Écriture d'ajustement :**

**Si la Provision a un solde de €100 :**
- Besoin : €365
- Avoir : €100
- Ajustement : €265

**Écriture de journal :**
```
6351   Charges de créances douteuses           €265
4019   Provision pour créances douteuses                  €265
Pour ajuster la provision au montant irrécouvrable estimé
```

**Si la Provision a un solde de €400 :**
- Besoin : €365
- Avoir : €400
- Ajustement : -€35 (réduire la provision)

**Écriture de journal :**
```
4019   Provision pour créances douteuses €35
6351   Charges de créances douteuses                          €35
Pour ajuster la provision au montant irrécouvrable estimé
```

**Comptes PCN :**
- 4019 : Provision pour créances douteuses (Classe 4 - Contre-actif)
- 6351 : Charges de créances douteuses (Classe 6 - Charge)

### Approche du compte de résultat (Pourcentage des ventes)

**Fonctionnement :**
- Estimer les charges de créances douteuses en pourcentage des ventes à crédit
- Calculer la charge pour la période
- Ajouter au compte de provision

**Exemple :**
- Ventes à crédit pour l'année : €100,000
- Pourcentage de créances douteuses estimé : 2%
- Charge de créances douteuses : €100,000 × 2% = €2,000

**Écriture de journal :**
```
6351   Charges de créances douteuses         €2,000
4019   Provision pour créances douteuses              €2,000
Pour enregistrer la charge de créances douteuses estimée
```

**Note :** Cette méthode se concentre sur la correspondance de la charge avec les revenus, indépendamment du solde de provision existant.

### Radiation de comptes spécifiques

**Lorsqu'un compte est déterminé irrécouvrable :**

**Exemple :**
- Le compte du Client A de €500 est déterminé irrécouvrable

**Écriture de journal :**
```
4019   Provision pour créances douteuses €500
4011   Créances clients                                €500
Pour radier le compte irrécouvrable du Client A
```

**Important :** La radiation n'affecte pas les Charges de créances douteuses. La charge a déjà été enregistrée lorsque la provision a été créée.

### Récupération d'un compte radié

**Si le client paie plus tard :**

**Étape 1 : Inverser la radiation**
```
4011   Créances clients        €500
4019   Provision pour créances douteuses          €500
Pour rétablir le compte
```

**Étape 2 : Enregistrer le recouvrement**
```
5131   Trésorerie                        €500
4011   Créances clients                                €500
Pour enregistrer le recouvrement du compte précédemment radié
```

### Présentation au bilan

**Créances clients (Net) :**

```
Bilan

Actifs courants :
  Créances clients              €7,500
  Moins : Provision pour créances douteuses  (365)
  Créances clients (Net)        €7,135
```

**Ou :**
```
Actifs courants :
  Créances clients (Net)        €7,135
```

### Considérations TVA au Luxembourg

**TVA sur les comptes irrécouvrables :**

**Lorsqu'un compte est radié :**
- La TVA peut être récupérable si le compte est irrécouvrable
- Doit suivre les règles de TVA du Luxembourg
- Documentation appropriée requise
- Peut nécessiter d'ajuster la TVA à payer

**Exemple :**
- Compte de €1,170 (€1,000 + €170 TVA) radié
- Si la TVA est récupérable :

**Écriture de journal :**
```
4019   Provision pour créances douteuses €1,000
461411 TVA à payer (régularisation TVA collectée) €170
4011   Créances clients                                €1,170
Pour radier le compte : montant net imputé sur la provision,
TVA collectée initialement déclarée régularisée
```

Contrôle : €1,000 + €170 = €1,170. La provision ne couvre que le montant net (la TVA n'est pas provisionnée) ; les €170 de TVA collectée déclarée lors de la vente sont régularisés (diminution de la TVA à payer) lorsque la créance devient définitivement irrécouvrable. Sans provision (radiation directe), le montant net est imputé au compte 6451 Pertes sur créances irrécouvrables : Débit 6451 €1,000, Débit 461411 €170, Crédit 4011 €1,170.

**Note de conformité luxembourgeoise :**

Pour les comptes irrécouvrables au Luxembourg :
- La méthode de provision est préférée
- Doit estimer sur la base d'hypothèses raisonnables
- La récupération de TVA peut être possible
- Doit maintenir une documentation appropriée
- Affecte le revenu imposable
- Doit se conformer aux exigences du PCN

### Réfléchir

Pourquoi la méthode de provision est-elle préférée à la méthode de radiation directe ? Comment fait-elle mieux correspondre les charges avec les revenus ?

---

