import React from 'react';

class AdminRadio extends React.Component {

  state = {
    editable: false
  };


  handleEdit = () => {
    if (this.state.editable) {
      let name = this.refs.name.value;
      let id = this.props.radio.id;
      let url = this.refs.url.value;
      let radio = {id: id, r_name: name, r_url: url};
      this.props.clickUpdate(radio);
    }
    this.setState({editable: !this.state.editable});
  };

  render() {

    let name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.radio.r_name}/> :
      <h2>{this.props.radio.r_name}</h2>;
    let url = this.state.editable ? <input type='text' ref='url' defaultValue={this.props.radio.r_url}/> :
      <h4>{this.props.radio.r_url}</h4>;

    return (
      <div className="card mx-auto">
        <div className="card-header">
          {name}
        </div>
        <div className="card-body">
          {url}
          <button className="btn-dark button-my" onClick={this.props.clickDelete}>Delete</button>
          <button className="btn-dark button-my"
                  onClick={this.handleEdit}>{this.state.editable ? 'Update' : 'Edit'} </button>
        </div>
      </div>
    );
  }
}

export default AdminRadio;
