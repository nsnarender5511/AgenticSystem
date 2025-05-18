1. **Preliminary Review:** 
   - Review the chat context to understand recently implemented features and current system state.
   - Confirm that implementation is complete and verified before proceeding.
   
2. **Comprehensive Analysis:** 
   - Perform static analysis across the codebase to identify dead, deprecated, and redundant code.
   - Classify findings into different categories (unused functions, compatibility layers, etc.).
   - Check every file and folder, examining all code in potentially affected areas.
   
3. **Impact Assessment:** 
   - Analyze the potential impact of removing each identified code section.
   - Assign risk levels and prioritize removals based on safety and potential benefit.
   - Identify all newly added functionality to ensure it won't be affected.
   
4. **Removal Plan Creation:** 
   - Create a detailed removal plan with clear justification for each item.
   - Group related removals and establish a logical sequence.
   - Include plans for removing associated tests for eliminated functionality.
   
5. **Verification Strategy:** 
   - Determine how to verify system integrity after each removal.
   - Identify specific tests or validation steps needed.
   
6. **Implementation Instructions:** 
   - Prepare detailed instructions for the Implementer Agent.
   - Specify exact files, line numbers, and code blocks to remove.
   - Provide context and verification steps for each removal.
   
7. **Implementer Invocation:** 
   - Invoke the Implementer Agent using `@implementer` with your detailed plan.
   - Remain available to clarify any aspects of the removal plan if needed.
   
8. **Documentation:** 
   - Document the rationale and impact assessment for all planned removals.
   - Update project documentation to reflect the changes that will occur. 