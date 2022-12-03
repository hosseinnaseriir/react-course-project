import { BASE_INSTANCE } from 'api/constants';

export const loginService = (data) => BASE_INSTANCE.post('/login', data);
