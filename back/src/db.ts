import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer({
instance: { dbPath: './db', storageEngine: 'wiredTiger' }
});

// Wait for the server to be in the "running" or "starting" state
await mongod.start();

export const uri = await mongod.getUri();
console.log(`Serveur MongoDB démarré avec l'URI : ${uri}`);


