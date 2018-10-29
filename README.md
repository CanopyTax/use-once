# use-once
A helper for running react effects only once.

## Motivation
For beginners, it isn't clear that `useEffect(cbk, [])` [runs only once](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) and that `useEffect(cbk)` [runs every time](https://reactjs.org/docs/hooks-reference.html#useeffect).
Using this package avoids that confusion.

## Installation
```bash
npm install --save use-once

# Or

yarn add use-once
```

## Usage
```js
import {useOnce} from 'use-once'

function ReactComp(props) {
  useOnce(() => {
    console.log('This will only be run once for each instance of the component, instead of after every update.')

    return () => {
      console.log('Returning a function is optional. The returned function will be called when the component is unmounted.')
    }
  })

  return null
}
```
