import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendServer } from './../actions';

import InitForm from './../components/InitForm';

// Container
class App extends Component {
  onClickButton = (e, data) => {
    e.preventDefault()
    console.log('Clicou no Redux Form');
    this.props.createName(data);
  }

  onChangeName = ({ target }) => {
    const { name, value } = target;
    console.log('CHANGE Redux Form', name, value);
  }

  render () {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            Redux Form
          </div>
          <div className="card-body">
            <div className="card-title">Meu Primeiro Form Redux</div>
            <InitForm
                onClickButton={this.onClickButton}
                onChangeName={this.onChangeName} />
          </div>
          <div className="card-footer">
            <p>Card Footer</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: state.name.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      createName: (data) => dispatch(sendServer(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
