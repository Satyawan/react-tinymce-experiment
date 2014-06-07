/** @jsx React.DOM */

var React = require("react");

var Bob = React.createClass({
    render: function() {
        return (
            <textarea/>
            );
    }
});


var main = function() {
    React.renderComponent(
        <Bob/>, document.getElementById("main")
    )
};

module.exports.main = main;