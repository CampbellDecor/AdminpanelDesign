import React from 'react';
import { areaGraph } from '../component/chart';

export default function Analytics (){
    const chart={labels :['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    Data:[12,34,54,67,345,45,7]}
    return <areaGraph {...chart}/>

}