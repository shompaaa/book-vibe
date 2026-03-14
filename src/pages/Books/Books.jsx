import React, { useEffect, useState } from 'react';

const Books = () => {

    const [allBooks, setAllBooks] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/book-vibe-resources/refs/heads/main/data/booksData.json')
        .then(res => res.json())
        .then(data =>{
            setAllBooks(data);
        })
    },[])

    return (
        <div>
            <h1>All Books Here</h1>
        </div>
    );
};

export default Books;