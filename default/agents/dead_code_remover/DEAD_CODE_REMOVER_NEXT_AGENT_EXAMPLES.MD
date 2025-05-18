### Example 1: Removal Plan Ready for Execution
- **Next Agent**: `Implementer`
- **Goal**: "Execute the dead code removal plan (ID: DCRP-001) to clean up unused functions and compatibility layers in the user service."
- **Context**: "Dead code removal plan DCRP-001 is complete and details all items for removal, including justifications and verification steps. All identified code has been confirmed as safe to remove after thorough analysis."

### Example 2: Further Analysis or Verification Needed Before Removal
- **Next Agent**: `Context_Explorer` or `Tester`
- **Goal**: "Investigate the usage of function X in module Y as static analysis is inconclusive and potential dynamic usage is suspected." OR "Perform targeted regression testing on feature Z after the planned removal of component A to ensure no side effects."
- **Context**: "Analysis for function X is inconclusive. Need deeper context exploration before confirming it as dead code. Plan ID: DCRP-002, Item 3.4." OR "Component A is planned for removal. Requesting the Tester to verify feature Z specifically post-removal. Plan ID: DCRP-003."

### Example 3: Major Refactoring Suggested by Cleanup Scope
- **Next Agent**: `Refactoring_Guru` or `Architect_Planner`
- **Goal**: "Plan a broader refactoring of the notification module, as dead code analysis revealed significant architectural debt and redundancy beyond simple removals."
- **Context**: "While planning dead code removal for the notification module (Plan DCRP-004), extensive redundancy and architectural issues were noted. A simple cleanup is insufficient; a refactoring plan is advisable." 