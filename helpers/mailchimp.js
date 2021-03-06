import axios from 'axios';

import { LIST_ID_EVENT } from './config';

const PHP_URL = 'https://loucartergallery.com/static/newsletter.php';

export const subscribeToNews = async(email_address) => {
  return axios.post(
    PHP_URL,
    {
      email_address,
      status : 'subscribed',
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
