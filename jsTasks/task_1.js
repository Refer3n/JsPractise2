// Задача;

// Створити об'єкт, який містить список фільмів та їх жанри.
// Напишіть метод, який виводить на екран список фільмів у вибраному жанрі.


const movies = {
    action: ["Die Hard", "John Wick", "The Matrix"],
    comedy: ["The Hangover", "Bridesmaids", "Step Brothers"],
    drama: ["The Shawshank Redemption", "The Godfather", "Schindler's List"],
    horror: ["The Shining", "A Nightmare on Elm Street", "The Exorcist"],

    getFilmsByGenre(genre) {
        if(this[genre] !== undefined) {
            this[genre].forEach(film => console.log(film));
        }
        else {
            console.log(`No films found in the genre: "${genre}"`);
        }
    }
};

movies.getFilmsByGenre("action");
movies.getFilmsByGenre("fantasy");