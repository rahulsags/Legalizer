import React from 'react';

const SimplifiedText = ({ originalText, simplifiedText, riskLevels }) => {
    return (
        <div className="simplified-text-container">
            <h2>Simplified Text</h2>
            <div className="text-section">
                <h3>Original Text</h3>
                <p>{originalText}</p>
            </div>
            <div className="text-section">
                <h3>Simplified Version</h3>
                <p>
                    {simplifiedText.split(' ').map((word, index) => {
                        const riskLevel = riskLevels[index];
                        return (
                            <span key={index} className={`risk-level-${riskLevel}`}>
                                {word}{' '}
                            </span>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

export default SimplifiedText;