---
id: volume1-chapter-09-section-9-1
title: "9.1 Expliquer le principe de comptabilisation des revenus et comment il se rapporte aux transactions de vente et d'achat actuelles et futures"
sidebar_position: 2
slug: /volume1/chapter-09/section-9-1
---

# 9.1 Expliquer le principe de comptabilisation des revenus et comment il se rapporte aux transactions de vente et d'achat actuelles et futures

### Principe de comptabilisation des revenus

Le **principe de comptabilisation des revenus** stipule que les revenus doivent être comptabilisés (enregistrés) lorsqu'ils sont gagnés, indépendamment du moment où la trésorerie est reçue.

**Concept clé :** Les revenus sont gagnés lorsque les biens sont livrés ou les services sont exécutés, pas nécessairement lorsque le paiement est reçu.

### Quand les revenus sont-ils gagnés ?


**Figure 9.1:** Receivables Lifecycle

```
Sale on Credit
     │
     ↓
Produits Recognized
(Compte de Résultat)
     │
     ↓
Créances clients Created
(Bilan Asset)
     │
     ↓
    ┌─┴─┐
    │   │
Collect  Uncollectible
     │   │
     │   ↓
     │ Bad Debt Expense
     │ (Compte de Résultat)
     │
     ↓
Trésorerie Received
(Bilan)
```

*Texte alternatif : Flowchart showing the receivables lifecycle: starting with a sale on credit, revenue is recognized on the income statement, accounts receivable is created on the balance sheet, then either cash is collected (completing the cycle) or the account becomes uncollectible resulting in bad debt expense, demonstrating the flow from sale to collection or write-off.*

**Pour les ventes de biens :**
- Les revenus sont gagnés lorsque les biens sont livrés au client
- La propriété est transférée au client
- Le client a l'obligation de payer

**Pour les services :**
- Les revenus sont gagnés lorsque les services sont exécutés
- Le service est complet ou substantiellement complet
- Le client a l'obligation de payer

**Pour les projets à long terme :**
- Les revenus peuvent être comptabilisés au fil du temps (pourcentage d'achèvement)
- Ou à l'achèvement (méthode du contrat terminé)

### Comptabilisation des revenus et créances

**Ventes à crédit :**
- Les revenus sont comptabilisés lorsque la vente est effectuée (biens livrés ou service exécuté)
- Les créances clients sont créées (actif)
- La trésorerie est reçue plus tard

**Exemple :**
- L'entreprise vend €1,000 de biens à crédit le 15 novembre
- Revenus comptabilisés : 15 novembre (€1,000)
- Créances clients créées : 15 novembre (€1,000)
- Trésorerie reçue : 10 décembre (€1,000)

**Écriture de journal (Vente) :**
```
4011   Créances clients        €1,000
7061   Chiffre d'affaires                          €1,000
Pour enregistrer la vente à crédit
```

**Écriture de journal (Recouvrement) :**
```
5131   Trésorerie                        €1,000
4011   Créances clients                                €1,000
Pour enregistrer le recouvrement de la créance
```

### Ventes au comptant vs. Ventes à crédit

**Ventes au comptant :**
- Revenus comptabilisés lorsque la trésorerie est reçue
- Aucune créance créée
- Flux de trésorerie immédiat

**Ventes à crédit :**
- Revenus comptabilisés lorsque la vente est effectuée
- Créance créée
- Trésorerie reçue plus tard

**Les deux suivent le principe de comptabilisation des revenus :** Les revenus sont comptabilisés lorsqu'ils sont gagnés (vente effectuée), pas lorsque la trésorerie est reçue.

### Transactions de vente et d'achat futures

**Ventes futures (Revenus non gagnés) :**
- Trésorerie reçue avant que les revenus soient gagnés
- Enregistré comme passif (Revenus non gagnés)
- Revenus comptabilisés lorsqu'ils sont gagnés

**Exemple :**
- Le client paie €500 à l'avance pour des services
- Trésorerie reçue : 1er novembre
- Services exécutés : 15 décembre

**Écriture de journal (Trésorerie reçue) :**
```
5131   Trésorerie                        €500
482    Revenus non gagnés                            €500
Pour enregistrer le paiement anticipé
```

**Écriture de journal (Revenus comptabilisés) :**
```
482    Revenus non gagnés           €500
703    Revenus de services                            €500
Pour comptabiliser les revenus lorsque les services sont exécutés
```

**Achats futurs (Charges payées d'avance) :**
- Trésorerie payée avant que la charge soit engagée
- Enregistré comme actif (Charge payée d'avance)
- Charge comptabilisée lorsqu'elle est engagée

**Exemple :**
- L'entreprise paie €1,200 pour une assurance annuelle
- Trésorerie payée : 1er janvier
- Charge comptabilisée mensuellement : €100 par mois

**Écriture de journal (Trésorerie payée) :**
```
481    Assurances payées d'avance          €1,200
5131   Trésorerie                                        €1,200
Pour enregistrer l'assurance payée d'avance
```

**Écriture de journal (Charge comptabilisée) :**
```
614    Charges d'assurance          €100
481    Assurances payées d'avance                      €100
Pour comptabiliser la charge d'assurance du mois
```

### Considérations TVA au Luxembourg

**TVA sur les ventes à crédit :**
- La TVA est due lorsque la vente est effectuée (revenus comptabilisés)
- Pas lorsque la trésorerie est reçue
- TVA à payer créée au moment de la vente

**Exemple :**
- Vente à crédit : €1,000 (hors TVA), TVA 17%
- Revenus : €1,000
- TVA à payer : €170
- Créances clients : €1,170

**Écriture de journal :**
```
4011   Créances clients        €1,170
7061   Chiffre d'affaires                          €1,000
461411 TVA à payer                                  €170
Pour enregistrer la vente à crédit avec TVA
```

**TVA sur les comptes irrécouvrables :**
- Si le compte devient irrécouvrable, la TVA peut être récupérable
- Doit suivre les règles de TVA du Luxembourg
- Documentation appropriée requise

### Note de conformité luxembourgeoise

La comptabilisation des revenus au Luxembourg doit :
- Suivre les normes comptables
- Se conformer aux exigences du PCN
- Comptabiliser la TVA au moment de la vente
- Classer correctement les créances (Classe 4)
- Maintenir une documentation appropriée
- Soutenir la déclaration fiscale

### Réfléchir

Pourquoi est-il important de comptabiliser les revenus lorsqu'ils sont gagnés plutôt que lorsque la trésorerie est reçue ? Comment cela affecte-t-il les créances clients ?

---

