---
title: "Paramètres"
---

# KARMDA

# 10 - Paramètres

## Référence fonctionnelle

> Le module Paramètres permet de configurer l'identité et les références de fonctionnement de l'établissement.

---

# Objectif

Le module Paramètres centralise les informations générales utilisées par KARMDA.

Il permet notamment de définir :

- l'identité officielle de l'établissement ;
- les paramètres académiques ;
- les horaires de référence ;
- l'identité visuelle.

Ces informations servent de référence pour les futurs traitements du système.

---

# Utilisateurs concernés

- Administrateur école

---

# Permissions requises

Selon son rôle, un utilisateur peut :

- consulter les paramètres ;
- modifier les paramètres de son établissement.

---

# Organisation du module

Le module est composé de quatre sections :

1. Profil de l'établissement
2. Paramètres académiques
3. Horaires
4. Identité visuelle

---

# Profil de l'établissement

## Objectif

Cette section contient l'identité administrative de l'école.

Elle comprend :

- nom de l'établissement ;
- devise ;
- adresse e-mail ;
- téléphone ;
- adresse ;
- ville ;
- pays ;
- fuseau horaire.

Ces informations sont utilisées dans différents documents et communications générés par KARMDA.

---

## Modifier le profil

L'administrateur peut mettre à jour les informations officielles de l'établissement.

Les modifications prennent effet immédiatement pour les prochaines opérations.

---

# Paramètres académiques

## Objectif

Cette section définit les références pédagogiques utilisées dans l'établissement.

Elle comprend :

- année scolaire actuelle ;
- devise monétaire ;
- barème par défaut ;
- note de passage ;
- langue.

---

## Année scolaire

Détermine l'année académique active utilisée lors de la création des nouvelles opérations.

Exemple :

2026–2027

---

## Devise monétaire

Détermine la devise utilisée dans tous les modules financiers.

Exemple :

XOF — Franc CFA

---

## Barème par défaut

Valeur proposée automatiquement lors de la création d'une nouvelle évaluation.

Exemple :

20

L'utilisateur peut ensuite modifier cette valeur pour une évaluation spécifique.

---

## Note de passage

Détermine la note minimale considérée comme suffisante.

Exemple :

10/20

---

## Langue

Détermine la langue principale de fonctionnement de l'établissement.

---

## Règle importante

Les modifications des paramètres académiques servent uniquement de référence pour les opérations futures.

Les évaluations, notes et données financières déjà enregistrées ne sont jamais modifiées automatiquement.

---

# Horaires

## Objectif

Définir les horaires habituels de fonctionnement de l'établissement.

Deux valeurs sont enregistrées :

- heure de début ;
- heure de fin.

---

## Utilisation

Ces horaires serviront progressivement de référence dans les futurs modules KARMDA.

Ils ne modifient jamais les présences déjà enregistrées.

---

# Identité visuelle

## Objectif

Présenter l'identité graphique de l'établissement.

Elle comprend notamment :

- le logo ;
- le nom ;
- la devise ;
- la localisation.

---

## Gestion du logo

Lors de la phase actuelle de KARMDA, le logo est géré par l'équipe RELAIS.

Pour le remplacer, l'établissement transmet simplement le nouveau fichier à son contact RELAIS.

---

# Fonctionnement

## Consulter les paramètres

Les informations sont organisées par section afin de faciliter leur consultation.

---

## Modifier une section

Chaque bloc possède son propre bouton **Modifier**.

Les changements sont enregistrés indépendamment des autres sections.

---

# Règles métier

## Les paramètres sont propres à chaque établissement

Chaque école possède sa propre configuration.

Les modifications n'affectent jamais les autres établissements.

---

## Les paramètres servent de références

Ils définissent les valeurs proposées par défaut lors des prochaines opérations.

---

## Les données historiques sont conservées

Modifier un paramètre ne modifie jamais automatiquement les données déjà enregistrées.

Cela garantit l'intégrité historique des informations.

---

## Une seule année scolaire active

L'établissement travaille toujours avec une année scolaire de référence.

---

# Cas d'utilisation

### Début d'une nouvelle année scolaire

Mettre à jour l'année académique.

---

### Changement de devise

Modifier la devise monétaire avant les prochaines opérations financières.

---

### Nouvelle identité

Mettre à jour le nom, la devise ou les coordonnées de l'établissement.

---

### Évolution des horaires

Adapter les horaires habituels sans modifier les présences historiques.

---

# Erreurs fréquentes

- modifier la mauvaise année scolaire ;
- croire que les anciennes évaluations seront recalculées ;
- oublier de mettre à jour les coordonnées officielles ;
- modifier les horaires en pensant corriger les présences passées.

---

# Questions fréquentes

## Modifier le barème change-t-il les anciennes évaluations ?

Non.

Seules les nouvelles évaluations utilisent cette valeur par défaut.

---

## Modifier les horaires change-t-il les présences ?

Non.

Les présences déjà enregistrées restent inchangées.

---

## Puis-je modifier uniquement une section ?

Oui.

Chaque section est indépendante.

---

## Puis-je remplacer le logo ?

Oui.

Dans la version actuelle, le remplacement est effectué par l'équipe RELAIS.

---

# Bonnes pratiques RELAIS

✔ Vérifier les paramètres au début de chaque année scolaire.

✔ Maintenir les coordonnées officielles à jour.

✔ Définir le bon barème avant la création des évaluations.

✔ Contrôler les horaires avant la rentrée scolaire.

✔ Vérifier la devise avant toute opération financière.

---

# Modules associés

- Élèves
- Présences
- Notes
- Carnet de notes
- Frais scolaires
- Utilisateurs

---

# Ce qu'il faut retenir

- Les paramètres définissent les références de l'établissement.
- Chaque école possède sa propre configuration.
- Les modifications servent aux opérations futures.
- Les données historiques restent toujours intactes.
- Chaque section peut être modifiée indépendamment.

---

## Phrase à retenir

> **« Les paramètres définissent le fonctionnement futur de l'établissement, sans jamais réécrire son histoire. »**
