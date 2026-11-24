---
id: volume1-chapter-04-section-4-6
title: "4.6 Ajustements spécifiques au Luxembourg : Régularisations de TVA, charges sociales, provisions"
sidebar_position: 7
slug: /volume1/chapter-04/section-4-6
---

# 4.6 Ajustements spécifiques au Luxembourg : Régularisations de TVA, charges sociales, provisions

### Écritures d'ajustement spécifiques au Luxembourg

En plus des écritures d'ajustement standard, les entreprises luxembourgeoises doivent effectuer des ajustements spécifiques liés à :
- TVA (Taxe sur la valeur ajoutée)
- Charges sociales (prestations aux employés)
- Provisions (réserves pour obligations futures)

Ces ajustements garantissent la conformité avec les réglementations fiscales et comptables du Luxembourg.

### Régularisations de TVA

#### Ajustement de la TVA à payer

**Situation :** La TVA collectée sur les ventes doit être enregistrée dans la période où la vente s'est produite, même si elle n'a pas encore été payée aux autorités fiscales.

**Exemple :** Le restaurant réalise des ventes en novembre avec 1 700 € de TVA collectée. La déclaration de TVA est déposée et payée en décembre.

**Écriture d'ajustement (Fin de novembre) :**
```
461411 TVA à payer                  €1,700
461411 TVA à payer (ou compte séparé)            €1,700
Pour régulariser la TVA à payer pour les ventes de novembre
```

**En fait, la TVA est généralement enregistrée au moment de la vente. Mais si ce n'est pas le cas :**

**Si la TVA n'a pas été enregistrée à la vente :**
```
461411 TVA à payer                  €1,700
7061   Revenus de ventes (ou compte d'ajustement)        €1,700
Pour enregistrer la TVA à payer sur les ventes de novembre
```

**Comptes PCN :**
- 461411 : TVA à payer (Classe 4)

#### Ajustement de la TVA récupérable

**Situation :** La TVA payée sur les achats peut être récupérable. Il faut s'assurer qu'elle est correctement enregistrée.

**Exemple :** Le restaurant a 850 € de TVA récupérable sur les achats de novembre qui n'ont pas été enregistrés.

**Écriture d'ajustement (Fin de novembre) :**
```
421611 TVA récupérable              €850
421611 TVA récupérable (ou réduction de dépense)       €850
Pour enregistrer la TVA récupérable sur les achats de novembre
```

**Comptes PCN :**
- 421611 : TVA récupérable (Classe 4)

#### Ajustement de règlement de TVA

**Situation :** À la fin de la période, calculer la position nette de TVA (TVA à payer - TVA récupérable).

**Exemple :**
- TVA à payer : 1 700 €
- TVA récupérable : 850 €
- TVA nette à payer : 850 €

**Écriture d'ajustement (si création d'une provision) :**
```
461411 TVA à payer                  €850
421611 TVA récupérable              €850
461412 TVA à régler                    €850
Pour enregistrer la TVA nette à payer pour novembre
```

**Ou plus simple (compensation) :**
```
421611 TVA récupérable              €850
461411 TVA à payer                              €850
Pour compenser la TVA récupérable contre la TVA à payer
TVA nette à payer : €850
```

### Régularisations des charges sociales

#### Charges sociales courues (Partie employé)

**Situation :** Les charges sociales des employés sont déduites des salaires mais peuvent ne pas être payées aux autorités avant plus tard.

**Exemple :** Les salaires de novembre incluent 1 200 € de charges sociales des employés qui seront payées en décembre.

**Écriture d'ajustement (Fin de novembre) :**
```
6211   Charge de salaires (ou 4714) €1,200
4621   Sécurité sociale à payer                  €1,200
Pour enregistrer les charges sociales courues des employés pour novembre
```

**Comptes PCN :**
- 4621 : Sécurité sociale à payer (Classe 4)
- 6211 : Charge de salaires (Classe 6)

#### Charges sociales courues (Partie employeur)

**Situation :** L'employeur doit payer des charges sociales supplémentaires en plus du salaire brut.

**Exemple :** Les charges sociales de l'employeur pour novembre totalisent 1 500 €, à payer en décembre.

**Écriture d'ajustement (Fin de novembre) :**
```
623    Charges sociales (Employeur) €1,500
4621   Sécurité sociale à payer                  €1,500
Pour enregistrer les charges sociales courues de l'employeur pour novembre
```

**Comptes PCN :**
- 623 : Charges sociales (Employeur) (Classe 6)
- 4621 : Sécurité sociale à payer (Classe 4)

#### Exemple complet des charges sociales

**Situation :**
- Salaires bruts : 10 000 €
- Charges sociales employé (12,95 %) : 1 295 €
- Charges sociales employeur (12,57 %) : 1 257 €
- Salaire net versé aux employés (avant retenue d'impôt) : 8 705 €

*Taux CCSS au 1er janvier 2026 (à vérifier chaque année sur ccss.lu) : salarié 2,80 % + 0,25 % maladie, 8,50 % pension, 1,40 % assurance dépendance (légalement sur le brut diminué d'un quart du salaire social minimum ; simplifié ici au brut total) ; employeur 2,80 % + 0,25 % maladie, 8,50 % pension, 0,65 % accident, 0,14 % santé au travail, 0,23 % Mutualité (classe 1 retenue).*

**Écritures de journal :**

**Paiement des salaires :**
```
6211   Charge de salaires            €10,000
4714   Salaires à payer                       €8,705
4621   Sécurité sociale à payer                 €1,295
Pour enregistrer les salaires de novembre
```

**Charges sociales de l'employeur :**
```
623    Charges sociales      €1,257
4621   Sécurité sociale à payer                 €1,257
Pour enregistrer les charges sociales de l'employeur pour novembre
```

**Total Sécurité sociale à payer :** 1 295 € + 1 257 € = 2 552 €

### Provisions

#### Provision pour risques et charges

**Situation :** Les entreprises doivent créer des provisions pour les obligations futures estimées.

**Exemples :**
- Obligations de garantie
- Litiges juridiques
- Coûts de restructuration
- Nettoyage environnemental

**Exemple : Provision pour garantie**

**Situation :** Le restaurant estime 500 € de coûts de garantie pour l'équipement vendu avec garanties.

**Écriture d'ajustement (Fin de période) :**
```
649    Charge de provision           €500
18     Provisions pour risques et charges         €500
Pour enregistrer la provision pour les coûts de garantie estimés
```

**Comptes PCN :**
- 648 : Autres charges d'exploitation (Classe 6) ou charge de provision spécifique
- 18 : Provisions pour risques et charges (Classe 1)

#### Provision pour pensions

**Situation :** Si l'entreprise a des obligations de pension, des provisions peuvent être requises.

**Exemple :** Provision de pension estimée de 2 000 € pour la période.

**Écriture d'ajustement :**
```
6231   Charge de pension             €2,000
181    Provisions pour pensions                 €2,000
Pour enregistrer la provision de pension pour la période
```

**Comptes PCN :**
- 6231 : Cotisations de pension (Classe 6)
- 181 : Provisions pour pensions (Classe 1)

### Exigences de conformité luxembourgeoises

#### Ajustements de TVA

- Doivent être effectués avant le dépôt de la déclaration de TVA (eCDF)
- Doivent garantir que la TVA est enregistrée dans la bonne période
- La position nette de TVA doit être précise
- Doivent être conformes aux taux de TVA (3 %, 8 %, 14 %, 17 %)

#### Ajustements des charges sociales

- Doivent régulariser les parts employeur et employé
- Doivent être enregistrés dans la période gagnée
- Doivent être payés dans les délais requis
- Doivent être conformes aux taux de sécurité sociale du Luxembourg

#### Provisions

- Doivent être basées sur des estimations raisonnables
- Doivent être examinées et ajustées régulièrement
- Doivent être conformes aux exigences PCN
- Doivent être divulguées dans les notes aux états financiers

### Note de conformité luxembourgeoise

Les ajustements spécifiques au Luxembourg doivent :
- Suivre les classifications de comptes PCN
- Être conformes aux réglementations fiscales
- Être effectués avant le dépôt des états financiers
- Être étayés par des calculs
- Être conservés pendant 10 ans
- Être examinés par les autorités fiscales lors des audits

### Réfléchissez-y

Une entreprise luxembourgeoise a 5 000 € de TVA à payer et 2 000 € de TVA récupérable à la fin du mois. Quelle écriture d'ajustement est nécessaire ? Quelle est la position nette de TVA, et quels comptes PCN sont impliqués ?

---

