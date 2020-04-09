const assert = require('assert')
const { parse } = require('himalaya')
const walk = require('.')

function test (description, callback) {
  try {
    callback(assert)
  } catch (exception) {
    console.error(`Test failed: ${description}`)
  }
}

test('walk() visits all nodes', ({ equal }) => {
  const tree = parse('<p><strong>Hello</strong>, world! </p><!-- foo -->')
  let count = 0
  let nodes = []
  walk(tree, node => {
    count += 1
    nodes.push(node)
  })
  let types = nodes.map(node => node.type)
  
  equal(count, 5)
  equal(types[0], 'element')
  equal(types[1], 'element')
  equal(types[2], 'text')
  equal(types[3], 'text')
  equal(types[4], 'comment')
})

test('walk() can walk through individual nodes', ({ equal }) => {
  const tree = parse('<p><strong>Hello</strong>, world! </p><!-- foo -->')
  const leaf = tree[0]
  let count = 0
  let nodes = []
  walk(leaf, node => {
    count += 1
    nodes.push(node)
  })
  let types = nodes.map(node => node.type)
  
  equal(count, 4)
  equal(types[0], 'element')
  equal(types[1], 'element')
  equal(types[2], 'text')
  equal(types[3], 'text')
})
