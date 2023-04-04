import * as moment from "moment";
import { App } from "obsidian";

// hope this is fine
export async function generateQuestLog(app: App) {

    const date = moment().format('YYYY-MM-DD');
    const filename = `${date}.md`;
    // For now let's just create a new note
    // Okay woo this workss (make sure file extension is included)
    const file = app.vault.create("quest-log.md", "Hey I'm a generated file!");

    return file
}