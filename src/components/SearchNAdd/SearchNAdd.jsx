import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const TextFieldExampleSimple = () => (
    <div>
    <TextField
      hintText="Hint Text"
    /><br />
    </div>
);


const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
  height: '40%',
};

 class SearchNAdd extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
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
           name="CEP" 
           label="CEP" 
           hintText="Digite um CEP (8 digitos apenas)"
           floatingLabelText="Digite um CEP"
           />
        </Dialog>
      </div>
    );
  }
}

export default SearchNAdd