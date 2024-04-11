const library = [
    {title: 'The Road Ahead', author: 'Bill Gates', year: 1995, bestseller: true},
    {title: 'Walter Isaacson', author: 'Steve Jobs', year: 2011, bestseller: true},
    {title: 'Mockingjay', author: 'Suzanne Collins', year: 2010, bestseller: false},
    {title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008, bestseller: true}
]

// Log the result after each task:

// List each author (without duplicates)...

console.log(authors =[...new Set (library.map(book => book.author))]);

// List all book titles published after 2000...

console.log(library.filter(book => book.year > 2000).map(book => book.title));

// List all property names of the first book separated by a comma (expected output: 'title, author, year')...

console.log(Object.values(library[0]).join(', '));

// List all bestseller book titles...

console.log(library.filter(book => book.bestseller).map(book => book.title));
