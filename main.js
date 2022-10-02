import { NivsBetterJournal } from "./nivs-better-journal";

(function Main() {
    Hooks.on("init", () => {
        game.niv = game.niv || {}
        game.niv["better-journal"] = new NivsBetterJournal;
    })
})();