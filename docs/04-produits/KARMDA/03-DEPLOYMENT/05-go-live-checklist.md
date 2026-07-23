---
title: "Checklist de mise en production"
---

# KARMDA

# 05 - Checklist de mise en production

## Déploiement RELAIS

> Ce document fait partie du programme officiel de déploiement KARMDA.

**Objectif**

À la fin de cette étape, vous serez capable de vérifier méthodiquement qu’un établissement, ses données, ses utilisateurs et ses processus sont prêts avant l’utilisation officielle de KARMDA.

**Temps estimé**

30 à 60 minutes selon la taille du déploiement

**Prérequis**

- README.md
- 01 - Préparation du déploiement
- 02 - Installation
- 03 - Onboarding de l’établissement
- 04 - Import des données
- formations prévues pour les utilisateurs concernés

---

# Pourquoi cette checklist est importante

La mise en production est le moment où KARMDA devient un outil de travail officiel pour l’établissement.

À partir de cette date :

- les utilisateurs commencent leurs opérations quotidiennes ;
- les présences peuvent être enregistrées ;
- les élèves peuvent être inscrits ;
- les notes peuvent être saisies ;
- les paiements peuvent être suivis ;
- les parents peuvent consulter certaines informations ;
- la direction peut s’appuyer sur les données produites.

Une erreur non détectée avant le lancement peut donc affecter plusieurs personnes et plusieurs processus en même temps.

Chez RELAIS, nous ne mettons pas un établissement en production parce que le calendrier indique une date.

Nous le faisons lorsque les conditions nécessaires sont réunies.

---

# Notre philosophie

Une mise en production n’est pas une cérémonie technique.

C’est une décision opérationnelle.

Elle signifie que RELAIS et l’établissement considèrent ensemble que KARMDA peut être utilisé dans les conditions prévues.

> **Ce qui n’a pas été vérifié ne peut pas être considéré comme prêt.**

---

# Comment utiliser cette checklist

Cette checklist doit être remplie pour chaque établissement.

Pour chaque élément, utiliser l’un des statuts suivants :

| Statut         | Signification                                                 |
| -------------- | ------------------------------------------------------------- |
| Conforme       | L’élément a été vérifié et répond aux attentes.               |
| À corriger     | Une correction est nécessaire avant ou après le lancement.    |
| Bloquant       | La mise en production ne peut pas avoir lieu sans résolution. |
| Non applicable | L’élément ne fait pas partie du périmètre du projet.          |

Une case ne doit jamais être cochée uniquement parce qu’une personne affirme que l’action a été réalisée.

Le vérificateur doit disposer d’un élément concret :

- test effectué ;
- donnée contrôlée ;
- capture ;
- rapport ;
- confirmation écrite ;
- observation directe ;
- validation du responsable compétent.

---

# Informations générales du déploiement

| Élément                           | Information                  |
| --------------------------------- | ---------------------------- |
| Établissement                     |                              |
| Chef de projet RELAIS             |                              |
| Responsable de l’établissement    |                              |
| Date prévue de mise en production |                              |
| Date de vérification              |                              |
| Offre ou périmètre concerné       |                              |
| Vérificateurs                     |                              |
| Décision finale                   | Go / Go conditionnel / No-Go |

---

# 1. Validation du projet

## Objectifs et périmètre

- [ ] Les objectifs prioritaires du déploiement sont documentés.
- [ ] Le périmètre de la première mise en production est clair.
- [ ] Les fonctionnalités incluses sont connues des deux parties.
- [ ] Les éléments exclus ou reportés sont documentés.
- [ ] Les engagements commerciaux ont été vérifiés.
- [ ] Aucun changement de périmètre non validé ne reste ambigu.
- [ ] Les critères de réussite sont définis.
- [ ] La date de lancement est toujours réaliste.

## Responsabilités

- [ ] Le chef de projet RELAIS est identifié.
- [ ] Le responsable interne de l’établissement est identifié.
- [ ] Les personnes autorisées à valider les décisions sont connues.
- [ ] Les référents pédagogiques, administratifs et financiers nécessaires sont identifiés.
- [ ] Les responsabilités durant les premiers jours sont comprises.

## Communication

- [ ] Le canal principal de communication est confirmé.
- [ ] Le processus de signalement d’un incident est connu.
- [ ] Les contacts utiles ont été partagés.
- [ ] La date du prochain point de suivi est fixée.
- [ ] Les utilisateurs savent vers qui se tourner en cas de difficulté.

---

# 2. Configuration de l’établissement

## Informations institutionnelles

- [ ] Le nom officiel de l’établissement est correct.
- [ ] Le logo affiché est correct.
- [ ] L’adresse est correcte.
- [ ] Le téléphone est correct.
- [ ] L’adresse e-mail officielle est correcte.
- [ ] Les informations de la direction sont correctes.
- [ ] Les paramètres régionaux sont corrects.
- [ ] Le fuseau horaire est correct.
- [ ] La devise est correcte.

## Structure académique

- [ ] La bonne année scolaire est active.
- [ ] Les périodes académiques sont correctement configurées.
- [ ] Les cycles sont configurés.
- [ ] Les niveaux sont configurés.
- [ ] Les classes sont configurées.
- [ ] Les sections sont configurées.
- [ ] Les matières nécessaires sont disponibles.
- [ ] Les calendriers ou périodes importantes sont corrects.
- [ ] Le système de notation correspond aux règles de l’établissement.
- [ ] Les seuils de réussite ou règles académiques sont validés.
- [ ] Les règles de présence sont configurées.
- [ ] Les paramètres de bulletins sont validés lorsque le module est inclus.

## Paramètres fonctionnels

- [ ] Les modules prévus sont activés.
- [ ] Les fonctionnalités hors périmètre ne créent pas de confusion.
- [ ] Les paramètres financiers sont validés lorsque nécessaires.
- [ ] Les préférences de communication sont validées.
- [ ] Les paramètres sensibles ont été vérifiés par un second membre de l’équipe.
- [ ] Toute configuration particulière est documentée.

---

# 3. Données importées

## Données principales

- [ ] Les élèves attendus sont présents.
- [ ] Les enseignants attendus sont présents.
- [ ] Le personnel administratif nécessaire est présent.
- [ ] Les parents ou responsables prévus sont présents.
- [ ] Les classes correspondent à la structure validée.
- [ ] Les matières correspondent à la structure validée.
- [ ] Les inscriptions sont rattachées à la bonne année scolaire.
- [ ] Les élèves sont affectés aux bonnes classes.
- [ ] Les enseignants sont affectés aux bonnes classes et matières.
- [ ] Les relations parents-enfants ont été vérifiées.
- [ ] Les données financières prévues ont été importées.

## Contrôle quantitatif

| Donnée                    | Nombre attendu | Nombre dans KARMDA | Écart | Statut |
| ------------------------- | -------------: | -----------------: | ----: | ------ |
| Élèves                    |                |                    |       |        |
| Enseignants               |                |                    |       |        |
| Personnel administratif   |                |                    |       |        |
| Parents ou responsables   |                |                    |       |        |
| Classes                   |                |                    |       |        |
| Inscriptions              |                |                    |       |        |
| Affectations pédagogiques |                |                    |       |        |
| Données financières       |                |                    |       |        |

- [ ] Tous les écarts sont expliqués.
- [ ] Les lignes rejetées ont été traitées ou documentées.
- [ ] Les doublons potentiels ont été vérifiés.
- [ ] Les données obligatoires manquantes ont été corrigées.
- [ ] Les corrections restant à effectuer sont inscrites dans un registre.

## Contrôle par échantillonnage

- [ ] Plusieurs dossiers d’élèves ont été contrôlés.
- [ ] Un élève ayant plusieurs responsables a été contrôlé.
- [ ] Un enseignant affecté à plusieurs classes a été contrôlé.
- [ ] Un cas ayant fait l’objet d’une correction a été contrôlé.
- [ ] Les informations financières d’un dossier représentatif ont été contrôlées.
- [ ] L’établissement a participé à la vérification.
- [ ] La validation des données a été documentée.

---

# 4. Comptes et permissions

## Comptes prioritaires

- [ ] Le compte principal de l’établissement fonctionne.
- [ ] Les comptes de la direction fonctionnent.
- [ ] Les comptes administratifs fonctionnent.
- [ ] Les comptes des enseignants concernés fonctionnent.
- [ ] Les comptes parents prévus pour le lancement fonctionnent.
- [ ] Les comptes élèves prévus pour le lancement fonctionnent.

## Tests de connexion

- [ ] Les utilisateurs peuvent accéder à la page de connexion.
- [ ] Les identifiants ont été transmis de manière sécurisée.
- [ ] Le processus de première connexion est compris.
- [ ] Le changement ou la réinitialisation du mot de passe fonctionne.
- [ ] Les utilisateurs savent quoi faire en cas d’oubli du mot de passe.
- [ ] Les comptes de test inutiles ont été désactivés ou supprimés.

## Permissions

- [ ] La direction accède aux informations prévues.
- [ ] L’administration accède aux opérations administratives prévues.
- [ ] Les enseignants voient uniquement les données qui les concernent.
- [ ] Les parents voient uniquement les informations de leurs enfants.
- [ ] Les élèves voient uniquement les informations autorisées.
- [ ] Aucun utilisateur ne dispose de privilèges supérieurs à ses responsabilités.
- [ ] Un test de refus d’accès a été réalisé pour un rôle restreint.
- [ ] Les permissions particulières sont documentées.

> Vérifier qu’un utilisateur peut accéder à une information est important.

> Vérifier qu’il ne peut pas accéder à une information interdite l’est tout autant.

---

# 5. Processus fonctionnels

Seuls les processus inclus dans le périmètre doivent être testés.

## Administration

- [ ] Un nouvel élève peut être créé.
- [ ] Un dossier d’élève peut être consulté.
- [ ] Une inscription peut être enregistrée.
- [ ] Un élève peut être affecté à une classe.
- [ ] Une mise à jour administrative peut être réalisée.
- [ ] Les listes nécessaires peuvent être consultées.
- [ ] Les documents administratifs prévus peuvent être produits.

## Présences

- [ ] Un enseignant peut ouvrir une session de présence.
- [ ] Les élèves attendus apparaissent.
- [ ] Une présence peut être enregistrée.
- [ ] Une absence peut être enregistrée.
- [ ] Les statuts particuliers prévus fonctionnent.
- [ ] Une correction peut être réalisée selon les autorisations.
- [ ] L’administration peut consulter les résultats attendus.
- [ ] La direction peut consulter les indicateurs prévus.

## Gestion académique

- [ ] Une évaluation peut être créée.
- [ ] Les élèves attendus apparaissent dans l’évaluation.
- [ ] Une note peut être saisie.
- [ ] Une absence ou une note non applicable peut être gérée.
- [ ] Les calculs correspondent aux règles validées.
- [ ] Les résultats peuvent être consultés par les rôles autorisés.
- [ ] Les bulletins peuvent être générés lorsque prévus.
- [ ] Un bulletin représentatif a été vérifié manuellement.

## Finance

- [ ] Les catégories de frais sont correctes.
- [ ] Les montants sont corrects.
- [ ] Les échéances sont correctes.
- [ ] Un paiement peut être enregistré.
- [ ] Une correction suit le processus prévu.
- [ ] Un reçu peut être produit lorsque prévu.
- [ ] La situation financière d’un élève est correcte.
- [ ] Les rapports financiers prévus sont accessibles.
- [ ] Les droits financiers sont limités aux utilisateurs autorisés.

## Communication

- [ ] Une annonce peut être créée.
- [ ] Les bons destinataires peuvent être sélectionnés.
- [ ] Les notifications prévues sont envoyées.
- [ ] Le contenu reçu est lisible.
- [ ] Les coordonnées utilisées sont correctes.
- [ ] Aucun destinataire non autorisé ne reçoit les informations.
- [ ] Le comportement en cas d’échec de notification est connu.

## Rapports et tableaux de bord

- [ ] Le tableau de bord affiche les données attendues.
- [ ] Les totaux principaux sont cohérents.
- [ ] Les filtres utiles fonctionnent.
- [ ] Les rapports prévus peuvent être générés.
- [ ] Les indicateurs ont été comparés aux données sources.
- [ ] Les utilisateurs comprennent la signification des indicateurs affichés.

---

# 6. Formation des utilisateurs

## Organisation

- [ ] Les groupes d’utilisateurs ont été identifiés.
- [ ] Les formations nécessaires ont été planifiées.
- [ ] Les participants ont été informés.
- [ ] Les supports de formation sont disponibles.
- [ ] Les appareils ou conditions nécessaires sont disponibles.
- [ ] Les absents importants disposent d’une solution de rattrapage.

## Validation pratique

La présence à une formation ne garantit pas la capacité à utiliser KARMDA.

Les utilisateurs prioritaires doivent démontrer les actions essentielles.

### Administration

- [ ] Inscrire ou retrouver un élève.
- [ ] Mettre à jour un dossier.
- [ ] Affecter un élève à une classe.
- [ ] Consulter une liste.
- [ ] Identifier la procédure d’assistance.

### Enseignants

- [ ] Se connecter.
- [ ] Retrouver une classe.
- [ ] Enregistrer une présence.
- [ ] Créer ou consulter une évaluation selon le périmètre.
- [ ] Saisir une note.
- [ ] Signaler une difficulté.

### Direction

- [ ] Consulter le tableau de bord.
- [ ] Retrouver un indicateur.
- [ ] Consulter un rapport.
- [ ] Identifier les personnes chargées du suivi interne.
- [ ] Comprendre le processus d’escalade.

### Parents ou élèves

- [ ] Se connecter lorsque leur accès est prévu.
- [ ] Retrouver les informations essentielles.
- [ ] Comprendre les limites de leur accès.
- [ ] Savoir comment demander de l’aide.

## Adoption

- [ ] Les utilisateurs comprennent pourquoi KARMDA est déployé.
- [ ] Les principaux ambassadeurs internes sont identifiés.
- [ ] Les inquiétudes majeures ont été traitées.
- [ ] La direction soutient publiquement le projet.
- [ ] Les anciens processus qui doivent cesser sont clairement identifiés.
- [ ] Les processus qui resteront temporairement parallèles sont documentés.

---

# 7. Vérifications techniques

## Accessibilité

- [ ] KARMDA est accessible depuis les appareils prévus.
- [ ] L’accès a été testé depuis le réseau de l’établissement.
- [ ] Les principaux navigateurs utilisés sont compatibles.
- [ ] L’affichage est utilisable sur les appareils disponibles.
- [ ] Les performances sont acceptables.
- [ ] Les contraintes de connexion sont connues.

## Sécurité

- [ ] L’environnement de production correct est utilisé.
- [ ] Les comptes administrateurs sont limités.
- [ ] Les mots de passe temporaires suivent le processus prévu.
- [ ] Les accès des anciens collaborateurs ou comptes de test sont désactivés.
- [ ] Les permissions ont été testées.
- [ ] Les fichiers de déploiement sont stockés de manière sécurisée.
- [ ] Les données sensibles ne sont pas exposées dans des documents publics.
- [ ] Les incidents de sécurité peuvent être signalés rapidement.

## Sauvegarde et récupération

- [ ] Les sauvegardes sont opérationnelles.
- [ ] La date de la dernière sauvegarde connue est vérifiée.
- [ ] Le processus de restauration est documenté.
- [ ] Les personnes autorisées à intervenir sont identifiées.
- [ ] Un plan existe en cas d’import ou de modification incorrecte.
- [ ] Les coordonnées d’escalade technique sont disponibles.

## Notifications et services externes

- [ ] Les e-mails prévus fonctionnent.
- [ ] Les SMS ou autres notifications prévues fonctionnent.
- [ ] Les intégrations incluses dans le périmètre sont testées.
- [ ] Les clés ou accès techniques nécessaires sont correctement configurés.
- [ ] Les erreurs de service externe sont surveillées ou documentées.
- [ ] Un fonctionnement de secours est connu lorsque nécessaire.

---

# 8. Organisation du jour de lancement

## Date et disponibilité

- [ ] La date de mise en production est confirmée.
- [ ] La direction est disponible ou représentée.
- [ ] Le responsable interne est disponible.
- [ ] L’équipe RELAIS nécessaire est disponible.
- [ ] Les utilisateurs concernés connaissent la date.
- [ ] La date n’entre pas en conflit avec une période critique non anticipée.

## Plan du lancement

- [ ] L’heure de début est définie.
- [ ] Les premières opérations à réaliser sont identifiées.
- [ ] Les personnes responsables de ces opérations sont connues.
- [ ] Une période de surveillance renforcée est prévue.
- [ ] Un point de contrôle est planifié durant la journée.
- [ ] Un bilan de fin de journée est planifié.
- [ ] Une procédure de remontée rapide des incidents est définie.

## Continuité des opérations

- [ ] Les anciens processus à interrompre sont identifiés.
- [ ] Les processus maintenus temporairement en parallèle sont identifiés.
- [ ] La durée de la période parallèle est définie.
- [ ] Les risques de double saisie sont expliqués.
- [ ] Une procédure existe si KARMDA devient temporairement indisponible.
- [ ] Les opérations critiques peuvent continuer selon un plan connu.

---

# 9. Support post-lancement

- [ ] Les utilisateurs connaissent les canaux de support.
- [ ] Les heures de disponibilité sont communiquées.
- [ ] Les niveaux de priorité des incidents sont compris.
- [ ] Les personnes autorisées à contacter le support sont identifiées.
- [ ] Le registre des incidents est prêt.
- [ ] Un suivi à 24 heures est planifié.
- [ ] Un suivi à 7 jours est planifié.
- [ ] Les autres points de suivi prévus sont planifiés.
- [ ] Les indicateurs d’adoption à observer sont définis.
- [ ] Le passage vers le support régulier est prévu.

---

# 10. Problèmes ouverts

Tous les problèmes non résolus doivent être enregistrés avant la décision finale.

| Référence | Problème | Impact | Priorité | Responsable | Échéance | Bloquant  |
| --------- | -------- | ------ | -------- | ----------- | -------- | --------- |
|           |          |        |          |             |          | Oui / Non |
|           |          |        |          |             |          | Oui / Non |
|           |          |        |          |             |          | Oui / Non |

Un problème connu et documenté peut parfois être géré.

Un problème connu mais caché devient une surprise pour le client.

---

# Classification des problèmes

## Bloquant

Le lancement ne doit pas avoir lieu.

Exemples :

- utilisateurs prioritaires incapables de se connecter ;
- mauvaise année scolaire active ;
- données principales absentes ou rattachées au mauvais établissement ;
- permissions exposant des informations confidentielles ;
- processus central inutilisable ;
- absence de sauvegarde pour une opération critique ;
- résultats académiques ou financiers incorrects ;
- absence de validation du responsable compétent.

## Critique mais contournable

Le lancement peut exceptionnellement être envisagé avec :

- une solution temporaire fiable ;
- un responsable identifié ;
- une échéance proche ;
- une acceptation écrite ;
- une surveillance renforcée.

## Mineur

Le problème n’empêche pas l’activité principale.

Exemples :

- libellé imparfait ;
- élément visuel secondaire ;
- rapport non prioritaire ;
- information facultative à compléter.

Un ensemble de problèmes mineurs peut toutefois créer une mauvaise expérience.

Il faut évaluer leur effet cumulé.

---

# La réunion Go / No-Go

Avant la mise en production, RELAIS et l’établissement doivent réaliser une validation finale.

Cette réunion peut être courte, mais elle doit répondre à cinq questions :

1. Les objectifs de la première phase peuvent-ils être atteints ?
2. Les processus essentiels fonctionnent-ils ?
3. Les utilisateurs prioritaires sont-ils prêts ?
4. Existe-t-il un problème bloquant ?
5. Les deux parties acceptent-elles les conditions du lancement ?

---

# Les décisions possibles

## Go

Toutes les conditions essentielles sont réunies.

Le lancement peut avoir lieu comme prévu.

## Go conditionnel

Le lancement peut avoir lieu malgré certains éléments incomplets, car :

- ils ne bloquent pas les processus essentiels ;
- leur impact est compris ;
- une solution temporaire existe ;
- un responsable est identifié ;
- une échéance est fixée ;
- l’établissement accepte explicitement la situation.

## No-Go

Le lancement doit être reporté.

Cette décision est nécessaire lorsqu’un risque important pourrait :

- interrompre les opérations ;
- produire des données incorrectes ;
- exposer des informations confidentielles ;
- empêcher les utilisateurs prioritaires de travailler ;
- endommager durablement la confiance du client.

Reporter un lancement peut être inconfortable.

Lancer un système qui n’est pas prêt peut être beaucoup plus coûteux.

---

# Validation finale

## Décision

- [ ] Go
- [ ] Go conditionnel
- [ ] No-Go

## Motif de la décision

```text



```

## Conditions éventuelles

```text



```

## Date et heure de mise en production

```text

```

## Responsables présents au lancement

```text



```

## Validations

| Rôle                                 | Nom | Décision | Date | Confirmation |
| ------------------------------------ | --- | -------- | ---- | ------------ |
| Chef de projet RELAIS                |     |          |      |              |
| Responsable de l’établissement       |     |          |      |              |
| Responsable fonctionnel concerné     |     |          |      |              |
| Responsable technique, si nécessaire |     |          |      |              |

---

# Après la décision

## En cas de Go

- confirmer la date aux utilisateurs ;
- activer le plan de lancement ;
- vérifier la disponibilité des équipes ;
- commencer la surveillance renforcée ;
- ouvrir le registre des incidents ;
- réaliser les points de contrôle prévus.

## En cas de Go conditionnel

- documenter chaque condition ;
- informer les utilisateurs concernés ;
- activer les solutions temporaires ;
- suivre les corrections jusqu’à leur résolution ;
- réévaluer rapidement les risques.

## En cas de No-Go

- expliquer les raisons avec des faits ;
- éviter de rechercher un coupable ;
- définir les actions correctives ;
- attribuer les responsabilités ;
- fixer une nouvelle date de vérification ;
- ne pas annoncer une nouvelle date de lancement avant d’avoir évalué les corrections.

---

# Erreurs fréquentes

## Cocher sans tester

Une checklist remplie sans vérification réelle ne protège personne.

---

## Tester uniquement avec un administrateur

Un administrateur peut réussir une action que les autres rôles ne peuvent pas effectuer.

Chaque rôle prioritaire doit être testé.

---

## Vérifier seulement que les pages s’ouvrent

Une page accessible ne signifie pas que le processus métier fonctionne correctement.

---

## Ignorer les tests de permissions

Un utilisateur qui voit trop d’informations représente un risque plus sérieux qu’un utilisateur qui ne voit pas assez.

---

## Accepter des données non validées

La pression du calendrier ne transforme pas une donnée douteuse en donnée fiable.

---

## Former sans vérifier la pratique

Les participants doivent effectuer les actions essentielles eux-mêmes.

---

## Lancer sans plan de support

Les premiers jours génèrent toujours des questions.

L’absence de support transforme de petites difficultés en frustrations.

---

## Maintenir deux systèmes sans limite

Une période parallèle peut sécuriser la transition.

Sans date de fin, elle produit des doubles saisies et des contradictions.

---

## Refuser de reporter un lancement

Le respect d’une date ne doit pas prendre le dessus sur la sécurité, la fiabilité et la confiance.

---

# Bonnes pratiques RELAIS

✔ Vérifier avec des preuves.

✔ Tester chaque rôle prioritaire.

✔ Contrôler les autorisations positives et négatives.

✔ Faire exécuter les tâches essentielles par les utilisateurs.

✔ Comparer les données avec les sources validées.

✔ Documenter tous les problèmes ouverts.

✔ Distinguer les problèmes bloquants des problèmes mineurs.

✔ Préparer le support avant le lancement.

✔ Faire participer l’établissement à la décision finale.

✔ Refuser une mise en production lorsque le risque est injustifiable.

✔ Documenter formellement la décision Go, Go conditionnel ou No-Go.

---

# Conditions minimales pour un Go

Une décision Go exige au minimum que :

- l’établissement correct soit configuré ;
- l’année scolaire correcte soit active ;
- les données principales soient présentes et validées ;
- les utilisateurs prioritaires puissent se connecter ;
- les permissions essentielles soient correctes ;
- les processus inclus dans la première phase fonctionnent ;
- les utilisateurs concernés aient été formés ;
- aucun problème bloquant ne soit ouvert ;
- le support du lancement soit organisé ;
- l’établissement accepte officiellement la mise en production.

---

# Ce qu’il faut retenir

À l’issue de cette étape, retenez les idées suivantes :

- une date prévue ne constitue pas une preuve de préparation ;
- chaque élément important doit être vérifié ;
- les tests doivent couvrir les données, les utilisateurs, les permissions et les processus ;
- la formation doit être validée par la pratique ;
- tous les problèmes ouverts doivent être documentés ;
- un lancement peut être approuvé, approuvé sous conditions ou reporté ;
- un report justifié protège davantage la relation client qu’un lancement précipité ;
- la décision finale appartient conjointement à RELAIS et à l’établissement.

---

## Phrase à retenir

> **« Être presque prêt n’est pas la même chose qu’être prêt. La checklist transforme une impression en décision. »**

---

# Vérifiez vos connaissances

1. Pourquoi une date de lancement ne suffit-elle pas à autoriser la mise en production ?
2. Quelle différence existe-t-il entre les statuts Conforme, À corriger et Bloquant ?
3. Pourquoi faut-il tester les accès avec plusieurs rôles ?
4. Qu’est-ce qu’un test de permission négatif ?
5. Pourquoi un import techniquement réussi doit-il encore être vérifié ?
6. Comment confirmer qu’un utilisateur a réellement été formé ?
7. Quelle différence existe-t-il entre un problème bloquant et un problème mineur ?
8. Dans quelles conditions un Go conditionnel peut-il être accepté ?
9. Pourquoi l’établissement doit-il participer à la décision finale ?
10. Que doit faire RELAIS après une décision No-Go ?

---

## Question de réflexion

Toutes les configurations techniques sont fonctionnelles et les données ont été validées.

Cependant, seulement 30 % des enseignants ont participé à la formation. La direction insiste pour maintenir la date de lancement et propose que les enseignants formés expliquent rapidement KARMDA aux autres le matin même.

Décidez-vous Go, Go conditionnel ou No-Go ?

Expliquez votre décision en tenant compte :

- des processus qui doivent commencer au lancement ;
- du rôle réel des enseignants non formés ;
- de la capacité des ambassadeurs internes ;
- du support disponible ;
- des risques pour l’adoption ;
- des éventuelles mesures temporaires permettant de sécuriser la décision.

## The central lesson of this document is:

A checklist is not paperwork added to the deployment. It is the evidence that authorizes the deployment.

## And there is an important cultural principle behind the No-Go option:

At RELAIS, the person who identifies a valid reason to delay a launch is not obstructing the project. They are protecting it.
