import a = require("./require_a");
export class C implements a.aaa {
    public draw () {
        console.log("C is drawn -- require");
    }
}