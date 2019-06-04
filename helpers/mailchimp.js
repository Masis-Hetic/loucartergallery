import axios from 'axios';

import { ADD_MEMBER_URL, LIST_ID_EVENT, MAILCHIMP_API_KEY } from './config';

const PHP_URL = 'http://localhost:8000/newsletter.php';

export const subscribeToNews = async(email_address = 'jaja@mail.com') => {
  console.log('ici');
  return axios.post(
    PHP_URL,
    {
      email_address,
      status: 'subscribed',
      list_id: LIST_ID_EVENT
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type'               : 'application/json',
        'X-Requested-With'           : 'XMLHttpRequest'
      },
    },
  );
};
