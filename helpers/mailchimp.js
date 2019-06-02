import axios from 'axios';

import { ADD_MEMBER_URL, MAILCHIMP_API_KEY } from './config';

export const subscribeToNews = async ( email_address ) => {
  return axios.post(
    ADD_MEMBER_URL,
    {
      email_address,
      status: 'subscribed'
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Basic YXBpa2V5OmMwM2UwNzBiNDQxMWYyNThkOTBmNWI3ZTgzNGFlY2Y4LXVzMjA=',
        'X-Requested-With': 'XMLHttpRequest'
      },
      auth: {
        username: 'medias.loucarter@gmail.com',
        password: MAILCHIMP_API_KEY,
      },
    },
  )
};
