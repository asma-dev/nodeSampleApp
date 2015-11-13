/**
 * TopPage HtmlHead
 *
 * @package View
 * @author asma
 * @copyright 2015 asma All Rights Reserved.
 */

var React = require('react');

var HtmlHead = React.createClass({
  render: function() {
    return (
      <head>
        <meta charSet="UTF-8" />
        <title>{this.props.title}</title>
        <meta name="author" content="asma" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

        {/* styles */}
        <link type="text/css" rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
        <link type="text/css" rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/top.css" />
        {/* /styles */}

        {/* scripts */}
        <script charSet="UTF-8" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
        <script charSet="UTF-8" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        {/* /scripts */}
      </head>
    );
  }
});

module.exports = HtmlHead;
