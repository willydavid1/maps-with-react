import axios from 'axios'
import credentials from '../config'

export const getDataApi = async (QUERY = [{ key: 'q', value: 'bogota' }]) => {
  const URL_BASE = `https://api.openweathermap.org/data/2.5/weather?appid=${credentials?.apiKeyOpenWeather}&units=metric`
  const PARAMS = QUERY.reduce((acum, elem) => `${acum}${elem?.key && elem?.value ? `&${elem.key}=${elem.value}` : ''}`, '')
  return axios.get(`${URL_BASE}${PARAMS}`)
}
