import { LoginPage } from '../pages/login.page';
import {UserFactory} from "../factories/user.factory";

export class LoginActions {

    constructor(private loginPage: LoginPage) {}

    async loginAsStandardUser() {

        const userFactory = UserFactory.standardUser()

        await this.loginPage.goto();

        await this.loginPage.login(
            userFactory.username,
            userFactory.password
        );

    }

}