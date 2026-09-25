import axios from 'axios'

const PostContact = (Url, Name) => {
    const response = axios
        .post(Url, Name)
        //.then(response => console.log(response))
    return response
}

const GetContacts = (Url) => {
    const response = axios
      .get(Url)
    return response
}

const DeleteContact = (Url) => {
    const response = axios
        .delete(Url)
    return response
}

export default {PostContact, GetContacts, DeleteContact}