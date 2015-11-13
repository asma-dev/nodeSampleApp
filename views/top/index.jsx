/**
 * TopPage Content
 *
 * @package View
 * @author asma
 * @copyright 2015 asma All Rights Reserved.
 */

var React   = require('react');
var ReactBS = require('react-bootstrap');

var HtmlHead = require('./partials/html_head');

var Content = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Chat App - TOP'
    };
  },
  render: function() {
    return (
      <html lang="ja">
      <HtmlHead title={this.props.title}></HtmlHead>
      <body>
        {/* header */}
        <ReactBS.ButtonGroup justified>
          <ReactBS.Button href="#">Frends List</ReactBS.Button>
          <ReactBS.Button href="#">Chat List</ReactBS.Button>
          <ReactBS.DropdownButton title="Menu" id="bg-justified-dropdown" data-toggle="dropdown">
            <ReactBS.MenuItem>Settings</ReactBS.MenuItem>
            <ReactBS.MenuItem>Help</ReactBS.MenuItem>
          </ReactBS.DropdownButton>
        </ReactBS.ButtonGroup>
        {/* /header */}
        {/* container */}
        <div className="container-fluid">
          <h1>Welcome</h1>
        </div>
        {/* /container */}
      </body>
      </html>
    );
  }
});

module.exports = Content;
