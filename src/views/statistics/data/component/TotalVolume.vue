<template>
  <div>
    <div
      style="display: flex; justify-content: space-between; margin: 15px 0"
    >
      <el-radio-group v-model="dayType" size="small" @change="handleChangeType">
        <el-radio-button label="day">日统计</el-radio-button>
        <el-radio-button label="month">月统计</el-radio-button>
        <el-radio-button label="year">年统计</el-radio-button>

      </el-radio-group>
    </div>
    <line-chart :chartData="chartData"></line-chart>
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";
import { getCountData } from '../../../../api/statistics/statistics'
import { getDicts } from '../../../../api/system/dict/data'
export default {
  data() {
    return {
      dayType:'day',
      value1: [],
      chartData: {
        xAxis: {
          data: [],
          boundaryGap: ["20%", "20%"],
          axisTick: {
            show: false,
          },
        },
        grid: {
          left: 20,
          right: 0,
          bottom: 20,
          top: 60,
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          padding: [5, 10],
        },
        yAxis: {
          axisTick: {
            show: false,
          },
        },
        legend: {
          data: ["出厂数量", "入厂数量"],
          left: 0,
        },
        series: [
          {
            name: "出厂数量",
            type: "bar",
            barWidth: 12,
            color: "#3b9cfd",
            // 实现数字展示在柱状图
            label: {
              show: true,
              position: "top",
              fontSize: 12,
              color: "#F5F5F5",
              offset: [0, -10],
              formatter: "{c}", //添加单位
            },
            data: [],
          },
          {
            name: "入厂数量",
            type: "bar",
            barWidth: 12,
            color: "#ffa306",
            // 实现数字展示在柱状图
            label: {
              show: true,
              position: "top",
              fontSize: 12,
              color: "#F5F5F5",
              offset: [0, -10],
              formatter: "{c}", //添加单位
            },
            data: [],
          },
        ],
      },
      queryParams:{
        'vehicle_type':'',
        startDate:'',
        endDate:'',
        type:'DAY',
        time:' '
      }
    }
  },
  created() {
    this.getData();
    this.getDictList();
  },
  methods:{
    handleChangeTimeType(value){
      if (value == 'SELF_TIME') {
        return
      }else {
        this.queryParams.time=[]
        this.getData()
      }

    },
    handleChangeTime(value){
      this.queryParams.startDate = value[0]
      this.queryParams.endDate = value[1]
      this.getData();
    },
    handleChangeType(value){
      this.getData();
    },
    getData(){
      getCountData(this.queryParams).then(res=>{
        if(res.code == '200') {
          this.chartData.xAxis.data=res.data.xdata
          this.chartData.series[0].data=res.data.ydata1
          this.chartData.series[1].data=res.data.ydata2
        }
      })
    },
    
  },
  components: {
    LineChart
  }
}
</script>

<style>

</style>
