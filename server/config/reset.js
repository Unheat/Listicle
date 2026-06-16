import {pool} from './database.js'
import './dotenv.js'
import patterns from '../data/patterns.js'


const createPatternsTable = async  () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS patterns;
        CREATE TABLE IF NOT EXISTS patterns (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            difficulty VARCHAR(255) NOT NULL,
            category VARCHAR(255) NOT NULL,
            summary TEXT NOT NULL,
            tips TEXT NOT NULL,
            example TEXT NOT NULL,
            image VARCHAR(255) NOT NULL
        );
    `;
    try {
    const res = await pool.query(createTableQuery)
    console.log('🎉 table created successfully')
    }
    catch (error) {
    console.error('⚠️ error creating table', error)
    throw error; // Rethrow to let the main runner catch it
    }
};
const seedPatternsTable = async () => {
    try{
        await createPatternsTable();
        for (const pattern of patterns){
            const insertQuery = `
                INSERT INTO patterns (name, difficulty, category, summary, tips, example, image)
                VALUES ($1, $2, $3, $4, $5, $6, $7);
            `;
            const values = [pattern.name, pattern.difficulty, pattern.category, pattern.summary, pattern.tips, pattern.example, pattern.image];
            await pool.query(insertQuery, values);
        }
        
    }
    catch (err) {
        console.error('⚠️ error creating patterns table', err)
    }
}


const runReset = async () => {
    try {
        // Running seedPatternsTable automatically triggers createPatternsTable internally
        await seedPatternsTable();
    } catch (error) {
        console.error('Database reset script failed:', error.message);
    } finally {
        await pool.end();
        console.log('Database pool connection closed.');
    }
};

runReset();