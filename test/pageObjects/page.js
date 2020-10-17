export default class Page {
    open(path) {
        browser.url(`http://automationpractice.com${path}`);
    }
}