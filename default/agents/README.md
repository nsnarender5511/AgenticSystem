# Modular Agent Prompt Structure

This directory contains the refactored agent prompts, organized for modularity, maintainability, and reusability.

## Overview

Each agent's prompt is broken down into smaller, focused Markdown files. These files are composed together using Cursor's `@<file_path>` referencing feature to form the complete prompt for an agent.

## Directory Structure

- **`default/agents/<agent_name>/`**: Each subdirectory here is dedicated to a single agent.
    - **`<AGENT_NAME>.MD`**: This is the main file for the agent. It acts as a "composition root," primarily containing references to its specific modules and to shared components. The YAML frontmatter for the agent (description, globs, etc.) is at the top of this file.
    - **`<AGENT_NAME>_<SECTION_DESCRIPTION>.MD`**: These files contain the agent-specific content for different sections of the prompt, such as:
        - `_ROLE_DEFINITION.MD`
        - `_REMINDERS_SPECIFIC.MD`
        - `_CORE_RESPONSIBILITIES.MD`
        - `_PROHIBITED_ACTIONS_SPECIFIC.MD`
        - `_COMMUNICATION_SPECIFICS.MD`
        - `_CONTEXT_SPECIFICS.MD`
        - `_FEEDBACK_LOOP_SPECIFICS.MD`
        - `_SYSTEM_INTEGRATION_SPECIFICS.MD`
        - `_WORKFLOW_STEPS.MD`
        - `_OUTPUT_STRUCTURE.MD`
        - `_NEXT_AGENT_EXAMPLES.MD`
        (Note: Not all agents may have all specific modules; some may rely on shared components or have placeholder files if a specific section is minimal.)

- **`default/shared_components/`**: This directory (located one level above `agents/`) contains globally reusable Markdown components.
    - **`SHARED_<COMPONENT_NAME>.MD`**: These files encapsulate common instructions, guidelines, or boilerplate text that is used across multiple agents. Examples include:
        - `SHARED_IMPORTANT_REMINDERS_GENERAL.MD`
        - `SHARED_PROHIBITED_ACTIONS_UNIVERSAL.MD`
        - `SHARED_COMMUNICATION_GUIDELINES_CORE.MD`
        - `SHARED_NEXT_AGENT_RECOMMENDATION_FORMATTING_INSTRUCTIONS.MD`

## How it Works

The main `<AGENT_NAME>.MD` file for an agent uses `@` references to include content from:
1.  Its own specific modules located within its subdirectory (e.g., `@./<AGENT_NAME>_ROLE_DEFINITION.MD`).
2.  Shared components located in `default/shared_components/` (e.g., `@../../shared_components/SHARED_IMPORTANT_REMINDERS_GENERAL.MD`).

The order of these references in the main file determines the final structure of the assembled prompt.

## Modifying an Agent Prompt

- **To modify instructions common to many agents:** Edit the relevant file in `default/shared_components/`.
- **To modify instructions specific to a single agent:**
    1.  Navigate to `default/agents/<agent_name>/`.
    2.  Identify and edit the specific module file (e.g., `<AGENT_NAME>_CORE_RESPONSIBILITIES.MD`).
    3.  If changing the overall structure or which components are included, edit the main `<AGENT_NAME>.MD` file.

## Adding a New Agent

1.  Create a new subdirectory in `default/agents/` named after the new agent (e.g., `default/agents/new_agent_name/`).
2.  Inside this new directory, create the agent-specific module files (e.g., `NEW_AGENT_NAME_ROLE_DEFINITION.MD`, `NEW_AGENT_NAME_CORE_RESPONSIBILITIES.MD`, etc.) by populating them with the unique content for the new agent.
3.  Create the main `NEW_AGENT_NAME.MD` file. This file should:
    -   Start with the agent's YAML frontmatter.
    -   Include `@` references to its own specific modules.
    -   Include `@` references to any applicable shared components from `default/shared_components/`.
    -   Follow the established order and structure of existing main agent files.

This modular approach aims to make the agent prompt system more organized, easier to maintain, and quicker to scale. 