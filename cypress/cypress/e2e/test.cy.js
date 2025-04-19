describe('QA Code Quiz - Login Functionality Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  // UI Checks
  it('displays the main site title on load', () => {
    cy.contains('qa.code-quiz.dev').should('be.visible');
  });

  it('shows the username input field with placeholder', () => {
    cy.get("input[placeholder='Enter Username']").should('be.visible');
  });

  it('shows the password input field with placeholder', () => {
    cy.get("input[placeholder='password']").should('be.visible');
  });

  it('renders the login button properly', () => {
    cy.get('.sc-bZQynM.cGmBje').contains('LOGIN').should('be.visible');
  });

  it('shows user instruction message for account access', () => {
    cy.contains('If you do not have an account, contact an admin').should('be.visible');
  });

  // Visual Feedback Tests
  it('updates username input border color when typing', () => {
    cy.get("input[placeholder='Enter Username']")
      .should('have.css', 'border-color', 'rgb(4, 138, 191)')
      .type('TestUser')
      .should('have.css', 'border-color', 'rgb(245, 68, 88)');
  });

  it('updates password input border color when typing', () => {
    cy.get("input[placeholder='password']")
      .should('have.css', 'border-color', 'rgb(4, 138, 191)')
      .type('TestPass')
      .should('have.css', 'border-color', 'rgb(245, 68, 88)');
  });

  // Negative Scenarios
  it('rejects login when credentials are incorrect', () => {
    cy.get("input[placeholder='Enter Username']").type('WrongUser');
    cy.get("input[placeholder='password']").type('WrongPass');
    cy.get('.sc-bZQynM.cGmBje').click();
    cy.contains('Invalid username or password').should('be.visible');
  });

  // Positive Scenario
  it('logs in successfully with valid credentials and displays dashboard', () => {
    cy.get("input[placeholder='Enter Username']").type('SomeUser_name');
    cy.get("input[placeholder='password']").type('TopSecret1234!');
    cy.get(".sc-bZQynM.cGmBje").click({ force: true });

    // Confirm dashboard content is visible
    cy.contains('Hello SomeName').should('be.visible');
    cy.contains('Name').should('be.visible');
    cy.contains('Fruit').should('be.visible');
    cy.contains('Movie').should('be.visible');
    cy.contains('Number').should('be.visible');

    // Confirm logout functionality
    cy.get('.sc-bxivhb.fqCnAP').contains('LOGOUT').should('be.visible').click({ force: true });
  });
});
