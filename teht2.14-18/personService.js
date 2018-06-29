import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
  return axios.get(baseUrl)
}

const create = (newObject) => {
  return axios.post(baseUrl, newObject)
}

const deletePerson = (personId) => {
    const id = String(personId)
    console.log(id)
    const strDel = baseUrl.concat("/", id)
    return axios.delete(strDel)
}

export default { getAll, create, deletePerson }