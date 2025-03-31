// detect-chat.js - A minimal script to detect notebook chat activity
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Simple clipboard utility
function copyToClipboard(text) {
  const clipboardCmd = process.platform === 'darwin' 
    ? `echo "${text}" | pbcopy` 
    : process.platform === 'win32'
      ? `echo ${text} | clip`
      : `echo "${text}" | xclip -selection clipboard`;
  
  return new Promise((resolve, reject) => {
    exec(clipboardCmd, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

// Get the text to use
const chatText = process.argv.slice(2).join(' ') || 'Default text for notebook chat';

// Immediately copy the text to clipboard so it's ready
copyToClipboard(chatText)
  .then(() => console.log(`✅ Text copied to clipboard: "${chatText}"`))
  .catch(err => console.error(`Error copying to clipboard: ${err.message}`));

// Print instructions
console.log('\n=== VS CODE NOTEBOOK CHAT HELPER ===');
console.log('1. Open VS Code with a notebook');
console.log('2. Press ' + (process.platform === 'darwin' ? 'Cmd+I' : 'Ctrl+I') + ' to start notebook chat');
console.log('3. Paste the text with ' + (process.platform === 'darwin' ? 'Cmd+V' : 'Ctrl+V'));
console.log('');

// Detect if VS Code is running
const checkVSCodeProcess = () => {
  const command = process.platform === 'win32'
    ? 'tasklist | findstr Code.exe'
    : process.platform === 'darwin'
      ? 'ps -ax | grep -v grep | grep "Visual Studio Code"'
      : 'ps -ax | grep -v grep | grep code';

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log('❌ VS Code does not appear to be running');
      return;
    }

    if (stdout && stdout.trim()) {
      console.log('✅ VS Code is running');
      
      // On macOS, we can check if VS Code has focus
      if (process.platform === 'darwin') {
        exec('osascript -e \'tell application "System Events" to get name of first application process whose frontmost is true\'', (err, frontApp) => {
          if (!err && frontApp && frontApp.trim().includes('Code')) {
            console.log('✅ VS Code is the active application');
            console.log(`\nReady to paste: "${chatText}"`);
          } else {
            console.log('❌ VS Code is not the active application');
            console.log('Please switch to VS Code to continue');
          }
        });
      }
    } else {
      console.log('❌ VS Code does not appear to be running');
    }
  });
};

// Run the check once
checkVSCodeProcess();

console.log('\nKeyboard shortcut reference for VS Code:');
console.log('- Start notebook chat: ' + (process.platform === 'darwin' ? 'Cmd+I' : 'Ctrl+I'));
console.log('- Start inline chat: ' + (process.platform === 'darwin' ? 'Cmd+I' : 'Ctrl+I'));
console.log('- Start quick chat: ' + (process.platform === 'darwin' ? 'Cmd+Shift+Alt+L' : 'Ctrl+Shift+Alt+L'));
console.log('- Open command palette: ' + (process.platform === 'darwin' ? 'Cmd+Shift+P' : 'Ctrl+Shift+P'));
console.log('  (Type "Notebook: Start Chat" in the command palette)'); 