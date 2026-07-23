---
title: "Frais scolaires"
---

# KARMDA

# 08 - Frais scolaires

## Référence fonctionnelle

> Le module Frais scolaires permet de définir les charges scolaires, de les attribuer aux élèves et d'assurer le suivi complet des paiements.

---

# Objectif

Le module Frais scolaires centralise toute la gestion financière liée à la scolarité.

Il permet de :

- créer des plans de frais ;
- attribuer ces plans aux élèves ;
- générer automatiquement leurs obligations financières ;
- enregistrer les paiements ;
- suivre les soldes restants.

---

# Utilisateurs concernés

- Administrateur
- Personnel administratif

---

# Permissions requises

Selon son rôle, un utilisateur peut :

- créer un plan de frais ;
- modifier un plan ;
- désactiver un plan ;
- attribuer un plan à des élèves ;
- consulter les obligations ;
- enregistrer des paiements ;
- consulter l'historique des paiements.

---

# Vue d'ensemble

Le module repose sur trois concepts distincts :

## Plan de frais

Un modèle définissant une charge scolaire.

Exemple :

- Scolarité annuelle
- Frais d'inscription
- Uniforme
- Transport

---

## Obligation

Une dette créée automatiquement lorsqu'un plan est attribué à un élève.

Chaque élève possède sa propre obligation.

---

## Paiement

Un versement effectué pour réduire une obligation.

Une obligation peut recevoir plusieurs paiements.

---

# Fonctionnement

## 1. Créer un plan de frais

Chaque plan comporte notamment :

- un nom ;
- une année scolaire ;
- un montant ;
- une description ;
- une date d'échéance ;
- une portée.

La portée peut être :

- toute l'école ;
- une classe.

---

## 2. Activer le plan

Après sa création, le plan devient disponible pour attribution.

Tant qu'il est actif, il peut être attribué à de nouveaux élèves.

---

## 3. Attribuer le plan

Le plan peut être attribué à un ou plusieurs élèves.

Lors de cette opération, KARMDA crée automatiquement une obligation financière pour chacun des élèves sélectionnés.

---

## 4. Consulter les obligations

Les obligations affichent notamment :

- l'élève concerné ;
- le montant dû ;
- le montant payé ;
- le solde restant ;
- le statut du paiement.

Chaque obligation possède son propre dossier de paiement.

---

## 5. Enregistrer un paiement

Chaque paiement enregistre :

- le montant ;
- le mode de paiement ;
- la date ;
- le numéro de reçu ;
- une référence éventuelle ;
- une observation.

Le solde restant est automatiquement recalculé.

---

## 6. Consulter l'historique

Le dossier de paiement conserve :

- tous les versements ;
- leur auteur ;
- leurs références ;
- leurs dates ;
- leurs observations.

---

# Règles métier

## Un plan est un modèle

Le plan de frais ne représente pas une dette.

Il définit uniquement une charge pouvant être attribuée aux élèves.

---

## Une obligation appartient à un seul élève

Chaque élève possède sa propre obligation financière.

Deux élèves ne partagent jamais la même obligation.

---

## Un paiement appartient à une seule obligation

Chaque paiement réduit uniquement l'obligation à laquelle il est associé.

---

## Les paiements sont cumulés

Une obligation peut recevoir plusieurs versements.

Le montant payé est la somme de tous les paiements enregistrés.

---

## Le solde est calculé automatiquement

Le solde restant est obtenu en soustrayant les paiements du montant dû.

---

## Les obligations sont conservées

La désactivation d'un plan empêche uniquement de nouvelles attributions.

Les obligations déjà créées restent inchangées.

---

## Certaines informations deviennent verrouillées

Lorsqu'un plan est déjà attribué à des élèves :

- le montant ;
- l'année scolaire ;
- la portée ;
- la classe concernée

ne peuvent plus être modifiés.

Cette règle garantit la cohérence des obligations déjà créées.

---

# Statuts possibles

## Plan

- Actif
- Désactivé

---

## Obligation

Selon les paiements enregistrés :

- Non payé
- Partiellement payé
- Payé

---

# Cas d'utilisation

### Début d'année scolaire

Créer le plan de scolarité annuelle puis l'attribuer à tous les élèves concernés.

---

### Nouvelle inscription

Attribuer les plans nécessaires au nouvel élève.

---

### Paiement en plusieurs fois

Enregistrer chaque versement au fur et à mesure.

Le solde restant est recalculé automatiquement.

---

### Consultation

Ouvrir le dossier d'un élève afin de consulter son historique de paiement.

---

# Erreurs fréquentes

- modifier un plan déjà attribué ;
- supprimer un plan utilisé ;
- enregistrer un paiement dans le mauvais dossier ;
- oublier de renseigner le numéro de reçu ;
- confondre un plan avec une obligation.

---

# Questions fréquentes

## Un plan crée-t-il automatiquement une dette ?

Non.

Une dette est créée uniquement lors de l'attribution du plan.

---

## Peut-on attribuer un plan à plusieurs élèves ?

Oui.

Chaque élève reçoit sa propre obligation.

---

## Peut-on enregistrer plusieurs paiements ?

Oui.

Le paiement est fractionnable.

---

## Que se passe-t-il lorsqu'un plan est désactivé ?

Il ne peut plus être attribué à de nouveaux élèves.

Les obligations existantes restent valides.

---

## Peut-on modifier le montant d'un plan déjà attribué ?

Non.

Les informations financières essentielles sont verrouillées afin de préserver l'intégrité comptable.

---

# Bonnes pratiques RELAIS

✔ Vérifier le montant avant de publier un plan.

✔ Attribuer les plans uniquement après validation.

✔ Toujours remettre un reçu au payeur.

✔ Renseigner la référence du paiement lorsque disponible.

✔ Ne jamais modifier un plan déjà utilisé.

✔ Utiliser la désactivation plutôt que la suppression.

✔ Consulter régulièrement les soldes restants.

---

# Modules associés

- Élèves
- Classes
- Tableau de bord

---

# Ce qu'il faut retenir

- Un plan de frais est un modèle.
- Une attribution crée une obligation financière.
- Une obligation appartient à un seul élève.
- Plusieurs paiements peuvent réduire une même obligation.
- Les soldes sont calculés automatiquement.
- Les historiques financiers sont conservés.

---

## Phrase à retenir

> **« Un plan définit une charge. Son attribution crée une obligation. Les paiements réduisent cette obligation jusqu'à son règlement complet. »**

> «Nous avons défini les frais de scolarité, nous les avons attribués aux élèves, puis nous suivons les paiements.»
