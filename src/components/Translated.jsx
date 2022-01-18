import React from 'react';
import { connect } from 'react-redux';

class Translated extends React.Component {
  render() {
    return (
      <section>{this.props.translate}</section>
    )
  }
}

const mapStateToProps = (state) => ({
  translate: state.translateReducer.translationInfos.translation,
})

export default connect(mapStateToProps)(Translated);
