import React, { FC, useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'

interface IChartProps {
  data: {
    comfirmed: {
      value: number
    } | null
    recovered: {
      value: number
    } | null
    deaths: {
      value: number
    } | null
  }
  country: string
}

const Chart: FC<IChartProps> = ({
  data: { comfirmed, recovered, deaths },
  country,
}) => {
  const [dailyData, setDailyData] = useState<{}>({})

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await console.info('')

      setDailyData('')
    }

    fetchMyAPI()
  }, [])

  const barChart = comfirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [],
            data: [comfirmed?.value, recovered?.value, deaths?.value],
          },
        ],
      }}
    />
  ) : null

  return <div>Chart</div>
}

export default Chart
