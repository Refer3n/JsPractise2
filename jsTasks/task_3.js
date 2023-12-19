// # Задача;

// Дано масив об'єктів, який містить інформацію про книги: назву, автора
// та рік видання. Потрібно знайти всі книги, які були видані після 2000 року,
// відсортувати їх за роком видання в порядку зростання та повернути їхні назви.
// Вхідні дані: масив об'єктів книг

// Вихідні дані: масив назв книг, які були видані після 2000 року
// та відсортовані за роком видання в порядку зростання.

let books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
  },
  { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
  { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    year: 2005,
  },
];

function filterBooks(books) {
    const filteredBooks = books.filter((book) => book.year > 2000);
    const sortedBooks = filteredBooks.sort((a, b) => a.year - b.year );
    return sortedBooks;
}

console.log(filterBooks(books));