//elementos que permiten modificar distintos aspectos de los gráficos 
import {
   Chart as ChartJS,
   RadialLinearScale,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Filler,
   Tooltip,
   Legend,
   Title,
   SubTitle
} from 'chart.js';

import { Radar } from "react-chartjs-2";

ChartJS.register(
   RadialLinearScale,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Filler,
   Tooltip,
   Legend,
   Title,
   SubTitle
);


const RadarChart = (props) => {


   const data = {
      labels: ['Competencia Pedagógica', 'Competencia Comunicativa', 'Competencia De Gestión', 'Competencia Investigativa', 'Competencia Tecnológica'],
      datasets: [
         {
            label: 'Momento',
            data: props.competencias,
            borderColor: '#FF9F00',
            borderWidth: 2,
         },   
      
         {
            backgroundColor: "#00b4d8",
            pointRadius: 0,
            borderWidth: 0,
            data: [1,1,1,1,1]
         },
         {
            backgroundColor: "#0077b6",
            pointRadius: 0,
            borderWidth: 0,
            data: [2,2,2,2,2]
         },
         {
            backgroundColor: "#03045e",
            pointRadius: 0,
            borderWidth: 0,
            data: [3,3,3,3,3]
         },
      ]
   }

   const options = { 
      responsive: true,
      maintainAspectRatio: false, //para que su tamaño no sea menor al div
      layout: {
         padding: 5
      }, 
      animation: {
         duration:0
      },
      plugins: {
         title: {
            display: props.showTittle,
            text: 'PENTÁGONO DE COMPETENCIAS', 
            paddingTop: 4
         },
         subtitle: {
            display: false,
            text: 'AQUÍ VA UN SUBTÍTULO'
         },
         legend: {
            labels: {
               filter: function(item, chart) {
                  return item.datasetIndex !== 1  && item.datasetIndex !== 2 && item.datasetIndex !== 3;
               }
            }
         },
         tooltip: {
            enabled: false
         }
      
      },

      elements: {
         point: {
            radius: 5
         }
      },
      
      scales: {
         r: {
            grid: {
               color: ['#6996D3', '#4380D3', '#05316D'],
               //lineWidth: 40, 
               //offset: true, 
               //tickLength: 100, 
               //tickWidth: 500,
            },
            max: 3,
            min: 0,
            ticks: {
               stepSize: 1,
               //maxTicksLimit: 5, 
               //stepSize: 1,
               //count: 3
               //backdropPadding: 50, 
               display: false,
               //padding: 50
            },      
            angleLines: {
               display: true, 
               //lineWidth: 50
            }, 
            pointLabels: {
               display: true, 
               //padding: 35,
               //centerPointLabels: true,
               //color: ['red', 'green', 'blue', 'violet', 'salmon']
               font: {
                  size: 13
               }
            }
         
         }

      }, 
      
   }

   return (
      <>
         <Radar
            data={data}
            options={options}
         />
      </>
   )
}

export default RadarChart