---
title: "Classes"
---

# KARMDA

# 04 - Classes

## Référence fonctionnelle

> Le module Classes permet d'organiser les élèves en sections pédagogiques et de centraliser les informations liées à chaque classe.

---

# Objectif

Le module Classes constitue le registre officiel des classes de l'établissement.

Chaque classe possède une fiche unique regroupant ses élèves, ses matières, ses présences, ses résultats, son emploi du temps et les autres informations pédagogiques qui lui sont associées.

---

# Utilisateurs concernés

- Administrateur
- Personnel administratif

Certaines informations peuvent être consultées par les enseignants selon leurs permissions.

---

# Permissions requises

Selon son rôle, un utilisateur peut :

- consulter une classe ;
- créer une classe ;
- modifier ses informations ;
- affecter un enseignant principal ;
- consulter les élèves associés ;
- organiser l'emploi du temps de la classe.

Toutes les opérations importantes sont historisées.

---

# Vue d'ensemble

Le module est composé de deux espaces.

## Registre des classes

Le registre présente l'ensemble des classes de l'établissement.

Pour chaque classe sont affichés :

- Nom
- Niveau
- Enseignant principal
- Effectif

Chaque ligne permet d'accéder à la fiche complète de la classe.

---

## Profil de classe

Chaque classe possède une fiche synthétique regroupant :

- les informations générales ;
- les élèves inscrits ;
- les présences ;
- les matières ;
- les résultats académiques ;
- l'emploi du temps ;
- les documents.

Cette fiche constitue le point central de suivi de la classe.

---

# Fonctionnement

## Créer une classe

La création d'une classe nécessite :

- un nom ;
- un niveau.

L'enseignant principal peut être attribué immédiatement ou ultérieurement.

---

## Consulter une classe

Depuis le registre, sélectionner **Voir la classe**.

---

## Affecter un enseignant principal

Une classe peut être associée à un enseignant principal.

Cette affectation facilite le suivi administratif et pédagogique.

---

## Consulter les élèves

La fiche présente un aperçu des élèves actuellement inscrits.

Le détail complet reste disponible dans le module Élèves.

---

## Consulter les modules associés

Depuis la fiche de classe, il est possible d'accéder rapidement aux espaces :

- Présences
- Matières
- Notes
- Emploi du temps
- Documents

Chaque espace présente une synthèse ainsi qu'un accès au module concerné.

---

# Emploi du temps

## Objectif

L'emploi du temps permet d'organiser les leçons hebdomadaires de la classe.

Il repose sur deux éléments :

- les périodes horaires ;
- les leçons affectées aux créneaux.

---

## Vue d'ensemble

L'emploi du temps est présenté sous forme de grille.

- Les lignes correspondent aux périodes.
- Les colonnes correspondent aux jours de la semaine.
- Chaque cellule représente un créneau disponible pour une leçon.

L'emploi du temps principal est utilisé comme référence hebdomadaire pour la classe.

---

## Ajouter une période

Une période définit un intervalle horaire réutilisé dans la grille.

Sa création nécessite :

- un libellé ;
- un ordre ;
- une heure de début ;
- une heure de fin.

Exemple :

| Libellé   | Ordre | Horaire     |
| --------- | ----: | ----------- |
| Période 1 |     1 | 08:00–10:00 |
| Période 2 |     2 | 10:00–11:00 |

L'ordre détermine la position de la période dans l'emploi du temps.

---

## Modifier une période

Une période peut être renommée ou ses horaires peuvent être ajustés.

Toute modification doit être vérifiée afin de préserver la cohérence des leçons déjà positionnées.

---

## Supprimer une période

Une période ne doit être supprimée qu'après vérification des leçons qui lui sont associées.

La suppression d'une période peut rendre certains créneaux indisponibles.

---

## Ajouter une leçon

Depuis une cellule vide de la grille, sélectionner **Ajouter**.

Une leçon nécessite :

- un jour ;
- une période ;
- une matière ;
- une salle facultative.

L'enseignant associé à la matière est affiché lorsqu'une affectation existe.

---

## Modifier une leçon

Une leçon peut être mise à jour afin de modifier :

- son jour ;
- sa période ;
- sa matière ;
- sa salle.

---

## Supprimer une leçon

La suppression retire la leçon du créneau concerné.

Elle ne supprime ni la matière ni son affectation pédagogique.

---

# Règles métier

## Une classe possède une identité unique

Chaque classe est identifiée par son nom et son niveau au sein de l'établissement.

---

## Les élèves appartiennent à une seule classe active

À un instant donné, un élève ne peut être rattaché qu'à une seule classe active.

---

## Une classe peut exister sans enseignant principal

La création d'une classe ne dépend pas de l'affectation immédiate d'un enseignant.

Celui-ci peut être désigné ultérieurement.

---

## L'emploi du temps appartient à une classe

Chaque emploi du temps organise les leçons d'une classe donnée.

---

## Une période définit un créneau horaire

Les périodes structurent la grille et sont réutilisées pour chaque jour de la semaine.

---

## Une cellule accueille une leçon

Une leçon occupe un jour et une période déterminés.

---

## Une leçon utilise une matière de la classe

La matière sélectionnée doit être disponible dans l'organisation pédagogique de la classe.

---

## L'enseignant dépend de l'affectation pédagogique

Lorsqu'aucun enseignant n'est associé à la matière, la leçon peut apparaître avec la mention **Enseignant à définir** ou **Non assigné**.

---

## Le fuseau horaire de l'établissement s'applique

Les horaires sont interprétés selon le fuseau horaire défini dans les paramètres de l'établissement.

---

## La fiche centralise les informations

Les données affichées dans la fiche proviennent des différents modules de KARMDA.

Elles ne sont pas dupliquées.

---

# Cas d'utilisation

### Début d'année scolaire

Créer les nouvelles classes, y affecter les élèves et les enseignants, puis configurer les périodes et les leçons hebdomadaires.

---

### Suivi pédagogique

Consulter le profil d'une classe afin d'obtenir une vue d'ensemble de son fonctionnement.

---

### Organisation

Attribuer un enseignant principal lorsque l'équipe pédagogique est constituée.

---

### Construction de l'emploi du temps

Créer les périodes dans leur ordre chronologique, puis ajouter les leçons dans les cellules correspondantes.

---

### Réorganisation

Modifier un créneau lorsqu'une matière, une salle ou un horaire change.

---

# Erreurs fréquentes

- créer deux classes portant la même identité ;
- oublier d'affecter les élèves ;
- créer des périodes dans un ordre incohérent ;
- définir une heure de fin antérieure à l'heure de début ;
- ajouter une matière sans enseignant affecté sans prévoir sa régularisation ;
- supprimer une période encore utilisée ;
- considérer le profil comme une source de modification de tous les autres modules ;
- supprimer une classe au lieu de la désactiver.

---

# Questions fréquentes

## Une classe peut-elle exister sans enseignant principal ?

Oui.

Cette affectation peut être réalisée ultérieurement.

---

## Peut-on consulter les élèves d'une classe ?

Oui.

Le profil affiche un aperçu et permet d'accéder aux informations détaillées.

---

## Peut-on créer l'emploi du temps avant d'affecter les enseignants ?

Oui.

La matière peut être positionnée, mais l'enseignant apparaîtra comme non assigné jusqu'à la réalisation de l'affectation pédagogique.

---

## À quoi sert l'ordre d'une période ?

Il détermine sa position dans la grille, indépendamment de son libellé.

---

## Une salle est-elle obligatoire ?

Non.

Elle peut être renseignée lorsque l'établissement souhaite préciser le lieu du cours.

---

## Les statistiques sont-elles mises à jour automatiquement ?

Oui.

Les indicateurs reflètent les données enregistrées dans les modules associés.

---

# Bonnes pratiques RELAIS

✔ Créer les classes avant les inscriptions.

✔ Affecter les enseignants principaux dès que possible.

✔ Configurer les matières de la classe avant de construire l'emploi du temps.

✔ Créer les périodes dans leur ordre chronologique.

✔ Vérifier les horaires avant d'ajouter les leçons.

✔ Affecter les enseignants aux matières afin d'éviter les leçons non assignées.

✔ Utiliser le profil comme point d'entrée pour le suivi pédagogique.

✔ Consulter les modules spécialisés pour obtenir le détail des informations.

✔ Désactiver une classe devenue inactive plutôt que de supprimer son historique.

---

# Modules associés

- Élèves
- Présences
- Matières
- Notes
- Emploi du temps
- Utilisateurs
- Paramètres
- Documents

---

# Ce qu'il faut retenir

- Chaque classe possède une fiche unique.
- Le profil de classe centralise les informations pédagogiques.
- Une classe peut être créée avant l'affectation d'un enseignant principal.
- L'emploi du temps est construit à partir de périodes et de leçons.
- Chaque leçon occupe un jour et une période.
- Les matières et leurs enseignants alimentent l'emploi du temps.
- Les horaires utilisent le fuseau horaire de l'établissement.
- Les indicateurs sont alimentés par les différents modules de KARMDA.
- Le registre constitue la référence officielle des classes de l'établissement.

---

## Phrase à retenir

> **« Une classe n'est pas seulement un groupe d'élèves. C'est l'espace où s'organisent leur parcours pédagogique, leurs enseignements et leur temps scolaire. »**
