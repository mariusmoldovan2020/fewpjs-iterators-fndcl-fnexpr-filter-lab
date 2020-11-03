// Code your solution here
function findMatching(source, string) {
    return source.filter( match =>
      match.toLowerCase() === string.toLowerCase()
    )
  }


  function fuzzyMatch(source, string) {
    return source.filter( match =>
      match.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
  }

  function matchName(drivers, name) {
    return drivers.filter( record => record.name === name)
  }