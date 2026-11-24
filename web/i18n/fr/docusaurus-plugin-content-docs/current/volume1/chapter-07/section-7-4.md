---
id: volume1-chapter-07-section-7-4
title: "7.4 Préparer un grand livre auxiliaire"
sidebar_position: 5
slug: /volume1/chapter-07/section-7-4
---

# 7.4 Préparer un grand livre auxiliaire

### Qu'est-ce qu'un grand livre auxiliaire ?

Un **grand livre auxiliaire** (également appelé sous-grand livre) contient des informations détaillées sur les éléments individuels qui composent le solde d'un compte du grand livre général.

**Objectif :**
- Fournir des détails pour les comptes du grand livre général
- Suivre les clients individuels, les fournisseurs, les articles d'inventaire
- Soutenir la gestion des comptes clients et des comptes fournisseurs
- Permettre des rapports détaillés

### Grands livres auxiliaires vs. Grand livre général

**Grand livre général :**
- Contient des comptes récapitulatifs (comptes de contrôle)
- Affiche les soldes totaux
- Exemple : Comptes clients (total de tous les clients)

**Grand livre auxiliaire :**
- Contient des comptes individuels
- Affiche les détails pour chaque client, fournisseur, etc.
- Exemple : Compte Client A, Compte Client B, etc.

**Relation :**
- Total du grand livre auxiliaire = Compte de contrôle du grand livre général
- Doit être réconcilié (équilibré)

### Types de grands livres auxiliaires

Les grands livres auxiliaires courants comprennent :

1. **Grand livre auxiliaire des comptes clients** : Comptes clients individuels
2. **Grand livre auxiliaire des comptes fournisseurs** : Comptes fournisseurs individuels
3. **Grand livre auxiliaire des stocks** : Comptes d'articles d'inventaire individuels
4. **Grand livre auxiliaire des immobilisations** : Comptes d'actifs individuels

### Grand livre auxiliaire des comptes clients

**Objectif :** Suivre les montants dus par les clients individuels

**Format :**
```
Compte client : Client A
Numéro de compte : 40111

Date    Référence    Débit    Crédit    Solde
─────────────────────────────────────────────────
5 nov   INV-001     €1,170              €1,170
15 nov  Paiement              €1,170        €0
─────────────────────────────────────────────────
```

**Exemple : Plusieurs clients**

**Compte Client A (40111) :**
```
Date       Référence    Débit      Crédit     Solde
─────────────────────────────────────────────────────
5 nov      INV-001      €1,170                 €1,170
15 nov     Paiement               €1,170          €0
20 nov     INV-004      €2,340                 €2,340
─────────────────────────────────────────────────────
Solde : €2,340
```

**Compte Client B (40112) :**
```
Date       Référence    Débit      Crédit     Solde
─────────────────────────────────────────────────────
10 nov     INV-002      €3,000                 €3,000
25 nov     Paiement               €1,500        €1,500
─────────────────────────────────────────────────────
Solde : €1,500
```

**Compte de contrôle du grand livre général :**
```
4011   Comptes clients (Contrôle)
─────────────────────────────
30 nov  Journal V    €6,510  │  30 nov  Journal E    €2,670
─────────────────────────────
Solde  €3,840
```

**Vérification :**
- Client A : €2,340
- Client B : €1,500
- Total auxiliaire : €3,840
- Contrôle du grand livre général : €3,840 ✓

### Grand livre auxiliaire des comptes fournisseurs

**Objectif :** Suivre les montants dus aux fournisseurs individuels

**Format :**
```
Compte fournisseur : Fournisseur X
Numéro de compte : 441111

Date    Référence    Débit    Crédit    Solde
─────────────────────────────────────────────────
8 nov   SUP-001              €2,340    €2,340
12 nov  Paiement     €2,340              €0
─────────────────────────────────────────────────
```

**Exemple : Plusieurs fournisseurs**

**Compte Fournisseur X (441111) :**
```
Date       Référence    Débit      Crédit     Solde
─────────────────────────────────────────────────────
8 nov      SUP-001                 €2,340      €2,340
12 nov     Paiement      €2,340                  €0
20 nov     SUP-003                 €1,500      €1,500
─────────────────────────────────────────────────────
Solde : €1,500
```

**Compte Fournisseur Y (400002) :**
```
Date       Référence    Débit      Crédit     Solde
─────────────────────────────────────────────────────
15 nov     SUP-002                 €3,000      €3,000
─────────────────────────────────────────────────────
Solde : €3,000
```

**Compte de contrôle du grand livre général :**
```
44111  Comptes fournisseurs (Contrôle)
─────────────────────────────
        │  30 nov  Journal A  €6,840
30 nov  Journal D     €2,340  │
─────────────────────────────
        │  Solde  €4,500
```

**Vérification :**
- Fournisseur X : €1,500
- Fournisseur Y : €3,000
- Total auxiliaire : €4,500
- Contrôle du grand livre général : €4,500 ✓

### Grand livre auxiliaire des stocks

**Objectif :** Suivre les articles d'inventaire individuels

**Format :**
```
Article d'inventaire : T-Shirt - Rouge - Moyen
Code article : TS-RED-M

Date    Référence    Entrée    Sortie    Solde
───────────────────────────────────────────
1 nov   Début            -     50 unités
5 nov   Achat     20             70 unités
10 nov  Vente                 -5     65 unités
───────────────────────────────────────────
```

**Considérations luxembourgeoises :**
- Peut nécessiter de suivre par taux de TVA
- Doit prendre en charge l'évaluation des stocks
- Doit s'intégrer avec les systèmes de point de vente

### Réconciliation

**Processus de réconciliation :**
1. Totaliser tous les comptes du grand livre auxiliaire
2. Comparer au compte de contrôle du grand livre général
3. Enquêter et résoudre toute différence
4. Documenter la réconciliation

**Exemple de réconciliation :**
```
Réconciliation des comptes clients
30 novembre 2024

Totaux du grand livre auxiliaire :
  Client A :                    €2,340
  Client B :                    €1,500
  Client C :                      €800
  Total du grand livre auxiliaire :       €4,640

Compte de contrôle du grand livre général :  €4,640

Différence :                      €0 ✓
```

### Note de conformité Luxembourg

Les grands livres auxiliaires au Luxembourg doivent :
- Prendre en charge la structure des comptes PCN
- Maintenir une traçabilité appropriée
- Être exportables pour FAIA
- Prendre en charge le suivi de la TVA
- Être conservés pendant 10 ans
- Être réconciliés avec le grand livre général

### Réfléchissez-y

Pourquoi est-il important que les totaux du grand livre auxiliaire égalent le compte de contrôle du grand livre général ? Qu'est-ce qui indiquerait une erreur s'ils ne correspondent pas ?

---

