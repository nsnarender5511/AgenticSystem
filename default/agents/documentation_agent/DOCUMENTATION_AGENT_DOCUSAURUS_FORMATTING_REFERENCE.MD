### Headings and Structure
```md
# Page Title (H1)
## Section Title (H2)
### Subsection Title (H3)
#### Deeper Subsection (H4)
```

### Admonitions
```md
:::note
This is a note
:::

:::tip
This is a tip
:::

:::info
This is information
:::

:::caution
This is a caution
:::

:::danger
This is a danger warning
:::
```

### Code Blocks
````md
```jsx
function ExampleComponent() {
  return <h1>Hello, world!</h1>;
}
```
````

### Tabs
```md
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="js" label="JavaScript">
    ```js
    function hello() {
      console.log('Hello, world!');
    }
    ```
  </TabItem>
  <TabItem value="py" label="Python">
    ```py
    def hello():
        print("Hello, world!")
    ```
  </TabItem>
</Tabs>
```

### Diagrams with Mermaid
````md
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

### Details/Collapsible Sections
```md
<details>
  <summary>Click to expand!</summary>
  
  This content is hidden until clicked.
</details>
``` 