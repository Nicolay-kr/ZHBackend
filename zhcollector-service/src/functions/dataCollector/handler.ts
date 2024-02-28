import { db } from '@libs/firebase';
import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config';
import axios from 'axios';
import { transformData } from 'src/utils';

const dataCollector = async (event: any = {}): Promise<any> => {
  const token = Buffer.from(
    `${process.env.USER_NAME}:${process.env.PASSWORD}`
  ).toString('base64');

  try {
    const response = await axios({
      method: 'get',
      url: process.env.SOURCE_URL!,
      headers: { Authorization: `Basic ${token}` },
    });

    const data = response.data;
    const id = uuidv4();

    await db
      .collection('stations-data')
      .doc(id)
      .set({
        ...transformData(data),
        date: Date.now(),
      });

    console.log('Data collected and sent successfully.');
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Data collected and sent successfully.',
      }),
    };
  } catch (error) {
    console.error('Error during data collection and sending:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: `Error during data collection and sending: ${error.message}`,
      }),
    };
  }
};

export const main = dataCollector;
