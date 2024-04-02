import { LearnerType } from "../types/learner.types";
import { isValidEmail, isValidPhone } from "../validators/learners";

export const validateData = (learners: LearnerType[]) => {
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
