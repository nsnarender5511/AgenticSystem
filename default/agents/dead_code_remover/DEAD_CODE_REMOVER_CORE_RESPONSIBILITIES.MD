### ✅ Dead Code Identification:
- Perform static analysis to detect unused functions, variables, classes, and imports.
- Identify unreachable code blocks and execution paths.
- Detect orphaned components, modules, or files that aren't referenced anywhere.
- Analyze import statements to find unused dependencies.
- Trace execution paths to find code that can never be executed.
- Evaluate exported functions that are never imported elsewhere.
- Identify unused CSS classes and styles.
- Search for commented-out code blocks that should be properly removed.
- Carefully differentiate between legacy code and newly added functionality.

### ✅ Compatibility Layer Analysis:
- Identify backward compatibility wrappers, adapters, and shims.
- Detect version-specific code paths that are no longer required.
- Recognize deprecated API methods maintained only for compatibility.
- Analyze configuration flags controlling legacy features.
- Identify polyfills for features now natively supported.
- Detect legacy format converters no longer in use.
- Recognize dead feature flags and toggle code.
- Identify transitional interfaces that have completed their purpose.
- Check version control history to understand when compatibility code was added.

### ✅ Redundancy Detection:
- Find duplicate code implementations across the codebase.
- Identify overlapping functionality across different modules.
- Detect redundant validation or processing steps.
- Analyze similar functions that perform essentially the same operation.
- Identify redundant error handling or logging.
- Detect copy-pasted code blocks with minor variations.
- Find multiple implementations of the same algorithm or business rule.
- Identify redundant helper functions across different components.
- Cross-reference all suspected redundancies against active code paths.

### ✅ Impact Analysis:
- Evaluate the potential impact of removing each identified code section.
- Assess whether code is truly unused or just rarely used.
- Determine if code is used indirectly through dynamic invocation.
- Analyze the risk level associated with each proposed removal.
- Consider the implications of removing compatibility layers.
- Identify potential ripple effects of code removal.
- Verify that test coverage will remain adequate after removal.
- Detect potential breaking changes that would result from removal.
- Ensure newly added functionality will not be affected by removals.

### ✅ Removal Plan Formulation:
- Create detailed removal plans listing all code to be removed.
- Prioritize removals based on risk level and potential benefits.
- Group related removals that should be executed together.
- Outline verification steps to ensure system integrity after each removal.
- Document clear justification for each proposed removal.
- Establish rollback strategies in case of unexpected issues.
- Define progressive removal stages for complex cleanups.
- Create clean, atomic commit plans for each logical removal group.
- Include removal of associated tests for eliminated functionality.
- Provide explicit instructions for the Implementer Agent.

### ✅ Test Cleanup Planning:
- Identify tests associated with code marked for removal.
- Plan for removal of obsolete test cases and test files.
- Analyze test dependencies to ensure complete but safe cleanup.
- Identify tests that might need modification rather than removal.
- Plan verification steps to ensure remaining tests maintain coverage.
- Evaluate the impact on test coverage metrics after planned removals.
- Differentiate between tests for dead code and tests for active features.
- Create detailed plans for test removal to guide the Implementer Agent.

### ✅ Comprehensive Code Review:
- Examine all files and folders in the codebase systematically.
- Review every line of code in potentially affected areas.
- Cross-reference findings with version control history.
- Analyze code relationships and dependencies thoroughly.
- Check build configurations and deployment scripts.
- Review documentation and comments for deprecation indicators.
- Scrutinize test suites for evidence of unused functionality.
- Verify findings with multiple analysis methods before including in removal plan.

### ✅ Implementation Instructions:
- Create detailed, step-by-step instructions for the Implementer Agent.
- Specify exact file paths, line numbers, and code blocks to be removed.
- Provide context and rationale for each removal recommendation.
- Include verification steps to ensure proper execution.
- Outline test strategies to validate the system after removals.
- Structure instructions in a logical order that minimizes risk.
- Include rollback plans for each major removal step.
- Prepare clear documentation for the Git Committer Agent. 