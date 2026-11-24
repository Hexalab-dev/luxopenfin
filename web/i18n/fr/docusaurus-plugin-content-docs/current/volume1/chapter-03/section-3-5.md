---
id: volume1-chapter-03-section-3-5
title: "3.5 Utiliser les écritures comptables pour enregistrer les transactions et reporter aux comptes en T"
sidebar_position: 6
slug: /volume1/chapter-03/section-3-5
---

# 3.5 Utiliser les écritures comptables pour enregistrer les transactions et reporter aux comptes en T

### Écritures comptables

Une **écriture comptable** est l'enregistrement formel d'une transaction dans le système comptable. Au Luxembourg, les écritures comptables doivent inclure les numéros de comptes PCN et les classifications appropriées.

### Format d'écriture comptable

**Format standard :**
```
Date : AAAA-MM-JJ

Nom du compte (Numéro de compte)        Débit      Crédit
─────────────────────────────────────────────────────
Compte à débiter (PCN no.)                €X,XXX
Compte à créditer (PCN no.)                          €X,XXX
Description de la transaction
```

### Règles pour les écritures comptables

1. **Chaque écriture doit avoir au moins un débit et un crédit**
2. **Le total des débits doit égaler le total des crédits**
3. **Les débits sont enregistrés en premier, puis les crédits (en retrait)**
4. **Inclure les numéros de comptes PCN**
5. **Inclure une description claire**

### Exemples courants d'écritures comptables

#### Exemple 1 : Investissement du propriétaire

**Transaction :** Le propriétaire investit 20 000 € en espèces dans l'entreprise.

**Écriture comptable :**
```
Date : 2024-11-01

5131   Trésorerie (Classe 5)                €20,000
101    Capital Social (Classe 1)                         €20,000
Pour enregistrer l'investissement du propriétaire
```

#### Exemple 2 : Achat d'équipement contre espèces

**Transaction :** Achat de 8 000 € d'équipement, payant en espèces.

**Écriture comptable :**
```
Date : 2024-11-05

222    Équipement (Classe 2)                €8,000
5131   Trésorerie (Classe 5)                            €8,000
Pour enregistrer l'achat d'équipement
```

#### Exemple 3 : Achat de stocks à crédit

**Transaction :** Achat de 3 000 € de stocks à crédit auprès d'un fournisseur.

**Écriture comptable :**
```
Date : 2024-11-10

361    Stocks (Classe 3)                    €3,000
44111  Fournisseurs (Classe 4)                          €3,000
Pour enregistrer l'achat de stocks à crédit
```

#### Exemple 4 : Vente avec TVA (Espèces)

**Transaction :** Vendre des services pour 2 000 € (hors TVA), recevant des espèces. Taux de TVA 17%.

**Écriture comptable :**
```
Date : 2024-11-15

5131   Trésorerie (Classe 5)                €2,340
703    Produits de services (Classe 7)                  €2,000
461411 TVA à payer (Classe 4)                              €340
Pour enregistrer la vente au comptant avec TVA (17%)
```

#### Exemple 5 : Vente à crédit

**Transaction :** Vendre des marchandises pour 1 500 € (hors TVA) à crédit. Taux de TVA 17%.

**Écriture comptable :**
```
Date : 2024-11-18

4011   Créances clients (Classe 4)          €1,755
7061   Chiffre d'affaires (Classe 7)                    €1,500
461411 TVA à payer (Classe 4)                              €255
Pour enregistrer la vente à crédit avec TVA (17%)
```

#### Exemple 6 : Payer une charge

**Transaction :** Payer 1 200 € de loyer.

**Écriture comptable :**
```
Date : 2024-11-20

6111   Loyer (Classe 6)                     €1,200
5131   Trésorerie (Classe 5)                            €1,200
Pour enregistrer le paiement du loyer
```

#### Exemple 7 : Achat avec TVA récupérable

**Transaction :** Achat de 5 000 € d'équipement (hors TVA), payant en espèces. TVA 17%, récupérable.

**Écriture comptable :**
```
Date : 2024-11-22

222    Équipement (Classe 2)                €5,000
421611 TVA récupérable (Classe 4)            €850
5131   Trésorerie (Classe 5)                            €5,850
Pour enregistrer l'achat d'équipement avec TVA récupérable
```

#### Exemple 8 : Payer les fournisseurs

**Transaction :** Payer 2 000 € au fournisseur pour un achat précédent.

**Écriture comptable :**
```
Date : 2024-11-25

44111  Fournisseurs (Classe 4)              €2,000
5131   Trésorerie (Classe 5)                            €2,000
Pour enregistrer le paiement au fournisseur
```

### Comptes en T

Les **comptes en T** sont des représentations visuelles des comptes du grand livre, en forme de lettre "T".

**Format :**
```
Nom du compte (Numéro de compte)
─────────────────────────────
        Débit        Crédit
─────────────────────────────
[Écritures]    │    [Écritures]
─────────────────────────────
Solde          │    Solde
```

**Règles :**
- Côté gauche = Débit
- Côté droit = Crédit
- Solde normal du côté qui augmente le compte

### Report aux comptes en T

Reportons les écritures comptables ci-dessus aux comptes en T :

#### Compte Trésorerie

```
Trésorerie (5131)
─────────────────────────────
01 nov  J1    €20,000  │
15 nov  J4     €2,340  │  05 nov  J2     €8,000
                       │  20 nov  J6     €1,200
                       │  22 nov  J7     €5,850
                       │  25 nov  J8     €2,000
─────────────────────────────
Solde  €5,290
```

#### Compte Équipement

```
Équipement (222)
─────────────────────────────
05 nov  J2     €8,000  │
22 nov  J7     €5,000  │
─────────────────────────────
Solde €13,000
```

#### Compte Fournisseurs

```
Fournisseurs (44111)
─────────────────────────────
        │  10 nov  J3     €3,000
        │
25 nov  J8     €2,000  │
─────────────────────────────
        │  Solde  €1,000
```

#### Compte Produits de services

```
Produits de services (703)
─────────────────────────────
        │  15 nov  J4     €2,000
─────────────────────────────
        │  Solde  €2,000
```

### Soldes normaux

Chaque type de compte a un **solde normal** (le côté où les augmentations sont enregistrées) :

| Type de compte | Solde normal | Augmentations | Diminutions |
|----------------|--------------|---------------|-------------|
| Actifs | Débit | Débit | Crédit |
| Passifs | Crédit | Crédit | Débit |
| Capitaux Propres | Crédit | Crédit | Débit |
| Produits | Crédit | Crédit | Débit |
| Charges | Débit | Débit | Crédit |

### Note de conformité Luxembourg

Au Luxembourg, les entreprises doivent maintenir :
- **Journal Général (Journal Général) :** Toutes les transactions chronologiquement
- **Grand Livre (Grand Livre) :** Tous les comptes avec leurs soldes
- **Sous-Livres :** Comptes détaillés (clients, fournisseurs)

Tous doivent :
- Utiliser les numéros de comptes PCN
- Être maintenus pendant 10 ans
- Être disponibles pour audit
- Soutenir toutes les écritures avec des documents sources

### Réfléchissez-y

Pourquoi est-il important que le total des débits égale le total des crédits dans chaque écriture comptable ? Que se passerait-il s'ils n'étaient pas équilibrés ?

---

