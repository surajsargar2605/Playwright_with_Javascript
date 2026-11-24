import {test, expect} from  '@playwright/test';


test('Locator',async({page})=>{


    await page.goto('https://www.demoblaze.com/');

    await page.getByRole('link', {name: 'Log in'}).click();
    
    await page.getByLabel('Username:').fill('Suraj1994');

    await page.getByLabel('Password:').fill('Test@123');

    await page.getByRole('button', {type:'button'}).click();

})