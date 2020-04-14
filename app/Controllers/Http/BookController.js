'use strict'
const Book = use('App/Models/Book');

class BookController {

    async index({ request, response, auth}){
        let books = await Book.query().fetch();
        return response.json(books);
    }

    async store ({ request, response}){
        const auteur = request.input('autor')
        const titre = request.input('title')

        const book = new Book();
        book.autor = auteur;
        book.title = titre;
        await book.save();

        response.json({autor:book.autor, title:book.title, id:book.id});
    }

    async update ({ params, request, response }){
        const auteur = request.input('autor')
        const titre = request.input('title')

        const book = await Book.find(params.id);

        book.autor = auteur;
        book.title = titre;
        await book.save();

        return response.json(book);
    }

    async destroy ({ params, request, response }){
        var book = await Book.find(params.id);
        await book.delete();
        return response.json({message : 'Book deleted'});
    }
}

module.exports = BookController
