/* This short code was develope to demonstrate the use of readFile & writeFile. 
There is a three-fold process taking place. 
*/

const fs = require('fs')


const contents = fs.readFile('quote.txt', 'utf8', function (err, file1Contents) {
/*1. The contents of the file quote. txt are being read, and the content itself will
get modified to open a new file with the modified content. */
    let newFileCopy = file1Contents; 
    let newstr = newFileCopy.replace(/below|but/gi, 'above'); /* 2. Modification of content, where 
    protions the content of quote.txt will get replaced by other content. */

    if (err) {
        console.log(err)
        return
    }
    //console.log(newstr);

    fs.readFile('newquote.txt', contents, function (err, contents) { /*3. New txt file where contents are getting passed into. */
        if (err) contents = file1Contents
        else contents += newstr
        console.log("New Copy Successfully Saved! Take a look at finder for the new file.")

        fs.writeFile('newquote.txt', newstr, function (err) { /* 3.2 server creates a new file within same repository with modified content*/
            if (err) console.log(err)

        })
    })

})
