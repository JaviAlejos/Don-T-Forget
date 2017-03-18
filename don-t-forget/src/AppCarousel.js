import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import caritem1 from '../public/Remember-birthday.jpg';
import caritem2 from '../public/Remember-pass.jpg';
import caritem3 from '../public/Remember-shopping.jpg';

class AppCarousel extends Component {
    render() {
        return (

          /* My Carousel */
           <div>
             <Carousel>
            <Carousel.Item>
                <img width={1050} height={300} alt="by Will Clayton" src={caritem1}/>
                <Carousel.Caption>
                    <h3>Do you usually forget birthdays?</h3>
                    <p>This is your Website!!!!</p>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img width={1050} height={300} alt="by BlakeCeeno" src={caritem2}/>
                <Carousel.Caption>
                    <h3>Do you usually forget your passwords?</h3>
                    <p>This is your Website!!!!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={1050} height={300} alt="by Mittmac" src={caritem3}/>
                <Carousel.Caption>
                    <h3>Do you usually forget the shopping list or buy something on the Grocery?</h3>
                    <p>This is your Website!!!!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>

);
}
}

export default AppCarousel;
