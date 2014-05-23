var test = require("tap").test

var manifest = require("../../package.json")
var depNames = Object.keys(manifest.dependencies)
var bundled = manifest.bundleDependencies

test("all deps are bundled deps or dev deps", function (t) {
  depNames.forEach(function (name) {
    t.assert(
      bundled.indexOf(name) !== -1,
      name + " is in bundledDependencies"
    )
  })

  bundled.forEach(function (name) {
    t.assert(
      depNames.indexOf(name) !== -1,
      name + " is a bundled dependency in \"dependencies\""
    )
  })

  t.end()
})
