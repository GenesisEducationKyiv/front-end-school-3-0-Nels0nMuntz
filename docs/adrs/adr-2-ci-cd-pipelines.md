# ADR 2: Implement CI/CD Pipelines

Manual deployment is slow, hard to manage, and requires constant human involvement.  
There can be inconsistencies between local development, staging, and production environments, making it difficult to deploy new changes.

## Decision
We will implement CI/CD pipelines using **GitHub Actions**, along with **Docker** to containerize the application.  

## Rationale
- Automated deployment significantly increase the speed of the process.
- There is no need for a separate developer to handle deployments.
- Docker containers ensure that the app behaves the same across all environments.
- Automating the deployment process reduces human errors.

## Status

Proposed

## Consequences

### Positive
- Reduced deployment time, human errors.
- Environments consistency
- Easier onboarding of new developers.
- No need to manage the deployment process manually.

### Negative
- We need to have a developer with good qualification and experience in this area.
- Increasing of project complexity.