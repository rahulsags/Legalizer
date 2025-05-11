const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/legal_document_simplifier';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db();
        
        // Initialize collections if they do not exist
        await db.createCollection('documents', { capped: false });
        await db.createCollection('users', { capped: false });
        
        console.log('Collections initialized');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectDB();

module.exports = client;