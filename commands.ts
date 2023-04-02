import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';


export function sampleCommand(app: App) {
    return {
        id: 'open-sample-modal-simple',
        name: 'Open sample modal (simple)',
        callback: () => {
            new SampleModal(app).open();
        }
    }
};

export function sampleEditorCommand(app: App) {
    return {
        id: 'sample-editor-command',
        name: 'Sample editor command',
        editorCallback: (editor: Editor, view: MarkdownView) => {
            console.log(editor.getSelection());
            editor.replaceSelection('Sample Editor Command');
        }
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