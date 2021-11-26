import BooksModel from '../models/books.js';

export const getAllBooks = async () => {
	const books = await BooksModel.find({})
		.populate("author")
		.populate("customers")
		.populate([
			{
				path: "comments",
				model: "Comment",
				select: "author message datetime"
			}
		]);
	return books;
}