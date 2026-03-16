import { Locator } from '@playwright/test';
import { BasePage } from './base.page';
import environment from "../config/environment";

export class LoginPage extends BasePage {

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page) {
        super(page);

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async goto() {
        await this.navigate(environment.baseURL);
    }

    async login(username: string, password: string) {

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }

}