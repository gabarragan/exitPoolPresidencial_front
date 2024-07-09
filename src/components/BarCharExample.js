import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const BarChartExample = ({ data }) => {

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
      <BarChart
        style={styles.chart}
        data={data}
        width={Dimensions.get('window').width / 2 - 32}
        height={300}
        yAxisSuffix="%"
        chartConfig={chartConfig}
        verticalLabelRotation={15}
        fromZero={true}
        withCustomBarColorFromData={true}
      />
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  chart: {
    margin: 0,
    borderRadius: 0,
    width: 'fit-content',
  },
});

export default BarChartExample;
