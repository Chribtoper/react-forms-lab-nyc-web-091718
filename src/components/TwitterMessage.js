import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
          <input
            type="text"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <p>{this.props.maxChars-this.state.message.length} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
