---
id: volume1-chapter-06-section-6-4
title: "6.4 Analyser et enregistrer les transactions pour la vente de marchandises en utilisant le système d'inventaire perpétuel"
sidebar_position: 5
slug: /volume1/chapter-06/section-6-4
---

# 6.4 Analyser et enregistrer les transactions pour la vente de marchandises en utilisant le système d'inventaire perpétuel

### Vente de marchandises

Lorsqu'une entreprise de négoce vend des stocks, elle doit enregistrer :
- La vente (revenus et créances/trésorerie)
- Le coût des marchandises vendues (réduction des stocks)
- La TVA sur la vente

### Transaction de vente de base

**Transaction :** Vendre des marchandises en espèces

**Exemple :** Magasin de détail vend 1 000 € de vêtements en espèces (TVA exclue), TVA 17 %. Le coût des marchandises vendues est de 600 €.

**Écritures de journal (deux écritures) :**

**Écriture 1 : Enregistrer la vente**
```
5131   Trésorerie                       €1,170
7061   Revenus de ventes (Classe 7)              €1,000
461411 TVA à payer (Classe 4)                    €170
Pour enregistrer la vente en espèces de marchandises
```

**Écriture 2 : Enregistrer le coût des marchandises vendues**
```
607    Coût des marchandises vendues (Classe 6) €600
361    Stocks (Classe 3)                    €600
Pour enregistrer le coût des marchandises vendues
```

**Comptes PCN :**
- 5131 : Trésorerie (Classe 5)
- 7061 : Revenus de ventes (Classe 7)
- 461411 : TVA à payer (Classe 4)
- 607 : Coût des marchandises vendues (Classe 6)
- 361 : Stocks (Classe 3)

**Après les écritures :**
- Revenus de ventes : 1 000 €
- Coût des marchandises vendues : 600 €
- Marge brute : 400 €
- Stocks réduits de 600 €

### Vente à crédit

**Transaction :** Vendre des marchandises à crédit

**Exemple :** Vendre 2 000 € de marchandises à crédit (TVA exclue), TVA 17 %. Le coût est de 1 200 €.

**Écritures de journal :**

**Écriture 1 : Enregistrer la vente**
```
4011   Créances clients        €2,340
7061   Revenus de ventes                          €2,000
461411 TVA à payer                              €340
Pour enregistrer la vente à crédit de marchandises
```

**Écriture 2 : Enregistrer le coût des marchandises vendues**
```
607    Coût des marchandises vendues         €1,200
361    Stocks                              €1,200
Pour enregistrer le coût des marchandises vendues
```

### Retours et rabais sur ventes

**Retour de vente :** Le client retourne des marchandises

**Exemple :** Le client retourne 500 € de marchandises (TVA exclue) qui ont été vendues pour 500 € avec un coût de 300 €.

**Écritures de journal :**

**Écriture 1 : Inverser la vente**
```
709    Retours sur ventes (ou réduire Ventes) €500
461411 TVA à payer                             €85
4011   Créances clients (ou 5131   Trésorerie)            €585
Pour enregistrer le retour de marchandises
```

**Écriture 2 : Retourner les stocks**
```
361    Stocks                  €300
607    Coût des marchandises vendues                     €300
Pour retourner les marchandises aux stocks
```

**Note PCN :** Les retours sur ventes peuvent être :
- Compte séparé : 709 Retours sur ventes (Classe 7 - contre-revenus)
- Ou compensés contre les Revenus de ventes

**Rabais sur vente :** Réduction de prix pour biens endommagés conservés par le client

**Exemple :** Accorder un rabais de 100 € (TVA exclue) pour des biens légèrement endommagés.

**Écriture de journal :**
```
709    Rabais sur ventes (Classe 7)  €100
461411 TVA à payer                             €17
4011   Créances clients (ou 5131   Trésorerie)            €117
Pour enregistrer le rabais sur vente
```

**Note :** Aucun ajustement des stocks (le client garde les biens).

### Remises sur ventes

**Remise sur vente :** Remise pour paiement anticipé par le client

**Exemple :** Vente de 5 000 € à crédit, conditions 2/10, n/30. Le client paie dans les 10 jours.

**Vente initiale :**
```
4011   Créances clients        €5,850
7061   Revenus de ventes                          €5,000
461411 TVA à payer                              €850
```

**Paiement dans la période de remise :**
```
5131   Trésorerie                       €5,733
709    Remises sur ventes (Classe 7)    €100  (2% de €5,000)
4011   Créances clients                    €5,850
Pour enregistrer le paiement dans la période de remise
(TVA déjà enregistrée sur la vente originale)
```

**Note PCN :** Remises sur ventes : 709 (Classe 7 - contre-revenus)

### TVA luxembourgeoise sur les ventes

**Différents taux de TVA pour différentes marchandises :**

**Exemple : Restaurant vendant différents articles**

**Transaction :** Restaurant vend :
- Nourriture (sur place) : 100 € (TVA exclue), TVA 3 %
- Vin (servi avec le repas) : 50 € (TVA exclue), TVA 17 %
- Nourriture à emporter : 30 € (TVA exclue), TVA 3 %

**Écriture de journal :**
```
5131   Trésorerie                       €192.40
703    Revenus de services (Nourriture)                €100.00
703    Revenus de services (Boissons)             €50.00
703    Revenus de services (À emporter)             €30.00
461411 TVA à payer                              €12.40
Pour enregistrer les ventes avec différents taux de TVA
(TVA : €3.00 + €8.50 + €0.90 = €12.40)
```

**Écritures de coût (si applicable) :**
```
607    Coût des marchandises vendues         €[coût]
361    Stocks                              €[coût]
```

### Calcul des ventes nettes

**Ventes nettes** = Ventes brutes - Retours sur ventes - Rabais sur ventes - Remises sur ventes

**Exemple :**
- Ventes brutes : 50 000 €
- Retours sur ventes : 2 000 €
- Rabais sur ventes : 500 €
- Remises sur ventes : 1 000 €
- Ventes nettes : 50 000 € - 2 000 € - 500 € - 1 000 € = 46 500 €

### Note de conformité Luxembourg

Lors de la vente de marchandises au Luxembourg :
- Enregistrer les revenus au montant net (TVA exclue)
- Enregistrer la TVA à payer au taux correct
- Enregistrer le coût des marchandises vendues immédiatement (système perpétuel)
- Utiliser le taux de TVA correct pour chaque type d'article
- Maintenir une documentation appropriée
- Suivre les ventes par taux de TVA pour la préparation de la déclaration TVA

### Réfléchir

Un magasin de détail luxembourgeois vend un T-shirt pour enfants (TVA 3 %) pour 20 € et un T-shirt pour adultes (TVA 17 %) pour 30 €. Le coût du T-shirt pour enfants était de 10 €, et le T-shirt pour adultes était de 15 €. Enregistrez les deux ventes avec les écritures appropriées de TVA et de coût des marchandises vendues.

---

