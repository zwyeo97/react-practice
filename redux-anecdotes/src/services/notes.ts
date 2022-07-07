import axios from 'axios'


const baseUrl = 'http://localhost:3001/anecdotes'

const getId  = () => (100000 * Math.random()).toFixed(0);


const getData = async () => {
    let res = await axios.get(baseUrl);
    return res.data;
}

const postData = async (tex) => {
    const object = {
        content : tex.content,
        id: tex.id,
        votes : tex.votes

    }
    const res = await axios.post(baseUrl, object)
    console.log(res.data);
    return res.data;
}

const updateData = async (tex) => {
    const object = {
        content : tex.content,
        id: tex.id,
        votes : tex.votes + 1

    }
    const res = await axios.put(baseUrl + "/" + tex.id, object);
    return res.data;
}

const exportedObject = {
    getData,
    postData,
    getId,
    updateData
}

export default exportedObject;