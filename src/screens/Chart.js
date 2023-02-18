import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ECharts} from 'react-native-echarts-wrapper';

const Chart = ({navigation: {goBack}}) => {
  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  additionalCode = `
        chart.on('click', function(param) {
            var obj = {
            type: 'event_clicked',
            data: param.data
            };
 
            sendData(JSON.stringify(obj));
        });
    `;

  onData = param => {
    const obj = JSON.parse(param);

    if (obj.type === 'event_clicked') {
      alert(`you tapped the chart series: ${obj.data}`);
    }
  };

  onRef = ref => {
    if (ref) {
      this.chart = ref;
    }
  };

  onButtonClearPressed = () => {
    this.chart.clear();
  };

  return (
    <View style={{flexGrow: 1}}>
      <View style={styles.backBtn}>
        <TouchableOpacity onPress={() => goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <View style={styles.imgContainer}>
          <Image
            source={require('../assets/stock.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <View style={styles.chartContainer}>
        <ECharts
          ref={this.onRef}
          option={this.option}
          additionalCode={this.additionalCode}
          onData={this.onData}
          onLoadEnd={() => {
            this.chart.setBackgroundColor('rgba(93, 169, 81, 0.1)');
          }}
        />
      </View>
    </View>
  );
};

export default Chart;
const styles = StyleSheet.create({
  chartContainer: {
    flexGrow: 1,
    backgroundColor: '#F5FCFF',
  },
  backBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
    padding: 15,
  },
  imgContainer: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 25,
    paddingVertical: 20,
  },
});
