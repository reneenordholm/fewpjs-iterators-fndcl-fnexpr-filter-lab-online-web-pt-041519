 // returns all drivers that match the passed in name
 // returns matching drivers if case does not match but letters do
 // returns an empty array if there is no match

function findMatching(drivers, string) {
  let matching = drivers.filter(d => {
    return d.toLowerCase() === string.toLowerCase()
  })
  return matching
}

// returns a driver if beginning provided letters match
// does not return drivers if only middle or ending letters match
// does not return drivers if only middle or ending letters match
function fuzzyMatch(drivers, string) {
  let fuzzy = drivers.filter( d => {
    return d.charAt(0) === string.charAt(0)
  })
  return fuzzy
}

// accesses the data structure to check if name matches
function matchName(drivers, string) {
  let match = drivers.filter( d => {
    return d.name === string
  })
  return match
}
