import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

export interface boxInfo{
  number: string ;
  icon: string ;
  sentence: string;
  smallIcon: string ;
}


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.less']
})
export class MainDashboardComponent implements OnInit {
  
  loggedInUserName:string='';
  balanceAmount:string='';
  boxes:boxInfo[]=[];
  myFilter:Date = new Date;
  constructor() { }

  ngOnInit(): void {
    this.loggedInUserName = "Michael";
    this.balanceAmount = "2,50,000";
    this.boxes = [
      {
        number: "18",
        icon: 'total',
        sentence: 'Total Order',
        smallIcon: 'up'
      },
      {
        number: "10",
        icon: 'clock',
        sentence: 'In progress',
        smallIcon: 'up'
      },
      {
        number: "5",
        icon: 'completed',
        sentence: 'Completed Order',
        smallIcon: 'up'
      },
      {
        number: "3",
        icon: 'tote',
        sentence: 'Cancelled Order',
        smallIcon: 'down'
      }
    ];

    this.renderEsign();
    this.renderEstamp();


  }

  renderEsign(): void {
    const donutChart = echarts.init(document.getElementById('eSign'));

    const data = [
      { name: 'Signed', value: 10 },
      { name: 'Pending', value: 20 },
      { name: 'Expired', value: 20 },
      { name: 'Initiated', value: 50 },
    ];

    const option = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['60%', '80%'], 
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 3,
            borderColor: '#fff',
            borderWidth: 0
          },
          label: {
            show: false,
            position: 'inside',
            formatter: '{b}\n{d}%'
          },
          labelLine: {
            show: false
          },
          data: data,
          emphasis: {
            label: {
              show: false,
              fontSize: '10',
              fontWeight: 'bold'
            }
          }
        }
      ],
      color: ['#773F8D', '#B270EC', '#cfbadb', '#E6E7EB'], 
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: 'middle',
          style: {
            text: '30k Initiated',
            textAlign: 'center',
            fill: '#333',
            fontSize: 16
          }
        }
      ]
    };

    donutChart.setOption(option);
  }



  renderEstamp(): void {
    const donutChart = echarts.init(document.getElementById('eStamp'));

    const data = [
      { name: 'Signed', value: 10 },
      { name: 'Pending', value: 20 },
      { name: 'Expired', value: 20 },
      { name: 'Initiated', value: 50 },
    ];

    const option = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['60%', '80%'], 
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 3,
            borderColor: '#fff',
            borderWidth: 0
          },
          label: {
            show: false,
            position: 'inside',
            formatter: '{b}\n{d}%'
          },
          labelLine: {
            show: false
          },
          data: data,
          emphasis: {
            label: {
              show: false,
              fontSize: '10',
              fontWeight: 'bold'
            }
          }
        }
      ],
      color: ['#773F8D', '#B270EC', '#cfbadb', '#E6E7EB'], 
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: 'middle',
          style: {
            text: '30k Initiated',
            textAlign: 'center',
            fill: '#333',
            fontSize: 16
          }
        }
      ]
    };

    donutChart.setOption(option);
  }


}
