import k from "./main.js";

function createOuterWalls(wallLength,wallHeight,wallThickness){

    k.add([
        rect(wallLength, wallThickness),
        area(),
        body({ isStatic: true }),
        pos(0, 0),
        color("#656564"),
        "block",
        "wall",
    ]);
    k.add([
        rect(wallThickness, wallHeight),
        area(),
        body({ isStatic: true }),
        pos(wallLength, 0),
        color("#656564"),
        "block",
        "wall",
    ]);

    k.add([
        rect(wallThickness, wallHeight),
        area(),
        body({ isStatic: true }),
        pos(0, 0),
        color("#656564"),
        "block",
        "wall",
    ]);

    k.add([
        //special case <3
        rect(wallLength + wallThickness, wallThickness),
        area(),
        body({ isStatic: true }),
        pos(0, wallHeight),
        color("#656564"),
        "block",
        "wall",
    ]);
}

let EXPORTS = {
    createOuterWalls: createOuterWalls
}

export default EXPORTS