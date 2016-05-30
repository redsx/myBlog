import React from 'react'
import marked from 'marked'
const MarkdownEle = React.createClass({
    componentWillMount:function () {
        marked.setOptions({
            highlight: function (code) {
                return require('highlight.js').highlightAuto(code).value;
            }
        });
    },
    render:function () {
        return (
            <div
                dangerouslySetInnerHTML={{__html: marked(this.props.text)}}
            >
            </div>
        );
    }
});
export default MarkdownEle;