import { MongoClient, Db } from 'mongodb';

const uri = process.env.CONNECTION_STRING || '';

async function connectToDatabase(): Promise<Db | undefined> {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Return the database instance
    return client.db();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

export default connectToDatabase;