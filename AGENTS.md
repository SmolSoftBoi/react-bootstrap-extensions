# AGENTS.md – React Bootstrap Extensions (Core)

## 🛠️ Tooling
- **Package manager:** Yarn (`yarn install` before every run).
- **Node version:** ≥ 16 LTS (check `.nvmrc` if present).
- **Build:** `yarn build` → outputs CJS, ESM & UMD bundles to `dist/`.
- **Storybook dev:** `yarn start` (port 6006).

## 🎨 Code Style
- Run **ESLint + Prettier** with  
  ```bash
  yarn lint        # check
  yarn lint-fix    # fix + format
````

* ESLint config extends React, TypeScript & Prettier rules.
  *Never* commit with lint errors; CI will block the PR.

## 🔍 Testing

* Unit / RTL tests live beside components as `*.test.tsx`.
* Execute all checks with

  ```bash
  yarn test        # (default runs lint; add jest if/when tests exist)
  ```

## 🚀 Publishing

1. Update `package.json` version (SemVer).
2. `yarn build` (runs automatically on `yarn publish`).
3. `yarn publish` — publishes `dist/` and typed declarations.

## 🛡️ Security & Audits

* Weekly Dependabot covers deps; run `yarn audit` to triage CVEs.
* Disallow `child_process.exec` unless explicitly documented.

## 📑 Pull-Request Checklist

* **PR title:** `feat: …`, `fix: …`, `chore: …` (Conventional Commits).
* **Body must include:**

  1. Purpose/issue link.
  2. Before/after screenshot or Storybook link if visual change.
  3. Tick-box confirming lint & build pass (`yarn lint && yarn build`).
* Target branch: **`main`**. CI runs lint + build on Linux, macOS, Windows.

## ♻️ Eco Hints

* Keep bundle < 30 kB gzip where feasible; tree-shake imports.
* Flag images > 150 kB in docs/demos.
