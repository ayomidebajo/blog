import React from 'react';
import Rainbow from './hoc/Rainbow'
const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Test blog<br></br>
            For testing purposes and checking
            <br></br>
            </p>
        </div>
    )
}

export default Rainbow(About) 