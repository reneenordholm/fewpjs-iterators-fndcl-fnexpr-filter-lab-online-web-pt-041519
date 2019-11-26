function findMatching(drivers, string) {
  let matching = drivers.filter(d => {
    return d === string
  })
}
