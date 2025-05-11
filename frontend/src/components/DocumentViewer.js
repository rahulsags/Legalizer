import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SimplifiedText from './SimplifiedText';
import FeedbackForm from './FeedbackForm';

const DocumentViewer = ({ documentId }) => {
    const [originalText, setOriginalText] = useState('');
    const [simplifiedText, setSimplifiedText] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await axios.get(`/api/documents/${documentId}`);
                setOriginalText(response.data.originalText);
                setSimplifiedText(response.data.simplifiedText);
            } catch (err) {
                setError('Error fetching document');
            } finally {
                setLoading(false);
            }
        };

        fetchDocument();
    }, [documentId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="document-viewer">
            <h2>Original Document</h2>
            <pre>{originalText}</pre>
            <h2>Simplified Document</h2>
            <SimplifiedText text={simplifiedText} />
            <FeedbackForm documentId={documentId} />
        </div>
    );
};

export default DocumentViewer;