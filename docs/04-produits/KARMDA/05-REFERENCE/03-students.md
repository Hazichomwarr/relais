---
title: "Élèves"
---

# KARMDA

# 03 - Élèves

## Référence fonctionnelle

> Le module Élèves centralise les informations administratives, académiques et de suivi de chaque élève inscrit dans l'établissement.

---

# Objectif

Le module Élèves constitue le registre officiel des élèves de l'établissement.

Chaque élève possède une fiche unique qui regroupe son identité scolaire, son affectation, ses informations académiques et les différents espaces de suivi associés.

---

# Utilisateurs concernés

- Administrateur
- Personnel administratif

Certaines informations peuvent être consultées par les enseignants selon leurs permissions.

---

# Permissions requises

Selon son rôle, un utilisateur peut :

- consulter un élève ;
- créer un élève ;
- modifier ses informations ;
- changer sa classe ;
- consulter son dossier scolaire.

Toutes les opérations importantes sont historisées.

---

# Vue d'ensemble

Le module est composé de deux espaces.

## Registre des élèves

Le registre présente l'ensemble des élèves enregistrés.

Pour chaque élève sont affichés :

- Nom
- Classe
- Date de naissance
- Matricule
- Enseignant principal (si renseigné)

Chaque ligne donne accès au profil complet.

---

## Profil élève

La fiche élève rassemble les informations essentielles.

Elle permet notamment de consulter :

- l'identité de l'élève ;
- sa classe actuelle ;
- son matricule ;
- son enseignant référent ;
- ses statistiques de présence ;
- ses résultats scolaires ;
- ses paiements ;
- ses documents ;
- ses responsables légaux (lorsque le module est disponible).

Cette fiche constitue le point central de suivi de l'élève.

---

# Fonctionnement

## Ajouter un élève

Créer une nouvelle fiche élève en renseignant les informations demandées.

Chaque élève reçoit un dossier individuel.

---

## Consulter un profil

Depuis le registre, sélectionner **Voir le profil** pour accéder à la fiche détaillée.

---

## Changer de classe

Un élève peut être affecté à une nouvelle classe.

L'affectation est réalisée depuis son profil.

Cette opération met à jour son organisation pédagogique sans créer une nouvelle fiche élève.

---

## Suivre l'élève

Le profil permet d'accéder rapidement à plusieurs espaces :

- Présences
- Notes
- Paiements
- Parents
- Documents

Chaque espace présente une synthèse ainsi qu'un accès au module correspondant.

---

# Règles métier

## Une seule fiche par élève

Chaque élève possède une fiche unique.

Toutes les informations scolaires sont rattachées à cette fiche.

---

## Le matricule identifie l'élève

Le matricule constitue un identifiant interne de référence.

Il ne doit pas être partagé entre plusieurs élèves.

---

## Le changement de classe conserve l'historique

Changer un élève de classe ne crée pas un nouvel élève.

Son historique scolaire est conservé.

---

## Le profil centralise les informations

Les données affichées dans le profil proviennent des différents modules de KARMDA.

Le profil ne duplique pas ces informations.

Il les regroupe.

---

# Cas d'utilisation

### Nouvelle inscription

Créer une fiche élève puis l'affecter à une classe.

---

### Consultation

Rechercher un élève et ouvrir son profil afin de consulter son parcours scolaire.

---

### Changement de classe

À la rentrée ou lors d'une réaffectation, modifier la classe depuis le profil.

L'historique de l'élève est conservé.

---

# Erreurs fréquentes

- créer une nouvelle fiche au lieu de retrouver un élève existant ;
- attribuer un mauvais matricule ;
- oublier d'affecter une classe ;
- modifier la mauvaise fiche élève ;
- considérer le profil comme une source de modification de toutes les données.

---

# Questions fréquentes

## Pourquoi un élève apparaît-il "Sans classe" ?

L'élève n'a pas encore été affecté à une classe.

---

## Peut-on modifier un matricule ?

Selon les règles de l'établissement et les permissions accordées.

---

## Le changement de classe supprime-t-il l'historique ?

Non.

Toutes les données scolaires restent associées à la même fiche élève.

---

# Bonnes pratiques RELAIS

✔ Rechercher un élève avant d'en créer un nouveau.

✔ Vérifier le matricule.

✔ Affecter rapidement l'élève à une classe.

✔ Utiliser le profil comme point d'entrée pour le suivi.

✔ Consulter les modules spécialisés pour le détail des informations.

---

# Modules associés

- Classes
- Présences
- Notes
- Carnet de notes
- Frais scolaires
- Documents
- Parents
- Utilisateurs

---

# Ce qu'il faut retenir

- Chaque élève possède une fiche unique.
- Le profil regroupe les principales informations de suivi.
- Le changement de classe conserve l'historique.
- Le profil centralise les informations sans les dupliquer.
- Le registre constitue la référence officielle des élèves de l'établissement.

---

## Phrase à retenir

> **« Un élève change de classe au fil des années. Son dossier scolaire, lui, l'accompagne tout au long de son parcours. »**
