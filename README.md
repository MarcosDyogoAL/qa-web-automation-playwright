![Playwright](https://img.shields.io/badge/tested%20with-playwright-45ba4b.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18-green)

# QA Web Automation Framework – Playwright

End-to-End test automation framework built with **Playwright** and **TypeScript**, following industry best practices such as Page Object Model, Component Objects, Fixtures, and Test Data Factory.

This project demonstrates a scalable and maintainable approach for modern QA automation used in real-world engineering teams.

---

# 🚀 Technologies

* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)
* Component Object Pattern
* Fixtures (Dependency Injection)
* Test Data Factory
* GitHub Actions (CI/CD)

---

# 📁 Project Structure

```
qa-web-automation-playwright
│
├── actions
│   └── login.actions.ts
│
├── components
│   ├── base.component.ts
│   ├── header.component.ts
│   └── sidebar.component.ts
│
├── pages
│   ├── base.page.ts
│   ├── login.page.ts
│   └── inventory.page.ts
│
├── fixtures
│   └── test.fixture.ts
│
├── factories
│   └── user.factory.ts
│
├── tests
│   ├── login.spec.ts
│   └── logout.spec.ts
│
├── utils
│   └── env.ts
│
├── .github/workflows
│   └── playwright.yml
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# 🧱 Architecture

This framework follows a layered architecture commonly used in modern automation frameworks.

### Pages

Represents application pages and their UI elements.

### Components

Reusable UI components shared across multiple pages (e.g., header, sidebar).

### Actions

Encapsulates business flows and complex user interactions.

### Fixtures

Provides dependency injection for pages and actions, improving test readability.

### Factories

Responsible for generating test data dynamically.

---

# ▶️ Running Tests

Install dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install
```

Run all tests:

```
npx playwright test
```

Run tests with UI mode:

```
npx playwright test --ui
```

---

# 📊 Test Report

After running tests, open the Playwright HTML report:

```
npx playwright show-report
```

The report includes:

* execution results
* screenshots on failure
* trace viewer
* video recordings (if enabled)

---

# ⚙️ Configuration

Main configuration file:

```
playwright.config.ts
```

Key features enabled:

* Parallel execution
* Automatic screenshots on failure
* Trace collection
* Video recording for failed tests

---

# 🔁 Continuous Integration

This project uses **GitHub Actions** for CI/CD.

Pipeline runs automatically on:

* push
* pull request

CI steps:

1. Install dependencies
2. Install Playwright browsers
3. Execute automated tests
4. Generate reports

Workflow file:

```
.github/workflows/playwright.yml
```

---

# 🧪 Example Test

```
test('should login successfully', async ({ loginActions, page }) => {

  await loginActions.loginAsStandardUser();

  await expect(page).toHaveURL(/inventory/);

});
```

---

# 📈 Future Improvements

* Allure Report integration
* Test data management
* Multi-environment execution
* API + UI hybrid testing
* Slack notifications for pipeline results

---

# 👨‍💻 Author

QA Automation passionate about building scalable and maintainable test frameworks.

---

# ⭐ Purpose of this project

This repository was created to demonstrate **QA automation practices**, including test architecture, maintainability, and CI/CD integration.