import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Variable from '../Variable/Variable'


const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

Variable.CEP = document.getElementsByName('CEP');

 class SearchNAdd extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  

  handleCloseSearch = () => {
    this.setState({open: false});
    Variable.CEP = document.getElementById('CEP-value');
    window.alert(Variable.CEP.value);
  };
  handleCloseNormal = () => {
    this.setState({open: false});
  };
 



  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onClick={this.handleCloseNormal}
      />,
      <FlatButton
        label="Procure"
        primary={true}
        onClick={this.handleCloseSearch}
      />, 
    ];

    return (
      <div>
        <RaisedButton label="Procure por um CEP" onClick={this.handleOpen} />
        <Dialog
          title="Procure por um CEP"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        > 
          <TextField
           id="CEP-value" 
           label="CEP" 
           floatingLabelText="Digite um CEP"
           value = {this.textFieldValue}           
           />           
        </Dialog>
      </div>
    );
  }

}

export default SearchNAdd;