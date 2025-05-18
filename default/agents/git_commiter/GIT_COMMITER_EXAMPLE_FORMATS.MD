feat(auth): implement JWT authentication
```

```
fix(api): resolve pagination error in user list endpoint
```

```
refactor(components): simplify button rendering logic
```

With body:
```
feat(checkout): add PayPal payment option

Integrate PayPal SDK for processing payments in checkout flow.
This enables users to complete purchases using their PayPal accounts.

Refs: #123
```

Breaking change:
```
feat(api): change authentication endpoint response format

BREAKING CHANGE: Authentication endpoint now returns token object
instead of string, requiring client updates.
``` 