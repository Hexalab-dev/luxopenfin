---
id: volume1-chapter-06-section-6-3
title: "6.3 Analyser et enregistrer les transactions pour les achats de marchandises en utilisant le système d'inventaire perpétuel"
sidebar_position: 4
slug: /volume1/chapter-06/section-6-3
---

# 6.3 Analyser et enregistrer les transactions pour les achats de marchandises en utilisant le système d'inventaire perpétuel

### Achat de marchandises

Lorsqu'une entreprise de négoce achète des stocks, elle doit enregistrer :
- Le coût de la marchandise
- Tous les coûts de transport
- La TVA (si récupérable)
- Les conditions de paiement

### Transaction d'achat de base

**Transaction :** Achat de marchandises à crédit

**Exemple :** Magasin de détail achète 5 000 € de vêtements à crédit auprès d'un fournisseur (TVA exclue), TVA 17 %, récupérable.

**Écriture de journal :**
```
361    Stocks (Classe 3)         €5,000
421611 TVA récupérable (Classe 4)    850
44111  Dettes fournisseurs (Classe 4)            €5,850
Pour enregistrer l'achat de marchandises à crédit
```

**Comptes PCN :**
- 361 : Marchandises (Classe 3 - Actif)
- 421611 : TVA récupérable (Classe 4 - Actif)
- 44111 : Dettes fournisseurs (Classe 4 - Passif)

### Achat avec paiement en espèces

**Transaction :** Achat de marchandises, paiement en espèces

**Exemple :** Achat de 2 000 € de marchandises, paiement en espèces (TVA exclue), TVA 17 %, récupérable.

**Écriture de journal :**
```
361    Stocks                   €2,000
421611 TVA récupérable              340
5131   Trésorerie (Classe 5)                  €2,340
Pour enregistrer l'achat de marchandises en espèces
```

### Retours et rabais sur achats

**Retour d'achat :** Retour de marchandises au fournisseur

**Exemple :** Retour de 500 € de marchandises défectueuses (TVA exclue) d'un achat précédent.

**Écriture de journal :**
```
44111  Dettes fournisseurs            €585
361    Stocks                                   €500
421611 TVA récupérable                          €85
Pour enregistrer le retour de marchandises au fournisseur
```

**Note :** Réduit les stocks et les dettes fournisseurs. La TVA récupérable est également réduite.

**Rabais sur achat :** Réduction de prix pour biens endommagés conservés

**Exemple :** Recevoir un rabais de 200 € pour des biens légèrement endommagés (TVA exclue).

**Écriture de journal :**
```
44111  Dettes fournisseurs            €234
361    Stocks                                   €200
421611 TVA récupérable                          €34
Pour enregistrer le rabais sur achat
```

### Remises sur achats

**Remise sur achat :** Remise pour paiement anticipé

**Exemple :** Achat de 10 000 € de marchandises, conditions 2/10, n/30 (remise de 2 % si payé dans les 10 jours, net 30 jours).

**Achat initial :**
```
361    Stocks                  €10,000
421611 TVA récupérable             1,700
44111  Dettes fournisseurs                       €11,700
```

**Si payé dans les 10 jours (prise de remise) :**
```
44111  Dettes fournisseurs           €11,700
361    Stocks                                  €200  (2% de €10,000)
421611 TVA récupérable                             €34  (TVA sur remise)
5131   Trésorerie                                €11,466
Pour enregistrer le paiement dans la période de remise
```

**Note :** La remise réduit le coût des stocks (pas un compte de revenus séparé).

**Si payé après 10 jours (pas de remise) :**
```
44111  Dettes fournisseurs           €11,700
5131   Trésorerie                                €11,700
Pour enregistrer le paiement après la période de remise
```

### Considérations TVA luxembourgeoises

**Différents taux de TVA :**
- Taux standard : 17 %
- Taux réduits : 14 %, 8 %, 3 %

**Exemple : Restaurant achetant différents articles**

**Transaction :** Restaurant achète :
- Ingrédients alimentaires : 1 000 € (TVA exclue), TVA 3 %
- Vin (jusqu'à 13 % vol.) : 500 € (TVA exclue), TVA 14 %
- Équipement : 2 000 € (TVA exclue), TVA 17 %

**Écriture de journal :**
```
361    Stocks - Aliments            €1,000
361    Stocks - Boissons               500
222    Équipement                   2,000
421611 TVA récupérable                 440  (€30 + €70 + €340)
44111  Dettes fournisseurs                         €3,940
Pour enregistrer les achats avec différents taux de TVA
```

**Calcul TVA :**
- Aliments : 1 000 € × 3 % = 30 €
- Vin : 500 € × 14 % = 70 €
- Équipement : 2 000 € × 17 % = 340 €
- TVA totale : 440 €

**Note PCN :** Peut utiliser des sous-comptes pour différents types de stocks :
- 3611 : Stocks alimentaires
- 3612 : Stocks de boissons
- Ou suivre séparément à des fins de TVA

### Note de conformité Luxembourg

Lors de l'achat de marchandises au Luxembourg :
- Enregistrer le coût net (TVA exclue) dans les stocks
- Enregistrer la TVA récupérable séparément (421611)
- Utiliser le taux de TVA correct pour chaque article
- Maintenir une documentation appropriée
- S'assurer que la TVA peut être récupérée (usage professionnel)
- Suivre différents types de stocks si différents taux de TVA s'appliquent

### Réfléchir

Un magasin de détail luxembourgeois achète des vêtements pour enfants (TVA 3 %) et des vêtements pour adultes (TVA 17 %) dans la même transaction. Comment cela devrait-il être enregistré ? Quels comptes PCN sont impliqués ?

---

