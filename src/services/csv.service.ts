import { readCSV } from "../utils/csv.utils";
import { validateData } from "./learner.service";
import { LearnerType } from "../types/learner.types";

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

export const previewImport = (file: string, columnMappings: any) => {
  const csvData = readCSV(file);
  const mappedData = mapColumns(csvData, columnMappings);
  const { validData, invalidData, validationErrors } = validateData(mappedData);
  return { validData, invalidData, validationErrors };
};
