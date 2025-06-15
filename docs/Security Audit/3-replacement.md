# Package replacement decision

We decided to replace the `shadcn-dropzone` package with `react-dropzone`.  
Although `shadcn-dropzone` does not have known security vulnerabilities, it has several downsides:

- Low level of maintenance
- Small number of contributors
- Small community

### 🔍 Steps taken to define security of `react-dropzone`

#### 1. Check for Security Issues via Snyk

- No known security issues detected.
- Very popular — over 3,523,628 downloads per week.
- Actively maintained — last release was 4 months ago.
- Smaller dependency tree and package size compared to `shadcn-dropzone`.
- Dependencies used by `react-dropzone` also do not have security issues.

#### 2. Check Public Information About the Package and Maintainers

- Consistent download history.
- No suspicious changes in file count or unpacked size across versions.
- Maintainers actively contribute to other open source packages.
- housands of stars on GitHub.
- No known mentions of security concerns in public sources or developer forums.

#### 3. Review API Differences

- The new package has a slightly different API but remains flexible and convenient to use.
- Only one file in the codebase required updating.

---

#### 4. Run Vulnerability Check with `npm audit`

- Removed `shadcn-dropzone` and installed `react-dropzone`.
- Executed `npm audit fix`.
- No vulnerabilities detected.

---

#### 5. Subresource Integrity Check

- No external CDN usage — the package is bundled into the final build.
- SRI validation is not relevant.

---

#### 6. Content Security Policy Check

- The package code is included in the final bundle and served from the same origin.
- No changes required to CSP configuration.
