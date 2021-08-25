import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom'
import {Button, Card, Table} from 'react-bootstrap';

export class Users extends React.Component {
  constructor(props){
    super(props);
    this.postMessage = this.postMessage.bind(this);
    this.state = {
        message: localStorage.getItem("message"),
    };
  }


  postMessage() {
      var message = document.getElementById("post_message").value;
      var posts = document.getElementById("post_area").innerHTML;
      var html = posts + "<br>" + message;
      localStorage.setItem("message", html);
      this.setState({
          message: html
      });
  }

  render() {
  	return (
  		<Card>
        <Card.Body>
            <Card.Title>Users Post</Card.Title>


            <div id="post_area" style={{width: '90vw', margin: '0 auto', marginTop: '30px'}}  dangerouslySetInnerHTML={{ __html: this.state.message }}>
            </div>
            {this.props.loginState.loggedIn &&
            <div style={{width: '90vw', margin: '0 auto', marginTop: '30px'}}>
                <textarea
                    id={'post_message'}
                    rows={5}
                    style={{width: '70vw', margin: '0 auto', marginTop: '30px'}}
                    placeholder={'Post a message'}
                />
                <Button variant="primary" onClick={this.postMessage}
                        style={{margin: '10px', marginTop: '-20px'}}>Post</Button>
            </div>
            }
	    </Card.Body>
	    </Card>
  	);
  }
}

// map state from store to props
const mapStateToProps = (state) => {
  return {
    state: state.users,
    loginState: state.login,
    profileState: state.profile,
  }
}

export default withRouter(connect(mapStateToProps)(Users))
