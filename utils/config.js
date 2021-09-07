import dotenv from 'dotenv';

const config = {
    API_URL: dotenv.API_URL || 'localhost:3000',
}

export default config;