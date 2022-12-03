import { BASE_INSTANCE } from 'api/constants';
import { useCookies } from 'react-cookie';

function useAuth() {
    const [cookies] = useCookies();
    // eslint-disable-next-line no-return-assign
    BASE_INSTANCE.defaults.headers.common.Authorization = cookies?.token;
}

export default useAuth;
