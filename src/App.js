import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SNA from './components/SearchNAdd/SearchNAdd';
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";





class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      alunos: null,
      open: false,
      checked: [0],
      alunoSelected: null
    };
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  handleClickOpen = (aluno, index) => {
    this.setState({
      open: true,
      alunoSelected: { ...aluno, index }
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
      alunoSelected: null
    });
  };

  updateAluno = (aluno, index) => {
    console.log({ aluno, index });
    console.log(this.state);

    // this.handleRequestClose();
  };

  handleAddStudents(students) {
    this.setState({ alunos: students });
  }

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=50&nat=us,dk,fr,gb`)
      .then(response => response.json())
      .then(json => this.handleAddStudents(json.results));
  }


  render() {
    const { classes, width } = this.props;
    const { alunos, open } = this.state;
    return (
      <div className="App">
      {/* <Paper>
            <TextField
              label="Nome do aluno"
              id="margin-normal"
              defaultValue="José da Silva"
              
              helperText="Digite o nome do aluno que você deseja procurar"
              margin="normal"
            />
      </Paper> */}
      <Header/>
      <SNA/>
      </div>
    );
  }
}

export default App;
