import React, { Component } from "react";
class FormatCurrent extends Component {
  render() {
    const { money } = this.props;
    return money.toLocaleString("de-DE", {
      style: "currency",
      currency: "VND"
    });
  }
}

export default FormatCurrent;
