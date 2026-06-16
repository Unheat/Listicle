import { pool } from '../config/database.js'

const getPatterns = async (req, res) => {
  // try block: query the database for all patterns
  // catch block: send error with status 409
    try {
        const queryText = 'SELECT * FROM patterns;';
        const result = await pool.query(queryText);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No patterns found' });
        }
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.error('Error fetching patterns:', error);
        res.status(409).json({ message: 'Error fetching patterns' });
    }
}

export default getPatterns
