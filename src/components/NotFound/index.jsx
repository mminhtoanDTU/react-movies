import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Sorry, the page you visited does not exist.</h3>
            <Link to="/" style={styles.link}>Go Home</Link>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
    },
    title: {
        fontSize: '1.5rem',
        color: 'white',
        textAlign: 'center',
        margin: '30px 0 10px 0'
    },
    link: {
        textAlign: 'center',
        fontSize: '16px',
        display: 'inline-block',
        backgroundColor: '#3187D3',
        padding: '10px',
        borderRadius: '5px',
    }
}

export default NotFound;