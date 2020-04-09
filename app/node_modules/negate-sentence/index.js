const { string: { singularize, pluralize } } = require('pure-utilities')

module.exports = function negate(string) {
  if (['gt', 'lt', 'gte', 'lte', 'and', 'eq', 'or', 'xor'].includes(string)) return `n${string}`
  const words = string.split(' ')
  const firstWord = words[0]

  if (firstWord === 'is' || firstWord === 'are') {
    return `${string.substr(0, firstWord.length)} not ${string.substr(firstWord.length + 1)}`
  }
  if (firstWord === 'has' || firstWord === 'have') {
    return firstWord.endsWith('s') ? `does not ${string.replace('has', 'have')}` : `do not ${string}`
  }
  if (firstWord === 'bitwise') {
    return `not ${string}`
  }

  let singular = singularize(firstWord)
  let pluaral = pluralize(singular)
  singular = pluaral === firstWord ? singular : singular += 'e'
  return words.length === 1 ? `does not ${singular}` : `does not ${singular} ${string.substr(firstWord.length + 1 )}`
}
