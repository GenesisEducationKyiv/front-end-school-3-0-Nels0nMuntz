# ADR 3: Cover the codebase with automated tests

Each time a developer changes existing functionality, they must be sure that nothing else is broken. Manual tests are slow, some bugs can be missed. Refactoring is difficult without a test safety net.

## Decision
We will cover the codebase with tests, including:
- **Unit tests** for helper functions and components.
- **Integration tests** for testing how components or modules work together.
- **End-to-end (E2E) tests** for critical user flows.

We will use **Jest** for usnit test as it is good for tesing pure functions, hooks, and small components. It also provides built-in support for mocking, snapshot testing, coverage reporting. 
We also will use **@testing-library/react** for testing React components.

For integration tests we will use **Jest** and **React Testing Library** and we will use **MSW (Mock Service Worker)** for mocking network requests during integration tests.

For testing user flows we will use **Playwright** as it is modern, reliable E2E framework. It supports multiple browsers, has built-in debugging tools which makes tests fast, stable, and easy to debug.

We will also integrate these tests into the CI/CD pipeline and run them on every pull request and deployment.

## Rationale
Automated testing will allow us:

- Change existing functionality and add new features without fear of breaking the app.  
- Do refactoring safely and efficiently. 
- Consider test as a living documentation.   
- Reduce reliance on repetitive manual testing.

### Restrictions & Requirements
- Writing tests requires additional development time.
- Developers should have strong qualifications and relevant experience.

## Status
Proposed

## Consequences

### Positive
- New changes are less likely to introduce bugs.
- Refactoring becomes faster and safer.  
- Fewer manual testers required  
- Dangerous changes are caught before deployment.

### Negative
- We spend additional time on development.
- Additional requirements for onboarding new developers.
- Tests need to be maintained and updated whenever the codebase changes.