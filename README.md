# Fullstack Boilerplate

A backbone for your coding challenge.

## Contents

- [Backend service](app-backend) - a Rails service with a `/ping` endpoint. Extend with your code.
- [Frontend app](app-frontend) - an Ember app. Extend with your code.
- [E2E test suites](cypress/integration) - a backend and a frontend Cypress test suites. Extend with your tests.
- [Pipeline](.github/workflows/tests.yml) - a test Runner that executes the Cypress tests on push to a branch other than `master`/`main`.

## Tech Stack

### Backend

- Ruby 3.1.2 
- Rails 7.0.3.1 

#### Additional libs

- sqlite3 (SQLite connection)
- rack-cors (CORS support)
  
### Frontend

- Ember
- Vite

### Misc

- Cypress
- GitHub Actions

## Getting started

1. Make sure the required version of Ruby (3.1.2) is configured on your local env.

```bash
curl -sSL https://get.rvm.io | bash
rvm install 3.1.2
```

<details>
  <summary>If you prefer using rbenv</summary>
  
  You can see the steps for intalling rbenv [here](https://github.com/rbenv/rbenv#installation). After installing it, run:
  
  ```bash
  rbenv init
  rbenv install 3.1.2
  rbenv local 3.1.2
  ```
  
</details>

2. Make sure npm & node are configured on your local env. You can download those distributions for your platform [here](https://nodejs.org/en/download/)

3. Build your app.

```bash
npm install
npm run build # both Rails backend and Ember frontend
npm run build:backend # only Rails backend
npm run build:frontend # only Ember frontend
```

4. Start your app.

```bash
npm install
npm run start # both Rails backend and Ember frontend
npm run start:backend # only Rails backend
npm run start:frontend # only Ember frontend
```

5. Run the Cypress tests.

```bash
npm run test # run project tests under `cypress/integration`
```
