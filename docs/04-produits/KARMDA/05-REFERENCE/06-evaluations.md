---
title: "Notes"
---

# KARMDA

# 06 - Notes

## Référence fonctionnelle

> Le module Notes permet de créer des évaluations, d'enregistrer les résultats des élèves et d'assurer le suivi des performances académiques.

---

# Objectif

Le module Notes organise le processus d'évaluation des élèves.

Chaque évaluation constitue une activité pédagogique officielle permettant d'enregistrer les résultats d'une classe dans une matière donnée.

Les résultats enregistrés alimentent automatiquement les moyennes, les rapports académiques et les bulletins.

---

# Utilisateurs concernés

- Administrateur
- Personnel administratif
- Enseignant (selon les permissions)

---

# Permissions requises

Selon son rôle, un utilisateur peut :

- créer une évaluation ;
- consulter les évaluations ;
- saisir des notes ;
- corriger une note ;
- consulter l'historique des modifications.

Toutes les opérations importantes sont historisées.

---

# Vue d'ensemble

Le module est organisé autour des évaluations.

Chaque évaluation représente une activité pédagogique (devoir, contrôle, interrogation, examen...).

Une fois créée, elle possède sa propre feuille de notes permettant d'enregistrer les résultats individuels des élèves de la classe concernée.

---

# Fonctionnement

## 1. Créer une évaluation

Une évaluation nécessite :

- une classe ;
- une matière ;
- un titre ;
- une date ;
- un barème ;
- un coefficient.

Une fois enregistrée, elle apparaît dans la liste des évaluations.

---

## 2. Consulter les évaluations

Chaque évaluation présente notamment :

- son titre ;
- la classe concernée ;
- la matière ;
- la date ;
- le barème ;
- le coefficient ;
- son créateur.

Le bouton **Voir les notes** permet d'accéder à la feuille de notes.

---

## 3. Feuille de notes

Chaque évaluation possède une feuille de notes dédiée.

Cette feuille affiche :

- la liste des élèves ;
- leur statut ;
- leur note ;
- une observation éventuelle ;
- les indicateurs de progression de la saisie.

Les résultats sont enregistrés directement depuis cette feuille.

---

## 4. Saisir les résultats

Pour chaque élève, un seul statut est sélectionné :

- Noté
- Absent
- Excusé

Lorsque le statut est **Noté**, une note peut être saisie dans la limite du barème défini.

Une observation peut également être ajoutée.

---

## 5. Corriger une note

Après validation de la feuille, toute modification s'effectue individuellement.

Chaque correction est enregistrée dans l'historique de l'élève concerné.

---

# Règles métier

## Une évaluation appartient à une seule classe

Une évaluation est toujours créée pour une seule classe.

---

## Une évaluation concerne une seule matière

Chaque évaluation est rattachée à une seule matière.

---

## Une feuille de notes est propre à chaque évaluation

Chaque évaluation possède sa propre feuille de notes.

Les résultats enregistrés dans une évaluation n'affectent jamais une autre.

---

## Un seul résultat par élève

Pour une même évaluation, un élève possède un seul résultat.

Ce résultat est défini par :

- un statut ;
- une note (si applicable) ;
- une observation éventuelle.

---

## Le barème définit la note maximale

La note saisie ne peut pas dépasser le barème défini lors de la création de l'évaluation.

---

## Le coefficient influence les moyennes

Le coefficient est pris en compte lors du calcul des résultats académiques.

---

## Les corrections sont historisées

Après validation d'une feuille de notes, toute modification est enregistrée dans l'historique.

Cette traçabilité garantit la fiabilité des résultats scolaires.

---

# Cas d'utilisation

### Contrôle continu

Créer une évaluation puis saisir les résultats obtenus par les élèves.

---

### Examen

Créer une évaluation avec son propre coefficient afin qu'elle soit intégrée au calcul des moyennes.

---

### Correction

Après vérification, corriger individuellement une note erronée.

La modification est conservée dans l'historique.

---

# Erreurs fréquentes

- créer une évaluation dans la mauvaise classe ;
- sélectionner une mauvaise matière ;
- définir un barème incorrect ;
- saisir une note supérieure au barème ;
- modifier une note sans passer par la procédure de correction.

---

# Questions fréquentes

## Une évaluation peut-elle concerner plusieurs classes ?

Non.

Une évaluation appartient toujours à une seule classe.

---

## Peut-on modifier une note après validation ?

Oui.

La modification est réalisée individuellement et enregistrée dans l'historique.

---

## Un élève absent reçoit-il une note ?

Non.

Son statut est enregistré comme **Absent**.

---

## À quoi sert le coefficient ?

Le coefficient détermine le poids de l'évaluation dans le calcul des moyennes.

---

# Bonnes pratiques RELAIS

✔ Donner un titre explicite à chaque évaluation.

✔ Vérifier la classe et la matière avant la création.

✔ Définir correctement le barème.

✔ Vérifier le coefficient.

✔ Corriger les copies avant la saisie.

✔ Utiliser les statuts appropriés (Noté, Absent, Excusé).

✔ Corriger une note uniquement via la procédure prévue.

---

# Modules associés

- Matières
- Classes
- Carnet de notes
- Bulletins
- Élèves

---

# Ce qu'il faut retenir

- Une évaluation est créée avant toute saisie de notes.
- Chaque évaluation possède sa propre feuille de notes.
- Chaque élève possède un seul résultat par évaluation.
- Les corrections sont historisées.
- Les résultats alimentent automatiquement les moyennes et les bulletins.

---

## Phrase à retenir

> **« Une évaluation définit le contexte. La feuille de notes en conserve les résultats. Ensemble, elles constituent la mémoire académique de la classe. »**
