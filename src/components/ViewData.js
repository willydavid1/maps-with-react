import React from 'react'
import styles from '../styles/viewData.module.css'

export const ViewData = ({ dataWeather = {} }) => {
  return (
    <div className={styles.viewData}>
      <h2 className={styles.title}>Weather and location data</h2>
      <div className={styles.wrapperTemperature}>
        <span>{dataWeather?.name}</span>
        <span className={styles.temperature}>
          {dataWeather?.main?.temp || 0}°
        </span>
      </div>
      {
        Object.keys(dataWeather).length > 0 && (
          <div>
            <ul>
              {
                Object.keys(dataWeather?.main).map((elem, i) => {
                  return (<li key={i}>{elem}: {dataWeather?.main[elem]}</li>)
                })
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}
