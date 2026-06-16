import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
// import patterns from '../data/patterns.js'
import getPatterns from '../controllers/patterns.js'
const __filename = fileURLToPath(import.meta.url) //  The import.meta.url is a special property that contains the URL of the current module file
const __dirname = path.dirname(__filename)

/*
The Breakdown
const __filename = fileURLToPath(import.meta.url)

import.meta.url: This provides the "GPS location" of your file in a web format.

Example: file:///Users/AnDang/project/server.js

fileURLToPath(): This is the translator. It takes that URL and "cleans" it for your operating system. It removes the file:// prefix and adjusts the slashes so your computer can recognize it as a real, usable file location.

Result: /Users/AnDang/project/server.js
*/

const router = express.Router()


// router.get('/', (req, res) => { //if enter home return 
//   res.status(200).json(patterns)
// })
router.get('/', getPatterns)

router.get('/:patternId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/pattern.html'))
})
export default router