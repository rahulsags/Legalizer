import React, { useState } from 'react';
import DocumentUpload from '../components/DocumentUpload';
import DocumentViewer from '../components/DocumentViewer';
import FeedbackForm from '../components/FeedbackForm';

const DocumentPage = () => {
    const [originalText, setOriginalText] = useState('');
    const [simplifiedText, setSimplifiedText] = useState('');
    const [riskLevels, setRiskLevels] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleDocumentUpload = async (file) => {
        setLoading(true);
        // Call the API to upload and process the document
        const response = await fetch('/api/documents/upload', {
            method: 'POST',
            body: file,
        });
        const data = await response.json();
        setOriginalText(data.originalText);
        setSimplifiedText(data.simplifiedText);
        setRiskLevels(data.riskLevels);
        setLoading(false);
    };

    return (
        <div className="document-page">
            <h1>Legal Document Simplifier</h1>
            <DocumentUpload onUpload={handleDocumentUpload} />
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    <DocumentViewer 
                        originalText={originalText} 
                        simplifiedText={simplifiedText} 
                        riskLevels={riskLevels} 
                    />
                    <FeedbackForm />
                </>
            )}
        </div>
    );
};

export default DocumentPage;