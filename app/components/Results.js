import React, { PureComponent } from 'react';
import { battle } from '../utils/api';
import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy,
  FaTimesCircle,
  FaRegCaretSquareDown,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

export default class Results extends React.Component {
  componentDidMount() {
    const { playerOne, playerTwo } = this.props;

    battle([playerOne, playerTwo]).then(players => {
      console.log('data:', players);
    });
  }
  render() {
    return (
      <div>
        Results
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
