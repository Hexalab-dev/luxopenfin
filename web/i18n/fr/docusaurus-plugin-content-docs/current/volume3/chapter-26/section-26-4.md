---
id: volume3-chapter-26-section-26-4
title: "26.4 Mapping des transactions courantes des PME aux comptes PCN"
sidebar_position: 5
slug: /volume3/chapter-26/section-26-4
---

# 26.4 Mapping des transactions courantes des PME aux comptes PCN

### Introduction au mapping des transactions

Mapper les transactions commerciales aux comptes PCN est une compétence comptable fondamentale. Chaque transaction affecte au moins deux comptes (comptabilité en partie double), et chaque compte doit être classé selon les normes PCN.

### Transactions d'achat

#### Achat d'inventaire (marchandises pour revente)

**Transaction** : Achat de €500 d'inventaire à crédit auprès d'un fournisseur

**Mapping PCN :**
- **Débit** : Compte 6061 (Achats de marchandises) - €500
- **Crédit** : Compte 44111 (Fournisseurs) - €500

**Avec TVA (17%) :**
- **Débit** : Compte 6061 (Achats de marchandises) - €427,35
- **Débit** : Compte 421611 (TVA en amont) - €72,65
- **Crédit** : Compte 44111 (Fournisseurs) - €500,00

#### Achat d'immobilisations

**Transaction** : Achat d'équipement €5 000, payé par virement bancaire

**Mapping PCN :**
- **Débit** : Compte 222 (Installations techniques et machines) - €5 000
- **Crédit** : Compte 5131 (Compte bancaire) - €5 000

**Avec TVA :**
- **Débit** : Compte 222 (Équipement) - €4 273,50
- **Débit** : Compte 421611 (TVA en amont) - €726,50
- **Crédit** : Compte 5131 (Banque) - €5 000,00

### Transactions de vente

#### Ventes au comptant

**Transaction** : Vendre des marchandises pour €200 au comptant, TVA 17% incluse

**Mapping PCN :**
- **Débit** : Compte 516 (Caisse) - €200,00
- **Crédit** : Compte 7061 (Ventes de marchandises) - €170,94
- **Crédit** : Compte 461411 (TVA en aval) - €29,06

#### Ventes à crédit

**Transaction** : Vendre €1 000 de services à crédit (TVA 17%)

**Mapping PCN :**
- **Débit** : Compte 4011 (Clients) - €1 170,00
- **Crédit** : Compte 703 (Prestations de services) - €1 000,00
- **Crédit** : Compte 461411 (TVA en aval) - €170,00

### Transactions de paiement

#### Paiement aux fournisseurs

**Transaction** : Payer €800 au fournisseur (incluant €136 TVA)

**Mapping PCN :**
- **Débit** : Compte 44111 (Fournisseurs) - €800,00
- **Crédit** : Compte 5131 (Compte bancaire) - €800,00

#### Réception de paiements clients

**Transaction** : Recevoir €1 170 d'un client (paiement de facture)

**Mapping PCN :**
- **Débit** : Compte 5131 (Compte bancaire) - €1 170,00
- **Crédit** : Compte 4011 (Clients) - €1 170,00

### Transactions de paie

#### Paiement des salaires

**Transaction** : Payer €3 000 de salaire brut (part employé : €600 charges sociales, part employeur : €900)

**Mapping PCN :**
- **Débit** : Compte 6211 (Salaires bruts) - €3 000,00
- **Débit** : Compte 623 (Charges sociales patronales) - €900,00
- **Crédit** : Compte 4621 (CCSS – charges sociales à payer) - €1 500,00
- **Crédit** : Compte 5131 (Compte bancaire) - €2 400,00

### Transactions de charges

#### Paiement du loyer

**Transaction** : Payer €1 200 de loyer mensuel

**Mapping PCN :**
- **Débit** : Compte 6111 (Locations immobilières) - €1 200,00
- **Crédit** : Compte 5131 (Compte bancaire) - €1 200,00

#### Paiement des services publics

**Transaction** : Payer €150 de facture d'électricité (TVA 17%)

**Mapping PCN :**
- **Débit** : Compte 61845 (Électricité) - €128,21
- **Débit** : Compte 421611 (TVA en amont) - €21,79
- **Crédit** : Compte 5131 (Compte bancaire) - €150,00

### Transactions d'amortissement

#### Enregistrement de l'amortissement

**Transaction** : Enregistrer €200 d'amortissement mensuel sur équipement

**Mapping PCN :**
- **Débit** : Compte 6332 (DCV sur installations techniques et machines) - €200,00
- **Crédit** : Compte 2229 (Amortissements cumulés - équipement) - €200,00

### Transactions TVA

#### Dépôt de déclaration TVA

**Transaction** : Déposer déclaration TVA (TVA collectée : €1 000, TVA payée : €600, net à payer : €400)

**Mapping PCN :**
- **Débit** : Compte 461411 (TVA en aval) - €1 000,00
- **Crédit** : Compte 421611 (TVA en amont) - €600,00
- **Crédit** : Compte 461412 (TVA à payer à l'AED) - €400,00

**Lors du paiement de la TVA :**
- **Débit** : Compte 461412 (TVA à payer à l'AED) - €400,00
- **Crédit** : Compte 5131 (Compte bancaire) - €400,00

### Tableau de mapping des transactions courantes

| Type de transaction | Compte Débit | Compte Crédit | Notes |
|---------------------|--------------|---------------|-------|
| Achat de marchandises (comptant) | 6061 (Achats) | 5131 (Banque) | Ajouter 421611 pour TVA |
| Achat de marchandises (crédit) | 6061 (Achats) | 44111 (Fournisseurs) | Ajouter 421611 pour TVA |
| Vente au comptant | 516 (Caisse) | 7061 (Ventes de marchandises) | Ajouter 461411 pour TVA |
| Vente à crédit | 4011 (Clients) | 7061 / 703 (Ventes / Services) | Ajouter 461411 pour TVA |
| Payer fournisseur | 44111 (Fournisseurs) | 5131 (Banque) | |
| Recevoir paiement | 5131 (Banque) | 4011 (Clients) | |
| Payer salaire | 6211 (Salaires) | 5131 (Banque) | Inclure 623 et 4621 pour charges sociales |
| Payer loyer | 6111 (Loyer) | 5131 (Banque) | |
| Enregistrer amortissement | 6332 / 6333 (DCV) | 2229 (Amort. cumulés – sous-compte de l'actif) | |
| Payer TVA | 461412 (TVA à payer) | 5131 (Banque) | |

### Note de conformité Luxembourg

Toutes les transactions doivent être mappées aux comptes PCN. Lors de l'utilisation d'un logiciel comptable, assurez-vous qu'il est configuré avec la structure de comptes PCN 2020. Les écritures manuelles doivent toujours référencer les numéros de comptes PCN, pas seulement les noms de comptes.

### Réfléchir

Le restaurant de Marie reçoit une facture de €500 pour l'entretien de l'équipement de cuisine. La facture inclut €85 de TVA (17%). Comment mapperiez-vous cette transaction aux comptes PCN ? Et si elle paie immédiatement vs. à crédit ?

### Exemple pratique

**Opérations quotidiennes du restaurant**

*Le Petit Bistro* traite ces transactions quotidiennement :

1. **Matin** : Achat €200 d'inventaire alimentaire (comptant, TVA 17%)
   - Débit 601, Débit 421611, Crédit 516

2. **Service déjeuner** : €500 ventes au comptant (TVA 17%)
   - Débit 516, Crédit 703, Crédit 461411

3. **Après-midi** : Payer €150 facture de services publics (TVA 17%)
   - Débit 61845, Débit 421611, Crédit 5131

4. **Fin de journée** : Enregistrer €50 d'amortissement sur équipement
   - Débit 6332, Crédit 2229

Toutes les transactions sont correctement mappées aux comptes PCN, assurant la conformité et un reporting précis.

---

