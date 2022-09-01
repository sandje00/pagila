import { dbAuthenticate } from 'database';
import express from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});

(async () => {
  try {
    await dbAuthenticate();
    console.log('Connected to the database');
  } catch (err) {
    console.error(err);
  }
})();
