var CommentList = React.createClass({
  propTypes: {
    author: React.PropTypes.string, //shows what has to be passed in to be valid
    body: React.PropTypes.string,
    rank: React.PropTypes.integer
  },

  render: function() {
    return(
      <div>
        {JSON.parse(this.props.comments).map(function(comment) {
          return <Comment key={comment.id} {... comment}/> //destructer- maps props of comment into comment component - in ruby, this is called a splat
        })}
      </div>
    );
  }
});
