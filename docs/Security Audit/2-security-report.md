# Security Audit Report

### Date: 15.06.2025

### 1. Git Tracking of Dependencies

**Check**: Ensure `package-lock.json` is committed to git and not ignored by `.gitignore`.

**Result**:  
✅ The project has `package-lock.json` file, which is tracked by Git. The file is not listed in `.gitignore`.



### 2. Vulnerability Scan with `npm audit`

**Check**: Run `npm audit fix` and ensure no vulnerabilities are found.

**Result**:  
✅ 0 vulnerabilities found after running `npm audit fix`.



### 3. Enable GitHub Dependabot Alerts

**Check**: Enable GitHub Dependabot for the repository and review security alerts.

**Result**:  
✅ Dependabot is enabled.  
One alert was detected regarding the `vite` version and has been resolved by updating the package.



### 4. Snyk Security Analysis

**Check**: Upload `package-lock.json` to [snyk.io](https://snyk.io) and review issues.

**Result**:  
✅ All dependencies were analyzed. 26 out of 29 packages are secure.


- **`clsx`**:

  - Low maintenance (last release over a year ago)
  - Limited number of contributors
  - **No critical issues**, consider replacing in future

- **`shadcn-dropzone`**:

  - Low popularity (~4.7k downloads/week)
  - Limited number of contributors
  - Actively maintained (last commit 3 months ago)
  - **No critical issues**, consider replacing in future

- **`@mobily/ts-belt`**:
  - Low maintenance (last commit 2 years ago)
  - High usage (~132k downloads/week)
  - **No critical issues**, consider replacing in future

### 5. Enable Socket.dev

Socket.dev was enabled and used to analyze the project dependencies for suspicious or risky behavior.

**Result**: No alerts were retrieved, indicating that no suspicious activity was detected in the scanned packages.


## 6. Manual Package Review

**Check**: Manually verify package metadata:

- Authors and maintainers
- Number of contributors
- Release history and recency
- Weekly download count
- Dependency tree complexity

**Result**:  
✅ All packages were reviewed.  Public information about the packages was attentively researched. No suspicious, deprecated, or unmaintained packages were found. All package authors are reliable and, in most cases, well-known. No packages show signs of suspicious ownership or unverified maintainers.



## 7. Absence of Zero-Day Vulnerabilities

To detect and mitigate zero-day vulnerabilities, the following measures were implemented:

1. Dependabot security updates were enabled. It automatically alerts about known CVEs and outdated dependencies.
2. Snyk was used to scan for known vulnerabilities, continuously monitor dependencies.
3. Socket.dev was used to detect malware, unexpected code behavior, and supply chain attacks, which is often linked to zero-day issues


## 8. Access Token Privileges (Principle of Least Privilege)

**Check**: Review access tokens and their permission scope.

**Result**:  
✅ No access tokens are used in the project.

---

## 9. Subresource Integrity (SRI)

**Check**: Verify if external resources (e.g., via CDN) use Subresource Integrity.

**Result**:  
✅ No external CDN resources are used.

---

## 10. Content Security Policy

**Check**: Ensure a CSP is configured to restrict external resources.

**Result**:  
✅ A CSP is configured to allow all resources, except images, to be loaded only from the same origin (`'self'`). Images are permitted from any external source, as they can be added via user-provided URLs. To prevent XSS attacks, input validation is implemented.
