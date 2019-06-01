import axios                                 from 'axios';
import { ADD_MEMBER_URL, MAILCHIMP_API_KEY } from './config';

// export const subscribeToNews = (req, res, next) => {
//   console.log({req});
//
//   const email = req.body.email; // Email entered
//   const dataCenter = 'us1';
//   const apiKey = 'c03e070b4411f258d90f5b7e834aecf8-us20';
//   const listID = 'LIST_ID';
//
//   const options = {
//     url    : ``,
//     method : 'POST',
//     headers: { 'content-type': 'application/json', 'Authorization': `apikey ${ apiKey }` },
//     body   : JSON.stringify({ email_address: email, status: 'subscribed' }),
//   };
//
//   request(options,  (error, response, body) => {
//     try {
//       let respObj = {};
//       if (response.statusCode === 200) {
//         respObj = { success: `Subscribed using ${email}`, message: JSON.parse(response.body) };
//       } else {
//         respObj = { error: `Error trying to subscribe ${email}. Plese try again.`, message: JSON.parse(response.body) }
//       }
//       res.send(respObj);
//     } catch (e) {
//       const respErrorObj = { error: `There was an error with your request`, message: error.message };
//       res.send(respErrorObj);
//     }
//   });
//   next();
// };

export const subscribeToNews = (email) => { // TODO valider la request AXIOS
  axios.post(
    ADD_MEMBER_URL,
    {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
      }
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
        // 'Content-Type': 'application/json; charset=UTF-8',
      auth: {
        username: 'medias.loucarter@gmail.com',
        password: MAILCHIMP_API_KEY,
      },
    },
  ).then(() => {
    console.log('prop', email); // TODO hundle sucess
  })
        .catch(() => {
    console.log('error'); // TODO hundle error
  });
};
