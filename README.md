# use-once
A helper for running react effects only once.

## Motivation
For beginners, it isn't clear that `useEffect(cbk, [])` runs only once and that `useEffect(cbk)` runs every time.
Using this package avoids that confusion.

## Installation
```bash
npm install --save use-once

# Or

yarn add use-once
```

## Usage
```js
import {useOnce} from 'useOnce'

function ReactComp(props) {
  useOnce(() => {
    console.log('This will only be run once for each instance of the component, instead of after every update')
  })

  return null
}
```
