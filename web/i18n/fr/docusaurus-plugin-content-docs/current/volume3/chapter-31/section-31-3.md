---
id: volume3-chapter-31-section-31-3
title: "31.3 Formats de factures numériques (UBL, Peppol)"
sidebar_position: 4
slug: /volume3/chapter-31/section-31-3
---

# 31.3 Formats de factures numériques (UBL, Peppol)

## Vue d'ensemble

Les **formats de factures numériques** fournissent des structures standardisées pour les factures électroniques. Le Luxembourg supporte plusieurs formats, avec **UBL (Universal Business Language)** et **Peppol** étant les normes européennes les plus importantes. Comprendre ces formats est essentiel pour la mise en œuvre de la facturation électronique.

## UBL (Universal Business Language)

### Qu'est-ce que l'UBL ?

**UBL** est un standard basé sur XML pour les documents commerciaux, y compris les factures. Il fournit une structure standardisée qui assure l'interopérabilité entre différents systèmes et pays.

### Structure UBL

**La facture UBL contient :**
- **Informations d'en-tête** : Numéro de facture, date, parties
- **Lignes d'articles** : Détails produits/services, quantités, prix
- **Informations fiscales** : Calculs TVA, totaux fiscaux
- **Informations de paiement** : Conditions de paiement, méthodes
- **Informations supplémentaires** : Notes, références

### Avantages de l'UBL

**Avantages :**
- **Standardisation** : Structure cohérente entre systèmes
- **Interopérabilité** : Fonctionne avec différents logiciels
- **Conformité** : Répond aux exigences de facturation électronique UE
- **Automatisation** : Permet le traitement automatisé
- **International** : Utilisé dans toute l'Europe

## Peppol

### Qu'est-ce que Peppol ?

**Peppol (Pan-European Public Procurement On-Line)** est un réseau européen pour la facturation électronique, initialement développé pour les marchés publics mais maintenant utilisé pour la facturation B2B et B2G.

### Réseau Peppol

**Peppol fournit :**
- **Infrastructure réseau** : Réseau sécurisé pour l'échange de factures électroniques
- **Format standard** : Peppol BIS (Business Interoperability Specifications)
- **Points d'accès** : Fournisseurs de services pour l'accès au réseau
- **Validation** : Validation automatique des factures
- **Livraison** : Confirmation de livraison sécurisée

### Avantages de Peppol

**Avantages :**
- **Basé sur réseau** : Livraison sécurisée et fiable
- **Standardisé** : Format cohérent dans toute l'Europe
- **Validé** : Validation automatique
- **Suivi** : Confirmation de livraison
- **Européen** : Largement utilisé en Europe

## Comparaison des formats

### UBL vs. Peppol

| Aspect | UBL | Peppol |
|--------|-----|--------|
| **Type** | Standard de format | Réseau + format |
| **Structure** | Basé sur XML | Basé sur XML (Peppol BIS) |
| **Livraison** | Diverses méthodes | Basé sur réseau |
| **Validation** | Manuelle/logicielle | Automatique |
| **Portée** | Format uniquement | Format + réseau |
| **Cas d'utilisation** | Facturation électronique générale | Facturation électronique B2B/B2G |

### Choix d'un format

**Considérations :**
- **Exigences du destinataire** : Quel format le destinataire accepte-t-il ?
- **Support logiciel** : Quels formats votre logiciel supporte-t-il ?
- **Accès réseau** : Avez-vous besoin d'un accès au réseau Peppol ?
- **Besoins d'automatisation** : Combien d'automatisation avez-vous besoin ?
- **Coût** : Quels sont les coûts pour chaque option ?

## Mise en œuvre

### Mise en œuvre UBL

**Étapes :**
1. Choisir un logiciel conforme UBL
2. Configurer les modèles de facture
3. Générer des factures UBL XML
4. Valider le format UBL
5. Transmettre aux destinataires

### Mise en œuvre Peppol

**Étapes :**
1. Choisir un fournisseur de point d'accès Peppol
2. S'inscrire au réseau Peppol
3. Configurer le format Peppol BIS
4. Générer des factures Peppol
5. Envoyer via le réseau Peppol

## Support logiciel

### Logiciel comptable

**La plupart des logiciels comptables supportent :**
- **Export UBL** : Exporter les factures au format UBL
- **Intégration Peppol** : Se connecter au réseau Peppol
- **Conversion de format** : Convertir entre formats
- **Validation** : Valider les formats de facture

### Logiciels populaires

**Logiciels avec support de facturation électronique :**
- **Sage BOB** : Support UBL et Peppol
- **Odoo** : Modules de facturation électronique
- **SAP** : Facturation électronique d'entreprise
- **Autres logiciels** : Vérifier les capacités de facturation électronique

## Note de conformité Luxembourg

**Exigences importantes :**
- **Conformité de format** : Les factures électroniques doivent être au format supporté
- **Acceptation du destinataire** : Le destinataire doit accepter le format choisi
- **Support logiciel** : Le logiciel doit supporter le format choisi
- **Validation** : Les factures doivent être validées avant envoi
- **Stockage** : Les factures électroniques doivent être stockées dans un format accessible

**Problèmes courants :**
- **Erreurs de format** : Factures non au format correct
- **Limitations logicielles** : Le logiciel ne supporte pas le format choisi
- **Compatibilité destinataire** : Le destinataire n'accepte pas le format
- **Échecs de validation** : Les factures ne passent pas la validation
- **Problèmes réseau** : Problèmes d'accès au réseau Peppol

---

