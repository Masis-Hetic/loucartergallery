export const GET_NAV_DATAS = 'GET_NAV_DATAS';

export const IS_NAV_OPEN = 'IS_NAV_OPEN';

export const getNavDatas = payload => ({ type: GET_NAV_DATAS, payload });

export const navStatus = payload => ({ type: IS_NAV_OPEN, payload });
