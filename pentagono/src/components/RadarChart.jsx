
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
            label: 'Nivel de Competencia',
            data: [1,3,4,2,5],
            // you can set indiviual colors for each bar
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
         }
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
            display: true,
            text: 'COMPETENCIAS DOCENTES & TÍTULO', 
            paddingTop: 4
         },
         subtitle: {
            display: true,
            text: 'AQUÍ VA UN SUBTÍTULO'
         }
      },

      /*
      scales: {
         r: {
            angleLines: {
               display: false
            },
         }   

      }
      */
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