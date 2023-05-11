import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBar = ({ books, setBooks }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault()
        setBooks(books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase())))
    }


    return (
        <Form
            className='d-flex justify-content-center'
        >
            <Form.Group className="mb-3">
                <Form.Control
                    type='search'
                    placeholder="Cerca libro..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    
                />
            </Form.Group>
            <Button
                className='h-25 mx-3'
                variant="primary"
                type="submit"
                onClick={handleSearch}
            >
                Cerca
            </Button>
        </Form>
    )
}

export default SearchBar



