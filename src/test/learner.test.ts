import { validateData } from "../services/learner.service";

describe("LearnerService", () => {
  describe("validateData", () => {
    it("should validate learner data correctly", () => {
      const learners = [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          phone: "1234567890",
          campusName: "Campus A",
          programName: "Program A",
        },
        // Add more test cases as needed
      ];

      const { validData, invalidData, validationErrors } =
        validateData(learners);

      expect(validData.length).toBeGreaterThan(0);
      expect(invalidData.length).toBe(0);
      expect(validationErrors.length).toBe(0);
    });

    it("should handle invalid learner data correctly", () => {
      const learners = [
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "", // Invalid email
          phone: "1234567890",
          campusName: "Campus B",
          programName: "Program B",
        },
        // Add more test cases as needed
      ];

      const { validData, invalidData, validationErrors } =
        validateData(learners);

      expect(validData.length).toBe(0);
      expect(invalidData.length).toBeGreaterThan(0);
      expect(validationErrors.length).toBeGreaterThan(0);
    });
  });
});
