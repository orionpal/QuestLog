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

export function sampleCommandWithCheck(app: App) {
    return {
        id: 'open-sample-modal-complex',
        name: 'Open sample modal (complex)',
        checkCallback: (checking: boolean) => {
            // Conditions to check
            const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
            if (markdownView) {
                // If checking is true, we're simply "checking" if the command can be run.
                // If checking is false, then we want to actually perform the operation.
                if (!checking) {
                    new SampleModal(this.app).open();
                }

                // This command will only show up in Command Palette when the check function returns true
                return true;
            }
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