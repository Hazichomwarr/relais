---
title: "Import des données"
---

# KARMDA

# 04 - Import des données

## Déploiement RELAIS

> Ce document fait partie du programme officiel de déploiement KARMDA.

**Objectif**

À la fin de cette lecture, vous serez capable de collecter, préparer, importer, contrôler et faire valider les données d’un établissement avant sa mise en production sur KARMDA.

**Temps estimé**

30 minutes

**Prérequis**

- README.md
- 01 - Préparation du déploiement
- 02 - Installation
- 03 - Onboarding de l’établissement

---

# Pourquoi ce chapitre est important

Les données constituent la base de KARMDA.

La plateforme peut être correctement installée et les utilisateurs parfaitement formés, mais si les informations importées sont incomplètes, incorrectes ou dupliquées, l’établissement rencontrera immédiatement des difficultés.

Une mauvaise importation peut provoquer :

- des élèves absents de leur classe ;
- des doublons ;
- des enseignants associés aux mauvaises matières ;
- des coordonnées incorrectes ;
- des parents liés au mauvais enfant ;
- des erreurs dans les listes de présence ;
- des résultats scolaires incohérents ;
- des rapports inexacts ;
- une perte de confiance dans la plateforme.

Chez RELAIS, nous ne considérons pas une donnée comme correcte simplement parce qu’elle a été importée.

Elle doit être préparée, contrôlée et validée.

---

# Notre philosophie

L’import des données ne consiste pas à déplacer un fichier Excel vers KARMDA.

Il consiste à transformer les informations existantes de l’établissement en données :

- structurées ;
- cohérentes ;
- complètes ;
- compréhensibles ;
- sécurisées ;
- utilisables.

La qualité de KARMDA dépend directement de la qualité des informations qui y sont enregistrées.

> **Une plateforme fiable commence par des données fiables.**

---

# Les responsabilités

L’import est une responsabilité partagée entre RELAIS et l’établissement.

## L’établissement

L’établissement est responsable de :

- fournir les données officielles ;
- confirmer que les listes sont complètes ;
- corriger les informations manquantes ;
- identifier les doublons ou erreurs connues ;
- valider les données après import ;
- désigner les personnes habilitées à confirmer les informations.

## RELAIS

RELAIS est responsable de :

- fournir les modèles de fichiers ;
- expliquer les formats attendus ;
- contrôler la structure des données ;
- identifier les anomalies ;
- accompagner les corrections ;
- réaliser ou superviser l’import ;
- vérifier le résultat technique ;
- documenter les opérations réalisées.

RELAIS peut contrôler la cohérence des données.

Cependant, seul l’établissement peut confirmer leur exactitude administrative.

---

# Définir le périmètre de l’import

Avant de demander des fichiers, il faut déterminer précisément quelles données seront importées.

Le périmètre dépend :

- de l’offre souscrite ;
- des modules activés ;
- des objectifs du déploiement ;
- de la qualité des archives disponibles ;
- du calendrier ;
- des engagements contractuels.

## Données fréquemment importées

- élèves ;
- responsables légaux ;
- enseignants ;
- personnel administratif ;
- classes ;
- sections ;
- niveaux ;
- matières ;
- affectations pédagogiques ;
- inscriptions ;
- informations financières ;
- soldes ou paiements existants ;
- résultats académiques historiques, lorsqu’ils sont inclus.

## Données parfois exclues

- anciennes années scolaires ;
- dossiers papier non numérisés ;
- documents incomplets ;
- historiques non vérifiables ;
- données sans rapport avec le périmètre initial ;
- fichiers nécessitant un travail manuel non prévu au contrat.

Le périmètre doit être confirmé avant le début de la préparation.

---

# Identifier les sources de données

Les informations d’un établissement peuvent provenir de plusieurs sources :

- fichiers Excel ;
- documents Word ;
- logiciel précédent ;
- registres papier ;
- formulaires d’inscription ;
- documents administratifs ;
- listes imprimées ;
- fichiers comptables ;
- groupes de messagerie ;
- bases de données existantes.

Toutes les sources n’ont pas la même fiabilité.

Il faut identifier pour chaque donnée :

- sa source officielle ;
- la personne qui la maintient ;
- sa date de dernière mise à jour ;
- son niveau de complétude ;
- son format ;
- les éventuelles contradictions avec d’autres sources.

## Exemple

L’administration possède une liste Excel des élèves.

Le responsable pédagogique possède une autre liste pour les classes.

Les deux fichiers peuvent contenir des informations différentes.

Avant l’import, l’établissement doit déterminer laquelle constitue la référence officielle.

---

# Utiliser les modèles RELAIS

RELAIS doit fournir des modèles standardisés pour la collecte des données.

Ces modèles permettent :

- de guider l’établissement ;
- d’éviter les colonnes ambiguës ;
- de réduire les erreurs ;
- d’accélérer le contrôle ;
- d’automatiser une partie de l’import ;
- d’utiliser les mêmes règles pour tous les déploiements.

## Exemple de fichiers

```text
01-etablissement.xlsx
02-classes.xlsx
03-eleves.xlsx
04-parents.xlsx
05-enseignants.xlsx
06-matieres.xlsx
07-affectations.xlsx
08-finance.xlsx
```

Chaque modèle doit expliquer :

- les colonnes obligatoires ;
- les colonnes facultatives ;
- les formats autorisés ;
- les valeurs attendues ;
- les exemples de saisie ;
- les données qui ne doivent pas être modifiées.

L’établissement ne doit pas changer la structure des modèles sans validation de RELAIS.

---

# Définir les champs obligatoires

Toutes les informations ne possèdent pas le même niveau d’importance.

Pour chaque fichier, les champs doivent être classés.

## Champs obligatoires

Une ligne ne peut pas être importée correctement sans ces informations.

Pour un élève, il peut s’agir de :

- prénom ;
- nom ;
- classe ;
- année scolaire ;
- statut d’inscription ;
- identifiant interne, lorsqu’il existe.

## Champs recommandés

Ils améliorent le suivi, mais ne bloquent pas nécessairement l’import.

Par exemple :

- date de naissance ;
- sexe ;
- téléphone du responsable ;
- adresse ;
- personne à contacter en urgence.

## Champs facultatifs

Ils peuvent être ajoutés ultérieurement.

Par exemple :

- photo ;
- informations complémentaires ;
- deuxième contact ;
- remarques internes.

Les champs obligatoires doivent être définis selon les règles réelles de KARMDA et du projet.

---

# Respecter les formats

Des formats cohérents facilitent l’import et réduisent les ambiguïtés.

## Noms

Séparer les informations lorsque le modèle le prévoit :

- prénom ;
- nom ;
- autres prénoms.

Éviter d’ajouter des titres comme :

- Monsieur ;
- Madame ;
- Professeur ;
- Docteur.

dans les colonnes réservées aux noms.

---

## Dates

Utiliser un seul format pour l’ensemble du fichier.

Par exemple :

```text
2026-09-15
```

Éviter de mélanger :

```text
15/09/2026
09/15/2026
15 septembre 2026
```

Un format ambigu peut inverser le jour et le mois.

---

## Téléphones

Utiliser un format cohérent.

Par exemple :

```text
+22670000000
```

Éviter :

```text
70 00 00 00
00226-70-00-00-00
70.00.00.00
```

lorsque le modèle exige un format international normalisé.

---

## Adresses e-mail

Les adresses doivent :

- contenir un seul destinataire ;
- ne pas contenir d’espaces ;
- être écrites dans un format valide ;
- appartenir à la bonne personne.

---

## Valeurs prédéfinies

Lorsque KARMDA attend une liste de valeurs précises, l’établissement doit utiliser uniquement ces valeurs.

Par exemple :

```text
ACTIF
INACTIF
DIPLÔMÉ
TRANSFÉRÉ
```

et non plusieurs variantes comme :

```text
Actif
active
Oui
Présent
En cours
```

---

# Protéger les identifiants

Lorsque l’établissement possède déjà des identifiants internes, ils doivent être conservés autant que possible.

Par exemple :

- matricule de l’élève ;
- numéro d’inscription ;
- identifiant de l’enseignant ;
- référence de paiement ;
- numéro de dossier.

Un bon identifiant doit être :

- unique ;
- stable ;
- compréhensible par l’établissement ;
- utilisé pour reconnaître une personne ou un dossier sans ambiguïté.

Le nom seul ne constitue pas toujours un identifiant fiable.

Plusieurs élèves peuvent porter le même nom.

---

# Identifier les doublons

Un doublon est une donnée enregistrée plusieurs fois pour une même personne ou un même élément.

## Causes fréquentes

- différences d’orthographe ;
- prénom abrégé dans un fichier ;
- absence d’identifiant unique ;
- plusieurs listes fusionnées ;
- élève inscrit dans deux classes ;
- ancien dossier non supprimé ;
- double saisie manuelle.

## Exemple

```text
Mariam Ouédraogo
Mariam Ouedraogo
M. Ouédraogo
Mariam A. Ouédraogo
```

Ces lignes peuvent représenter la même personne.

Elles ne doivent pas être fusionnées automatiquement sans vérification.

## Méthode RELAIS

Pour chaque doublon potentiel :

1. identifier les lignes concernées ;
2. comparer les identifiants ;
3. comparer les dates de naissance ;
4. comparer les contacts ;
5. demander confirmation à l’établissement ;
6. documenter la décision ;
7. conserver une seule version validée.

---

# Traiter les données manquantes

Une cellule vide ne signifie pas toujours la même chose.

Elle peut indiquer :

- une information inconnue ;
- une information non applicable ;
- une information oubliée ;
- une donnée volontairement non collectée ;
- une erreur dans le fichier.

Les données manquantes doivent être classées.

## Donnée obligatoire manquante

La ligne doit être corrigée avant import ou isolée.

## Donnée recommandée manquante

L’import peut parfois continuer, avec une liste des informations à compléter.

## Donnée facultative manquante

Elle ne doit pas bloquer le projet.

RELAIS ne doit jamais inventer une valeur pour remplir une cellule vide.

---

# Vérifier les relations entre les données

Dans KARMDA, les données ne sont pas indépendantes.

Elles sont liées.

Par exemple :

```text
Établissement
    ↓
Année scolaire
    ↓
Classe
    ↓
Inscription
    ↓
Élève
    ↓
Parent ou responsable
```

Avant l’import, il faut vérifier que :

- chaque classe appartient à une année scolaire valide ;
- chaque élève est rattaché à une classe existante ;
- chaque enseignant référencé existe ;
- chaque matière existe avant son affectation ;
- chaque responsable légal est lié au bon élève ;
- chaque paiement correspond à un élève ou à une facture identifiable.

Une ligne peut être correcte individuellement mais impossible à importer si sa relation n’existe pas.

---

# Respecter l’ordre d’import

Les données doivent généralement être importées dans un ordre logique.

## Ordre recommandé

```text
1. Établissement et paramètres
2. Année scolaire
3. Niveaux, classes et sections
4. Matières
5. Utilisateurs et personnel
6. Élèves
7. Parents ou responsables
8. Inscriptions
9. Affectations des enseignants
10. Données académiques
11. Données financières
```

Cet ordre peut varier selon le fonctionnement de KARMDA.

Le principe reste le même :

> Une donnée dépendante ne doit pas être importée avant la donnée dont elle dépend.

---

# Sécuriser les fichiers

Les fichiers d’import peuvent contenir des informations personnelles sensibles.

Ils doivent être protégés.

## Règles minimales

- utiliser uniquement les canaux approuvés ;
- limiter l’accès aux personnes autorisées ;
- éviter les appareils personnels non sécurisés ;
- ne pas partager les fichiers dans des groupes publics ;
- ne pas conserver plusieurs copies inutiles ;
- protéger les fichiers contenant des données sensibles ;
- supprimer ou archiver les copies temporaires après validation ;
- respecter la politique de conservation de RELAIS.

Les fichiers ne doivent jamais être utilisés à d’autres fins que le déploiement prévu.

---

# Nommer et versionner les fichiers

Chaque fichier doit être identifiable.

## Exemple

```text
eleves-karmda-v1-2026-07-22.xlsx
eleves-karmda-v2-corrige-2026-07-24.xlsx
eleves-karmda-v3-valide-2026-07-26.xlsx
```

Éviter les noms comme :

```text
final.xlsx
final-correction.xlsx
final-vrai.xlsx
nouveau-final-2.xlsx
```

Un bon nom doit indiquer :

- le contenu ;
- la version ;
- la date ;
- éventuellement le statut.

## Statuts recommandés

- REÇU ;
- EN CONTRÔLE ;
- À CORRIGER ;
- CORRIGÉ ;
- VALIDÉ ;
- IMPORTÉ ;
- ARCHIVÉ.

---

# Contrôle avant import

Avant toute importation, RELAIS doit réaliser un contrôle.

## Contrôle structurel

Vérifier :

- le nom des colonnes ;
- la présence des colonnes obligatoires ;
- le format du fichier ;
- l’absence de colonnes déplacées ;
- l’absence de cellules fusionnées ;
- l’absence de lignes ou titres inutiles ;
- l’utilisation correcte du modèle.

## Contrôle de contenu

Vérifier :

- les champs obligatoires ;
- les doublons potentiels ;
- les dates invalides ;
- les téléphones incorrects ;
- les adresses e-mail invalides ;
- les classes inexistantes ;
- les valeurs non autorisées ;
- les relations incohérentes ;
- les lignes entièrement vides.

## Contrôle quantitatif

Comparer :

- le nombre d’élèves attendu ;
- le nombre de lignes reçues ;
- le nombre de lignes valides ;
- le nombre de lignes rejetées ;
- le nombre de doublons ;
- le nombre de données manquantes.

---

# Produire un rapport d’anomalies

Lorsque des erreurs sont détectées, RELAIS doit transmettre un rapport clair à l’établissement.

## Exemple

| Ligne | Élément    | Problème                     | Action attendue                   |
| ----- | ---------- | ---------------------------- | --------------------------------- |
| 18    | Élève      | Classe inconnue : 6e C       | Confirmer la classe correcte      |
| 42    | Élève      | Matricule déjà utilisé       | Vérifier s’il s’agit d’un doublon |
| 57    | Parent     | Téléphone manquant           | Compléter ou confirmer l’absence  |
| 81    | Enseignant | Adresse e-mail invalide      | Corriger l’adresse                |
| 103   | Élève      | Date de naissance impossible | Fournir la date correcte          |

Le rapport doit être compréhensible par une personne non technique.

Éviter les messages comme :

```text
Foreign key constraint failed.
```

Préférer :

```text
La classe indiquée pour cet élève n’existe pas dans la liste validée.
```

---

# Ne pas corriger sans validation

RELAIS peut corriger certaines erreurs de forme évidentes.

Par exemple :

- supprimer un espace inutile ;
- uniformiser la casse ;
- convertir un format de date ;
- normaliser un numéro de téléphone.

En revanche, RELAIS ne doit pas prendre seul une décision administrative.

## Exemples nécessitant une validation

- choisir entre deux classes ;
- fusionner deux élèves ;
- modifier un nom ;
- attribuer un parent ;
- changer un montant ;
- supprimer un dossier ;
- définir le statut d’une inscription.

Toute correction susceptible de modifier le sens de la donnée doit être confirmée par l’établissement.

---

# Réaliser un import test

Lorsque le volume ou la complexité le justifie, il est préférable de réaliser un import test.

L’import test peut porter sur :

- une seule classe ;
- quelques enseignants ;
- un petit nombre d’élèves ;
- une copie de l’environnement ;
- un fichier partiel représentatif.

Il permet de vérifier :

- le format ;
- les correspondances ;
- les relations ;
- l’affichage ;
- les règles de validation ;
- la compréhension de l’établissement.

Un petit test validé vaut mieux qu’un import massif difficile à corriger.

---

# Sauvegarder avant l’import

Avant un import important, vérifier que les mécanismes de sauvegarde et de récupération sont disponibles.

Selon le processus technique de KARMDA, cela peut inclure :

- une sauvegarde de la base ;
- un point de restauration ;
- un environnement de test ;
- un journal des opérations ;
- une copie du fichier validé ;
- un mécanisme d’annulation ou de correction.

L’équipe doit savoir ce qu’elle fera si l’import produit un résultat inattendu.

---

# Exécuter l’import

L’import doit être réalisé à partir de la version validée du fichier.

Avant de commencer, vérifier :

- que le bon établissement est sélectionné ;
- que la bonne année scolaire est active ;
- que le fichier porte le statut VALIDÉ ;
- que les données de référence existent ;
- qu’aucune autre modification importante n’est en cours ;
- que l’équipe connaît la procédure de récupération ;
- que le responsable du projet est informé.

Pendant l’import, documenter :

- la date ;
- l’heure ;
- la personne responsable ;
- le fichier utilisé ;
- le nombre de lignes ;
- le résultat ;
- les erreurs rencontrées ;
- les corrections réalisées.

---

# Gérer les rejets

Toutes les lignes ne seront pas toujours importées.

Les lignes rejetées doivent être isolées et expliquées.

## Rapport d’import

| Catégorie                       | Nombre |
| ------------------------------- | -----: |
| Lignes reçues                   |    850 |
| Lignes importées                |    822 |
| Lignes rejetées                 |     18 |
| Doublons potentiels             |      6 |
| Lignes en attente de validation |      4 |

Une ligne rejetée ne doit pas disparaître silencieusement.

Chaque rejet doit être :

- identifié ;
- expliqué ;
- corrigé ou accepté ;
- suivi jusqu’à résolution.

---

# Contrôle après import

La réussite technique de l’import ne garantit pas l’exactitude fonctionnelle des données.

Après l’import, RELAIS doit réaliser plusieurs vérifications.

## Vérification quantitative

Comparer les résultats avec les fichiers validés :

- nombre total d’élèves ;
- nombre d’enseignants ;
- nombre de classes ;
- nombre d’inscriptions ;
- nombre de responsables ;
- nombre d’affectations ;
- nombre de paiements, lorsque concernés.

## Vérification par échantillonnage

Sélectionner plusieurs dossiers et vérifier :

- l’identité ;
- la classe ;
- les contacts ;
- les responsables ;
- les affectations ;
- les informations financières ;
- les statuts.

L’échantillon doit contenir différents cas :

- élève standard ;
- élève ayant plusieurs responsables ;
- élève transféré ;
- enseignant affecté à plusieurs classes ;
- cas avec information manquante ;
- cas ayant été corrigé.

## Vérification fonctionnelle

Tester que les données peuvent être utilisées dans les processus prévus :

- ouvrir une liste de classe ;
- enregistrer une présence ;
- consulter un profil ;
- attribuer une note ;
- produire un rapport ;
- afficher les informations parentales ;
- consulter une situation financière.

---

# Faire valider par l’établissement

L’établissement doit contrôler les données après import.

La validation doit être confiée aux personnes compétentes.

## Exemple

- l’administration valide les élèves et les inscriptions ;
- le responsable pédagogique valide les classes et les matières ;
- les enseignants vérifient leurs affectations ;
- le service financier valide les frais et soldes ;
- la direction valide les résultats globaux.

La validation doit être documentée.

Elle peut prendre la forme :

- d’un formulaire signé ;
- d’un e-mail ;
- d’un compte rendu ;
- d’une checklist ;
- d’une validation dans l’outil de suivi du projet.

## Formulation recommandée

> L’établissement confirme avoir contrôlé les données importées dans KARMDA et valide leur utilisation pour la phase de mise en production, sous réserve des corrections identifiées dans la liste jointe.

---

# Gérer les corrections après import

Des corrections peuvent rester nécessaires après la première validation.

Elles doivent être suivies dans un registre.

| Référence | Donnée concernée | Correction                  | Responsable             | Statut     |
| --------- | ---------------- | --------------------------- | ----------------------- | ---------- |
| COR-001   | Élève            | Correction du nom           | Administration          | Terminé    |
| COR-002   | Classe           | Déplacement de trois élèves | Responsable pédagogique | En attente |
| COR-003   | Parent           | Ajout du téléphone          | Administration          | Terminé    |

Chaque correction doit permettre de savoir :

- ce qui était incorrect ;
- ce qui a été modifié ;
- pourquoi ;
- par qui ;
- à quelle date ;
- si l’établissement a validé.

---

# Cas des données historiques

L’import de données historiques doit être décidé avec prudence.

Il peut concerner :

- anciennes notes ;
- anciens bulletins ;
- années scolaires précédentes ;
- anciens paiements ;
- anciens élèves ;
- archives administratives.

Avant d’accepter cet import, il faut évaluer :

- l’utilité réelle ;
- la qualité des données ;
- le volume ;
- le coût ;
- le temps nécessaire ;
- les responsabilités ;
- le risque de confusion avec l’année active.

Toutes les archives ne doivent pas nécessairement être transférées.

Une archive peu fiable peut réduire la confiance dans les données actuelles.

---

# Données à ne jamais inventer

Lorsque l’établissement ne possède pas une information, RELAIS ne doit pas créer une valeur fictive pour faciliter l’import.

Il est interdit d’inventer :

- une date de naissance ;
- un numéro de téléphone ;
- une adresse e-mail ;
- un nom de parent ;
- une classe ;
- un matricule ;
- un montant ;
- une note ;
- une présence ;
- un statut administratif.

Une donnée inconnue doit rester inconnue ou être traitée selon les règles prévues.

---

# Erreurs fréquentes

## Importer le premier fichier reçu

Le premier fichier n’est pas toujours la version officielle ou validée.

---

## Modifier directement le fichier original

Toujours conserver une copie de la version reçue.

---

## Corriger les données à la place du client

RELAIS accompagne et contrôle.

L’établissement confirme les décisions administratives.

---

## Importer sans tester

Un import test permet de détecter les erreurs avant qu’elles ne touchent tout l’établissement.

---

## Ignorer les doublons

Les doublons produisent des dossiers incohérents et des statistiques incorrectes.

---

## Se fier uniquement au message « Import réussi »

Un import réussi techniquement peut contenir des données incorrectes.

---

## Ne pas comparer les totaux

Le nombre de lignes importées doit être comparé au nombre attendu.

---

## Mélanger plusieurs années scolaires

Chaque donnée doit être rattachée à la bonne période.

---

## Envoyer des fichiers sensibles dans un canal non sécurisé

La facilité ne doit jamais remplacer la sécurité.

---

## Commencer trop tard

La collecte des données doit commencer dès les premières étapes du projet.

---

# Bonnes pratiques RELAIS

✔ Définir le périmètre avant de demander les fichiers.

✔ Fournir des modèles standardisés.

✔ Expliquer clairement les champs obligatoires.

✔ Conserver une copie de chaque version reçue.

✔ Utiliser des noms de fichiers compréhensibles.

✔ Contrôler les données avant l’import.

✔ Produire un rapport d’anomalies.

✔ Ne jamais inventer une donnée.

✔ Demander une validation pour toute correction administrative.

✔ Réaliser un import test lorsque nécessaire.

✔ Vérifier les sauvegardes avant une opération importante.

✔ Comparer les totaux avant et après import.

✔ Tester des dossiers représentatifs.

✔ Faire valider les données par l’établissement.

✔ Documenter chaque correction importante.

---

# Livrables de la phase d’import

À la fin de cette phase, le dossier de déploiement doit contenir :

- le périmètre des données à importer ;
- les modèles transmis à l’établissement ;
- les fichiers originaux reçus ;
- les fichiers corrigés ;
- la version finale validée ;
- le rapport d’anomalies ;
- le rapport de contrôle ;
- le journal d’import ;
- le rapport des lignes rejetées ;
- les résultats des vérifications ;
- le registre des corrections ;
- la validation écrite de l’établissement ;
- la liste des éléments restant à compléter.

---

# Conditions de fin de l’import

La phase d’import peut être considérée comme terminée lorsque :

- tous les fichiers prévus ont été reçus ;
- les anomalies bloquantes ont été corrigées ;
- les données ont été importées dans le bon établissement ;
- les totaux correspondent aux résultats attendus ;
- les relations principales sont correctes ;
- les dossiers représentatifs ont été testés ;
- les lignes rejetées ont été traitées ;
- les corrections restantes sont documentées ;
- l’établissement a validé les données ;
- aucune erreur bloquante ne compromet la mise en production.

---

# Ce qu’il faut retenir

À l’issue de ce chapitre, retenez les idées suivantes :

- l’import est une opération fonctionnelle, pas seulement technique ;
- l’établissement fournit et valide les données officielles ;
- RELAIS structure, contrôle et accompagne leur intégration ;
- les fichiers doivent suivre des modèles cohérents ;
- les doublons, relations et champs obligatoires doivent être vérifiés ;
- aucune donnée administrative ne doit être inventée ;
- un import réussi techniquement doit encore être contrôlé ;
- l’établissement doit valider les résultats ;
- chaque import doit laisser une trace claire et vérifiable.

---

## Phrase à retenir

> **« Importer une donnée ne la rend pas fiable. La contrôler et la faire valider, oui. »**

---

# Vérifiez vos connaissances

1. Pourquoi l’import ne doit-il pas être considéré comme un simple transfert de fichiers ?
2. Quelle est la responsabilité de l’établissement concernant les données ?
3. Quelle est la responsabilité de RELAIS ?
4. Pourquoi faut-il définir le périmètre de l’import ?
5. Quel est l’intérêt des modèles standardisés ?
6. Comment distinguer un champ obligatoire, recommandé et facultatif ?
7. Pourquoi les doublons ne doivent-ils pas être fusionnés automatiquement ?
8. Pourquoi faut-il respecter un ordre d’import ?
9. Quelle différence existe-t-il entre un contrôle technique et un contrôle fonctionnel ?
10. Pourquoi faut-il comparer les totaux avant et après import ?
11. Qui doit valider les données importées ?
12. À quelles conditions la phase d’import peut-elle être considérée comme terminée ?

---

## Question de réflexion

L’établissement vous transmet un fichier contenant 1 200 élèves deux jours avant la date prévue de mise en production.

Le fichier comporte de nombreux doublons, plusieurs classes n’existent pas dans KARMDA et environ 20 % des élèves n’ont pas de matricule.

Le directeur insiste pour que tout soit importé immédiatement afin de respecter la date annoncée.

Comment gérez-vous la situation, quelles données pouvez-vous traiter, quelles validations exigez-vous et comment présentez-vous les conséquences possibles au directeur sans bloquer inutilement le projet ?

## Le point essentiel de ce document est la séparation des responsabilités :

RELAIS garantit la qualité du processus d’import. L’établissement garantit l’exactitude administrative de ses données.

Sans cette distinction, l’équipe RELAIS risque un jour de devenir responsable d’erreurs provenant directement des fichiers du client.
