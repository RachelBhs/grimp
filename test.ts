type LearnerType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  campusName: string;
  programName: string;
};

type ValidationResult = {
  validData: LearnerType[];
  invalidData: { learner: LearnerType; errors: string[] }[];
  validationErrors: string[];
};

// Simulated CSV file reading function
const readCSV = (file: string, delimiter = ";"): any[] => {
  const titles = file.slice(0, file.indexOf("\n")).split(delimiter);

  return file
    .slice(file.indexOf("\n") + 1)
    .split("\n")
    .map((value) => {
      const values = value.split(delimiter);
      return titles.reduce((obj: any, title, index) => {
        obj[title] = values[index];
        return obj;
      }, {});
    });
};

// Manual column mapping function
const mapColumns = (learners: any[], mappings: any): LearnerType[] => {
  // Perform column mapping according to specifications
  const mappedData: LearnerType[] = learners.map((learner) => ({
    firstName: learner[mappings.firstName],
    lastName: learner[mappings.lastName],
    email: learner[mappings.email],
    phone: learner[mappings.phone],
    campusName: learner[mappings.campusName],
    programName: learner[mappings.programName],
  }));
  return mappedData;
};

// Email validation function
const isValidEmail = (email: string): boolean => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

// Phone validation function
const isValidPhone = (phone: string): boolean => {
  return /^(\+?0?[1-9]([-. ]?[0-9]){8,13})$/.test(phone);
};

// Data validation function
const validateData = (learners: LearnerType[]): ValidationResult => {
  const validData: LearnerType[] = [];
  const invalidData: { learner: LearnerType; errors: string[] }[] = [];
  const validationErrors: string[] = [];

  const validateField = (
    field: string | undefined,
    fieldName: string
  ): string[] => {
    const errors: string[] = [];
    if (!field) {
      errors.push(`${fieldName} est manquant`);
    }
    return errors;
  };
  learners.forEach((learner, index) => {
    const errors: string[] = [];

    errors.push(...validateField(learner.firstName, "Le prénom"));
    errors.push(...validateField(learner.lastName, "Le nom"));
    errors.push(...validateField(learner.email, "l'email"));
    if (learner.email && !isValidEmail(learner.email)) {
      errors.push("Le format de l'email est incorrect");
    }
    errors.push(...validateField(learner.phone, "le numéro de téléphone"));
    if (learner.phone && !isValidPhone(learner.phone)) {
      errors.push("Le format du numéro téléphone est incorrect");
    }
    errors.push(...validateField(learner.campusName, "Le nom du campus"));
    errors.push(...validateField(learner.programName, "Le nom du programme"));

    if (errors.length > 0) {
      invalidData.push({ learner, errors });
      validationErrors.push(
        `Erreurs à l'entrée ${index + 1}: ${errors.join(", ")}`
      );
    } else {
      validData.push(learner);
    }
  });

  return { validData, invalidData, validationErrors };
};

// Data preview function before import
const previewImport = (
  file: string,
  mappings: any
): {
  validData: LearnerType[];
  invalidData: any[];
  validationErrors: string[];
} => {
  const csvData = readCSV(file);
  const mappedData = mapColumns(csvData, mappings);
  const { validData, invalidData, validationErrors } = validateData(mappedData);

  return { validData, invalidData, validationErrors };
};

// Exemple d'utilisation
const file: string = `prenom;nom;email;telephone;campus;programme
William;Shakespeare;shakespeare@test.fr;0661452072;campus A;programme A
Jean;Racine;racine@test.fr;661452072;campus B;programme B
Guy;de Maupassant;maupassant@test.fr;661452072;campus C;programme C
Émile;Zola;zola@test.fr;0661452072;campus D;programme D;`;

const columnMappings: LearnerType = {
  firstName: "prenom",
  lastName: "nom",
  email: "email",
  phone: "telephone",
  campusName: "campus",
  programName: "programme",
};

const { validData, invalidData, validationErrors } = previewImport(
  file,
  columnMappings
);

console.log("Valid Data:");
console.log(validData);
console.log("Invalid Data:");
console.log(invalidData);
console.log("Validation Errors:");
console.log(validationErrors);
