import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TaskPage from './components/TaskPage';

function App(props) {
  return (
    <div className="App">
      <TaskPage tasks={props.tasks} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps)(App);
