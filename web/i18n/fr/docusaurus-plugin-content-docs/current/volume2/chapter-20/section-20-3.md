---
id: volume2-chapter-20-section-20-3
title: "20.3 Utiliser la méthode de coût de revient par commande pour tracer le flux des coûts de produits à travers les comptes d'inventaire"
sidebar_position: 4
slug: /volume2/chapter-20/section-20-3
---

# 20.3 Utiliser la méthode de coût de revient par commande pour tracer le flux des coûts de produits à travers les comptes d'inventaire

### Flux des coûts dans le coût de revient par commande

Dans le coût de revient par commande, les coûts circulent à travers plusieurs comptes d'inventaire avant de devenir le coût des marchandises vendues. Comprendre ce flux est essentiel pour un calcul correct des coûts par commande.

### Comptes d'inventaire

**Trois comptes d'inventaire principaux :**

1. **Inventaire des matières premières** : Matières pas encore utilisées en production
2. **Inventaire des en cours de fabrication** : Commandes en cours (partiellement complétées)
3. **Inventaire des produits finis** : Commandes complétées pas encore vendues

### Séquence du flux des coûts

**Étape 1 : Acheter des matières premières**
- Matières achetées et stockées
- Débitées à Inventaire des matières premières
- Créditées à Comptes fournisseurs (ou Trésorerie)

**Étape 2 : Émettre des matières à la production**
- Matières utilisées dans les commandes
- Débitées à En cours de fabrication
- Créditées à Inventaire des matières premières

**Étape 3 : Encourir la main-d'œuvre directe**
- Coûts de main-d'œuvre pour les commandes
- Débités à En cours de fabrication
- Crédités à Salaires/Salaires à payer

**Étape 4 : Appliquer les frais généraux de fabrication**
- Frais généraux alloués aux commandes
- Débités à En cours de fabrication
- Crédités à Frais généraux de fabrication

**Étape 5 : Compléter les commandes**
- Commandes terminées
- Débitées à Produits finis
- Créditées à En cours de fabrication

**Étape 6 : Vendre les commandes**
- Commandes vendues aux clients
- Débitées à Coût des marchandises vendues
- Créditées à Produits finis

### Exemple de flux détaillé

**Entreprise de traiteur de Marie - Commande #101 (Déjeuner d'affaires pour 50 personnes) :**

**Étape 1 : Acheter des matières**
```
Inventaire des matières premières        €500
    Comptes fournisseurs                           €500
Pour enregistrer l'achat d'ingrédients
```

**Étape 2 : Émettre des matières à la Commande #101**
```
En cours de fabrication - Commande #101     €400
    Inventaire des matières premières                    €400
Pour enregistrer les matières utilisées dans la Commande #101
```

**Étape 3 : Enregistrer la main-d'œuvre directe pour la Commande #101**
```
En cours de fabrication - Commande #101     €290
    Salaires à payer                          €290
Pour enregistrer la main-d'œuvre directe pour la Commande #101
```

**Étape 4 : Appliquer les frais généraux à la Commande #101**
```
En cours de fabrication - Commande #101     €200
    Frais généraux de fabrication                    €200
Pour appliquer les frais généraux à la Commande #101
```

**Résumé des coûts de la Commande #101 :**
- Matières premières directes : €400
- Main-d'œuvre directe : €290
- Frais généraux appliqués : €200
- **Total : €890**

**Étape 5 : Compléter la Commande #101**
```
Produits finis                 €890
    En cours de fabrication - Commande #101                €890
Pour enregistrer l'achèvement de la Commande #101
```

**Étape 6 : Vendre la Commande #101 (Revenu €1,500)**
```
Comptes clients           €1,755
    Chiffre d'affaires (€1,500)                   €1,500
    TVA à payer (17%)                          €255
Pour enregistrer la vente de la Commande #101

Coût des marchandises vendues             €890
    Produits finis                            €890
Pour enregistrer le coût de la Commande #101 vendue
```

### Fiche de coût de commande

Une **fiche de coût de commande** est un document qui accumule tous les coûts pour une commande spécifique.

**Format :**
```
Fiche de coût de commande
Numéro de commande : 101
Client : ABC Company
Description : Déjeuner d'affaires - 50 personnes
Date de début : 1er novembre 2024
Date d'achèvement : 5 novembre 2024

Matières premières directes :
  Ingrédients              €200
  Boissons                150
  Emballage                 50
  Total matières         €400

Main-d'œuvre directe :
  Chef (8 heures × €25)    €200
  Serveur (6 heures × €15)    90
  Total main-d'œuvre             €290

Frais généraux appliqués :
  (Appliqués à 50% de la main-d'œuvre directe)
  €290 × 50%              €145

Coût total de la commande            €835
```

### Compte En cours de fabrication

Le compte En cours de fabrication accumule les coûts pour toutes les commandes en cours.

**Exemple :**
```
En cours de fabrication
─────────────────────────────────────
Matières - Commande #101      €400
Main-d'œuvre - Commande #101           290
Frais généraux - Commande #101        200
Matières - Commande #102       600
Main-d'œuvre - Commande #102           400
Frais généraux - Commande #102        200
─────────────────────────────────────
Solde                  €2,090
```

Lorsque la Commande #101 est complétée :
```
En cours de fabrication
─────────────────────────────────────
Solde (début)      €2,090
Moins : Commande #101 complétée   (890)
─────────────────────────────────────
Solde (fin)         €1,200
```

### Classifications des comptes PCN

**Comptes PCN du Luxembourg :**

**Matières premières :**
- **301** : Matières premières (Matières Premières)

**En cours de fabrication :**
- **311** : En cours de fabrication (En Cours de Fabrication)

**Produits finis :**
- **321** : Produits finis (Produits Finis)

**Coût des marchandises vendues :**
- **607** : Coût des produits finis vendus (Coût des Produits Vendus)

**Frais généraux de fabrication :**
- **60–62 (analytical overhead)** : Frais généraux de fabrication (Charges de Production)

### Note de conformité luxembourgeoise

Au Luxembourg :
- Doit utiliser les classifications de comptes PCN
- Les coûts doivent circuler correctement à travers les comptes
- Les dossiers de coûts par commande doivent être maintenus
- Soutenir le coût des marchandises vendues à des fins fiscales
- Considérer la TVA dans le suivi des coûts (exclure la TVA récupérable)

### Réfléchir

Pourquoi est-il important de suivre les coûts à travers les comptes d'inventaire ? Que se passe-t-il si les coûts ne sont pas correctement suivis à travers le flux ?

---

