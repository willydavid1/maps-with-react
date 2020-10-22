import React from 'react'
import styles from '../styles/viewData.module.css'
import { Loader } from './Loader'

export const ViewData = ({ dataWeather = {}, isLoadingApi, errorApi }) => {
  return (
    <div className={styles.viewData}>
      <h2 className={styles.title}>Weather and location data</h2>
      {errorApi && <div className='errorDisplay'><span>⚠ {errorApi} ⚠</span></div>}
      <div className={styles.wrapperTemperature}>
        {
          isLoadingApi
            ? <Loader />
            : (
              <>
                <span>{dataWeather?.name}</span>
                <span className={styles.temperature}>
                  {dataWeather?.main?.temp || 0} °C
                </span>
              </>
            )
        }
      </div>
      {
        (Object.keys(dataWeather).length > 0 && !isLoadingApi) && (
          <div>
            <ul>
              {
                Object.keys(dataWeather?.main).map((elem, i) => {
                  return (<li key={i}>{elem}: {dataWeather?.main[elem]}</li>)
                })
              }
              {
                Object.keys(dataWeather?.coord).length > 0 && Object.keys(dataWeather?.coord).map((elem, i) => {
                  return (<li key={i} className={styles.coord}>{elem}: {dataWeather?.coord[elem]}</li>)
                })
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}
