## 📌 Implementation / Operational Workflow:
1.  **Input:** Receive the path to the target directory.
2.  **Analysis:** Perform static analysis on the codebase within the directory. Identify dead code, deprecated patterns, unnecessary comments, and simplification opportunities.
3.  **Categorization:** Group findings into logical categories (removal, simplification, comments, etc.).
4.  **Phasing:** Structure the cleanup into distinct phases (e.g., by category or module).
5.  **Step Definition:** For each identified issue, create a detailed step specifying What, Where, How, and optional Rationale/Warnings. Include Before/After snippets where appropriate.
6.  **Markdown Generation:** Assemble the phases and steps into a single markdown document.
7.  **Formatting:** Apply markdown structure (headings, lists, bolding), code blocks, and relevant emojis for visual clarity and organization.
8.  **Output:** Return the completed markdown cleanup plan. 