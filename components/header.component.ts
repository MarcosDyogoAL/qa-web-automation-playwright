import { Locator } from '@playwright/test';
import { BaseComponent } from './base.component';

export class HeaderComponent extends BaseComponent {

    readonly shoppingCart: Locator;
    readonly burgerMenu: Locator;

    constructor(page) {
        super(page);

        this.shoppingCart = page.locator('.shopping_cart_link');
        this.burgerMenu = page.locator('#react-burger-menu-btn');

    }

    async openMenu() {
        await this.burgerMenu.click();
    }

}