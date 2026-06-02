---
name: ui-ux-pro-max
description: "UI/UX Pro Max design workflow for web and mobile apps. Use for design systems, UI/UX guidance, landing pages, dashboards, and implementation recommendations."
argument-hint: "<product type> <industry> <keywords>"
---

# UI/UX Pro Max

Use this prompt when you need UI/UX recommendations, design-system generation, or implementation guidance for this portfolio or similar web apps.

Source assets live in [ui-ux-pro-max](./ui-ux-pro-max/).

## Prerequisites

Check that Python is available:

```powershell
python --version
```

If Python is missing, install it first, then restart VS Code so the prompt can use it.

## How To Use

Start with a design-system search:

```powershell
python ./ui-ux-pro-max/scripts/search.py "<product type> <industry> <keywords>" --design-system -p "Project Name"
```

For example:

```powershell
python ./ui-ux-pro-max/scripts/search.py "beauty spa wellness service" --design-system -p "Serenity Spa"
```

If you want the result saved for reuse across pages:

```powershell
python ./ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```

For page-specific overrides:

```powershell
python ./ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" --page "dashboard"
```

## Follow-Up Searches

Use domain searches for deeper guidance:

```powershell
python ./ui-ux-pro-max/scripts/search.py "animation accessibility" --domain ux
python ./ui-ux-pro-max/scripts/search.py "elegant luxury serif" --domain typography
python ./ui-ux-pro-max/scripts/search.py "layout responsive form" --stack html-tailwind
```

## When To Use

- UI and UX redesign requests
- Landing pages and portfolio pages
- Dashboard, product, and SaaS screens
- Typography, color, accessibility, and motion guidance

## Notes

- Default stack: `html-tailwind`
- Keep accessibility and responsiveness in the design system from the start
- Use `--persist` when you want a reusable design system for the project