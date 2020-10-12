import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    const contents = this.props.success
      ? null : (
        <form className='form'>
          <input
            data-test='input-box'
            data-className='input-box'
            type='text'
            placeholder='enter guess'
          />
          <button
            data-test='submit-button'
            className='submit-button'
            type='submit'
          >
            Submit
          </button>
        </form>
      )
    return (
      <section data-test='component-input' className='component-input'>
        {contents}
      </section>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps)(Input);