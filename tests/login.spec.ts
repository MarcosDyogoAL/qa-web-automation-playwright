import { test, expect } from '../fixtures/test.fixture';

test('should login successfully', async ({ loginActions, page }) => {

    await loginActions.loginAsStandardUser();

    await expect(page).toHaveURL(/inventory/);

});

test('should logout successfully', async ({ loginActions, inventoryPage,  page}) => {

    await loginActions.loginAsStandardUser();

    await inventoryPage.header.openMenu();

    await inventoryPage.sidebar.logout();

    await expect(page).toHaveURL(/saucedemo/);

});