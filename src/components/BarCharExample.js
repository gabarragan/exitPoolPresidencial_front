import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { BarChart, ruleTypes } from "react-native-gifted-charts";

const BarChartExample = ({ }) => {
  const data = [
    {
      value: 2500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Jan',
    },
    { value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 3500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Feb',
    },
    { value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 4500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Mar',
    },
    { value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 5200,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Apr',
    },
    { value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 3000,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'May',
    },
    { value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 2500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Jan',
    },
    { value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 3500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Feb',
    },
    { value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 4500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Mar',
    },
    { value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 5200,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Apr',
    },
    { value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 3000,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'May',
    },
    { value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 2500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Jan',
    },
    { value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 3500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Feb',
    },
    { value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 4500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Mar',
    },
    { value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 5200,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Apr',
    },
    { value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 3000,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'May',
    },
    { value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 2500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Jan',
    },
    { value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 3500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Feb',
    },
    { value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 4500,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Mar',
    },
    { value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 5200,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'Apr',
    },
    { value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },

    {
      value: 3000,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 6,
      label: 'May',
    },
    { value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8' },
  ];

  return (
    <View
      style={{
        margin: 10,
        padding: 16,
        borderRadius: 0,
        backgroundColor: '#fff',
      }}>
      <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
        Overview
      </Text>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <BarChart
          data={data}
          barWidth={16}
          initialSpacing={10}
          spacing={14}
          barBorderRadius={2}
          showGradient
          yAxisThickness={0}
          xAxisType={ruleTypes.DASHED}
          xAxisColor={'darkgray'}
          yAxisTextStyle={{ color: 'darkgray' }}
          stepValue={1000}
          maxValue={6000}
          noOfSections={6}
          yAxisLabelTexts={['0', '1k', '2k', '3k', '4k', '5k', '6k']}
          labelWidth={40}
          xAxisLabelTextStyle={{ color: 'darkgray', textAlign: 'center' }}          
        />
      </View>
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
    margin: 0,
    borderRadius: 0,
    width: 'fit-content',
  },
});

export default BarChartExample;
