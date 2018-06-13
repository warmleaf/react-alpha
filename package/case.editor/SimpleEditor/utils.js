export const multipleImport = async (...paths) => Promise.all(paths.map(path => {
  console.log(`node_modules/${path}`)
  return import(`./node_modules/${path}`)
}))