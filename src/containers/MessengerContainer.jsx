import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { load, send } from 'actions/chats';

import { Messenger } from 'components/Messenger';

class MessengerContainer extends PureComponent {

  componentDidMount() {
    const { loadChats } = this.props;
    loadChats();
  }

  render() {
    const { chats, sendMessage } = this.props;

    return (<Messenger chats={chats} sendMessage={sendMessage} />)
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  return {
    // ...ownProps,
    chats: state.chats.get('entries').toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadChats: () => dispatch(load()),
    sendMessage: (message) => dispatch(send(message))
  }

}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);