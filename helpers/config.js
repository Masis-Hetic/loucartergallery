export const MAILCHIMP_API_KEY = 'c03e070b4411f258d90f5b7e834aecf8-us20';

const dc = MAILCHIMP_API_KEY.split('-')[ 1 ];

const heroku = 'https://cors-anywhere.herokuapp.com/';

export const MAILCHIMP_API_URL = `https://${ dc }.api.mailchimp.com/3.0`;

export const LIST_ID = '6a7e155805';

export const LIST_ID_EVENT = 'd180861793'; // TODO laisser la main sur la liste event via prismic

export const ADDRESS = 'https://loucarter.netlify.com/'; // TODO ajouter la bonne address ou verifier

export const ADD_MEMBER_URL = `${ heroku }${ MAILCHIMP_API_URL }/lists/${ LIST_ID_EVENT }/members/`;
