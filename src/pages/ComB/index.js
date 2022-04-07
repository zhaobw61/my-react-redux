import React, { Component } from 'react'
import { connect } from 'react-redux'

class ComB extends Component {
  constructor () {
    super();
    console.log('this.props', this.props);
  }
  render() {
    console.log('asd', this.props);
    return (
      <div>{this.props.count}</div>
    )
  }
}
// 但是类里面的props被覆盖了
const mapStateToProps = (state) => {
  console.log('state',state);
  return {
    ...state
  };
}
export default connect(mapStateToProps, null)(ComB)