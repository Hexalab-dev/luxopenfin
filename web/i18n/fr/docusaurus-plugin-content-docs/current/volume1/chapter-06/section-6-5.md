---
id: volume1-chapter-06-section-6-5
title: "6.5 Discuter et enregistrer les transactions en appliquant les deux méthodes couramment utilisées pour les frais de transport"
sidebar_position: 6
slug: /volume1/chapter-06/section-6-5
---

# 6.5 Discuter et enregistrer les transactions en appliquant les deux méthodes couramment utilisées pour les frais de transport

### Frais de transport entrants (Coûts de transport)

Les **frais de transport entrants** (également appelés transport entrant) font référence au coût d'expédition des marchandises du fournisseur à l'entreprise.

**Point clé :** Les frais de transport entrants font partie du coût des stocks, pas une charge séparée.

### Deux méthodes pour enregistrer les frais de transport entrants

1. **Inclure dans le compte Stocks** (Méthode préférée)
2. **Compte Frais de transport entrants séparé** (Méthode alternative)

### Méthode 1 : Inclure dans le compte Stocks

**Comment cela fonctionne :**
- Le coût de transport est ajouté directement au compte Stocks
- Pas de compte de transport séparé
- Plus simple et plus direct

**Exemple :** Achat de 5 000 € de marchandises, paiement de 200 € de transport. TVA 17 % sur les marchandises, le transport peut ou non avoir de TVA.

**Écriture de journal :**
```
361    Stocks                   €5,200  (€5,000 + €200)
421611 TVA récupérable              850   (sur marchandises)
44111  Dettes fournisseurs (ou 5131   Trésorerie)            €6,050
Pour enregistrer l'achat incluant les frais de transport entrants
```

**Avantages :**
- Plus simple
- Le transport fait partie du coût des stocks
- Pas de compte séparé à suivre
- Allocation directe des coûts

**Inconvénients :**
- Ne peut pas facilement voir les coûts de transport séparément
- Peut avoir besoin de suivre si analyse des coûts de transport

### Méthode 2 : Compte Frais de transport entrants séparé

**Comment cela fonctionne :**
- Coût de transport enregistré dans un compte séparé (6161 : Frais de transport entrants)
- Transféré aux Stocks ou au Coût des marchandises vendues en fin de période
- Permet de suivre les coûts de transport séparément

**Exemple :** Achat de 5 000 € de marchandises, paiement de 200 € de transport séparément.

**Achat initial :**
```
361    Stocks                   €5,000
421611 TVA récupérable              850
44111  Dettes fournisseurs                        €5,850
```

**Paiement du transport :**
```
6161   Frais de transport entrants (Classe 6)        €200
5131   Trésorerie (ou 44111  Dettes fournisseurs)            €200
Pour enregistrer le coût des frais de transport entrants
```

**En fin de période (ou lors du calcul du CMV) :**
Transférer le transport aux stocks ou inclure dans le coût des marchandises vendues :
```
361    Stocks                   €200
6161   Frais de transport entrants                              €200
Pour transférer les frais de transport entrants au coût des stocks
```

**Ou, si incluant directement dans le CMV :**
```
607    Coût des marchandises vendues          €200
6161   Frais de transport entrants                              €200
```

**Compte PCN :**
- 6161 : Frais de transport entrants (Classe 6 - Charge, mais partie du coût des stocks)

**Avantages :**
- Peut suivre les coûts de transport séparément
- Utile pour l'analyse
- Peut identifier les tendances de transport

**Inconvénients :**
- Plus complexe
- Nécessite un transfert en fin de période
- Étape supplémentaire en comptabilité

### TVA luxembourgeoise sur le transport

**Traitement TVA du transport :**
- Les services de transport ont généralement 17 % de TVA
- La TVA sur le transport est généralement récupérable (si pour usage professionnel)
- Doit être enregistrée séparément si différente de la TVA sur les marchandises

**Exemple :** Achat de 5 000 € de marchandises (TVA 17 %) avec 200 € de transport (TVA 17 %).

**Écriture de journal (Méthode 1) :**
```
361    Stocks                   €5,200
421611 TVA récupérable              918   (€850 + €34 sur transport)
44111  Dettes fournisseurs                        €6,118
Pour enregistrer l'achat incluant le transport avec TVA
```

**Calcul TVA :**
- TVA sur marchandises : 5 000 € × 17 % = 850 €
- TVA sur transport : 200 € × 17 % = 34 €
- TVA totale : 884 €

### Quelle méthode utiliser ?

**Utiliser la Méthode 1 (Inclure dans Stocks) si :**
- Opérations simples
- Les coûts de transport sont relativement faibles
- Pas besoin de suivre le transport séparément
- Veut une comptabilité plus simple

**Utiliser la Méthode 2 (Compte séparé) si :**
- Besoin d'analyser les coûts de transport
- Le transport est significatif
- Veut suivre les tendances de transport
- Plusieurs fournisseurs avec différentes conditions de transport

**Recommandation Luxembourg :** La Méthode 1 est généralement préférée pour la simplicité, mais la Méthode 2 peut être utile pour l'analyse.

### Frais de transport sortants (Livraison aux clients)

Les **frais de transport sortants** (également appelés charges de livraison) sont le coût d'expédition des marchandises aux clients.

**Important :** Les frais de transport sortants sont une **charge d'exploitation**, PAS partie du coût des stocks.

**Exemple :** Payer 50 € pour expédier des marchandises au client.

**Écriture de journal :**
```
6162   Charges de livraison (Classe 6)  €50
5131   Trésorerie                                      €50
Pour enregistrer les frais de transport sortants (charges de livraison)
```

**Compte PCN :**
- 6162 : Charges de livraison/Transport (Classe 6)

**Note :** Les frais de transport sortants sont une charge, pas ajoutés aux stocks ou au coût des marchandises vendues.

### Note de conformité Luxembourg

Pour les frais de transport entrants au Luxembourg :
- Le transport fait partie du coût des stocks
- La TVA sur le transport est généralement récupérable
- Doit être correctement documenté
- Peut utiliser l'une ou l'autre méthode (stocks ou compte séparé)
- Doit être inclus dans l'évaluation des stocks pour les états financiers

### Réfléchir

Une entreprise achète 10 000 € de marchandises et paie 500 € de transport. Le transport devrait-il être inclus dans le coût des stocks ou enregistré comme une charge séparée ? Pourquoi ? Quels comptes PCN sont impliqués ?

---

