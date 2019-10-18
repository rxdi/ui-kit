
# Accordion Component

Pull request: https://github.com/rxdi/ui-kit/pull/2


## Multi Collapse

![Screenshot from 2019-10-15 11-23-43](https://user-images.githubusercontent.com/19847933/66813900-5552a080-ef3e-11e9-96b3-2d1f7983c579.png)

## No Collapse

![Screenshot from 2019-10-15 11-23-33](https://user-images.githubusercontent.com/19847933/66813901-5552a080-ef3e-11e9-96a7-92a004bad5a0.png)

## Custom template

![Screenshot from 2019-10-15 11-23-07](https://user-images.githubusercontent.com/19847933/66813902-5552a080-ef3e-11e9-8960-7da0d497445d.png)


##### Usage

```html
<rx-accordion
    .items=${[
    {
        collapsed: true,
        title: 'Item 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        title: 'Item 2',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
    },
    {
        title: 'Item 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        title: 'Item 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
    ]}
></rx-accordion>
```

##### Multiple selected items pass `multiple` `true`

```html
<rx-accordion
    .multiple=${true}
></rx-accordion>
```

##### Specify which item will be `collapsed` on init

```html
<rx-accordion
    .items=${[
        {
            collapsed: true,
            title: 'Item 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
    ]}
></rx-accordion>
```

```typescript
export interface AccordionItem {
  title: string;
  content: string;
  collapsed: boolean;
}
```



##### Custom templates


```html
<rx-accordion
  .items=${[
    {
      title: html`
        <span style="color: red">Item 1</span>
      `,
      content: html`
        <span style="color: red"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.</span
        >
      `
    }
  ]}
></rx-accordion>
```

          
##### Get event when item is clicked

```html
<rx-accordion
    @itemClicked=${(item: AccordionItem) => {}}
></rx-accordion>
```

```typescript
export interface AccordionItem {
  title: string | TemplateResult;
  content: string | TemplateResult;
  collapsed?: boolean;
}
```
          
