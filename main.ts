import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { generateQuestLog } from 'generation';
import { DEFAULT_SETTINGS, QuestLogSettings, QuestLogSettingTab } from 'questlog-settings';


export default class QuestLog extends Plugin {
	settings: QuestLogSettings;

	async onload() {
		await this.loadSettings();

		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon('clipboard-list', 'Quest Log', (evt: MouseEvent) => {
			// Called when the user clicks the icon. TODO: do I need to add code for mobile use?
			generateQuestLog(this.app, this.settings);
			// TODO: this doesn't actually update if there's already an existing file, also I should change the notice to be a bit more informative
			new Notice("Created or updated today's questlog");
		});
		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new QuestLogSettingTab(this.app, this));

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}