import React from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
    const movies = [
        {
            title: 'Fast X',
            posterURL: "images/fastx.jpg",
            description: 'Tenth and final installment of the Fast and Furious franchise.',
            rating: 4.5,
        },


        {
            title: 'John Wick: Chapter 4',
            posterURL: "images/JohnWick4.jpg",
            description: 'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
            rating: 4.8,
        },


        {
            title: 'Avatar: The Way of Water',
            posterURL: "images/Avatar.jpg",
            description: 'Set more than a decade after the events of the first film, “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
            rating: 4.0
        },


        {
            title: 'Extraction 2',
            posterURL: "images/Extraction2.jpg",
            description: 'Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Sydney, in order to get revenge.',
            rating: 5.0,
        },
    ];


    return (
        <div className="movie-list">
        {movies.map((movie, index) => (
            <MovieCard
                title={movie.title}
                description={movie.description}
                posterURL={movie.posterURL}
                rating={movie.rating}
            />
        ))}
        </div>
    );
};

export default MovieList;
