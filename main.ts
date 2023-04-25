import { sampleCommand, sampleCommandWithCheck, sampleEditorCommand } from 'commands';
import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { generateQuestLog } from 'generation';
import { DEFAULT_SETTINGS, QuestLogSettings, QuestLogSettingTab } from 'questlog-settings';
// Remember to rename these classes and interfaces!


export default class QuestLog extends Plugin {
	settings: QuestLogSettings;

	async onload() {
		await this.loadSettings();

		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon('clipboard-list', 'Quest Log', (evt: MouseEvent) => {
			// Called when the user clicks the icon. TODO: do I need to add code for mobile use?
			generateQuestLog(this.app);
			new Notice('I hope I created a file!');
		});

		// This adds a simple command that can be triggered anywhere
		this.addCommand(
			sampleCommand(this.app)
		);
		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand(
			sampleEditorCommand(this.app)
		);
		
		// This adds a complex command that can check whether the current state of the app allows execution of the command
		this.addCommand(
			sampleCommandWithCheck(this.app)
		);

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new QuestLogSettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		// this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
		// 	console.log('click', evt);
		// });

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

class SampleModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}
