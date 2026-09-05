# Wire Category + Service catalog

- **Done:** Applied user catalog (`CATEGORIES` + `SERVICES`) in `src/data/services.ts`. Sidebar shows categories; routes are `/:categorySlug` and `/:categorySlug/:serviceId`; multi-service categories get tabs; empty KB shows empty state.
- **URLs:** Markdown-link wrappers from paste stripped to plain `http(s)://` strings.
- **Review:** forge-code-reviewer APPROVE; fixed empty-category junk URL redirect + sidebar aria-label.
- **RISK:** false — no security auditor.
