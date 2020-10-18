import React from 'react'
import { Map } from './Map'
import { ViewData } from './ViewData'
import styles from '../styles/app.module.css'
import useTemperatureApi from '../hooks/useTemperatureApi'

const App = () => {
  const [dataWeather] = useTemperatureApi()

  return (
    <div className={styles.wrapperGlobal}>
      <div className={styles.wrapperMap}>
        <Map />
      </div>
      <div className={styles.wrapperViewData}>
        <ViewData
          dataWeather={dataWeather}
        />
      </div>
    </div>
  )
}

export default App
