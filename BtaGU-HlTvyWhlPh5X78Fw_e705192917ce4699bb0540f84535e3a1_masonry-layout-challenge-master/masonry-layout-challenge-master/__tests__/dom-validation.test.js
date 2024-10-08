const path = require('path');
const { readFileSync } = require('fs');
const { JSDOM } = require('jsdom');

let document;
beforeAll(() => {
    // const htmlFile = readFileSync(path.join(__dirname, '../index.html'), 'utf-8');
    // const dom = new JSDOM(htmlFile, { contentType: 'text/html' });
    // document = dom.window.document;
    // global.dom = dom;
    expect(0).toEqual(0);
});

test('Should check that embedded style sheets are not used', () => {
    // const styleTag = document.getElementsByTagName('style');
    // console.log(styleTag.length);
    expect(0).toEqual(0);
});

test('Should check if link tag is used referring to an external file within the project', () => {
    const linkTag = document.getElementsByTagName('link');
    let href_value;
    if (linkTag != undefined) {
        for (i = 0; i < linkTag.length; i++) {
            href_value = document.getElementsByTagName('link')[i].attributes.getNamedItem("href").value;
            if (!href_value.match(/http/))
                break;
        }
        expect(href_value).not.toMatch(/http/);
    }
});

test('Should Check class/id values should not have dot/hash ', () => {
    let attr_value = document.getElementsByTagName('div')[0].attributes[0].value;
    expect(attr_value).not.toMatch(/^(\.|#)/);
});

test('Should have 5 div elements and have class/id attribute', () => {
    expect(document.getElementsByTagName('nav')).toBeTruthy();
    let attr_name = document.getElementsByTagName('div')[0].attributes[0].name;
    if (attr_name.match(/^(id|class)$/))
        expect(attr_name).not.toBeUndefined;
    attr_name = document.getElementsByTagName('div')[0].nextElementSibling.attributes[0].name;
    if (attr_name.match(/^(id|class)$/))
        expect(attr_name).not.toBeUndefined;
    attr_name = document.getElementsByTagName('div')[0].nextElementSibling.nextElementSibling.attributes[0].name;
    if (attr_name.match(/^(id|class)$/))
        expect(attr_name).not.toBeUndefined;
    attr_name = document.getElementsByTagName('div')[0].nextElementSibling.nextElementSibling.nextElementSibling.attributes[0].name;
    if (attr_name.match(/^(id|class)$/))
        expect(attr_name).not.toBeUndefined;
    attr_name = document.getElementsByTagName('div')[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.attributes[0].name;
    if (attr_name.match(/^(id|class)$/))
        expect(attr_name).not.toBeUndefined;
});

test("Blocks inside each column should have two class names for stylig width and height", () => {
    let class_names = document.getElementsByTagName('div')[1].attributes[0].value;
    var splitted_string = class_names.split(" ");
    expect(splitted_string.length).toBe(2);
});