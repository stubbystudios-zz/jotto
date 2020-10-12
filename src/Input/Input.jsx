import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    return (
      <section>
        <button></button>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(Input);