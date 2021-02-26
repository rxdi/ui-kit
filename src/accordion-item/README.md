# Accordion Item Component

##### Usage

```typescript
import { AccordionItemComponent } from '@rxdi/ui-kit/tabs';

@Module({
  components: [AccordionItemComponent],
})
export class AppModule {}
```

```html
<rx-accordion-item @clicked=${(e) => console.log(e.detail)}>
  <div slot="title">Why should i upgrade ?</div>
  <div slot="content">Optimized for best experience...</div>
</rx-accordion-item>
```

Some of the styles can be configurated globally

```html
<style>
  :root {
    --accordion-bg-color: rgb(255, 255, 255);
    --accordion-content-bg-color: rgb(255, 255, 255);
    --accordion-title-font-size: 20px;
  }
</style>
```

Parts are also available for outside `shadowRoot` styling

```html
<style>
  rx-accordion-item::part(container) {
  }

  rx-accordion-item::part(button) {
  }

  rx-accordion-item::part(content) {
  }
</style>
```

Available component properties

```html

<rx-accordion-item
  .opened=${true}
  .maxContentHeight=${'1000px'} 
  .rotationClosed=${'0deg'}
  .rotationOpened=${'90deg'}
>
  <div slot="title">Why should i upgrade ?</div>
  <div slot="content">Optimized for best experience...</div>
</rx-accordion-item>

```
