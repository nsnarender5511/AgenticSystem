// notebook-chat-inserter.js
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Text to insert into the chat
const chatText = process.argv.slice(2).join(' ') || 'Default text for notebook chat';

console.log(`Preparing to insert: "${chatText}"`);

// First, copy the text to clipboard as a fallback
const clipboardCmd = process.platform === 'darwin' 
  ? `echo "${chatText}" | pbcopy` 
  : process.platform === 'win32'
    ? `echo ${chatText} | clip`
    : `echo "${chatText}" | xclip -selection clipboard`;

exec(clipboardCmd, (clipError) => {
  if (clipError) {
    console.error(`Error copying to clipboard: ${clipError.message}`);
  } else {
    console.log('✅ Text copied to clipboard as backup');
  }
  
  // Now use platform-specific automation to open chat and insert text
  if (process.platform === 'darwin') {
    // macOS: Use AppleScript
    const tempScriptPath = path.join(os.tmpdir(), 'vscode-chat-insert.scpt');
    const appleScript = `
    tell application "System Events"
      tell application process "Code"
        set frontmost to true
        -- Open command palette
        keystroke "p" using {command down, shift down}
        delay 0.3
        -- Type notebook chat command
        keystroke "Notebook: Start Chat"
        delay 0.3
        keystroke return
        delay 0.5
        -- Paste the text
        keystroke "v" using {command down}
      end tell
    end tell
    `;
    
    fs.writeFileSync(tempScriptPath, appleScript);
    console.log('Running AppleScript automation...');
    
    exec(`osascript "${tempScriptPath}"`, (error) => {
      if (error) {
        console.error('Error running AppleScript:', error.message);
        console.log('\nPlease try manually:');
        console.log('1. Press Cmd+Shift+P to open command palette');
        console.log('2. Type "Notebook: Start Chat" and press Enter');
        console.log('3. Paste the text (Cmd+V)');
      } else {
        console.log('✅ Successfully inserted text into notebook chat');
      }
      // Clean up temp file
      fs.unlinkSync(tempScriptPath);
    });
  } else if (process.platform === 'win32') {
    // Windows: Use PowerShell automation
    const psScript = `
    Add-Type -AssemblyName System.Windows.Forms
    [System.Windows.Forms.SendKeys]::SendWait("^+p")
    Start-Sleep -Milliseconds 300
    [System.Windows.Forms.SendKeys]::SendWait("Notebook: Start Chat")
    Start-Sleep -Milliseconds 300
    [System.Windows.Forms.SendKeys]::SendWait("{ENTER}")
    Start-Sleep -Milliseconds 500
    [System.Windows.Forms.SendKeys]::SendWait("^v")
    `;
    
    const tempPsPath = path.join(os.tmpdir(), 'vscode-chat-insert.ps1');
    fs.writeFileSync(tempPsPath, psScript);
    
    console.log('Running PowerShell automation...');
    exec(`powershell -ExecutionPolicy Bypass -File "${tempPsPath}"`, (error) => {
      if (error) {
        console.error('Error running PowerShell script:', error.message);
        console.log('\nPlease try manually:');
        console.log('1. Press Ctrl+Shift+P to open command palette');
        console.log('2. Type "Notebook: Start Chat" and press Enter');
        console.log('3. Paste the text (Ctrl+V)');
      } else {
        console.log('✅ Successfully inserted text into notebook chat');
      }
      // Clean up temp file
      fs.unlinkSync(tempPsPath);
    });
  } else {
    // Linux: Use xdotool if available
    exec('which xdotool', (error) => {
      if (error) {
        console.log('xdotool not found. Please install it with: sudo apt-get install xdotool');
        console.log('\nFor now, please try manually:');
        console.log('1. Press Ctrl+Shift+P to open command palette');
        console.log('2. Type "Notebook: Start Chat" and press Enter');
        console.log('3. Paste the text (Ctrl+V)');
      } else {
        const xdoCmd = `
        xdotool search --name "Visual Studio Code" windowactivate --sync && \
        xdotool key ctrl+shift+p && \
        sleep 0.3 && \
        xdotool type "Notebook: Start Chat" && \
        sleep 0.3 && \
        xdotool key Return && \
        sleep 0.5 && \
        xdotool key ctrl+v
        `;
        
        console.log('Running xdotool automation...');
        exec(xdoCmd, (xdoError) => {
          if (xdoError) {
            console.error('Error running xdotool:', xdoError.message);
            console.log('\nPlease try manually:');
            console.log('1. Press Ctrl+Shift+P to open command palette');
            console.log('2. Type "Notebook: Start Chat" and press Enter');
            console.log('3. Paste the text (Ctrl+V)');
          } else {
            console.log('✅ Successfully inserted text into notebook chat');
          }
        });
      }
    });
  }
});