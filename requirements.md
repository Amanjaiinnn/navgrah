# Project Requirements

This is a Next.js/React project, so dependencies are installed with `npm` from `package.json` and `package-lock.json`. The Node equivalent of a Python virtual environment is:

- Node version pinned with `.nvmrc`
- Project-local dependencies installed into `node_modules/`
- Exact package versions locked in `package-lock.json`

## Runtime

- Node.js 20 LTS
- npm 10 or newer

## Production Dependencies

- `next` `^14.2.35` - Next.js App Router framework
- `react` `^18.3.1` - React UI library
- `react-dom` `^18.3.1` - React DOM renderer
- `framer-motion` `^12.42.0` - subtle page/section animations
- `lucide-react` `^1.22.0` - icon library
- `react-hook-form` `^7.80.0` - contact form state handling
- `zod` `^4.4.3` - contact form validation schema
- `@hookform/resolvers` `^5.4.0` - connects Zod validation to React Hook Form

## Development Dependencies

- `typescript` `^5` - TypeScript compiler
- `tailwindcss` `^4` - utility CSS framework
- `@tailwindcss/postcss` `^4` - Tailwind PostCSS integration
- `eslint` `^8.57.1` - linting
- `eslint-config-next` `^14.2.35` - Next.js ESLint rules
- `@types/node` `^20` - Node.js TypeScript types
- `@types/react` `^18.3.23` - React TypeScript types
- `@types/react-dom` `^18.3.7` - React DOM TypeScript types

## Environment Variables

Create `.env.local` from `.env.example`:

```env
NEXT_PUBLIC_PHONE_1=9837556611
NEXT_PUBLIC_PHONE_2=9568551133
NEXT_PUBLIC_WHATSAPP_NUMBER_1=919837556611
NEXT_PUBLIC_WHATSAPP_NUMBER_2=919568551133
NEXT_PUBLIC_CONTACT_EMAIL=raanijain15@gmail.com
NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-from-web3forms.com
```

`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is optional during local development. If it is missing, the contact form falls back to opening an email draft.

## Install Command

```bash
npm install
```

For exact locked installs, especially on deployment or another machine:

```bash
npm ci
```
