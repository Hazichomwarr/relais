---
title: "Présences"
---

# KARMDA

# 02 - Présences

## Référence fonctionnelle

> Le module Présences permet d'enregistrer, consulter et mettre à jour les présences quotidiennes des élèves d'une classe.

---

# Objectif

Le module Présences permet de constituer un historique fiable de la participation des élèves aux activités scolaires.

Les informations enregistrées peuvent être utilisées pour :

- le suivi pédagogique ;
- la communication avec les parents ;
- les statistiques de fréquentation ;
- les rapports administratifs.

---

# Utilisateurs concernés

- Administrateur
- Personnel administratif
- Enseignant (selon les permissions)

---

# Permissions requises

Selon son rôle, un utilisateur peut :

- consulter une feuille de présence ;
- enregistrer une présence ;
- modifier une présence existante.

Toutes les opérations sont enregistrées dans l'historique.

---

# Vue d'ensemble

Le module est organisé autour d'une feuille de présence.

Avant toute saisie, l'utilisateur sélectionne :

- une classe ;
- une date.

Une fois la liste chargée, tous les élèves actifs de cette classe sont affichés.

Chaque élève reçoit un statut de présence.

---

# Les statuts disponibles

Chaque élève peut recevoir un seul statut.

- Présent
- Absent
- En retard
- Excusé

Un élève ne peut jamais posséder plusieurs statuts pour une même séance.

---

# Fonctionnement

## 1. Sélectionner une classe

Choisir la classe concernée.

---

## 2. Sélectionner une date

Choisir la date de la séance.

---

## 3. Charger la liste

KARMDA affiche tous les élèves actifs inscrits dans cette classe.

---

## 4. Enregistrer les statuts

Attribuer un statut à chaque élève.

Le bouton **Tout le monde est présent** permet d'accélérer la saisie lorsque tous les élèves sont présents.

---

## 5. Enregistrer

La feuille de présence est enregistrée.

Si une présence existe déjà pour cette classe et cette date, KARMDA passe automatiquement en mode modification.

---

# Règles métier

## Une seule feuille par classe et par date

Il ne peut exister qu'une seule feuille de présence pour une même classe à une date donnée.

Cette règle garantit l'unicité des données.

---

## Tous les élèves actifs sont proposés

La liste est automatiquement construite à partir des élèves actuellement inscrits dans la classe.

---

## Une présence peut être modifiée

Lorsqu'une feuille existe déjà, les corrections sont autorisées selon les permissions de l'utilisateur.

Les modifications sont historisées.

---

## Les présences constituent un historique

Une présence enregistrée devient une donnée officielle de l'établissement.

Toute modification doit être justifiée et traçable.

---

# Cas d'utilisation

### Début de cours

L'enseignant sélectionne sa classe, enregistre les présences et valide la feuille.

---

### Correction

Un élève initialement absent présente un justificatif.

L'utilisateur autorisé met à jour son statut.

Cette modification est enregistrée dans l'historique.

---

# Erreurs fréquentes

- sélectionner la mauvaise classe ;
- choisir une mauvaise date ;
- oublier d'enregistrer la feuille ;
- modifier une présence sans vérification ;
- considérer une correction comme une nouvelle saisie.

---

# Questions fréquentes

## Pourquoi la feuille est-elle déjà remplie ?

Parce qu'une présence existe déjà pour cette classe et cette date.

Vous êtes en mode modification.

---

## Pourquoi certains élèves n'apparaissent-ils pas ?

Seuls les élèves actifs inscrits dans cette classe sont affichés.

---

## Puis-je enregistrer deux feuilles de présence pour la même classe ?

Non.

Une seule feuille est autorisée par classe et par date.

---

# Bonnes pratiques RELAIS

✔ Enregistrer les présences dès le début du cours.

✔ Vérifier la classe avant la saisie.

✔ Vérifier la date.

✔ Utiliser **Tout le monde est présent** lorsque cela est pertinent.

✔ Corriger rapidement les erreurs constatées.

✔ Ne modifier une présence qu'après vérification.

---

# Modules associés

- Élèves
- Classes
- Utilisateurs
- Dashboard
- Rapports

---

# Ce qu'il faut retenir

- Une feuille de présence correspond à une classe et une date.
- Chaque élève possède un seul statut de présence.
- Les modifications sont historisées.
- Les présences constituent des données officielles de l'établissement.

---

## Phrase à retenir

> **« Une présence n'est pas une simple case cochée. C'est une information officielle sur la participation d'un élève à la vie de son établissement. »**
