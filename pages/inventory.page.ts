import { Page } from '@playwright/test';
import { HeaderComponent } from '../components/header.component';
import { SidebarComponent } from '../components/sidebar.component';

export class InventoryPage {

    readonly header: HeaderComponent;
    readonly sidebar: SidebarComponent;

    constructor(private page: Page) {

        this.header = new HeaderComponent(page);
        this.sidebar = new SidebarComponent(page);

    }

}