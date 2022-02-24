import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:3001/api/checks' })

export const getPrime = async (number) => {
  return await api.get(`/?action=checkprime&number=${number}`)
}

export const getSumAndPrime = async (numbers) => {
  return await api.get(`/?action=sumandcheck&numbers=${numbers}`)
}