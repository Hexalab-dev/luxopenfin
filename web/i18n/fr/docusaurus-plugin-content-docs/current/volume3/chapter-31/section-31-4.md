---
id: volume3-chapter-31-section-31-4
title: "31.4 Format de fichier FAIA (XML, basé sur OECD SAF-T)"
sidebar_position: 5
slug: /volume3/chapter-31/section-31-4
---

# 31.4 Format de fichier FAIA (XML, basé sur OECD SAF-T)

## Vue d'ensemble

Le **format de fichier FAIA (Fichier d'Audit Informatisé AED)** est le format standardisé du Luxembourg pour les données d'audit fiscal. Basé sur **OECD SAF-T (Standard Audit File for Tax)**, FAIA fournit un format structuré et complet pour exporter les données comptables vers les autorités fiscales.

## FAIA et OECD SAF-T

### Standard OECD SAF-T

**SAF-T (Standard Audit File for Tax)** est un standard international développé par l'OCDE à des fins d'audit fiscal. Il fournit un format standardisé pour exporter les données comptables.

### Mise en œuvre au Luxembourg

**FAIA est :**
- Basé sur le standard OECD SAF-T
- Adapté aux exigences luxembourgeoises
- Format basé sur XML
- Structure de données complète
- Requis pour les audits fiscaux

## Structure du fichier FAIA

### Format XML

**Les fichiers FAIA sont :**
- Format XML (eXtensible Markup Language)
- Données structurées avec balises
- Validées contre le schéma
- Lisibles par l'homme (avec outils appropriés)
- Traitables par machine

### Composants du fichier

**Le fichier FAIA contient :**
- **En-tête** : Informations entreprise, période couverte
- **Plan comptable** : Plan comptable PCN complet
- **Grand livre** : Toutes les écritures comptables
- **Écritures comptables** : Enregistrements de transactions détaillés
- **Soldes de comptes** : Soldes d'ouverture et de clôture
- **Données de support** : Informations supplémentaires selon les besoins

## Exigences de données

### Informations requises

**Doit inclure :**
- Toutes les transactions comptables pour la période
- Plan comptable complet (PCN)
- Soldes de comptes (ouverture et clôture)
- Dates et montants des transactions
- Références de comptes (numéros de comptes PCN)
- Descriptions des transactions
- Références aux documents de support
- Informations TVA (si applicable)

### Couverture de période

**Couverture :**
- Couvre généralement l'exercice fiscal
- Peut couvrir une période d'audit spécifique
- Doit être complet pour la période
- Doit inclure toutes les transactions

## Génération de fichiers FAIA

### Depuis le logiciel comptable

**La plupart des logiciels comptables** peuvent exporter vers FAIA :
- **Sage BOB** : Fonctionnalité d'export FAIA
- **Odoo** : Module d'export FAIA
- **Autres logiciels** : Vérifier la capacité d'export FAIA

**Processus d'export :**
1. Sélectionner la période à exporter
2. Choisir l'option d'export FAIA
3. Configurer les paramètres d'export
4. Générer le fichier FAIA
5. Valider le format de fichier
6. Enregistrer le fichier pour soumission

### Génération manuelle

**Si le logiciel ne supporte pas FAIA :**
- Peut nécessiter des outils de conversion
- Utiliser un logiciel de conversion FAIA
- Consulter un spécialiste IT
- Envisager une mise à niveau logicielle

## Validation FAIA

### Validation de schéma

**Les fichiers FAIA doivent :**
- Suivre le schéma XML FAIA
- Inclure tous les éléments requis
- Avoir une structure appropriée
- Passer la validation de schéma
- Être correctement formatés

### Validation de données

**Les données doivent être :**
- Complètes pour la période
- Exactes et correctes
- Cohérentes entre sections
- Correctement référencées
- Validées avant soumission

## Exigences de soumission

### Quand requis

**Les fichiers FAIA peuvent être requis :**
- Pendant les audits fiscaux
- Pour des procédures fiscales spécifiques
- Sur demande des autorités fiscales (AED)
- Pour vérification de conformité
- Pour support de déclaration fiscale

### Processus de soumission

**Soumission :**
1. Générer le fichier FAIA pour la période demandée
2. Valider le format et le contenu du fichier
3. Examiner les données pour exactitude
4. Soumettre aux autorités fiscales (AED)
5. Conserver une copie pour les dossiers
6. Confirmer la réception

## Note de conformité Luxembourg

**Exigences critiques :**
- **Capacité FAIA** : Le logiciel doit supporter l'export FAIA
- **Complétude des données** : Les fichiers doivent inclure toutes les données requises
- **Conformité de format** : Les fichiers doivent suivre le schéma FAIA
- **Validation** : Les fichiers doivent être validés avant soumission
- **Ponctualité** : Doit être en mesure de générer des fichiers rapidement lorsque demandé

**Problèmes courants :**
- **Limitations logicielles** : Le logiciel ne supporte pas l'export FAIA
- **Erreurs de format** : Les fichiers ne suivent pas le schéma FAIA
- **Données incomplètes** : Informations requises manquantes
- **Échecs de validation** : Les fichiers ne passent pas la validation
- **Problèmes de timing** : Incapacité à générer des fichiers rapidement lorsque demandé

---

