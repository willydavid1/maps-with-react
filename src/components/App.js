import React from 'react'
import { MapComponent } from './Map'
import { ViewData } from './ViewData'
import styles from '../styles/app.module.css'
import useTemperatureApi from '../hooks/useTemperatureApi'

const App = () => {
  // const [dataWeather] = useTemperatureApi()

  return (
    <div className={styles.wrapperGlobal}>
      <div className={styles.wrapperMap}>
        <MapComponent />
      </div>
      <div className={styles.wrapperViewData}>
        <ViewData />
      </div>
    </div>
  )
}

export default App
