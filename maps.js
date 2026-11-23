import k from "./main.js";



export function addMap1() {
    let map1 = [[
k.rect(505, 25),
k.pos(1080, 190),
k.color("#163325"),
k.body({ isStatic: true }),
k.area(),

"block",
    ],

    [
k.rect(890, 25),
k.pos(110, 345),
k.color("#163325"),
k.area(),
k.body({ isStatic: true }),
"block",
    ],

    [
k.rect(160, 25),
k.pos(2240, 250),
k.color("#163325"),
k.area(),
k.body({ isStatic: true }),
"block",
    ],

    // Upper-middle platforms
    [
k.rect(205, 25),
k.pos(0, 510),
k.color("#163325"),
k.area(),
k.body({ isStatic: true }),
"block",
    ],

    [
k.rect(150, 25),
k.pos(1400, 470),
k.color("#163325"),
k.area(),
k.body({ isStatic: true }),
"block",
    ],

    [
k.rect(445, 25),
k.pos(1880, 410),
k.color("#163325"),
k.area(),
k.body({ isStatic: true }),
"block",
    ],

    // Middle platforms
    [
k.rect(480, 25),
k.pos(85, 655),
k.color("#163325"),
k.area(),
k.body({ isStatic: true }),
"block",
    ],

    [
k.rect(345, 25),
k.pos(785, 655),
k.color("#163325"),
k.area(),
k.body({ isStatic: true }),
"block",
    ],

    [
k.rect(980, 25),
k.pos(1500, 655),
k.color("#163325"),
k.area(),
k.body({ isStatic: true }),
"block",
    ],

    // Lower-middle platforms
    [
k.rect(315, 25),
k.pos(510, 855),
k.color("#163325"),
k.area(),
k.body({ isStatic: true }),
"block",
    ],

    [
k.rect(390, 25),
k.pos(1150, 855),
k.color("#163325"),
k.area(),
k.body({ isStatic: true }),
"block",
    ],

    // Bottom platforms
    [
k.rect(640, 25),
k.pos(260, 1000),
k.color("#163325"),
k.area(),
k.body({ isStatic: true }),
"block",
    ],

    [
k.rect(745, 25),
k.pos(1480, 1000),
k.color("#163325"),
k.area(),
k.body({ isStatic: true }),
"block",
    ]]
    
    map1.forEach((element)=>{k.add(element)})
}

let EXPORTS = {
    addMap1:addMap1,
}

export default EXPORTS;