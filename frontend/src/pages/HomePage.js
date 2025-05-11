import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Legal Document Simplifier</h1>
            <p>Welcome to the Legal Document Simplifier. Upload your legal documents to get simplified explanations and highlight key clauses.</p>
            <div className="navigation">
                <Link to="/upload" className="nav-link">Upload Document</Link>
                <Link to="/documents" className="nav-link">View Documents</Link>
            </div>
        </div>
    );
};

export default HomePage;