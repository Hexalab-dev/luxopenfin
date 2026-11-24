---
id: volume1-chapter-03-section-3-7
title: "3.7 Système de numérotation des comptes PCN du Luxembourg et mapping des transactions"
sidebar_position: 8
slug: /volume1/chapter-03/section-3-7
---

# 3.7 Système de numérotation des comptes PCN du Luxembourg et mapping des transactions

### Structure de numérotation PCN

Le Plan Comptable Normalisé (PCN 2020, règlement grand-ducal du 12 septembre 2019) utilise une **numérotation décimale hiérarchique** organisée en sept classes. Les numéros de compte n'ont **pas de longueur fixe** : chaque chiffre supplémentaire rend le compte plus précis.

**Structure :**
- **Premier chiffre (1-7) :** Classe de compte (ex. 4 = comptes de tiers)
- **Deux chiffres :** Groupe de comptes (ex. 40 = créances résultant de ventes et prestations de services)
- **Trois chiffres ou plus :** Comptes de plus en plus détaillés (ex. 401 → 4011 Clients ; 461 → 4614 → 46141 → 461411 TVA en aval)
- **Règle :** on comptabilise uniquement sur le compte officiel le plus détaillé (*compte d'imputation*) ; on peut créer ses propres sous-comptes en dessous (ex. 40111 pour un client), jamais à côté
- **Exemple :** 5131 = Classe 5 (comptes financiers) → 51 (avoirs en banques et en caisse) → 513 (banques) → 5131 (comptes bancaires à solde débiteur)

> **Remarque sur ce manuel :** dans les écritures, « Trésorerie »/« Caisse » désigne l'argent sur le compte bancaire de l'entreprise, comptabilisé en **5131**. Les espèces en caisse relèvent du compte **516** (Caisse).

### Plages de classes de comptes

| Classe | Plage | Description |
|--------|-------|-------------|
| 1 | 10–19 | Capital, Provisions, Dettes Financières |
| 2 | 20–29 | Immobilisations et Frais d'Établissement |
| 3 | 30–39 | Comptes de Stocks |
| 4 | 40–49 | Comptes de Tiers |
| 5 | 50–59 | Comptes Financiers (Trésorerie, Banques) |
| 6 | 60–69 | Comptes de Charges |
| 7 | 70–79 | Comptes de Produits |

### Numérotation des sous-comptes

Les entreprises peuvent créer des **sous-comptes** pour un suivi détaillé :

**Exemple :**
- 4011 : Créances clients (général)
- 40111 : Créances clients - Client A
- 40112 : Créances clients - Client B
- 40113 : Créances clients - Client C

### Mapping des transactions vers PCN

Lors de l'enregistrement des transactions, vous devez identifier les bons comptes PCN :

#### Processus de mapping

1. **Identifier le type de transaction**
2. **Déterminer les comptes affectés**
3. **Trouver les numéros de comptes PCN**
4. **Vérifier la classification des comptes**
5. **Enregistrer avec les bons numéros**

### Mappings de transactions courants

#### Ventes au comptant

**Transaction :** Vendre des marchandises pour 1 000 € au comptant (hors TVA), TVA 17%

**Mapping PCN :**
- Trésorerie reçue : 5131 (Classe 5 - Comptes Financiers)
- Chiffre d'affaires : 7061 (Classe 7 - Comptes de Produits)
- TVA à payer : 461411 (Classe 4 - Administrations Fiscales)

**Écriture comptable :**
```
5131   Trésorerie                       €1,170
7061   Chiffre d'affaires                           €1,000
461411 TVA à payer                                    €170
```

#### Achats à crédit

**Transaction :** Acheter des stocks 2 000 € à crédit (hors TVA), TVA 17%, récupérable

**Mapping PCN :**
- Stocks : 361 (Classe 3 - Stocks)
- TVA récupérable : 421611 (Classe 4 - Administrations Fiscales)
- Fournisseurs : 44111 (Classe 4 - Fournisseurs)

**Écriture comptable :**
```
361    Stocks                          €2,000
421611 TVA récupérable                   €340
44111  Fournisseurs                                   €2,340
```

#### Paiements de charges

**Transaction :** Payer 500 € de charges de services publics

**Mapping PCN :**
- Charges de services publics : 6184 (Classe 6 - Services Extérieurs)
- Trésorerie : 5131 (Classe 5 - Comptes Financiers)

**Écriture comptable :**
```
6184   Charges de services publics      €500
5131   Trésorerie                                    €500
```

#### Achat d'équipement

**Transaction :** Acheter 10 000 € d'équipement, payant 3 000 € en espèces et 7 000 € en billet

**Mapping PCN :**
- Équipement : 222 (Classe 2 - Immobilisations Corporelles)
- Trésorerie : 5131 (Classe 5 - Comptes Financiers)
- Billets à payer : 4421 (Classe 4 - Dettes représentées par des effets de commerce)

**Écriture comptable :**
```
222    Équipement                      €10,000
5131   Trésorerie                                    €3,000
4421   Billets à payer                                €7,000
```

### Consultation des comptes PCN

Lorsque vous n'êtes pas sûr du numéro de compte PCN :

1. **Identifier la classe de compte** (1-7)
2. **Déterminer le type de compte** dans la classe
3. **Consulter la référence PCN** (voir Annexe A)
4. **Vérifier avec un comptable** ou fiduciaire
5. **Documenter la décision** pour la cohérence

### Personnalisation du plan de comptes

Bien que le PCN fournisse des comptes standard, les entreprises peuvent :

- **Ajouter des sous-comptes** pour le détail (par exemple, 510001, 5131 pour différents comptes bancaires)
- **Utiliser des plages de comptes** dans les classes
- **Maintenir la cohérence** sur les périodes

**Important :** Doit rester dans la structure de classe PCN et le système de numérotation.

### Note de conformité Luxembourg

Toutes les transactions doivent être enregistrées en utilisant les numéros de comptes PCN. Cela garantit :
- La cohérence entre les entreprises
- La classification appropriée
- La conformité aux réglementations
- Le reporting financier précis
- La facilité d'audit et de révision

Des logiciels comme Sage BOB incluent les numéros de comptes PCN, facilitant la conformité.

### Réfléchissez-y

Une entreprise luxembourgeoise reçoit un prêt bancaire de 25 000 €. Quels comptes PCN sont affectés ? Quels sont les numéros de comptes et les classes ?

---

