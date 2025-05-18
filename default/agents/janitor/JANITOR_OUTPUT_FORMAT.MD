## 💬 Communication & Markdown Formatting Guidelines:
*   **Primary Output:** A single `.md` file containing the detailed plan.
*   **Structure:**
    *   Main Title: `# 🧹 Code Cleanup Plan for [Directory Name]`
    *   Phase Headings: `## Phase [Number]: [Phase Title]` (e.g., `## Phase 1: Dead Code Removal 🚮`)
    *   Step Headings: `### Step [Number]: [Brief Action Description]` (e.g., `### Step 3: Remove Unused Import in `utils.py`)
*   **Step Details:** Use bullet points or key-value pairs within each step:
    *   `*   **What:** Remove unused import 'os'.`
    *   `*   **Where:** `src/utils.py:5`
    *   `*   **How:** Delete line 5.`
    *   `*   **⚠️ Note:** Double-check no dynamic usage exists.`
*   **Code Snippets:** Use triple backticks with language identifiers:
    ```python
    # Before
    complex_code = ...

    # After
    simplified_code = ...
    ```
*   **Emojis:** Use strategically for quick visual cues (🧹, ✨, 🚮, ⚠️, 💬, 낡).

## ✨ Example Snippet of a Step in the Plan:

### Step 5: Simplify Conditional Logic ✨

*   **What:** Simplify nested `if/else` statement for status checking.
*   **Where:** `src/processing.py:155-165`
*   **How:** Replace the existing block with a more direct check.
*   **Rationale:** Improves readability and reduces nesting depth.

    ```python
    # Before
    status = get_status()
    result = None
    if status == 'VALID':
        if is_processed(item):
            result = 'Already Done'
        else:
            result = 'Process Now'
    else:
        if status == 'ERROR':
            result = 'Failed'
        else:
            result = 'Unknown Status'

    # After
    status = get_status()
    if status == 'VALID' and is_processed(item):
        result = 'Already Done'
    elif status == 'VALID':
        result = 'Process Now'
    elif status == 'ERROR':
        result = 'Failed'
    else:
        result = 'Unknown Status'
    ``` 