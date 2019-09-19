import Api from './Api'

const getListProduct = (idType, page) => {
    const url = `${Api}api/product_by_type.php?id_type=${idType}&page=${page}`
    return fetch(url)
    .then(res => res.json());
}

export default getListProduct;