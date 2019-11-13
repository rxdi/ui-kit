# Animation Component

##### Usage

```typescript
import { AnimationComponent } from '@rxdi/ui-kit/animation';

@Module({
  components: [AnimationComponent]
})
export class AppModule {}
```

##### Html

```typescript
<rx-animation>
    <div style="transform: translateX(-100%);">Item 1</div>
    <div style="transform: translateX(-100%);">Item 2</div>
</rx-animation>
```


##### Passing configuration

```typescript
<rx-animation .options=${({ stagger }) => ({
    delay: stagger(200),
    translateX: 0,
    easing: 'spring(1, 80, 10, 0)'
})}>
    <div style="transform: translateX(-100%);">Item 1</div>
    <div style="transform: translateX(-100%);">Item 2</div>
</rx-animation>
```
