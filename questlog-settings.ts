import QuestLog from "main";
import { App, PluginSettingTab, Setting } from "obsidian";


export interface QuestLogSettings {
	StartDay: string;
	SleepDuration: string;
	NumOfMeals: number;
}

export const DEFAULT_SETTINGS: QuestLogSettings = {
	StartDay: '08:00',
	SleepDuration: '08:00',
	NumOfMeals: 3
}

export class QuestLogSettingTab extends PluginSettingTab {
	plugin: QuestLog;

	constructor(app: App, plugin: QuestLog) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Settings for Base Phases'});

		new Setting(containerEl)
			.setName('Day Start Time')
			.setDesc('When you think your day should start (when sleep phase ends) in military time')
			.addText(text => text
				.setPlaceholder('08:00')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					console.log('Secret: ' + value);
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
        new Setting(containerEl)
            .setName('Sleep Duration')
            .setDesc('How much time you think you should sleep')
            .addText(text => text
                .setPlaceholder('08:00')
                .setValue(this.plugin.settings.mySetting)
                .onChange(async (value) => {
                    console.log('Secret: ' + value);
                    this.plugin.settings.mySetting = value;
                    await this.plugin.saveSettings();
                }));
	}
}
