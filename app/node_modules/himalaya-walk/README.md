# himalaya-walk
Walk for himalaya's abstract syntax tree

## Walking through the tree
The package provides a `walk` method. It allows you to recursively visit every node of the tree.

```js
import {parse} from 'himalaya'
import walk from 'himalaya-walk'

const tree = parse('<div>foo</div>')
walk(tree, node => {
  console.log(node)
})
```

## Related packages

* https://github.com/andrejewski/himalaya
* https://github.com/andrejewski/paul

