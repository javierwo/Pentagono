
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


const RadarChart = () => {

   const momentos = ['Exploratorio', 'Investigativo', 'Funcional'];

   const data = {
      labels: ['Pedagógica', 'Comunicativa', 'De Gestión', 'Investigativa', 'Tecnológica'],
      // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
      datasets: [
         {
            label: 'Momento',
            data: [1,2,3,1,2],
            backgroundColor: 'rgba(255, 202, 115, 0.5)',
            borderColor: '#FF9F00',
            borderWidth: 2,
         },
         {
            backgroundColor: "#6996D3",
            pointRadius: 0,
            borderWidth: 0,
            data: [1,1,1,1,1]
         },
         {
            backgroundColor: "#4380D3",
            pointRadius: 0,
            borderWidth: 0,
            data: [2,2,2,2,2]
         },
         {
            backgroundColor: "#05316D",
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
      plugins: {
         title: {
            display: false,
            text: 'COMPETENCIAS DOCENTES & TÍTULO', 
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
      


      /**/
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