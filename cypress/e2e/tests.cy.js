import { careerPage } from "../pages/careers";
import { companyPage } from "../pages/company";

describe("various tests to assert info and collect data", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it("should verify info on company page", () => {
    cy.visit("/");

    cy.contains("About Us").trigger("mouseover");
    cy.contains("Company").click({ force: true });

    cy.get(companyPage.locators.pageList).within(() => {
      cy.contains("li", "HQ").should("be.visible");
      cy.contains("li", "Founded").should("be.visible");
      cy.contains("li", "Size").should("be.visible");
      cy.contains("li", "Consulting Locations").should("be.visible");
      cy.contains("li", "Engineering Hubs").should("be.visible");
      cy.contains("li", "Clients").should("be.visible");
      cy.contains("li", "Certifications").should("be.visible");
    });

    cy.url().should("contain", "about-us/company");
  });

  it("should extract all job titles and locations and write to a text file", () => {
    cy.visit("/");
    cy.contains("Careers").click({ force: true });

    const jobData = [];

    cy.get(careerPage.locators.openingsList)
      .each((job) => {
        const title = job.find(careerPage.locators.jobTitle).text();
        const location = job.find(careerPage.locators.jobLocation).text();

        jobData.push(`${title}, ${location}`);
      })
      .then(() => {
        const jobDataStr = jobData.join("\n");

        cy.writeFile("cypress/job_positions.txt", jobDataStr);
        cy.log("Job data has been written to job_positions.txt");
      });
  });
});
