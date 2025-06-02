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

**Alternatives:**
We considered alternatives such as `react-localization`, `react-intl`, and `@lingui/react`. Although some of them has smaller bundle sizes, they would require writing additional code to support features like components update, lazy loading, or fallback handling. So, react-i18next is the best choice.

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