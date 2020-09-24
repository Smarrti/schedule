import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://rs-react-schedule.firebaseapp.com/api/team/sh36team/'
})