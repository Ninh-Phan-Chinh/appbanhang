import Api from '../Api/Api'

const sendOrder = (token,arratDetail) =>(
    fetch(`${Api}api/cart.php`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token,arratDetail})
    })
    .then(res => res.text())
);

module.exports = sendOrder;