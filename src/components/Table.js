import React, { Component }  from  'react';
import "../assets/style/Table.scss"

import Table from 'react-bootstrap/Table'

export default class Tables extends Component {
    state = {  }
    render() {
        return (
          <React.Fragment>
         
    
<Table responsive bordered hover id="Table-style">

<tbody>
  <tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>

  <tr>
    <td>3</td>
    <td colSpan="2">Larry the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
</Table>;
          </React.Fragment>
        );
    }
}