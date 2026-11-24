---
id: volume2-chapter-21-section-21-5
title: "21.5 Préparer les écritures comptables pour un système de coûts de revient par processus"
sidebar_position: 6
slug: /volume2/chapter-21/section-21-5
---

# 21.5 Préparer les écritures comptables pour un système de coûts de revient par processus

### Flux des écritures comptables

Le coût de revient par processus nécessite des écritures comptables pour enregistrer les coûts lorsqu'ils circulent dans le processus de production. Les écritures diffèrent du coût de revient par commande car les coûts sont accumulés par processus plutôt que par commande.

### 1. Acheter des matières premières

**Transaktion :** Acheter des matières pour la production

**Écriture comptable :**
```
301    Stock de matières premières        €5 000
421611 TVA récupérable                     850
   44111  Comptes fournisseurs                        €5 850
Pour enregistrer l'achat de matières premières
```

**Comptes PCN :**
- 301 : Matières premières (Classe 3)
- 421611 : TVA récupérable (Classe 4)
- 44111 : Comptes fournisseurs (Classe 4)

### 2. Émettre des matières à la production (Processus 1)

**Transaktion :** Émettre des matières au département de mélange

**Écriture comptable :**
```
311    En cours de fabrication - Mélange       €4 000
   301    Stock de matières premières                  €4 000
Pour enregistrer les matières émises au département de mélange
```

**Compte PCN :**
- 311 : En cours de fabrication (Classe 3)
- Peut utiliser des sous-comptes : 310001 (Mélange), 310002 (Cuisson), etc.

### 3. Enregistrer la main-d'œuvre directe (Processus 1)

**Transaktion :** Engager la main-d'œuvre directe dans le département de mélange

**Écriture comptable :**
```
311    En cours de fabrication - Mélange       €1 500
   4714   Salaires à payer                          €1 500
Pour enregistrer la main-d'œuvre directe dans le département de mélange
```

### 4. Engager les frais généraux de fabrication

**Transaktion :** Payer le loyer d'usine (frais généraux)

**Écriture comptable :**
```
MOH    Frais généraux de fabrication         €2 000
   5131   Caisse                                      €2 000
Pour enregistrer les frais généraux de fabrication réels
```

**Compte PCN :**
- MOH : Frais généraux de fabrication (cost-accounting clearing account outside the PCN)

### 5. Appliquer les frais généraux de fabrication

**Transaktion :** Appliquer les frais généraux au département de mélange (basé sur l'allocation)

**Écriture comptable :**
```
311    En cours de fabrication - Mélange       €1 200
   MOH    Frais généraux de fabrication                    €1 200
Pour appliquer les frais généraux au département de mélange
```

### 6. Transférer du processus 1 au processus 2

**Transaktion :** Transférer les unités complétées du mélange au département de cuisson

**Écriture comptable :**
```
311    En cours de fabrication - Cuisson       €6 700
   311    En cours de fabrication - Mélange                 €6 700
Pour transférer les coûts du mélange au département de cuisson
(€4 000 matières + €1 500 main-d'œuvre + €1 200 frais généraux)
```

**Note :** En pratique, vous pourriez utiliser des comptes séparés ou des sous-comptes pour chaque département.

### 7. Ajouter des coûts dans le processus 2

**Transaktion :** Ajouter des matières, de la main-d'œuvre et des frais généraux dans le département de cuisson

**Écritures comptables :**
```
311    En cours de fabrication - Cuisson       €800
   301    Stock de matières premières                    €800
Pour enregistrer les matières ajoutées dans le département de cuisson

311    En cours de fabrication - Cuisson       €1 000
   4714   Salaires à payer                          €1 000
Pour enregistrer la main-d'œuvre directe dans le département de cuisson

311    En cours de fabrication - Cuisson       €600
   MOH    Frais généraux de fabrication                    €600
Pour appliquer les frais généraux au département de cuisson
```

### 8. Transférer aux produits finis

**Transaktion :** Transférer les unités complétées de la cuisson aux produits finis

**Écriture comptable :**
```
321    Produits finis                 €9 100
   311    En cours de fabrication - Cuisson                 €9 100
Pour transférer les unités complétées aux produits finis
(€6 700 transféré + €800 matières + €1 000 main-d'œuvre + €600 frais généraux)
```

**Compte PCN :**
- 321 : Produits finis (Classe 3)

### 9. Vendre les produits finis

**Transaktion :** Vendre 800 unités pour €12 000 (hors TVA), TVA 17%

**Écritures comptables (Deux) :**

**Écriture 1 : Enregistrer la vente**
```
5131   Caisse (ou 4011   Créances)   €14 040
   7061   Chiffre d'affaires                          €12 000
   461411 TVA à payer                              €2 040
Pour enregistrer la vente de produits finis
```

**Écriture 2 : Enregistrer le coût des marchandises vendues**
```
607    Coût des marchandises vendues             €9 100
   321    Produits finis                          €9 100
Pour enregistrer le coût des marchandises vendues
(800 unités × €11,375 coût moyen)
```

**Comptes PCN :**
- 5131 : Caisse (Classe 5)
- 4011 : Comptes clients (Classe 4)
- 7061 : Chiffre d'affaires (Classe 7)
- 461411 : TVA à payer (Classe 4)
- 607 : Coût des produits finis vendus (Classe 6)
- 321 : Produits finis (Classe 3)

### Exemple complet : Mois de production

**Entreprise de transformation alimentaire luxembourgeoise - Novembre :**

**1er nov : Acheter des matières**
```
301    Matières premières                  €10 000
421611 TVA récupérable                 1 700
   44111  Comptes fournisseurs                        €11 700
```

**1-30 nov : Émettre des matières au processus 1**
```
311    En cours de fabrication - Processus 1    €8 000
   301    Matières premières                            €8 000
```

**1-30 nov : Main-d'œuvre directe dans le processus 1**
```
311    En cours de fabrication - Processus 1    €3 000
   4714   Salaires à payer                          €3 000
```

**1-30 nov : Appliquer les frais généraux au processus 1**
```
311    En cours de fabrication - Processus 1    €2 000
   MOH    Frais généraux de fabrication                    €2 000
```

**30 nov : Transférer du processus 1 au processus 2**
```
311    En cours de fabrication - Processus 2   €13 000
   311    En cours de fabrication - Processus 1              €13 000
```

**1-30 nov : Ajouter des coûts dans le processus 2**
```
311    En cours de fabrication - Processus 2    €1 500
   301    Matières premières                            €1 500

311    En cours de fabrication - Processus 2    €2 000
   4714   Salaires à payer                          €2 000

311    En cours de fabrication - Processus 2    €1 200
   MOH    Frais généraux de fabrication                    €1 200
```

**30 nov : Transférer aux produits finis**
```
321    Produits finis                €17 700
   311    En cours de fabrication - Processus 2              €17 700
```

**30 nov : Vendre 1 000 unités**
```
4011   Comptes clients           €20 000
   7061   Chiffre d'affaires                          €20 000
   461411 TVA à payer                              €3 400

607    Coût des marchandises vendues            €17 700
   321    Produits finis                          €17 700
```

### Comptabilisation de l'en cours de fabrication initial

S'il y a un en cours de fabrication initial, les coûts sont combinés avec les coûts actuels en utilisant la méthode de la moyenne pondérée.

**Exemple :**
- ECF début : €2 000
- Coûts actuels : €13 000
- Total coûts : €15 000
- Unités équivalentes : 1 200
- Coût par unité : €15 000 ÷ 1 200 = €12,50

### Note de conformité luxembourgeoise

Au Luxembourg :
- Doit utiliser les comptes PCN appropriés
- Comptes En cours de fabrication pour chaque département
- Les flux de coûts doivent être correctement enregistrés
- Soutenir les évaluations des stocks
- Maintenir les dossiers de coûts de processus
- TVA gérée correctement
- Coût des marchandises vendues correctement calculé

### Réfléchissez-y

Comment les écritures comptables dans le coût de revient par processus diffèrent-elles du coût de revient par commande ? Pourquoi les écritures sont-elles structurées différemment ?

---

