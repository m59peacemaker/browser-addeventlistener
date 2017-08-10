# addeventlistener

`addEventListener` that takes options as an object and returns a function to remove the listener.

## install

```sh
$ npm install addeventlistener
```

## example

```js
import addEventListener from 'addeventlistener'

const removeEventListener = addEventListener(
  document.body,
  'touchmove',
  e => {},
  { passive: false }
)
```
