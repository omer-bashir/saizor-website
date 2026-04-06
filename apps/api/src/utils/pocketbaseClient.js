import dotenv from 'dotenv';
dotenv.config();
import Pocketbase from 'pocketbase';

const pocketbaseClient = new Pocketbase(process.env.POCKETBASE_URL || 'http://localhost:8090');

try {
  await pocketbaseClient.collection('_superusers').authWithPassword(
    process.env.PB_SUPERUSER_EMAIL,
    process.env.PB_SUPERUSER_PASSWORD,
  );
} catch (err) {
  console.warn('PocketBase unavailable — contact form will not work until PocketBase is running:', err.message);
}

export default pocketbaseClient;

export { pocketbaseClient };
