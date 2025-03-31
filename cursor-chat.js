// cursor-chat.js - A script to help with Cursor notebook chat
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Define Cursor app path
const CURSOR_PATH = process.platform === 'darwin' 
  ? '/Applications/Cursor.app/Contents/MacOS/Cursor'
  : process.platform === 'win32'
    ? 'C:\\Program Files\\Cursor\\Cursor.exe'
    : '/usr/bin/cursor';

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
console.log('\n=== CURSOR NOTEBOOK CHAT HELPER ===');
console.log('1. Open Cursor with a notebook');
console.log('2. Press ' + (process.platform === 'darwin' ? 'Cmd+I' : 'Ctrl+I') + ' to start notebook chat');
console.log('3. Paste the text with ' + (process.platform === 'darwin' ? 'Cmd+V' : 'Ctrl+V'));
console.log('');

// Detect if Cursor is running
const checkCursorProcess = () => {
  const command = process.platform === 'win32'
    ? 'tasklist | findstr Cursor.exe'
    : process.platform === 'darwin'
      ? 'ps -ax | grep -v grep | grep "Cursor"'
      : 'ps -ax | grep -v grep | grep cursor';

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log('❌ Cursor does not appear to be running');
      console.log(`   You can start it with: ${CURSOR_PATH}`);
      return;
    }

    if (stdout && stdout.trim()) {
      console.log('✅ Cursor is running');
      
      // On macOS, we can check if Cursor has focus
      if (process.platform === 'darwin') {
        exec('osascript -e \'tell application "System Events" to get name of first application process whose frontmost is true\'', (err, frontApp) => {
          if (!err && frontApp && frontApp.trim().includes('Cursor')) {
            console.log('✅ Cursor is the active application');
            console.log(`\nReady to paste: "${chatText}"`);
          } else {
            console.log('❌ Cursor is not the active application');
            console.log('Please switch to Cursor to continue');
          }
        });
      }
    } else {
      console.log('❌ Cursor does not appear to be running');
      console.log(`   You can start it with: ${CURSOR_PATH}`);
    }
  });
};

// Run the check once
checkCursorProcess();

console.log('\nKeyboard shortcut reference for Cursor:');
console.log('- Start notebook chat: ' + (process.platform === 'darwin' ? 'Cmd+I' : 'Ctrl+I'));
console.log('- Start inline chat: ' + (process.platform === 'darwin' ? 'Cmd+I' : 'Ctrl+I'));
console.log('- Start quick chat: ' + (process.platform === 'darwin' ? 'Cmd+Shift+Alt+L' : 'Ctrl+Shift+Alt+L'));
console.log('- Open command palette: ' + (process.platform === 'darwin' ? 'Cmd+Shift+P' : 'Ctrl+Shift+P'));
console.log('  (Type "Notebook: Start Chat" in the command palette)');

// Offer to launch Cursor if it's not running (macOS only)
if (process.platform === 'darwin') {
  exec('ps -ax | grep -v grep | grep "Cursor"', (error, stdout) => {
    if (!stdout || !stdout.trim()) {
      console.log('\nWould you like to start Cursor now? (Y/n)');
      process.stdin.once('data', (data) => {
        const input = data.toString().trim().toLowerCase();
        if (input === 'y' || input === 'yes' || input === '') {
          console.log(`Starting Cursor...`);
          exec(`"${CURSOR_PATH}"`, (err) => {
            if (err) {
              console.error(`Error starting Cursor: ${err.message}`);
            }
          });
        }
      });
    }
  });
} 