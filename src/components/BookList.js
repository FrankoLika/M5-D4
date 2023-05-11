import React, { useState, useEffect } from 'react'
import SingleBook from './SingleBook'
import { Container, Col, Row } from 'react-bootstrap'
import { nanoid } from 'nanoid'
import SearchBar from './SearchBar'

const BookList = () => {
    const [books, setBooks] = useState([])
    const [FilteredBooks, setFilteredBooks] = useState([])

    const getBooks = async () => {
        const data = await fetch("https://epibooks.onrender.com/")
        const response = await data.json();
        setBooks(response)
        setFilteredBooks(response)
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <>
            <SearchBar books={books} setBooks={setFilteredBooks} />
            <Container className='d-flex justify-content-center flex-wrap gap-3'>
                {FilteredBooks && FilteredBooks.map((book) => {
                    return (
                        <Row key={nanoid()}>
                            <Col>
                                <SingleBook book={book} />
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        </>
    )
}

export default BookList