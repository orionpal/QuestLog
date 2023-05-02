import { App } from "obsidian";

// hope this is fine
export async function generateQuestLog(app: App) {

    // make task blocks for eating, separating by some TODO: method
    const taskFormat = `- [ ] `
    // Morning phase
    const morning = taskFormat + `8:00 | brush teeth, eat, think about what's going on in the day. (visit [[planning]] for guidelines?)`
    // Day phase
    const day = taskFormat + `10:00 | Live ur life`
    const eating = taskFormat + `12:00 | eat some fuuuucking shit my dude`
    const daypart2 = taskFormat + `14:00 | do some exercise idk`
    const eatingpart2 = taskFormat + `19:00 | eat some shiiieeeeeeeet`
    // end phase
    const ending = taskFormat + `23:00 | do some planning for tomorrow, read or somethin, no computer`
    // sleep phase
    const sleep = taskFormat + `24:00 | go sleep mother fucker`
    // make task block for exercising? Potentially from file
    // make task block for expression
    // make task block for intelllect
    // Yeeeeee I think that's it, how are we gonna organize the timing though?
    const body = [morning, day, eating, daypart2, eatingpart2, ending, sleep]
    const date = new Date().toISOString().substr(0, 10);
    // For now let's just create a new note
    // Okay woo this workss (make sure file extension is included)
    const file = app.vault.create(`${date}.quest-log.md`, body.join('\n'));

    return file
}