import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';





const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

var CEP = document.getElementsByName('CEP');

 
/*ar validate = values => {
    const CEPField = 'CEP'
    var errors
    if (!CEPField) {
        errors
      }
    if (CEPField.length < 8 || CEPField.size > 8 ) {
      errors = 'Tamanho incorreto, necessita ter 8 digitos'
    }
    return errors
  }*/

  /*var renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )*/

 class SearchNAdd extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
    var CEP = document.getElementById('CEP-value');
    window.alert(CEP.value);
  };
 



  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Procure"
        primary={true}
        onClick={this.handleClose}
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