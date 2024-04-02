export type LearnerType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  campusName: string;
  programName: string;
};

export type ValidationResult = {
  validData: LearnerType[];
  invalidData: { learner: LearnerType; errors: string[] }[];
  validationErrors: string[];
};
