import React from 'react';
import {Doughnut,Line} from 'react-chartjs-2';
import { 
  Chart as ChartJS,
   ArcElement, 
   Tooltip, 
   Legend,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Filler } from 'chart.js';


ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend,
  Filler,
  CategoryScale,
  LinearScale,
  Title,
  PointElement);

export function DonotGraph ({labels=[],colors=[],Title='',Data=[]}){
 let data;
  if(labels.length===colors.length && labels.length===Data.length && colors.length===Data.length){
             data = {
              labels,
            datasets: [
              {
                label: Title,
                data:Data,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth:1,
              },
            ],
          }
  }else{
    data=null;
    throw Error("err");
  }

    return(

        <Doughnut data={data} />

    )

}
export function areaGraph({labels=[],data,Title='',fill=true,label, borderColor='black',backgroundColor='#fff'}){
  
}