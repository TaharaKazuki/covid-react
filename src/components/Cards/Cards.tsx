import React, { FC } from 'react'
import { Typography, Grid } from '@material-ui/core'
import CardComponent from './Card/Card'

// style
import styles from './Cards.module.scss'

interface IInfoProps {
  data: {
    confirmed: string
    recovered: string
    deaths: string
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
    </div>
  )
}

export default Info
