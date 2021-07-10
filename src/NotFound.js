import React from 'react'
import { Link } from 'react-router-dom';
const NotFound =() => {
    return (
        <div className="not-found">
            <h2>404 Error</h2>
            <p>That Page connot be found</p>
            <Link to="/">Back to Home Page</Link>
        </div>
    )
}
export default NotFound;