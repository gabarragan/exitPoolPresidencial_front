import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';

const BarChartExample = () => {
  const data = [14, 80, 100, 55, 66, 77, 90];

  return (
    <View style={styles.container}>
      <BarChart
        style={styles.chart}
        data={data}
        svg={{ fill: '#3E7DA0' }}
        contentInset={{ top: 30, bottom: 30 }}
      >
        <Grid />
      </BarChart>
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
    height: 200,
    width: 300,
  },
});

export default BarChartExample;
