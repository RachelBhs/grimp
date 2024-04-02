import { previewImport } from "../services/csv.service";
import { LearnerType } from "../types/learner.types";

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

export const CsvController = () => {
  const { validData, invalidData, validationErrors } = previewImport(
    file,
    columnMappings
  );
  console.log({ validData, invalidData, validationErrors });
};
