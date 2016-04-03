import React from 'react';
import {connect} from 'react-redux';
import Test from '../components/test/index';  // eslint-disable-line no-unused-vars
import {mapStateToProps, mapDispatchToProps} from '../mixin/bind';

const Index = React.createClass({

  handleClick: function () {
    this.props.numberActions.add();
  },

  render: function () {

    return (
      <div>
        <h1>Index</h1>
        <Test handleClick={this.handleClick}/>

        <h1>{this.props.number}</h1>
      </div>

    );
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Index);




