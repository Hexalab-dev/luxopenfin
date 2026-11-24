---
id: volume1-chapter-06-section-6-9
title: "6.9 TVA luxembourgeoise sur les marchandises (taux 3 %, 8 %, 14 %, 17 %)"
sidebar_position: 10
slug: /volume1/chapter-06/section-6-9
---

# 6.9 TVA luxembourgeoise sur les marchandises (taux 3 %, 8 %, 14 %, 17 %)

### Taux de TVA sur les marchandises

Le Luxembourg a quatre taux de TVA qui s'appliquent à différents types de marchandises :

- **3 %** : Produits alimentaires et boissons non alcoolisées, livres, produits pharmaceutiques, vêtements pour enfants
- **8 %** : Gaz, électricité, coiffure, petites réparations
- **14 %** : Certains vins (jusqu'à 13 % vol.), certains biens
- **17 %** : La plupart des biens et services (taux standard), y compris la bière et les spiritueux

### TVA sur les types de marchandises courants

#### Produits alimentaires (TVA 3 %)

**S'applique à :**
- Produits alimentaires pour consommation humaine
- Eau (sauf minérale/gazeuse)
- Aliments pour animaux
- Graines et plantes pour production alimentaire

**Exemple :** Achat de 1 000 € de produits alimentaires

**Écriture de journal :**
```
361    Stocks                   €1,000
421611 TVA récupérable               30   (3%)
44111  Dettes fournisseurs                        €1,030
```

#### Vêtements pour enfants (TVA 3 %)

**S'applique à :**
- Vêtements et chaussures pour enfants
- Limites d'âge s'appliquent (généralement jusqu'à 14 ans)

**Exemple :** Achat de 500 € de vêtements pour enfants

**Écriture de journal :**
```
361    Stocks                   €500
421611 TVA récupérable               15   (3%)
44111  Dettes fournisseurs                          €515
```

#### Certains vins (TVA 14 %)

**S'applique à :**
- Certains vins (jusqu'à 13 % vol.)
- Quand vendu comme marchandises (pas dans restaurant)
- La bière, les spiritueux et les autres alcools ne sont **pas** à 14 % : ils sont taxés au taux standard de 17 % (et les boissons alcoolisées servies au restaurant sont toujours à 17 %)

**Exemple :** Achat de 1 000 € de vin (12 % vol.) pour vente au détail

**Écriture de journal :**
```
361    Stocks                   €1,000
421611 TVA récupérable              140   (14%)
44111  Dettes fournisseurs                        €1,140
```

#### Marchandises standard (TVA 17 %)

**S'applique à :**
- La plupart des biens non spécifiquement listés
- Électronique, meubles, vêtements généraux, etc.

**Exemple :** Achat de 2 000 € de marchandises générales

**Écriture de journal :**
```
361    Stocks                   €2,000
421611 TVA récupérable              340   (17%)
44111  Dettes fournisseurs                        €2,340
```

### TVA sur les ventes

**Les mêmes taux s'appliquent aux ventes :**

**Exemple : Ventes mixtes**

Magasin de détail vend :
- T-shirt pour enfants : 20 € (TVA 3 %)
- T-shirt pour adultes : 30 € (TVA 17 %)
- Livre : 15 € (TVA 3 %)

**Écritures de journal :**

**Vente 1 : T-shirt pour enfants**
```
5131   Trésorerie                        €20.60
7061   Revenus de ventes                           €20.00
461411 TVA à payer (3%)                           €0.60
```

**Vente 2 : T-shirt pour adultes**
```
5131   Trésorerie                        €35.10
7061   Revenus de ventes                           €30.00
461411 TVA à payer (17%)                          €5.10
```

**Vente 3 : Livre**
```
5131   Trésorerie                        €15.45
7061   Revenus de ventes                           €15.00
461411 TVA à payer (3%)                           €0.45
```

### Suivi TVA pour les retours

**Important :** Doit suivre la TVA par taux pour la préparation appropriée de la déclaration TVA.

**Exemple :** Le client retourne un T-shirt pour enfants (TVA 3 %)

**Écriture de journal :**
```
709    Retours sur ventes               €20.00
461411 TVA à payer (3%)                           €0.60
5131   Trésorerie (ou 4011   Créances)                €20.60
Pour enregistrer le retour de marchandises
```

### Préparation de la déclaration TVA luxembourgeoise

**Pour la déclaration TVA (eCDF) :**
- Doit déclarer les ventes par taux de TVA
- Doit déclarer les achats par taux de TVA
- Doit calculer la TVA nette (À payer - Récupérable)
- Doit déposer avant la date limite (mensuel/trimestriel/annuel)

**Exemple Résumé TVA :**
```
TVA à payer :
  Ventes TVA 3 % : 500 € × 3 % = 15,00 €
  Ventes TVA 17 % : 2 000 € × 17 % = 340,00 €
  TVA totale à payer : 355,00 €

TVA récupérable :
  Achats TVA 3 % : 300 € × 3 % = 9,00 €
  Achats TVA 17 % : 1 500 € × 17 % = 255,00 €
  TVA totale récupérable : 264,00 €

TVA nette à payer : 355,00 € - 264,00 € = 91,00 €
```

### Note de conformité Luxembourg

Pour la TVA sur les marchandises au Luxembourg :
- Doit utiliser le taux de TVA correct pour chaque article
- Doit suivre la TVA par taux pour la déclaration TVA
- Doit enregistrer la TVA séparément (pas dans le coût des stocks)
- Doit déposer les déclarations TVA à temps (eCDF)
- Doit maintenir une documentation appropriée
- Différents taux nécessitent une comptabilité attentive

### Erreurs TVA courantes à éviter

1. **Application de taux erroné** : Utiliser 17 % au lieu de 3 % pour les aliments
2. **Suivi TVA manquant** : Ne pas suivre la TVA par taux
3. **TVA dans le coût des stocks** : Inclure la TVA dans les stocks (devrait être séparé)
4. **Retours incorrects** : Ne pas ajuster la TVA sur les retours
5. **Documentation manquante** : Ne pas justifier les calculs TVA

### Réfléchir

Un magasin de détail luxembourgeois vend à la fois des vêtements pour enfants (TVA 3 %) et des vêtements pour adultes (TVA 17 %). Comment l'entreprise devrait-elle suivre ces ventes pour la préparation de la déclaration TVA ? Quels comptes et procédures sont nécessaires ?

---

