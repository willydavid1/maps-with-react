import { useEffect, useState } from 'react'
import { getDataApi } from '../utils/getDataApi'

function useTemperatureApi (positionDefault = [4.660779178475431, -74.08494168529754]) {
  const [dataWeather, setDataWeather] = useState({ latlng: { lat: positionDefault[0], lng: positionDefault[1] }, positionDefault, geoLocation: {} })
  useEffect(() => {
    const search = async () => {
      try {
        const { data } = await getDataApi([{ key: 'lat', value: dataWeather.latlng.lat }, { key: 'lon', value: dataWeather.latlng.lng }])
        setDataWeather({ ...dataWeather, data })
      } catch (error) {
        setDataWeather({ ...dataWeather, errorInRequestBackendApi: error?.message })
      }
    }
    search()
  }, [dataWeather.latlng])

  return [dataWeather, setDataWeather]
}

export default useTemperatureApi
