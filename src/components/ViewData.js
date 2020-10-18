import React from 'react'
import styles from '../styles/viewData.module.css'

export const ViewData = ({ dataWeather = {} }) => {
  return (
    <div className={styles.viewData}>
      <h2 className={styles.title}>Weather data</h2>
      <div className={styles.wrapperTemperature}>
        <span className={styles.temperature}>
          19°
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
