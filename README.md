# grimp
# Documentation du Module de Gestion de Données d'Apprenants
## Introduction

Ce module fournit un ensemble de fonctions pour gérer et valider les données d'apprenants, notamment la lecture de données depuis un fichier CSV, le mappage de colonnes, la validation des adresses e-mail et des numéros de téléphone, ainsi que la validation globale des données.

## Types

### `LearnerType`
Un type représentant les données d'un apprenant. Il comprend les champs suivants :

#### `firstName` : Prénom de l'apprenant.
#### `lastName` : Nom de famille de l'apprenant.
#### `email` : Adresse e-mail de l'apprenant.
#### `phone` : Numéro de téléphone de l'apprenant.
#### `campusName` : Nom du campus de l'apprenant.
#### `programName` : Nom du programme auquel l'apprenant est inscrit.

### `ValidationResult`
Un type représentant le résultat de la validation des données. Il comprend les propriétés suivantes :

#### `validData` : Tableau des données d'apprenants valides.
#### `invalidData` : Tableau des données d'apprenants invalides avec les erreurs rencontrées.
#### `validationErrors` : Liste des erreurs de validation globales.

## Fonctions

### `readCSV(file: string, delimiter = ";"): any[]`
Cette fonction simule la lecture d'un fichier CSV. Elle prend en entrée une chaîne représentant le contenu du fichier CSV et un délimiteur facultatif (par défaut ";"). Elle retourne un tableau d'objets représentant les données du fichier CSV.

### `mapColumns(learners: any[], mappings: any): LearnerType[]`
Cette fonction effectue le mappage des colonnes des données en fonction des spécifications fournies. Le "column mapping" consiste à associer les colonnes d'un fichier de données avec les champs correspondants dans la structure de données souhaitée. Par exemple, si les données d'entrée sont fournies avec des colonnes nommées "prenom", "nom", "email", "telephone", "campus", "programme", et que nous souhaitons les mapper à une structure LearnerType avec les champs correspondants, cette fonction permet d'effectuer cette tâche de manière automatisée.

#### `learners` : Un tableau d'objets représentant les données brutes à mapper.
#### `mappings` : Un objet contenant les correspondances entre les noms de colonnes d'entrée et les propriétés de la structure LearnerType.
La fonction parcourt les données brutes et, pour chaque entrée, elle utilise les mappings fournis pour extraire les valeurs des colonnes spécifiées et les assigner aux champs correspondants de la structure LearnerType. Elle retourne un tableau d'objets de type LearnerType avec les données mappées.

### `isValidEmail(email: string): boolean`
Cette fonction valide le format d'une adresse e-mail donnée. Elle prend en entrée une chaîne représentant l'adresse e-mail et retourne true si l'adresse est valide, sinon false.

### `isValidPhone(phone: string): boolean`
Cette fonction valide le format d'un numéro de téléphone donné. Elle prend en entrée une chaîne représentant le numéro de téléphone et retourne true si le format est valide, sinon false.

### `validateData(learners: LearnerType[]): ValidationResult`
Cette fonction effectue une validation globale des données des apprenants. Elle prend en entrée un tableau d'objets de type LearnerType et retourne un objet de type ValidationResult contenant les données valides, les données invalides et les erreurs de validation.

### `previewImport(file: string, mappings: any): { validData: LearnerType[]; invalidData: any[]; validationErrors: string[]; }`
Cette fonction fournit un aperçu de l'importation des données avant leur traitement complet. Elle prend en entrée une chaîne représentant le contenu du fichier CSV et un objet de mappings pour les colonnes. Elle retourne un objet contenant les données valides, les données invalides et les erreurs de validation.

