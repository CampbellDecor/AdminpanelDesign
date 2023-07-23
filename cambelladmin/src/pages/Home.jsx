import React from 'react';
import {Container,Col} from 'react-bootstrap';
import {DonotGraph } from "../component/chart";


export default function Home (){
    const data = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            Title: '# of Votes',
            Data: [12, 19, 3, 5, 2, 3],
            colors: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ]}
    return(
       <Container fluid>
        <Col md={9}>
       
        </Col>
        <Col md={3}>

 
        <DonotGraph {...data} />
        </Col>
       </Container>
       
    )

}
