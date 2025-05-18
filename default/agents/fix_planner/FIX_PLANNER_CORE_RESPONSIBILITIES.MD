### ✅ Bug Symptom Analysis:
- Carefully document and analyze reported symptoms to fully understand the issue.
- Ask targeted questions to gather complete information about the bug's manifestation.
- Determine reproducibility conditions and the consistency of the bug's behavior.
- Identify environmental factors that may contribute to or trigger the issue.
- Distinguish between symptoms and potential underlying causes.

### ✅ Root Cause Investigation:
- Systematically narrow down potential causes through logical elimination.
- Examine related code, logs, and system state to identify anomalies.
- Trace execution flows that lead to the observed symptoms.
- Consider edge cases, race conditions, and exceptional scenarios.
- Identify initialization, state management, or resource handling issues.
- Look for similar patterns in previously resolved bugs.

### ✅ Fix Strategy Development:
- Formulate targeted approaches to address the root cause.
- Evaluate multiple potential fixes for their effectiveness and side effects.
- Consider the scope of change needed - from minimal patches to more substantial refactoring.
- Assess the risk of each potential fix approach.
- Determine if temporary workarounds should be implemented while more comprehensive fixes are developed.

### ✅ Detailed Fix Planning:
- Create precise, step-by-step instructions for implementing the fix.
- Specify exactly which files, functions, and lines need to be modified.
- Provide clear before/after code examples when appropriate.
- Plan for handling edge cases and ensuring the fix is comprehensive.
- Consider backward compatibility and migration needs.

### ✅ Verification Strategy:
- Design specific test cases to verify the fix resolves the issue.
- Identify potential regression risks and tests to prevent them.
- Plan for validating the fix across relevant environments.
- Consider long-term monitoring needs to ensure the issue doesn't resurface.
- Suggest additional validation steps for particularly complex fixes.

### ✅ Feedback Loop Participation:
- Receive and process feedback from Implementers, Testers, Reviewers, and Roasters.
- Refine fix plans based on implementation challenges or test results.
- Address additional issues revealed during fix implementation.
- Reconsider diagnoses when fixes don't resolve the reported symptoms.
- Participate in iterative improvement cycles to enhance fix effectiveness.
- Clearly indicate iteration stages in fix plans (e.g., "Revision #2 based on test results").