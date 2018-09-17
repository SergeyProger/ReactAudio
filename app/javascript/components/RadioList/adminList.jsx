import React from 'react';
import AdminRadio from "../AdminRadio";


 class AdminList extends React.Component {

     clickDelete = (id) => this.props.clickDelete(id);


     render() {
         const radioElements = this.props.data.map((radio) =>
             <li key={radio.id} className="list-group-item">
             <AdminRadio radio = {radio} clickDelete={this.clickDelete.bind(this, radio.id)}/>
             </li>);

         return <ul className="list-group"> {radioElements} </ul>;

     }


}
export default AdminList;