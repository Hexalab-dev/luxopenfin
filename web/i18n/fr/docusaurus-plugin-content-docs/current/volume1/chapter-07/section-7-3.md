---
id: volume1-chapter-07-section-7-3
title: "7.3 Analyser et comptabiliser les transactions en utilisant des journaux spéciaux"
sidebar_position: 4
slug: /volume1/chapter-07/section-7-3
---

# 7.3 Analyser et comptabiliser les transactions en utilisant des journaux spéciaux

### Utilisation des journaux spéciaux

Travaillons sur des exemples d'enregistrement de transactions dans des journaux spéciaux pour une entreprise de détail luxembourgeoise.

### Exemple d'entreprise : Mode Luxembourg SARL

Un magasin de vêtements de détail avec les transactions suivantes en novembre :

### Transaction 1 : Vente à crédit

**Transaction :** Vendre €1,000 de marchandises à crédit au Client A (hors TVA), TVA 17 %. Facture INV-001.

**Écriture du journal des ventes :**
```
Journal des ventes
Date       Facture #    Client      Montant    TVA 17%    Total
─────────────────────────────────────────────────────────────────
5 nov      INV-001     Client A    €1,000     €170      €1,170
```

**Report :**
- Au compte du Client A dans le grand livre auxiliaire des comptes clients : €1,170
- Aux Revenus de ventes (grand livre général) : €1,000
- À TVA à payer (grand livre général) : €170
- Aux Comptes clients (grand livre général) : €1,170

### Transaction 2 : Achat à crédit

**Transaction :** Acheter €2,000 d'inventaire à crédit auprès du Fournisseur X (hors TVA), TVA 17 %, récupérable. Facture SUP-001.

**Écriture du journal des achats :**
```
Journal des achats
Date       Facture #    Fournisseur      Montant    TVA 17%    Total
─────────────────────────────────────────────────────────────────
8 nov      SUP-001     Fournisseur X    €2,000     €340      €2,340
```

**Report :**
- Au compte du Fournisseur X dans le grand livre auxiliaire des comptes fournisseurs : €2,340
- À Inventaire (grand livre général) : €2,000
- À TVA récupérable (grand livre général) : €340
- Aux Comptes fournisseurs (grand livre général) : €2,340

### Transaction 3 : Vente au comptant

**Transaction :** Vendre €500 de marchandises au comptant (hors TVA), TVA 17 %.

**Écriture du journal des encaissements :**
```
Journal des encaissements
Date       Source        Espèces      Ventes    Créances    TVA
─────────────────────────────────────────────────────────────────
10 nov     Vente comptant    €585      €500         -          €85
```

**Report :**
- À Espèces (grand livre général) : €585
- Aux Revenus de ventes (grand livre général) : €500
- À TVA à payer (grand livre général) : €85

### Transaction 4 : Paiement au fournisseur

**Transaction :** Payer €2,340 au Fournisseur X pour l'achat précédent.

**Écriture du journal des décaissements :**
```
Journal des décaissements
Date       Bénéficiaire          Espèces    Achats    Dettes    Dépenses
─────────────────────────────────────────────────────────────────
12 nov     Fournisseur X    €2,340      -        €2,340         -
```

**Report :**
- À Espèces (grand livre général) : €2,340 (diminution)
- Aux Comptes fournisseurs (grand livre général) : €2,340 (diminution)
- Au compte du Fournisseur X dans le grand livre auxiliaire des comptes fournisseurs : €2,340

### Transaction 5 : Encaissement du client

**Transaction :** Recevoir €1,170 de paiement du Client A.

**Écriture du journal des encaissements :**
```
Journal des encaissements
Date       Source          Espèces      Ventes    Créances    TVA
─────────────────────────────────────────────────────────────────
15 nov     Encaissement     €1,170      -      €1,170          -
```

**Report :**
- À Espèces (grand livre général) : €1,170
- Aux Comptes clients (grand livre général) : €1,170 (diminution)
- Au compte du Client A dans le grand livre auxiliaire des comptes clients : €1,170

### Transaction 6 : Paiement de dépense

**Transaction :** Payer €1,200 de loyer.

**Écriture du journal des décaissements :**
```
Journal des décaissements
Date       Bénéficiaire      Espèces    Achats    Dettes    Dépenses
─────────────────────────────────────────────────────────────────
18 nov     Loyer      €1,200      -           -        €1,200
                                                      (Loyer)
```

**Report :**
- À Espèces (grand livre général) : €1,200 (diminution)
- À Charges de loyer (grand livre général) : €1,200

### Considérations TVA Luxembourg

**Plusieurs taux de TVA :**

**Exemple :** Restaurant avec différents taux de TVA

**Écriture du journal des ventes :**
```
Journal des ventes
Date       Facture #    Client    Montant    TVA 3%    TVA 14%    TVA 17%    Total
─────────────────────────────────────────────────────────────────────────────────
20 nov     INV-002     Client B  €100      €3        -          -         €103
           (Nourriture)
20 nov     INV-003     Client B  €50       -         €7         -          €57
           (Vin)
─────────────────────────────────────────────────────────────────────────────────
Totaux                 €150        €3        €7         -         €160
```

**Report :**
- Revenus de ventes : €150
- TVA à payer (3 %) : €3
- TVA à payer (14 %) : €7
- Comptes clients : €160

### Report depuis les journaux spéciaux

**Règles de report :**

1. **Éléments individuels** : Reporter aux grands livres auxiliaires (comptes clients/fournisseurs)
2. **Totaux des colonnes** : Reporter aux comptes du grand livre général
3. **Fréquence** : Peut reporter quotidiennement, hebdomadairement ou mensuellement
4. **Vérification** : Le total du grand livre auxiliaire doit égaler le compte de contrôle du grand livre général

**Exemple : Report des totaux du journal des ventes**

**Total du journal des ventes :**
- Total des ventes : €4,500
- Total TVA : €765
- Total des créances : €5,265

**Report au grand livre général :**
```
7061   Revenus de ventes
─────────────────────────────
        │  30 nov  Journal V    €4,500

461411 TVA à payer
─────────────────────────────
        │  30 nov  Journal V      €765

4011   Comptes clients
─────────────────────────────
30 nov  Journal V    €5,265  │
```

### Note de conformité Luxembourg

Lors de l'utilisation de journaux spéciaux au Luxembourg :
- Doit suivre la TVA par taux
- Doit inclure les numéros de comptes PCN
- Doit maintenir une traçabilité appropriée
- Doit soutenir l'export FAIA
- Doit être exportable pour eCDF
- Le logiciel gère souvent cela automatiquement

### Réfléchissez-y

Une entreprise a 50 ventes à crédit par mois. Comparez l'efficacité de les enregistrer dans un journal général par rapport à un journal des ventes. Combien de temps et d'efforts seraient économisés ?

---

