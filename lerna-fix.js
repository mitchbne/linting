#! /usr/local/bin/node
const fs = require("fs")
const path = require("path")

function main() {
  const packages = fs.readdirSync("./packages")
  packages.forEach((folder) => {
    const pkg = readPackageJson(`./packages/${folder}`)
    if (pkg.gitHead) {
      const fpath = path.join(`./packages/${folder}`, "package.json")
      console.debug(`Deleting gitHead from ${fpath}...`)
      delete pkg.gitHead
      fs.writeFileSync(fpath, JSON.stringify(pkg, null, 2) + "\n")
    }
  })
}

function readJsonFile(fpath) {
  const content = fs.readFileSync(fpath)
  return JSON.parse(content)
}

function readPackageJson(folder) {
  const packageJsonPath = path.join(folder, "package.json")
  return readJsonFile(packageJsonPath)
}

main()
