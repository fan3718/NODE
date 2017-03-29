<template>
  <div class="card">
      <date-picker :time.sync="startTime" :option="option" :limit="limit"></date-picker>&nbsp&nbsp至&nbsp
      <date-picker :time.sync="endTime" :option="option" :limit="limit"></date-picker>
  </div>
</template>
<script>
import _ from 'ramda'
import Moment from 'moment'
import myDatepicker from 'vue-datepicker/vue-datepicker-1.vue'
export default {
  data () {
    return {
      // startTime: Moment(_.subtract(Date.parse(new Date()), 691200000)).format('YYYY/MM/DD'),
      // endTime: Moment(_.subtract(Date.parse(new Date()), 86400000)).format('YYYY/MM/DD'),
      option: {
        type: 'day',
        week: ['一', '二', '三', '四', '五', '六', '日'],
        month: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        year: ['一', '二', '三', '四', '五', '六', '日'],
        format: 'YYYY-MM-DD',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px 10px',
          'line-height': '22px',
          'font-size': '16px',
          'width': '200px',
          'border': '1px solid #ccc',
          'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075)',
          'border-radius': '4px',
          'color': '#555'
        },
        color: {
          header: '#3f51b5',
          headerText: '#fff'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      limit: [{
        type: 'weekday',
        available: [0, 1, 2, 3, 4, 5, 6]
      },
      {
        type: 'fromto',
        from: '2016-09-01',
        to: Moment(_.subtract(Date.parse(new Date()), 86400000)).format('YYYY/MM/DD')
      }]
    }
  },
  props: ['startTime', 'endTime'],
  components: {
    'date-picker': myDatepicker
  }
}
</script>
