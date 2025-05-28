# ADR 1: Implementation of Internationalization

It is very convenient for people to use a web application which supports their own language. It opens opportunities to grow our user base in different regions.

## Decision

We will implement internationalization support in the application using the react-i18next library. We will keep all text content in an external JSON file. We will also add the ability for users to manually switch languages.

## Rationale

**Advantages of `react-i18next`:**
- Large and active community
- Supports lazy-loading of translations
- Has many plugins which can cover all our demands
- Supports react concurrent mode

**Disadvantages:**
- The library with its plugins are quite heavy and will increase the bundle size

**Rejected alternatives:**
We considered alternatives such as `react-localization`, `react-intl`, and `@lingui/react`. Although some of them has smaller bundle sizes, they would require writing additional code to support features like components update, lazy loading, or fallback handling.

## Status

Proposed

## Consequences

**Positive:**
- Improved usability for non-English-speaking users
- Increased potential user base
- Ability to promote the app in multiple regions

**Negative:**
- Increased project complexity
- Longer onboarding time for new developers
- Possible negative impact on some Core Web Vitals metrics, such as LCP and FID, due to the increased bundle size.


# ADR 2: Implement CI/CD Pipelines

Manual deployment is slow, hard to manage, and requires constant human involvement.  
There can be inconsistencies between local development, staging, and production environments, making it difficult to deploy new changes.

## Decision
We will implement CI/CD pipelines using **GitHub Actions**, along with **Docker** to containerize the application.  
Linters and tests will run automatically before each deployment to ensure code quality and stability.

## Rationale
- Automated deployment significantly increase the speed of the process.
- There is no need for a separate developer to handle deployments.
- Docker containers ensure that the app behaves the same across all environments.
- Automating the deployment process reduces human errors.
- Automated testing and linting help us to be sure about code quality and project stability.

## Consequences

### Positive
- Reduced deployment time, human errors.
- Environments consistency
- Easier onboarding of new developers.
- No need to manage the deployment process manually.

### Negative
- We need to have a developer with good qualification and experience in this area.
- Increasing of project complexity.