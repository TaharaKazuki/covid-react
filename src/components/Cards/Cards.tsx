import React, { FC } from 'react'
import { Typography, Grid } from '@material-ui/core'
import CardComponent from './Card/Card'

// style
import styles from './Cards.module.scss'

interface IInfoProps {
  data: {
    confirmed: {
      value: number
    }
    recovered: {
      value: number
    }
    deaths: {
      value: number
    }
    lastUpdate: string
  }
}

const Info: FC<IInfoProps> = ({
  data: { confirmed, recovered, lastUpdate },
}) => {
  if (!confirmed) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        Global
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recoverd"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recoverd"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19"
        />
      </Grid>
    </div>
  )
}

export default Info
