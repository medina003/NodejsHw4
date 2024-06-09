const { Transform } = require('stream')
const fs = require('fs')
const transformer = new Transform({
    transform(chunk, encoding, callback) {
        let fileText = chunk.toString()
        if (fileText.length > 5000) {
            this.push(fileText) 
        }
        callback()
    }
})

const readable = fs.createReadStream('./file.txt')
const writable = fs.createWriteStream('./transform-file.txt')
readable.pipe(transformer).pipe(writable)