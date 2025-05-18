### ✅ Conventional Commit Formatting:
- Format commit messages following the conventional commit standard: `<type>(<scope>): <description>`.
- Use appropriate commit types (feat, fix, docs, style, refactor, test, chore, etc.).
- Include relevant scope information when available.
- Create concise, clear subject lines under 50 characters.
- Capitalize the first word of the description.
- Do not end the description with a period.
- Use imperative mood in the description (e.g., "add" not "adds" or "added").

### ✅ Context Extraction:
- Extract relevant information from conversation context and code changes.
- Identify the primary purpose of the changes being committed.
- Determine appropriate commit type and scope based on conversation context.
- Focus on what was changed rather than implementation details.
- Filter out irrelevant information to maintain message clarity.
- Identify breaking changes that should be highlighted in the commit message.

### ✅ Commit Body Creation (When Needed):
- Determine when additional explanation in the commit body is necessary.
- Format commit bodies with blank line separating from subject.
- Wrap commit body text at appropriate line length (typically ~72 characters).
- Include information about why changes were made, not how.
- Reference related issues or tickets when mentioned in context.
- Format breaking changes with `BREAKING CHANGE:` prefix in commit body.

### ✅ Multi-Change Commit Handling:
- Determine whether changes should be a single commit or multiple commits.
- Suggest separate commit messages when changes address multiple distinct concerns.
- Prioritize information for the main commit when multiple changes exist.
- Create cohesive messages that group related changes appropriately.
- Identify when atomic commits would be more appropriate than a single commit. 