---
id: volume1-chapter-08-section-8-6
title: "8.6 Définir l'objectif d'une réconciliation bancaire, et préparer une réconciliation bancaire et ses écritures de journal associées"
sidebar_position: 7
slug: /volume1/chapter-08/section-8-6
---

# 8.6 Définir l'objectif d'une réconciliation bancaire, et préparer une réconciliation bancaire et ses écritures de journal associées

### Qu'est-ce qu'une réconciliation bancaire ?

Une **réconciliation bancaire** est le processus de comparaison des registres de trésorerie de l'entreprise (compte de trésorerie dans le grand livre général) avec les registres de la banque (relevé bancaire) et d'explication de toute différence.

### Objectif de la réconciliation bancaire

**Pourquoi réconcilier ?**

1. **Vérifier la précision** : Assurer que les registres correspondent au relevé bancaire
2. **Détecter les erreurs** : Trouver les erreurs dans les registres ou le relevé bancaire
3. **Détecter la fraude** : Identifier les transactions non autorisées
4. **Mettre à jour les registres** : Enregistrer les transactions pas encore dans les livres
5. **Conformité** : Requis pour des états financiers précis

### Moment

**Fréquence :**
- **Mensuelle** : Pratique standard
- **Hebdomadaire** : Pour les entreprises avec de nombreuses transactions
- **Quotidienne** : Pour les entreprises avec un volume élevé de transactions

**Quand :**
- Après avoir reçu le relevé bancaire
- Avant de préparer les états financiers
- Planifiée régulièrement (par exemple, le premier de chaque mois)

### Relevé bancaire

**Ce qui est inclus :**
- Solde initial
- Dépôts
- Retraits
- Chèques compensés
- Paiements électroniques
- Frais bancaires
- Intérêts gagnés
- Solde final

### Différences courantes

**Éléments dans les livres mais pas sur le relevé bancaire :**
- **Chèques en circulation** : Chèques émis mais pas encore encaissés
- **Dépôts en transit** : Dépôts effectués mais pas encore enregistrés par la banque

**Éléments sur le relevé bancaire mais pas dans les livres :**
- **Frais de service bancaire** : Frais facturés par la banque
- **Intérêts gagnés** : Intérêts sur le compte
- **Chèques sans provision** : Chèques retournés (fonds insuffisants)
- **Paiements électroniques** : Paiements automatiques non enregistrés
- **Erreurs bancaires** : Erreurs de la banque

### Format de réconciliation bancaire

**Format standard :**

```
Réconciliation bancaire
[Nom de l'entreprise]
[Date]

Solde selon le relevé bancaire                    €X,XXX
Ajouter : Dépôts en transit                         XXX
Moins : Chèques en circulation                        (XXX)
Solde bancaire ajusté                              €X,XXX

Solde selon les livres                              €X,XXX
Ajouter : Intérêts gagnés                              XX
Moins : Frais de service bancaire                       (XX)
Moins : Chèques sans provision                         (XX)
Moins : Autres frais bancaires                         (XX)
Solde des livres ajusté                             €X,XXX

Solde réconcilié                                    €X,XXX
```

### Exemple : Réconciliation bancaire complète

**Le Petit Bistro - 30 novembre 2024**

**Relevé bancaire :**
- Solde final : €5,000

**Compte de trésorerie (Livres) :**
- Solde final : €4,900

**Informations supplémentaires :**
- Dépôt de €200 effectué le 30 novembre (pas encore sur le relevé bancaire)
- Chèque #501 de €100 émis mais pas encore encaissé
- Frais de service bancaire de €10 (sur le relevé, non enregistré dans les livres)
- Intérêts gagnés de €5 (sur le relevé, non enregistré dans les livres)

**Réconciliation bancaire :**

```
Le Petit Bistro
Réconciliation bancaire
30 novembre 2024

Solde selon le relevé bancaire                    €5,000
Ajouter : Dépôts en transit                          200
Moins : Chèques en circulation :
  Chèque #501                                        (100)
Solde bancaire ajusté                              €5,100

Solde selon les livres                              €4,900
Ajouter : Intérêts gagnés                               5
Moins : Frais de service bancaire                       (10)
Solde des livres ajusté                             €4,895
```

**Note :** Les soldes ajustés ne correspondent pas. Il doit y avoir un élément supplémentaire ou une erreur. Dans cet exemple, il y a une différence de €205 qui nécessite une enquête supplémentaire.

### Exemple corrigé et équilibré

**Relevé bancaire :** €5,000
**Livres :** €4,900
**Dépôt en transit :** €200
**Chèque en circulation :** €100
**Frais de service :** €10 (banque a, livres n'ont pas)
**Intérêts :** €5 (banque a, livres n'ont pas)
**Chèque supplémentaire en circulation :** €205

**Réconciliation :**

```
Solde selon le relevé bancaire                    €5,000
Ajouter : Dépôts en transit                          200
Moins : Chèques en circulation :
  Chèque #1                                          (100)
  Chèque #2                                          (205)
Solde bancaire ajusté                              €4,895

Solde selon les livres                              €4,900
Ajouter : Intérêts gagnés                               5
Moins : Frais de service bancaire                       (10)
Solde des livres ajusté                             €4,895

Solde réconcilié                                    €4,895 ✓
```

### Écritures de journal pour les éléments de réconciliation

**Éléments nécessitant des écritures de journal (éléments sur le relevé bancaire pas dans les livres) :**

**1. Frais de service bancaire :**
```
6133   Frais de service bancaire      €10
5131   Trésorerie (Banque)                           €10
Pour enregistrer les frais de service bancaire
```

**2. Intérêts gagnés :**
```
5131   Trésorerie (Banque)               €5
7552   Revenus d'intérêts                           €5
Pour enregistrer les intérêts gagnés
```

**3. Chèque sans provision (si applicable) :**
```
4011   Comptes clients       €[montant]
5131   Trésorerie (Banque)                           €[montant]
Pour enregistrer le chèque sans provision retourné
```

**4. Paiements électroniques (si non enregistrés) :**
```
[Compte de dépense approprié]    €[montant]
5131   Trésorerie (Banque)                           €[montant]
Pour enregistrer le paiement électronique
```

### Considérations bancaires luxembourgeoises

**Banques luxembourgeoises :**
- Plusieurs banques disponibles
- Virements SEPA courants
- Banque électronique standard
- Plusieurs devises supportées
- Virements internationaux

**Fonctionnalités de réconciliation :**
- Relevés bancaires en ligne
- Téléchargements de relevés électroniques
- Outils de réconciliation automatisés
- Comptes multi-devises

### Note de conformité luxembourgeoise

La réconciliation bancaire au Luxembourg :
- Devrait être effectuée mensuellement (meilleure pratique)
- Requise pour des états financiers précis
- Importante pour la conformité TVA
- Soutient les exigences d'audit
- Doit être documentée et conservée

### Réfléchir

Pourquoi la réconciliation bancaire est-elle importante ? Que pourrait-il se passer si une entreprise ne réconcilie pas régulièrement son compte bancaire ?

---

