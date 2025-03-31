#!/bin/bash

# Script to copy all .mdc files to /Users/narender/Desktop/cursor_rules
# and rename them from .mdc to .md

# Create destination directory if it doesn't exist
mkdir -p "/Users/narender/Desktop/cursor_rules"

# Find all .mdc files in the current directory and copy them
# to the destination directory with the .md extension
for file in *.mdc; do
    if [ -f "$file" ]; then
        # Extract the base name without the extension
        base_name=$(basename "$file" .mdc)
        
        # Copy the file to the destination with the new extension
        cp "$file" "/Users/narender/Desktop/cursor_rules/${base_name}.md"
        
        echo "Copied $file to /Users/narender/Desktop/cursor_rules/${base_name}.md"
    fi
done

echo "All .mdc files have been copied and renamed to .md in /Users/narender/Desktop/cursor_rules" 