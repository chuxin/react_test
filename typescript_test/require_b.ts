import a = require("./require_a");
export class B implements a.aaa {
    public draw() {
        console.log("B is drawn -- require");
    }
}