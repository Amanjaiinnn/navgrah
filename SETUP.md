# Navgrah by Raani Setup

This project does not use a Python `venv` because it is a Next.js/React project. The equivalent isolation setup is:

- `.nvmrc` pins the Node.js version to Node 20.
- `node_modules/` stores dependencies locally inside this project.
- `package-lock.json` locks exact dependency versions.
- `.env.local` stores local environment variables and is not committed.

## 1. Install nvm for Windows

Install `nvm-windows` from:

```text
https://github.com/coreybutler/nvm-windows/releases
```

After installation, close and reopen Git Bash.

## 2. Create/activate the Node environment

Run these in Git Bash:

```bash
nvm install 20
nvm use 20
node -v
npm -v
```

Expected Node version:

```text
v20.x.x
```

If `nvm` is still not found in Git Bash, run the `nvm install 20` and `nvm use 20` commands once in PowerShell or Command Prompt, then reopen Git Bash.

## 3. Go to the project

```bash
cd /d/raani
```

## 4. Install requirements/dependencies

For normal local development:

```bash
npm install
```

For a clean locked install using `package-lock.json`:

```bash
npm ci
```

Use `npm install` the first time if you plan to add or update packages. Use `npm ci` when you want an exact repeatable install.

## 5. Configure environment variables

Create `.env.local` in the project root. You can use `.env.example` as the template:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```env
NEXT_PUBLIC_PHONE_1=9837556611
NEXT_PUBLIC_PHONE_2=9568551133
NEXT_PUBLIC_WHATSAPP_NUMBER_1=919837556611
NEXT_PUBLIC_WHATSAPP_NUMBER_2=919568551133
NEXT_PUBLIC_CONTACT_EMAIL=raanijain15@gmail.com
NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-from-web3forms.com
```

The Web3Forms key is optional during local testing. Without it, the form opens a `mailto:` draft instead of submitting to Web3Forms.

## 6. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 7. Production checks

```bash
npm run lint
npm run build
```

## 8. Useful files

- `requirements.md` lists all project requirements in readable form.
- `package.json` is the actual npm requirements file.
- `package-lock.json` locks exact installed versions.
- `.env.example` lists environment variables.
- `.nvmrc` pins the Node version.
