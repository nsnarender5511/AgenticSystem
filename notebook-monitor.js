// notebook-monitor.js - VS Code Extension
/**
 * This is a VS Code extension skeleton for monitoring notebook chat
 * To use this:
 * 1. Create a new VS Code extension project with: yo code
 * 2. Copy this file to your extension's src folder
 * 3. Update the package.json to include the necessary activation events
 */

const vscode = require('vscode');

/**
 * This method is called when your extension is activated
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Notebook Chat Monitor is now active');

    // Register a command that executes notebook chat and monitors it
    let disposable = vscode.commands.registerCommand('extension.monitorNotebookChat', async () => {
        // Create an output channel for logging
        const outputChannel = vscode.window.createOutputChannel('Notebook Chat Monitor');
        outputChannel.show(true);
        outputChannel.appendLine('Starting notebook chat monitor...');

        // Log information about active notebook if available
        const activeEditor = vscode.window.activeNotebookEditor;
        if (activeEditor) {
            outputChannel.appendLine(`Active notebook: ${activeEditor.notebook.uri.toString()}`);
            outputChannel.appendLine(`Cell count: ${activeEditor.notebook.cellCount}`);
        } else {
            outputChannel.appendLine('No active notebook found');
        }

        // Register watchers for notebook changes
        const notebookChangeListener = vscode.workspace.onDidChangeNotebookDocument(event => {
            outputChannel.appendLine(`Notebook changed: ${event.notebook.uri.toString()}`);
            for (const cellChange of event.cellChanges) {
                outputChannel.appendLine(`Cell changed: ${cellChange.cell.kind}, ${cellChange.cell.document.uri.toString()}`);
            }
        });

        // Try to execute the notebook chat command
        try {
            outputChannel.appendLine('Attempting to start notebook chat...');
            await vscode.commands.executeCommand('notebook.cell.chat.start');
            outputChannel.appendLine('Notebook chat command executed');
        } catch (err) {
            outputChannel.appendLine(`Error executing chat command: ${err.message}`);
        }

        // Register command post-execution listener
        const commandListener = vscode.commands.registerCommand('extension.onChatStarted', (text) => {
            outputChannel.appendLine('Chat detected as started!');
            
            // If text was provided, try to insert it
            if (text) {
                vscode.env.clipboard.writeText(text).then(() => {
                    vscode.commands.executeCommand('editor.action.clipboardPasteAction');
                    outputChannel.appendLine(`Attempted to paste: "${text}"`);
                });
            }
        });

        // Clean up listeners
        context.subscriptions.push(notebookChangeListener, commandListener);
    });

    // Add command to insert text into active chat
    let insertTextCommand = vscode.commands.registerCommand('extension.insertTextIntoChat', async (text) => {
        // Try to detect if chat is active by checking the focused editor
        const activeEditor = vscode.window.activeTextEditor;
        if (activeEditor) {
            await vscode.env.clipboard.writeText(text || 'Default chat text');
            await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
            console.log('Text inserted into chat');
        } else {
            vscode.window.showInformationMessage('No active chat detected');
        }
    });

    context.subscriptions.push(disposable, insertTextCommand);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
};

// To create the full extension structure, you need a package.json:
/*
{
  "name": "notebook-chat-monitor",
  "displayName": "VS Code Notebook Chat Monitor",
  "description": "Monitor and interact with VS Code's notebook chat feature",
  "version": "0.0.1",
  "engines": {
    "vscode": "^1.60.0"
  },
  "categories": [
    "Other"
  ],
  "activationEvents": [
    "onCommand:extension.monitorNotebookChat",
    "onCommand:extension.insertTextIntoChat",
    "onNotebook:*"
  ],
  "main": "./notebook-monitor.js",
  "contributes": {
    "commands": [
      {
        "command": "extension.monitorNotebookChat",
        "title": "Monitor Notebook Chat"
      },
      {
        "command": "extension.insertTextIntoChat",
        "title": "Insert Text Into Chat"
      }
    ]
  },
  "dependencies": {
    "vscode": "^1.1.37"
  }
}
*/

// For direct use in Node.js without extension infrastructure:
if (require.main === module) {
    console.log(`
=============================================================
VS CODE NOTEBOOK CHAT MONITOR EXTENSION SKELETON
=============================================================

This is a VS Code extension skeleton for monitoring notebook chat.
You cannot run it directly with Node.js.

To use this:
1. Install the VS Code Extension Generator:
   npm install -g yo generator-code

2. Create a new VS Code extension project:
   yo code

3. Choose "New Extension (TypeScript)" or "New Extension (JavaScript)"

4. Copy the code from this file to your extension's main file

5. Update the package.json with the provided sample configuration

6. Install the extension in VS Code (F5 or "Run Extension")

7. Run the commands:
   - "Monitor Notebook Chat" 
   - "Insert Text Into Chat"

Alternative simpler approach:
If you just want to insert text into notebook chat:

1. Open a notebook in VS Code
2. Use the keyboard shortcut: ${process.platform === 'darwin' ? 'Cmd+I' : 'Ctrl+I'}
3. The chat will appear and you can then paste text
=============================================================
`);
} 