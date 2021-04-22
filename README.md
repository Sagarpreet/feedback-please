# feedback-please

Demo: https://feedback-please-bx8kv5vl3-sagarpreet.vercel.app/


https://user-images.githubusercontent.com/53554917/115241080-09d60f80-a13e-11eb-8ff1-0acf8e809de3.mov


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
