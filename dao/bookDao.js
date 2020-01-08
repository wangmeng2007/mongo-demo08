const mongoose=require('mongoose')

let bookmodel=mongoose.model("Book")

function addBook(book,callback) {
    let b= bookmodel.create(book,function (err,newBookDoc) {
        if (!err) callback(newBookDoc.toObject())
    })
}

function findAllBooks(callback) {
    bookmodel.find({}).exec(function (err,callback) {
        if (!err) callback(books)
    })
}

function deleteBook(id,callback) {
    bookmodel.findByIdAndRemove(id,function (err) {
        if (!err) callback({})
    })
}

module.exports={addBook,deleteBook,findAllBooks}