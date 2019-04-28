import React from "react"
import { LineChart } from "react-native-chart-kit"
import { Dimensions } from "react-native"

export const WeightChart = (items) => {
  const deviceWidth = Dimensions.get("window").width
  return <LineChart
    data={{
      labels: [1, 2, 3],
      datasets: [{
        data: [6, 5, 4],
      }]
    }}
    chartConfig={{
      color: () => '#0080FF',
      backgroundGradientFrom: '#FFF',
      backgroundGradientTo: '#FFF',
      strokeWidth: "0"
    }}
    height={200}
    width={deviceWidth}
    withShadow={false}
  />
}
