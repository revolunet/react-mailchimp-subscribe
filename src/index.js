import React from "react";
import PropTypes from "prop-types";
import jsonp from "jsonp";
import toQueryString from "to-querystring";
import SimpleForm from "./SimpleForm";

const getAjaxUrl = url => url.replace("/post?", "/post-json?");

class MailchimpSubscribe extends React.Component {
  state = {
    status: null,
    message: null
  };
  subscribe = data => {
    const params = toQueryString(data);
    const url = getAjaxUrl(this.props.url) + "&" + params;
    this.setState(
      {
        status: "sending",
        message: null
      },
      () =>
        jsonp(
          url,
          {
            param: "c"
          },
          (err, data) => {
            if (err) {
              this.setState({
                status: "error",
                message: err
              });
              if(this.props.onError!==undefined)this.props.onError();
            } else if (data.result !== "success") {
              this.setState({
                status: "error",
                message: data.msg
              });
              if(this.props.onError!==undefined)this.props.onError();
            } else {
              this.setState({
                status: "success",
                message: data.msg
              });
              if(this.props.onSuccess!==undefined) this.props.onSuccess();
            }
          }
        )
    );
  };
  render() {
    return this.props.render({
      subscribe: this.subscribe,
      status: this.state.status,
      message: this.state.message
    });
  }
}

MailchimpSubscribe.propTypes = {
  render: PropTypes.func,
  url: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

MailchimpSubscribe.defaultProps = {
  render: ({ subscribe, status, message }) => (
    <SimpleForm
      status={status}
      message={message}
      onSubmitted={formData => subscribe(formData)}
    />
  )
};

export default MailchimpSubscribe;
