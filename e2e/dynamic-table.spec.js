// @ts-check
const { test, expect } = require('@playwright/test');
const { DynamicTablePage } = require("../models/dynamic-table.model")

test("Testing Dynamic Table Page", async ({ page }) => {
    const dynamicTablePage = new DynamicTablePage(page)
    await dynamicTablePage.navigateToDynamicTablePage()
    await dynamicTablePage.getChromeCellContent
    // let chromeCells = await dynamicTablePage.getChromeCellContent(1)
    // let tableHeaders = await dynamicTablePage.getHeaderCPUIndex()
    let chromeCpuPercentage = await dynamicTablePage.getChromeCpuPercentage()
    let validationMessage = await dynamicTablePage.getChromeValidationMessage()
    // console.log(chromeCells);
    // console.log(tableHeaders);
    // console.log(chromeCpuPercentage);
    // console.log(validationMessage);
    expect(chromeCpuPercentage).toMatch(validationMessage)
})