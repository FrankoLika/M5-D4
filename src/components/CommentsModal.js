import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/CommentsModal.css'
import ListGroup from 'react-bootstrap/ListGroup';
import RatingSystem from './RatingSystem';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';
import AddComments from './AddComments';
import { nanoid } from 'nanoid';

function CommentsModal({ asin, closeFn }) {

    const { data, loading, error } = useFetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`);

    const [comments, setComments] = useState(false);

    const toggleComments = () => {
        setComments(!comments)
    }
    return (
        <div
            className="modal show comment-modal"
            style={{ display: 'block' }}
        >
            <Modal.Dialog centered size='lg'>
                <Modal.Header>
                    <Modal.Title>Comments</Modal.Title>
                    <button className='border-0 bg-danger text-white' onClick={toggleComments}>Add Comment</button>
                </Modal.Header>

                <Modal.Body>
                    {comments && <AddComments asin={asin}/>}
                    <ListGroup className='mt-5'>
                        {(data && data.map((comment) => {
                            return (
                                <ListGroup.Item key={nanoid()} className='d-flex justify-content-between align-items-start'>
                                    <div className='ms-2 me-auto '>
                                        <div>
                                            {comment.comment}
                                        </div>
                                        <div>
                                            Relativo al libro : {comment.elementId}
                                        </div>
                                    </div>
                                    <RatingSystem stars={comment.rate} />
                                </ListGroup.Item>
                            )
                        }))}
                    </ListGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={closeFn}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default CommentsModal;