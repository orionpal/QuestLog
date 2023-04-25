import { App } from "obsidian";

// hope this is fine
export async function generateQuestLog(app: App) {

    // Look through app for questlog.config
    
    const taskFormat = `- [ ]`
    const body = "Hey I'm a generated file! I totally have today's date"
    const date = new Date().toISOString().substr(0, 10);
    // For now let's just create a new note
    // Okay woo this workss (make sure file extension is included)
    const file = app.vault.create(`${date}.quest-log.md`, body);

    return file
}