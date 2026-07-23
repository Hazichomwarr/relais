---
title: "Utilisateurs"
---

# KARMDA

# 09 - Utilisateurs

## Référence fonctionnelle

> Le module Utilisateurs permet de gérer les comptes, les rôles et les accès des personnes autorisées à utiliser KARMDA au sein d'un établissement.

---

# Objectif

Le module Utilisateurs contrôle les accès à l'établissement.

Il permet de :

- créer un compte utilisateur ;
- attribuer un rôle ;
- modifier un rôle ;
- suivre le statut des comptes.

Chaque utilisateur dispose uniquement des permissions associées à son rôle.

---

# Utilisateurs concernés

- Administrateur école

---

# Permissions requises

Selon son rôle, un utilisateur peut :

- créer un compte ;
- modifier le rôle d'un utilisateur ;
- consulter les comptes de l'établissement.

---

# Vue d'ensemble

Chaque utilisateur possède :

- un prénom ;
- un nom ;
- une adresse e-mail ;
- un numéro de téléphone ;
- un rôle ;
- un statut.

Les rôles déterminent les fonctionnalités accessibles dans KARMDA.

---

# Les rôles disponibles

## Administrateur école

Dispose d'un accès complet à l'établissement.

Peut gérer :

- les utilisateurs ;
- les élèves ;
- les classes ;
- les matières ;
- les notes ;
- les présences ;
- les frais scolaires ;
- les paramètres.

---

## Personnel administratif

Accède aux fonctionnalités administratives qui lui sont autorisées.

Ses permissions peuvent être limitées selon les règles de l'établissement.

---

## Enseignant

Accède uniquement aux fonctionnalités pédagogiques qui lui sont attribuées.

Exemples :

- présences ;
- évaluations ;
- carnet de notes.

---

## Parent

Accède uniquement aux informations concernant ses propres enfants.

---

# Fonctionnement

## 1. Créer un utilisateur

Lors de la création d'un compte, les informations suivantes sont renseignées :

- prénom ;
- nom ;
- e-mail ;
- téléphone ;
- mot de passe ;
- rôle.

Le nouvel utilisateur est alors associé à l'établissement.

---

## 2. Modifier un rôle

L'administrateur peut modifier le rôle d'un utilisateur.

Les nouvelles permissions prennent effet immédiatement.

---

## 3. Consulter les comptes

La liste des utilisateurs présente notamment :

- l'identité ;
- l'adresse e-mail ;
- le téléphone ;
- le rôle ;
- le statut.

---

# Statuts

Selon son cycle de vie, un compte peut être :

- Invité
- Actif

Un compte invité correspond à un utilisateur créé mais n'ayant pas encore terminé son activation.

---

# Règles métier

## Un utilisateur appartient à un établissement

Les utilisateurs affichés dans ce module appartiennent uniquement à l'école connectée.

---

## Un utilisateur possède un seul rôle actif

Chaque utilisateur possède un rôle principal.

Ce rôle détermine ses permissions.

---

## Les rôles contrôlent les accès

Les menus, pages et actions accessibles sont déterminés par le rôle attribué.

---

## Un administrateur ne peut pas modifier son propre rôle

Afin d'éviter une perte accidentelle d'accès, un administrateur ne peut pas changer son propre rôle.

---

## Le changement de rôle ne modifie pas les données

Modifier le rôle d'un utilisateur change uniquement ses permissions.

Aucune donnée métier n'est supprimée.

---

# Cas d'utilisation

### Nouveau collaborateur

Créer un compte puis attribuer le rôle correspondant à ses responsabilités.

---

### Changement de fonction

Mettre à jour le rôle d'un utilisateur afin de refléter ses nouvelles responsabilités.

---

### Contrôle des accès

Vérifier régulièrement les comptes actifs de l'établissement.

---

# Erreurs fréquentes

- attribuer un rôle inadapté ;
- créer plusieurs comptes pour une même personne ;
- modifier le mauvais utilisateur ;
- oublier de vérifier le statut du compte.

---

# Questions fréquentes

## Peut-on modifier le rôle d'un utilisateur ?

Oui.

Les permissions sont mises à jour automatiquement.

---

## Un utilisateur peut-il posséder plusieurs rôles ?

Non.

Un seul rôle principal est actif à la fois.

---

## Pourquoi certains comptes sont-ils "Invités" ?

Ils ont été créés mais ne sont pas encore pleinement activés.

---

## Pourquoi ne puis-je pas modifier mon propre rôle ?

Cette restriction protège l'accès administrateur de l'établissement.

---

# Bonnes pratiques RELAIS

✔ Attribuer le rôle le plus restrictif compatible avec les responsabilités de l'utilisateur.

✔ Vérifier l'adresse e-mail avant la création du compte.

✔ Éviter les comptes partagés.

✔ Mettre à jour les rôles lors des changements de fonction.

✔ Vérifier régulièrement les comptes encore en statut "Invité".

---

# Modules associés

- Tableau de bord
- Présences
- Élèves
- Classes
- Notes
- Frais scolaires
- Paramètres

---

# Ce qu'il faut retenir

- Chaque utilisateur appartient à un établissement.
- Un utilisateur possède un seul rôle actif.
- Le rôle détermine les permissions.
- Les administrateurs gèrent les accès de leur école.
- Les comptes sont suivis selon leur statut.

---

## Phrase à retenir

> **« Dans KARMDA, un utilisateur n'est pas défini par ce qu'il voit, mais par les responsabilités que son rôle lui confère. »**
