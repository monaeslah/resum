import React, { Component } from 'react';
import { Col , Container , Row} from 'react-bootstrap';
import '../assets/style/Choice.scss';
import Table from './Table'
export default class Choice extends Component {

    render() {
        return (
            <React.Fragment> 
              
                <Container>  
                    <Row >
                        <Col lg={12}>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora repellat quas placeat architecto possimus ea similique quasi eos eaque atque, doloribus rerum a vel optio soluta itaque suscipit quam.</p>   
                        </Col>
                    
                    </Row>
                </Container>
           <Table/>
            </React.Fragment>
        );
    }
}