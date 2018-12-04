import { IAppState } from './store';

const DBHOST = 'http://localhost:5000';

export class SignUpService {

    authenticateNewUser(userInfo: IAppState) {
        fetch(`${DBHOST}/api/account`, {
            method: 'POST',
            cache: 'no-cache',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({email: userInfo.email, password: userInfo.password})
        }).then( async (resp: Response) => {
            console.log(await resp.text());
        }).catch( e => alert(e));
    }
}
