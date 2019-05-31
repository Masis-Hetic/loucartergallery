export const MAILCHIMP_API_KEY = 'c03e070b4411f258d90f5b7e834aecf8-us20';

const dc = MAILCHIMP_API_KEY.split('-')[1];

export const MAILCHIMP_API_URL = `https://${dc}.api.mailchimp.com/3.0/`;

export const LANDING_LIST_ID = ''; // TODO récupéré la mail champ list id

export const ADDRESS = 'loucartergallery.com'; // TODO ajouter la bonne address ou verifier

export const ADD_MEMBER_URL = `https://${ADDRESS}/${MAILCHIMP_API_URL}lists/${LANDING_LIST_ID}/members/`;
