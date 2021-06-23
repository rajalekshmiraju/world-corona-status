import React , {Component} from 'react';
import Axios from 'axios';
class World extends Component{
    constructor(){
    super();
    this.state = {
        data :[]

        
    }
    }

componentDidMount(){
    Axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
        this.setState({data:response.data})
    });
}
    render(){
        return(
            <div>
              <div>
                <table className="table table-stripped table-condencer">
                  <thead>
                    <tr>
                      <td>country</td>
                      <td>totelcases</td>
                      <td>recovered</td>
                      <td>deaths</td>
                    </tr>
                  </thead>
                </table>
              </div>
         <tbody className="table table-stripped table-condencer">
            {
              this.state.data.map((itm,ky)=>{
                return(
                  <tr>
                    <td>{itm.country}</td>
                    <td>{itm.active}</td>
                   
                 
                    <td>{itm.death}</td>
                    <td>{itm.cases}</td>
                  </tr>
                )
              })
            }
          </tbody>
            </div>
        )
    }
}
export default World;