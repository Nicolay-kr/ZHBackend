import axios from 'axios';
import * as cron from 'node-cron';
import 'dotenv/config';
import { db } from './firebase';
import { v4 as uuidv4 } from 'uuid';

const token = Buffer.from(
  `${process.env.USER_NAME}:${process.env.PASSWORD}`
).toString('base64');

const fetchDataAndSend = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: process.env.SOURCE_URL,
      headers: { Authorization: `Basic ${token}` },
    });

    const data = response.data;

    const id = uuidv4();
    await db
      .collection('stations-data')
      .doc(id)
      .create({
        date: Date.now(),
        data,
      });

    console.log('Data collected and sent successfully.');
  } catch (error) {
    console.error('Error during data collection and sending:', error);
  }
};

// Schedule the task to run once per hour
cron.schedule('*/10 * * * * *', fetchDataAndSend);

console.log('Collector service started. Fetching data once per hour.');
