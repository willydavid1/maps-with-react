import React from 'react'
import { MapComponent } from './Map'
import { ViewData } from './ViewData'
import styles from '../styles/app.module.css'
import useTemperatureApi from '../hooks/useTemperatureApi'

const App = () => {
  const [dataWeather, setDataWeather] = useTemperatureApi()

  const handleClickNewPosition = async (latlng) => {
    setDataWeather({ ...dataWeather, latlng })
  }

  return (
    <div className={styles.wrapperGlobal}>
      <div className={styles.wrapperMap}>
        <MapComponent
          positionDefault={dataWeather.positionDefault}
          onClickPosition={handleClickNewPosition}
          position={dataWeather.latlng}
        />
      </div>
      <div className={styles.wrapperViewData}>
        <ViewData
          dataWeather={dataWeather?.data}
        />
      </div>
    </div>
  )
}

export default App
