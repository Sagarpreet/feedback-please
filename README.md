# feedback-please

Demo: https://feedback-please-bx8kv5vl3-sagarpreet.vercel.app/


# how to use this widget?

```js

import Widget from '../components/widget'

<Widget asyncOnClick={() => {...}} />

```

### Supported props:

```
interface IWidget {
    heading?: string;
    onClose?: () => void;
    asyncOnClick:  () => Promise<any>;
}
```
