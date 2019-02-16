import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBarButton from 'components/Core/SideBarButton';
import icon from './recommended-icon.png';
import { switchToList } from '../../../state';

class RecommendedButton extends Component {
  render() {
    return <SideBarButton active={this.props.active} img={icon} onClick={this.props.onClick} />;
  }
}

const mapStateToProps = state => {
  return {
    active: state.listView === 'Recommended'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(switchToList('Recommended'));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedButton);