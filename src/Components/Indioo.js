import React , {Component} from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './Statedata';
class Indioo extends Component{

constructor(){
  super();
  this.state={
    data: []
  }
}
componentDidMount(){
  Axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
    this.setstate({data:response.data})
  });
}

    render(){
        return(
            <div className='row'>
                <div className=' col-md-12'>
<img src="https://www.countryflags.io/IN/shiny/64.png" />
<h1>India</h1></div>
             
                <div className="col-md-12">
                <div classsName="row">

<div className = "col-md-3">
<Card className="badge badge-primary" style={{ width: '18rem' }}>
 
  <Card.Body className="text-center">
    <Card.Title>TOTEL CASES</Card.Title>
    <h3>12496543</h3>
    <Card.Text>
     [TODAY:16]
    </Card.Text>

  </Card.Body>
</Card>

</div>
<div className = "col-md-3">
<Card className="badge badge-warning" style={{ width: '18rem' }}>
 
  <Card.Body className="text-center">
    <Card.Title>ACTIVE CASES</Card.Title>
    <h3>96543</h3>
    <Card.Text>
     [TODAY:16]
    </Card.Text>

  </Card.Body>
</Card></div>
<div className = "col-md-3">
<Card className="badge badge-success" style={{ width: '18rem' }}>
 
  <Card.Body className="text-center">
    <Card.Title>RECOVERED</Card.Title>
    <h3>12496543</h3>
    <Card.Text>
     [TODAY:16]
    </Card.Text>

  </Card.Body>
</Card>

</div>
<div className = "col-md-3">
<Card className="badge badge-danger" style={{ width: '18rem' }}>
 
  <Card.Body className="text-center">
    <Card.Title>TOTEL DEATHS</Card.Title>
    <h3>12496543</h3>
    <Card.Text>
     [TODAY:16]
    </Card.Text>

  </Card.Body>
</Card>

</div>

</div>



</div>
<div className="col-md-12">
               <Statedata/>

                </div>
                
                </div>
                
              
        
        );
    }
}
export default Indioo;