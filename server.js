// @ts-check
const express = require('express')
const path = require('path')
const fs = require('fs')

const port = process.env.PORT || 3000
const app = express()

// app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function (req, res) {
  const params = req.params[0]

  // redirect without .html extension
  if (params.includes('.html')) res.redirect(params.replace('.html', ''))

  const paths = params.split(/\\|\//).filter(param => !!param)

  // send static files
  if (paths[0] === 'public') return res.sendFile(path.join(__dirname, ...paths))

  const filename = paths.length === 0 ? 'index' : paths.pop()
  const basepath = path.join(__dirname, 'pages', ...paths)

  const htmlpath = path.join(basepath, `${filename}.html`)
  const exist = fs.existsSync(htmlpath)
  if (exist) return res.sendFile(htmlpath)

  const htmlpathInFolder = path.join(basepath, filename, 'index.html')
  const existInFolder = fs.existsSync(htmlpathInFolder)
  if (existInFolder) return res.sendFile(htmlpathInFolder)

  return res.status(404).json({
    error: true,
    message: 'missing file',
  })
})

app.listen(port, () => console.log('running'))
