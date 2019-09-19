import Api from '../Api/Api'

import saveToken from '../Api/saveToken'

const refreshToken = (token) => {
    fetch(`${Api}api/refresh_token.php`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token})
    })
    .then(res => res.text())
    .then(tokenToSave => saveToken(tokenToSave))

};

export default refreshToken;