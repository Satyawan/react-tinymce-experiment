/** @jsx React.DOM */

var React = require("react");
var tinymce = require("tinymce");

var genUnique = (function () {
    var count = 0;
    return function () {
        return 'id' + count++;
    }
})();

var Bob = React.createClass({
    getDefaultProps: function () {
        return { id: genUnique()}
    },
    componentDidMount: function () {
        tinymce.init({
            selector: "#" + this.props.id,
            menubar: false,
            plugins: "link",
            target_list: [],
            resize: false,
            height: 300,
            toolbar: "undo redo | bold italic underline | link | cut copy paste "
        })
    },

    render: function () {
        return (
            <textarea id={this.props.id} ref="text"/>
            );
    }
});


var main = function () {
    React.renderComponent(
        <Bob/>, document.getElementById("main")
    )
};

module.exports.main = main;