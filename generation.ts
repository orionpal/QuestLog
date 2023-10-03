import { App, TFile } from "obsidian";
import { QuestLogSettings } from "questlog-settings";

// TODO: Add functionality for optional tasks?
export async function generateQuestLog(app: App, settings: QuestLogSettings) {
    var body = [];
    // Task blocks
    const taskFormat = `- [ ] `;
    // Time stamp land marks
    const startHours = parseInt(settings.StartDay.split(':')[0])
    const startMinutes = settings.StartDay.split(':')[1]

    const morningStartTime = settings.StartDay
    const dayPhase1StartTime = `${startHours + 2}` + ':' + startMinutes
    const dayPhase2StartTime = `${startHours + 10}` + ':' + startMinutes
    const nightPhaseStartTime = `${startHours + 14}` + ':' + startMinutes
    const sleepPhaseStartTime = `${startHours + 16}` + ':' + startMinutes
    
    // Morning phase | 2 hours | upkeep, maintenence, general plan
    const morningMark = `#### ~ ${morningStartTime} Wakeup :D ~` //TODO: Maybe add randomly generated greetings/goodmornings
    body.push(morningMark)

    const morningRitualTag = '#morning-ritual';
    try {
        const morningRituals = getFilesWithTag(app, morningRitualTag)
        const content = await app.vault.read(morningRituals[0]) //  Default to first file found
        const contentLines = content.split("\n");
        for (var line of contentLines) {
            // Make sure we're not pulling tags, maybe I should be more strict about the format of the file
            if (line[0]!='#') {
                body.push(taskFormat + line);
            }   
        }
    } catch(error) {
        body.push(error)
    }

    // Day phase 1 | 8 hours | Intentionally Goal specific activities
    const dayMark = `#### ~ ${dayPhase1StartTime} Time to start your day for real >:3 DID YOU EAT??? ~`
    body.push(dayMark)
    body.push(taskFormat + 'placeholder for "being productive"')
    
    // Day phase 2 | 4 hours | Maleable, could be pretty much anything
    const dayMark2 = `#### ~ ${dayPhase2StartTime} Good job so far! You can relax a bit :) ~`
    body.push(dayMark2)
    body.push(taskFormat + 'placeholder for doing whatever')

    // Night phase | 2 hours | reflect, plan, chill
    const nightMark = `#### ~ ${nightPhaseStartTime} Woooo! Another day down!!! What does tomorrow have in store :O ~`
    body.push(nightMark);
    
    const nightRitualTag = '#night-ritual';
    try {
        const nightRituals = getFilesWithTag(app, nightRitualTag)
        const content = await app.vault.read(nightRituals[0]) //  Default to first file found
        const contentLines = content.split("\n");
        for (var line of contentLines) {
            // Make sure we're not pulling tags, maybe I should be more strict about the format of the file
            if (line[0]!='#') {
                body.push(taskFormat + line);
            }   
        }
    } catch(error) {
        body.push(error)
    }
    
    // sleep phase | 8 hours | Sleep, bitch
    const sleepMark = `#### ~ ${sleepPhaseStartTime} Go sleep mother fucker, NO SCREENS ~`
    body.push(sleepMark);

    // For now let's just create a new note, TODO: add updating functionality? idk
    const date = new Date().toISOString().substring(0, 10);
    // Okay woo this workss (make sure file extension is included)
    const file = app.vault.create(`${date}.quest-log.md`, body.join('\n'));

    return file
}

function getFilesWithTag(app: App, tag: string): TFile[] {
    const allFiles = app.vault.getFiles();
    const filesWithTag = allFiles.filter(
        (file: TFile) => hasTag(app, file, tag)
    )
    return filesWithTag;
}

function hasTag(app: App, file: TFile, tag: string): boolean {
    const tagCaches = app.metadataCache.getFileCache(file)?.tags
    if (!tagCaches) {
        return false;
    }
    for (const tagCache of tagCaches) {
        if (tagCache.tag == tag) {
            return true;
        }
    }
    return false;
  }