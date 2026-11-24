---
id: volume1-chapter-04-section-4-3
title: "4.3 Enregistrer et reporter les types courants d'écritures d'ajustement"
sidebar_position: 4
slug: /volume1/chapter-04/section-4-3
---

# 4.3 Enregistrer et reporter les types courants d'écritures d'ajustement

### Enregistrement des écritures d'ajustement

Les écritures d'ajustement sont enregistrées de la même manière que les écritures de journal régulières, mais elles sont effectuées à la fin de la période après que toutes les transactions régulières sont enregistrées.

### Processus étape par étape

1. **Identifier les comptes qui nécessitent un ajustement**
2. **Calculer le montant de l'ajustement**
3. **Déterminer le débit et le crédit**
4. **Préparer l'écriture de journal**
5. **Reporter aux comptes du grand livre**

### Exemple complet : Processus d'ajustement complet

Travaillons sur un exemple complet pour le restaurant de Marie à la fin de novembre 2024.

#### Balance avant ajustement (Avant les ajustements)

```
Le Petit Bistro
Balance avant ajustement
30 novembre 2024

Compte                          Débit      Crédit
─────────────────────────────────────────────────
5131   Trésorerie                       €15,000
4011   Créances clients         3,000
361    Inventaire                   5,000
481    Assurance payée d'avance           1,200
222    Équipement                  30,000
44111  Dettes fournisseurs                    €8,000
461411 TVA à payer                           500
482    Revenus non gagnés                     3,000
1942   Emprunt bancaire                    20,000
101    Capital social                       20,000
141    Bénéfices reportés                   2,600
703    Revenus de services                     12,000
6211   Charge de salaires           8,000
6111   Charge de loyer               2,400
6184   Charge de services publics          1,500
─────────────────────────────────────────────────
Totaux                         €66,100    €66,100
```

**Note :** La balance avant ajustement doit déjà être équilibrée (chaque écriture comptabilisée avait des débits et crédits égaux). Les ajustements ne « corrigent » pas une balance ; ils mettent à jour certains soldes pour que les produits et charges soient rattachés à la bonne période, et chaque écriture d'ajustement est elle-même équilibrée.

#### Informations pour les ajustements

1. **Assurance payée d'avance :** 1 200 € payés pour 12 mois le 1er janvier. 100 € par mois expirent.
2. **Équipement :** Coût 30 000 €, durée d'utilité de 5 ans, amortissement linéaire. 500 € par mois.
3. **Revenus non gagnés :** 3 000 € reçus pour 3 mois de traiteur (novembre, décembre, janvier). 1 000 € gagnés en novembre.
4. **Salaires courus :** Les employés ont travaillé la dernière semaine de novembre (1 500 €) mais ne seront pas payés avant le 5 décembre.
5. **Intérêts courus :** Prêt de 20 000 € à 6 % d'intérêt annuel. 100 € d'intérêts courus pour novembre.
6. **Fournitures en stock :** L'inventaire montre 5 000 €, mais 1 000 € ont été utilisés pendant novembre.

#### Écriture d'ajustement 1 : Assurance payée d'avance

**Calcul :** 1 200 € ÷ 12 mois = 100 €/mois
**Montant utilisé en novembre :** 100 €

```
Date : 2024-11-30

614    Charge d'assurance           €100
481    Assurance payée d'avance                      €100
Pour enregistrer la charge d'assurance pour novembre
```

#### Écriture d'ajustement 2 : Amortissement

**Calcul :** 30 000 € ÷ 60 mois = 500 €/mois
**Amortissement pour novembre :** 500 €

```
Date : 2024-11-30

633    Charge d'amortissement        €500
2229   Amortissement cumulé - Équipement    €500
Pour enregistrer l'amortissement mensuel sur l'équipement
```

#### Écriture d'ajustement 3 : Revenus non gagnés

**Calcul :** 3 000 € ÷ 3 mois = 1 000 €/mois
**Revenus gagnés en novembre :** 1 000 €

```
Date : 2024-11-30

482    Revenus non gagnés            €1,000
703    Revenus de services                       €1,000
Pour enregistrer les revenus gagnés en novembre
```

#### Écriture d'ajustement 4 : Salaires courus

**Montant :** 1 500 €

```
Date : 2024-11-30

6211   Charge de salaires            €1,500
4714   Salaires à payer                       €1,500
Pour enregistrer les salaires courus pour la dernière semaine de novembre
```

#### Écriture d'ajustement 5 : Intérêts courus

**Calcul :** 20 000 € × 6 % ÷ 12 = 100 €/mois
**Intérêts pour novembre :** 100 €

```
Date : 2024-11-30

6552   Charge d'intérêts            €100
4718   Intérêts à payer                       €100
Pour enregistrer les intérêts courus pour novembre
```

#### Écriture d'ajustement 6 : Fournitures utilisées

**Calcul :** 1 000 € de fournitures utilisées
**Note :** Cela suppose que les fournitures sont suivies séparément ou font partie de l'inventaire

```
Date : 2024-11-30

6185   Charge de fournitures            €1,000
303    Inventaire (ou 303    Fournitures)         €1,000
Pour enregistrer les fournitures utilisées pendant novembre
```

### Report des écritures d'ajustement aux comptes en T

Reportons ces écritures d'ajustement aux comptes en T :

#### Assurance payée d'avance

```
Assurance payée d'avance (481)
─────────────────────────────
Nov 01  Solde  €1,200  │
                        │  Nov 30  Adj1     €100
─────────────────────────────
Solde  €1,100
```

#### Charge d'assurance

```
Charge d'assurance (614)
─────────────────────────────
Nov 30  Adj1      €100   │
─────────────────────────────
Solde  €100
```

#### Équipement et Amortissement cumulé

```
Équipement (222)
─────────────────────────────
Nov 01  Solde  €30,000 │
─────────────────────────────
Solde €30,000

Amortissement cumulé - Équipement (2229)
─────────────────────────────
        │  Nov 30  Adj2     €500
─────────────────────────────
        │  Solde  €500
```

#### Revenus non gagnés

```
Revenus non gagnés (482)
─────────────────────────────
Nov 30  Adj3      €1,000 │  Nov 01  Solde  €3,000
─────────────────────────────
        │  Solde  €2,000
```

#### Revenus de services

```
Revenus de services (703)
─────────────────────────────
        │  Nov 01-30  Revenus  €12,000
        │  Nov 30  Adj3        €1,000
─────────────────────────────
        │  Solde  €13,000
```

#### Charge de salaires et Salaires à payer

```
Charge de salaires (6211)
─────────────────────────────
Nov 01-30  Payé   €8,000 │
Nov 30  Adj4      €1,500 │
─────────────────────────────
Solde  €9,500

Salaires à payer (4714)
─────────────────────────────
        │  Nov 30  Adj4     €1,500
─────────────────────────────
        │  Solde  €1,500
```

#### Charge d'intérêts et Intérêts à payer

```
Charge d'intérêts (6552)
─────────────────────────────
Nov 30  Adj5      €100   │
─────────────────────────────
Solde  €100

Intérêts à payer (4718)
─────────────────────────────
        │  Nov 30  Adj5     €100
─────────────────────────────
        │  Solde  €100
```

### Note de conformité luxembourgeoise

Lors du report des écritures d'ajustement au Luxembourg :
- Utiliser les numéros de comptes PCN appropriés
- Maintenir une piste d'audit claire
- Documenter les calculs
- Conserver toutes les écritures d'ajustement pendant 10 ans
- S'assurer que les écritures sont effectuées avant le dépôt des états financiers

### Réfléchissez-y

Pourquoi est-il important de reporter les écritures d'ajustement aux comptes en T avant de préparer la balance après ajustement ? Que se passerait-il si les écritures d'ajustement n'étaient pas reportées ?

---

