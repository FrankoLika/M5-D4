import Badge from 'react-bootstrap/Badge';

function MyBadge({color, str}) {
    return (
        <Badge bg={color}>{str}</Badge>
    );
}

export default MyBadge;