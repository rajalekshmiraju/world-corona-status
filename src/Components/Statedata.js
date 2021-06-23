import React , {Component} from 'react';
import Axios from 'axios';
import {Accordion , Card , Button} from 'react-bootstrap'

class Statedata extends Component{
    constructor(){
        super();
        this.state={
            stateData:{}


            
        }
    }
componentDidMount(){
    Axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>{
 
this.setState({stateData: response.data})
    });
  4
}

    render(){
      let  keys = Object.keys(this.state.stateData);

        return(
            <div className="row">
           <div className="col-md-12">
           <Accordion>{
keys.map((itm, ky)=>{
  let districts = this.state.stateData[itm].districtData;
  let district_key = Object.keys(districts);
  let totel_active = 0 ;
  let totel_confirmed= 0;
  let totel_deadths = 0;
  let totel_recover = 0;

let district_list =[];
  for(let x in districts){
    totel_active+= districts[x].active;
    totel_confirmed+= districts[x].confirmed;
    totel_deadths+= districts[x].deceased;
    totel_recover+= districts[x].recovered;
    let ob =districts[x];
    ob["districts_name"]=x;
    
    district_list.push(ob);
  }
  // console.log(district_list)
  return(
<Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey={ky}>
    {itm} = Totel cases - b  /8\
    {totel_deadths} active {totel_active} confirmed  {totel_confirmed} death {totel_deadths}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={ky}>
      <Card.Body className="table table-border table-stripped">
  
        <table>
          <thead>
            <tr>
              <td>District</td>
              <td>Active</td>
              <td>Confirmed</td>
              <td>Death</td>
              <td>Recovered</td>
       
            </tr>
          </thead>
          <tbody>
            {
              district_list.map((itm,ky)=>{
                return(
                  <tr>
                    <td>{itm.districts_name}</td>
                    <td>{itm.active}</td>
                    <td>{itm.confirmed}</td>
                 
                    <td>{itm.deceased}</td>
                    <td>{itm.recovered}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
</Card.Body>
    </Accordion.Collapse>
  </Card>

  )
})

             }
  
</Accordion>
           </div>
            </div>
        )
    
    }
};
export default Statedata;