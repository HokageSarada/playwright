// @ts-check
const { test } = require('@playwright/test');
const { ClassAttributePage } = require('../models/class-attribute.model');

test('Clicking blue button', async ({ page }) => {
    // await page.pause()
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss()
    })
    const classAttributePage = new ClassAttributePage(page)
    await classAttributePage.navigateToClassAttributePage()
    await classAttributePage.clickBlueButton()
})