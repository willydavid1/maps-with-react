import { useEffect, useState } from 'react'
import { getDataApi } from '../utils/getDataApi'

function useTemperatureApi () {
  const [dataWeather, setDataWeather] = useState({})
  useEffect(() => {
    const search = async () => {
      try {
        const { data } = await getDataApi()
        setDataWeather(data)
      } catch (error) {
        setDataWeather({ ...dataWeather, errorInRequestBackendApi: error?.message })
      }
    }
    search()
  }, [])

  return [dataWeather]
}

export default useTemperatureApi
