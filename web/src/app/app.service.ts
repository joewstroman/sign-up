import { IAppState } from './store';

const DBHOST = 'http://localhost:5000';

export class SignUpService {

    authenticateNewUser(userInfo: IAppState) {
        console.log('Signing up user with email:', userInfo.email);
    }
}
