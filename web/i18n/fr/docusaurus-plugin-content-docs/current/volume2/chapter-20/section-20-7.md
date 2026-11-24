---
id: volume2-chapter-20-section-20-7
title: "20.7 Préparer les écritures comptables pour un système de coûts par commande"
sidebar_position: 8
slug: /volume2/chapter-20/section-20-7
---

# 20.7 Préparer les écritures comptables pour un système de coûts par commande

### Flux complet des écritures comptables

Le coût de revient par commande nécessite des écritures comptables tout au long du processus de production et de vente. Voici le flux complet avec les écritures comptables.

### 1. Acheter des matières premières

**Transaction :** Acheter des matières à crédit

**Écriture comptable :**
```
301    Inventaire des matières premières        €5,000
421611 TVA récupérable                 850
   44111  Comptes fournisseurs                        €5,850
Pour enregistrer l'achat de matières premières
```

**Comptes PCN :**
- 301 : Matières premières (Classe 3)
- 421611 : TVA récupérable (Classe 4)
- 44111 : Comptes fournisseurs (Classe 4)

### 2. Émettre des matières à la production

**Transaction :** Émettre des matières à la Commande #101

**Écriture comptable :**
```
311    En cours de fabrication - Commande #101     €400
   301    Inventaire des matières premières                    €400
Pour enregistrer les matières émises à la Commande #101
```

**Comptes PCN :**
- 311 : En cours de fabrication (Classe 3)
- 301 : Matières premières (Classe 3)

### 3. Enregistrer la main-d'œuvre directe

**Transaction :** Encourir les coûts de main-d'œuvre directe pour la Commande #101

**Écriture comptable :**
```
311    En cours de fabrication - Commande #101     €290
   4714   Salaires à payer                          €290
Pour enregistrer la main-d'œuvre directe pour la Commande #101
```

**Comptes PCN :**
- 311 : En cours de fabrication (Classe 3)
- 4714 : Salaires à payer (Classe 4)

**Lors du paiement :**
```
4714   Salaires à payer               €290
   5131   Trésorerie                                      €290
Pour enregistrer le paiement des salaires
```

### 4. Encourir les frais généraux de fabrication réels

**Transaction :** Payer le loyer (coût de frais généraux)

**Écriture comptable :**
```
MOH    Frais généraux de fabrication         €500
   5131   Trésorerie                                      €500
Pour enregistrer les frais généraux de fabrication réels (loyer)
```

**Compte PCN :**
- MOH : Frais généraux de fabrication (cost-accounting clearing account outside the PCN)

**Autres coûts de frais généraux :**
```
MOH    Frais généraux de fabrication         €200
   5131   Trésorerie                                      €200
Pour enregistrer les services publics (frais généraux)

MOH    Frais généraux de fabrication         €150
   2229   Amortissement cumulé                 €150
Pour enregistrer l'amortissement (frais généraux)
```

### 5. Appliquer les frais généraux de fabrication

**Transaction :** Appliquer les frais généraux à la Commande #101 (10 heures × €15/heure = €150)

**Écriture comptable :**
```
311    En cours de fabrication - Commande #101     €150
   MOH    Frais généraux de fabrication                    €150
Pour appliquer les frais généraux à la Commande #101
```

**Note :** Ceci crédite Frais généraux de fabrication (appliqués) et débite En cours de fabrication.

### 6. Compléter la commande

**Transaction :** La Commande #101 est complétée

**Écriture comptable :**
```
321    Produits finis                 €840
   311    En cours de fabrication - Commande #101                €840
Pour enregistrer l'achèvement de la Commande #101
(€400 matières + €290 main-d'œuvre + €150 frais généraux)
```

**Comptes PCN :**
- 321 : Produits finis (Classe 3)
- 311 : En cours de fabrication (Classe 3)

### 7. Vendre la commande

**Transaction :** Vendre la Commande #101 pour €1,500 (hors TVA), TVA 17%

**Écritures comptables (Deux) :**

**Écriture 1 : Enregistrer la vente**
```
4011   Comptes clients           €1,755
   7061   Chiffre d'affaires (€1,500)                 €1,500
   461411 TVA à payer (17%)                         €255
Pour enregistrer la vente de la Commande #101
```

**Écriture 2 : Enregistrer le coût des marchandises vendues**
```
607    Coût des marchandises vendues             €840
   321    Produits finis                            €840
Pour enregistrer le coût de la Commande #101 vendue
```

**Comptes PCN :**
- 4011 : Comptes clients (Classe 4)
- 7061 : Chiffre d'affaires (Classe 7)
- 461411 : TVA à payer (Classe 4)
- 607 : Coût des marchandises vendues (Classe 6)
- 321 : Produits finis (Classe 3)

### 8. Clôturer les frais généraux sous-appliqués/sur-appliqués

**Transaction :** Clôturer les frais généraux sous-appliqués de €200

**Écriture comptable :**
```
607    Coût des marchandises vendues             €200
   MOH    Frais généraux de fabrication                    €200
Pour clôturer les frais généraux sous-appliqués
```

### Exemple complet : Transactions multiples

**Traiteur de Marie - Transactions de novembre :**

**1er nov : Acheter des matières**
```
301    Matières premières                  €2,000
421611 TVA récupérable                 340
   44111  Comptes fournisseurs                        €2,340
```

**5 nov : Émettre des matières à la Commande #101**
```
311    En cours de fabrication - Commande #101     €400
   301    Matières premières                            €400
```

**6 nov : Émettre des matières à la Commande #102**
```
311    En cours de fabrication - Commande #102     €1,750
   301    Matières premières                          €1,750
```

**10 nov : Main-d'œuvre directe pour la Commande #101**
```
311    En cours de fabrication - Commande #101     €290
   4714   Salaires à payer                        €290
```

**12 nov : Main-d'œuvre directe pour la Commande #102**
```
311    En cours de fabrication - Commande #102     €910
   4714   Salaires à payer                        €910
```

**15 nov : Appliquer les frais généraux (50% de la main-d'œuvre)**
```
311    En cours de fabrication - Commande #101     €145
311    En cours de fabrication - Commande #102      455
   MOH    Frais généraux de fabrication                    €600
```

**20 nov : Compléter la Commande #101**
```
321    Produits finis                 €835
   311    En cours de fabrication - Commande #101                €835
```

**25 nov : Vendre la Commande #101**
```
4011   Comptes clients           €1,755
   7061   Chiffre d'affaires                          €1,500
   461411 TVA à payer                              €255

607    Coût des marchandises vendues             €835
   321    Produits finis                            €835
```

**30 nov : Coûts de frais généraux réels**
```
MOH    Frais généraux de fabrication         €12,000
   5131   Trésorerie (divers)                        €12,000
```

**30 nov : Clôturer les frais généraux sous-appliqués (€12,000 réel - €10,000 appliqué = €2,000)**
```
607    Coût des marchandises vendues             €2,000
   MOH    Frais généraux de fabrication                    €2,000
```

### Note de conformité luxembourgeoise

Au Luxembourg :
- Doit utiliser les comptes PCN appropriés
- Les écritures comptables doivent être précises
- Soutenir toutes les transactions avec de la documentation
- La TVA doit être gérée correctement
- Les flux de coûts doivent être correctement enregistrés
- Maintenir les dossiers de coûts par commande

### Réfléchir

Pourquoi y a-t-il deux écritures comptables séparées lorsqu'une commande est vendue ? Quels comptes sont affectés et pourquoi ?

---

