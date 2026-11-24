---
id: volume3-chapter-27-section-27-10
title: "27.10 Comptabilisation TVA dans PCN (Comptes Classe 4)"
sidebar_position: 11
slug: /volume3/chapter-27/section-27-10
---

# 27.10 Comptabilisation TVA dans PCN (Comptes Classe 4)

### Comptes TVA dans la structure PCN

Les comptes TVA font partie de la **Classe 4 PCN (Comptes de tiers)**. Toutes les transactions TVA doivent être enregistrées en utilisant les comptes TVA Classe 4 PCN pour assurer la conformité et un reporting approprié.

### Comptes TVA principaux

#### Compte 421611 : TVA en amont (TVA déductible)

**Objectif** : Enregistre la TVA payée sur les achats (TVA déductible). Il relève du groupe 42 (Autres créances).

**Utilisation :**
- **Débit** : Lors du paiement de la TVA sur les achats
- **Crédit** : Lors de la compensation contre la TVA collectée dans la déclaration
- **Solde** : Montre la TVA récupérable pas encore compensée

**Exemple :**
- Achat €117 de marchandises destinées à la revente (€100 + €17 TVA)
- **Débit** : Compte 421611 - €17,00
- **Débit** : Compte 6061 (Achats de marchandises) - €100,00
- **Crédit** : Compte 44111 (Fournisseurs) - €117,00

#### Compte 461412 : TVA à payer (à l'AED)

**Objectif** : Enregistre la TVA nette à payer à l'administration fiscale (AED) après chaque déclaration. Il relève du groupe 46 (Dettes fiscales et dettes au titre de la sécurité sociale). Un crédit de TVA net est porté au compte 421612 (TVA à recevoir).

**Utilisation :**
- **Débit** : Lors du paiement de la TVA aux autorités
- **Crédit** : Lorsque la TVA nette est calculée (TVA collectée - TVA déductible)
- **Solde** : Montre la TVA due aux autorités

**Exemple (Dépôt déclaration TVA) :**
- TVA collectée : €1 000
- TVA déductible : €600
- TVA nette : €400
- **Débit** : Compte 461411 - €1 000,00
- **Crédit** : Compte 421611 - €600,00
- **Crédit** : Compte 461412 - €400,00

**Lors du paiement de la TVA :**
- **Débit** : Compte 461412 - €400,00
- **Crédit** : Compte 5131 (Banque) - €400,00

#### Compte 461411 : TVA en aval (TVA collectée)

**Objectif** : Enregistre la TVA collectée sur les ventes (TVA collectée). Il relève du groupe 46 (Dettes fiscales et dettes au titre de la sécurité sociale).

**Utilisation :**
- **Crédit** : Lors de la collecte de la TVA sur les ventes
- **Débit** : Lors de la compensation contre la TVA déductible dans la déclaration
- **Solde** : Montre la TVA collectée pas encore versée

**Exemple :**
- Vendre €117 de marchandises (€100 + €17 TVA)
- **Débit** : Compte 516 (Caisse) - €117,00
- **Crédit** : Compte 7061 (Ventes de marchandises) - €100,00
- **Crédit** : Compte 461411 - €17,00

### Structure des comptes TVA

#### Sous-comptes pour différents taux

Vous pouvez créer des sous-comptes sous le compte officiel pour suivre la TVA par taux :

**Structure :**
- 4614111 : TVA en aval à 17%
- 4614112 : TVA en aval à 14%
- 4614113 : TVA en aval à 8%
- 4614114 : TVA en aval à 3%

**Avantages :**
- Préparation de déclaration TVA plus facile
- Meilleur suivi par taux
- Reporting simplifié

### Processus de comptabilisation déclaration TVA

#### Étape 1 : Calculer les totaux de période

- **TVA collectée** : Additionner tous les crédits au Compte 461411
- **TVA déductible** : Additionner tous les débits au Compte 421611
- **TVA nette** : TVA collectée - TVA déductible

#### Étape 2 : Enregistrer la déclaration TVA

**Si TVA nette à payer :**
- **Débit** : Compte 461411 (TVA en aval) - TVA collectée totale
- **Crédit** : Compte 421611 (TVA en amont) - TVA déductible totale
- **Crédit** : Compte 461412 (TVA à payer à l'AED) - TVA nette

**Si TVA nette remboursable :**
- **Débit** : Compte 461411 (TVA en aval) - TVA collectée totale
- **Crédit** : Compte 421611 (TVA en amont) - TVA déductible totale
- **Débit** : Compte 421612 (TVA à recevoir de l'AED) - Remboursement net

#### Étape 3 : Payer la TVA

**Lors du paiement de la TVA :**
- **Débit** : Compte 461412 (TVA à payer)
- **Crédit** : Compte 5131 (Compte bancaire)

**Lors de la réception du remboursement :**
- **Débit** : Compte 5131 (Compte bancaire)
- **Crédit** : Compte 421612 (TVA à recevoir)

### Réconciliations des comptes TVA

#### Réconciliation mensuelle

- **TVA collectée** : Vérifier que toute la TVA sur ventes est enregistrée
- **TVA déductible** : Vérifier que toute la TVA sur achats est enregistrée
- **Soldes** : Vérifier que les soldes des comptes correspondent aux calculs
- **Divergences** : Enquêter et corriger toute différence

#### Réconciliation trimestrielle

- **Totaux de période** : Additionner toutes les transactions TVA pour le trimestre
- **Déclaration TVA** : Comparer aux chiffres de la déclaration TVA
- **Paiements** : Vérifier que tous les paiements TVA sont enregistrés
- **Remboursements** : Vérifier que tous les remboursements TVA sont reçus

### Entrées comptables TVA courantes

#### Vente avec TVA

**Transaction** : Vendre €117 de marchandises (€100 + €17 TVA)

**Entrée PCN :**
- Débit 516 (Caisse) : €117,00
- Crédit 7061 (Ventes de marchandises) : €100,00
- Crédit 461411 (TVA en aval) : €17,00

#### Achat avec TVA

**Transaction** : Acheter €234 d'équipement (€200 + €34 TVA)

**Entrée PCN :**
- Débit 222 (Installations techniques et machines) : €200,00
- Débit 421611 (TVA en amont) : €34,00
- Crédit 5131 (Banque) : €234,00

#### Dépôt déclaration TVA

**Transaction** : Déposer déclaration TVA (Collectée : €1 000, Déductible : €600, Nette : €400)

**Entrée PCN :**
- Débit 461411 (TVA en aval) : €1 000,00
- Crédit 421611 (TVA en amont) : €600,00
- Crédit 461412 (TVA à payer) : €400,00

#### Paiement TVA

**Transaction** : Payer €400 de TVA aux autorités

**Entrée PCN :**
- Débit 461412 (TVA à payer) : €400,00
- Crédit 5131 (Banque) : €400,00

### Soldes des comptes TVA

#### Soldes normaux

- **Compte 421611 (TVA en amont)** : Solde débiteur (TVA payée)
- **Compte 461411 (TVA en aval)** : Solde créditeur (TVA collectée)
- **Compte 461412 (TVA à payer)** : Solde créditeur (TVA due) ; un remboursement net figure au débit du compte 421612 (TVA à recevoir)

#### Après déclaration TVA

- **Compte 421611** : Devrait être zéro (compensé contre TVA collectée)
- **Compte 461411** : Devrait être zéro (compensé contre TVA déductible)
- **Compte 461412 / 421612** : Montre la TVA nette à payer ou remboursable

### Note de conformité Luxembourg

**Exigences PCN :**
- **Utiliser les comptes PCN** : Toute la TVA doit utiliser les comptes Classe 4
- **Classification appropriée** : Utiliser les comptes corrects (421611, 461411, 461412, 421612)
- **Sous-comptes** : Peut utiliser des sous-comptes pour un suivi détaillé
- **Réconciliation** : Réconcilier les comptes TVA régulièrement
- **Documentation** : Maintenir la documentation de support

**Erreurs courantes :**
- **Mauvais comptes** : Utiliser des comptes non-PCN pour la TVA
- **Entrées incorrectes** : Inverser les entrées débit/crédit
- **Entrées manquantes** : Ne pas enregistrer toutes les transactions TVA
- **Non réconcilié** : Ne pas réconcilier les comptes TVA

### Réfléchir

En fin de mois, le restaurant de Marie a €2 000 dans le Compte 461411 (TVA collectée) et €1 200 dans le Compte 421611 (TVA déductible). Comment devrait-elle enregistrer la déclaration TVA ? Quels seront les soldes des comptes après la déclaration ?

### Exemple pratique

**Comptabilisation TVA mensuelle**

Processus TVA mensuel de *Le Petit Bistro* :

**Soldes de fin de mois :**
- Compte 461411 (TVA en aval) : €2 000 crédit
- Compte 421611 (TVA en amont) : €1 200 débit

**Entrée déclaration TVA :**
- Débit 461411 (TVA en aval) : €2 000,00
- Crédit 421611 (TVA en amont) : €1 200,00
- Crédit 461412 (TVA à payer) : €800,00

**Après entrée :**
- Compte 421611 : €0,00
- Compte 461411 : €0,00
- Compte 461412 : €800,00 crédit (TVA à payer)

**Entrée paiement :**
- Débit 461412 (TVA à payer) : €800,00
- Crédit 5131 (Banque) : €800,00

**Soldes finaux :**
- Tous les comptes TVA : €0,00
- Déclaration TVA déposée et payée

---

