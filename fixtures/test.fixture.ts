import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { LoginActions } from '../actions/login.actions';

type Pages = {

    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    loginActions: LoginActions;

};

export const test = base.extend<Pages>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },

    loginActions: async ({ loginPage }, use) => {
        await use(new LoginActions(loginPage));
    }

});

export { expect } from '@playwright/test';