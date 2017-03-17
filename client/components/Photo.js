import React from 'React';
import { Link } from 'react-router';

const Photo = React.createClass({
  render() {
    // so we dont have to type this.props every time for these variables
    const { post, i, comments } = this.props;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption}
              className="grid-photo" />
          </Link>
        </div>
      </figure>
    )
  }
});

export default Photo;
