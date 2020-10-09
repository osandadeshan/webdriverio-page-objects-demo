export default class Page {

    open(path) {
        browser.url(`https://the-internet.herokuapp.com${path}`);
    }
    
}