exports.ClassAttributePage = class ClassAttributePage {
    constructor(page){
        this.page = page
        this.classAttributeUrl = page.goto("/classattr")
        this.blueButton = page.locator(".btn-primary")
    }

    async navigateToClassAttributePage(){
        await this.classAttributeUrl
    }

    async clickBlueButton() {
        await this.blueButton.click()
    }
}