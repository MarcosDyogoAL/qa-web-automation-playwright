import { Page, Locator } from '@playwright/test';

export class SidebarComponent {

    readonly logoutButton: Locator;

    constructor(private page: Page) {

        this.logoutButton = page.locator('#logout_sidebar_link');

    }

    async logout() {
        await this.logoutButton.click();
    }

}