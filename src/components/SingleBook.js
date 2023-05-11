import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import CommentsModal from './CommentsModal';

const SingleBook = ({ book }) => {

    const [selected, setSelected] = useState(true);
    const toggleSelected = () => {
        setSelected(!selected)
    }

    const [commentsModal, setCommentsModal] = useState(false)
    const toggleModal = () => setCommentsModal(!commentsModal)


    return (
        <>
            <Card style={{ width: '14rem', height: '30rem' }} className={`${!selected ? "border border-danger" : "border"}`}>
                <Card.Img style={{ height: '20rem' }} src={book.img} onClick={toggleSelected} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Button onClick={toggleModal}>Comments</Button>
                </Card.Body>
            </Card>

            {commentsModal && <CommentsModal asin={book.asin} closeFn={toggleModal}/>}
        </>
    );
}

export default SingleBook