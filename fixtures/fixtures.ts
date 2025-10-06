import {test as base} from '@playwright/test';
import { FormPage } from '../pages/formPage';


type MyFixtures = {
    formPage : FormPage;
}

export const test = base.extend<MyFixtures>({
    formPage : async ({page}, use) => {
        await use(new FormPage(page));
    }
});

export { expect } from '@playwright/test';