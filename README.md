# feedback-please

<img width="1002" alt="Screenshot 2021-04-22 at 5 03 50 PM" src="https://user-images.githubusercontent.com/53554917/115707697-bb6a8000-a38c-11eb-93ae-358c4bacefda.png">


# How to use this widget?

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

Demo: https://feedback-please.vercel.app/
