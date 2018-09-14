import React from 'react';
import AdminRadio from "../AdminRadio";


 class AdminList extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             radioId: null
         }
     }

     render() {
         const radioElements = this.props.data.map((radio) =>
             <li key={radio.id} className="list-group-item">
             <AdminRadio radio = {radio}/>
             </li>);

         return <ul className="list-group"> {radioElements} </ul>;

     }


}
export default AdminList;