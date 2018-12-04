import { IAppState } from './store';

const DBHOST = 'http://localhost:5000';

const request = async (url: string, options: any = {}, headers: any = {}) => {
    const opts = {
        method: 'POST',
        cache: 'no-cache',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            ...headers
        },
        ...options
    };

    return fetch(url, opts).catch((e) => alert(e));
};

export class SignUpService {

    async authenticateNewUser(userInfo: IAppState) {
        const resp = await request(`${DBHOST}/api/account`, { body: JSON.stringify({ email: userInfo.email, password: userInfo.password})});

        if (resp && resp.ok) {
            const responseBody = await resp.json();
            this.addInfo(userInfo, responseBody.access_token);
        }
    }

    async addInfo(userInfo: IAppState, accessToken: string) {
        const info = {
            name: userInfo.name,
            lastName: userInfo.surname,
            email: userInfo.email,
            company: userInfo.company
        };

        const options = { body: JSON.stringify(info) };
        const headers = { 'Authorization': `Bearer ${accessToken}` };
        const resp = await request(`${DBHOST}/api/user`, options, headers);
    }
}
