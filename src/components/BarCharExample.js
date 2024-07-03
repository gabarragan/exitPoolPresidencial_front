import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const BarChartExample = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
    <View style={styles.container}>
      <BarChart
        style={styles.chart}
        data={data}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default BarChartExample;
