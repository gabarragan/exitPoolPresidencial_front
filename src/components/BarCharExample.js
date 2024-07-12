import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { BarChart, ruleTypes } from "react-native-gifted-charts";

const BarChartExample = ({
  title,
  data,
  maxValue = 100,
  stepValue = 10,
  yAxisLabelTexts = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
  width = '100%',
  spacing,
  initialSpacing,
  barWidth,
  labelWidth
}) => {

  return (
    <View
      style={{
        margin: 8,
        padding: 16,
        borderRadius: 0,
        backgroundColor: '#fff',
        width: width,
      }}>
      <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
        {title}
      </Text>
      <View style={{ padding: 8, alignItems: 'center', width: '100%' }}>
        <BarChart
          data={data}
          barWidth={barWidth}
          initialSpacing={initialSpacing}
          spacing={spacing}
          barBorderRadius={2}
          showGradient
          xAxisThickness={0}
          yAxisThickness={0}
          xAxisType={ruleTypes.DASHED}
          xAxisColor={'darkgray'}
          yAxisTextStyle={{ color: 'darkgray' }}
          stepValue={stepValue}
          maxValue={maxValue}
          noOfSections={yAxisLabelTexts.length - 1}
          yAxisLabelTexts={yAxisLabelTexts}
          showValuesAsTopLabel={true}
          xAxisLabelTextStyle={{ color: 'darkgray', textAlign: 'center' }}
          labelWidth={labelWidth}
          renderTooltip={(item, index) => {
            return (
              <View
                style={{
                  marginBottom: 5,
                  marginLeft: -6,
                  backgroundColor: '#ffcefe',
                  paddingHorizontal: 6,
                  paddingVertical: 4,
                  borderRadius: 4,
                  zIndex: 2000
                }}>
                <Text>{item.name}</Text>
              </View>
            );
          }}
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
