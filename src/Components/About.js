import React from 'react';
import '../index.css'
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

function About(){
    
    return (
        <div>
            <PageHeader />
            <Link to="/">Racer</Link>
        </div>
    )
}

export default About