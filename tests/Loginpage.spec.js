import {test, expect} from '@playwright/test';

test('Login page',async({page})=>{

    await page.goto('https://www.demoblaze.com/');

    await page.click('#login2');

    await page.fill("#loginusername",'Suraj1994');

    await page.fill("#loginpassword",'Test@123')

    await page.click("//button[normalize-space()='Log in']")

    const logoutlink=page.locator("//a[@id='logout2']")

    console.log(logoutlink)

    await expect(logoutlink).toBeVisible();

    await page.close()
}

)