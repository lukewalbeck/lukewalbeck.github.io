import React from 'react';
import { Jumbotron, Media } from 'react-bootstrap';
import API from '../utils/API';
import Fade from 'react-reveal';

class BlogJump extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loaded: false,
            apiCall: props.apiCall
        };
    }

    render() {
        const { posts, loaded } = this.state;
        return(
            <div>
                <Jumbotron>
                    <h2>Blog</h2>
                    <hr/>
                    <p>
                        Welcome to my blog! This is where I will be posting interesting finds that
                        have helped me further develop this website!
                    </p>
                    <p>
                        These posts are generated from the Django
                        REST back-end that I have been developing, so it should be the most up-to-date information
                        regarding my blog posts.
                    </p>
                </Jumbotron>
                <div style={{margin:'25px'}} id="mediaContainer">
                    {!loaded && <h3>Loading Posts...</h3>}
                    <Fade when={loaded}>
                        <div>{posts}</div>
                    </Fade>
                </div>       
            </div>
        );
    }

    async componentDidMount() {
        let data = await API.get(this.state.apiCall);
        let arr = [];
        data = data.data;
        for (var i = 0; i < data.length; i++) {
            arr.push(<BlogEntry item={data[i]} key={i}/>);
        }
        this.setState({ posts: arr, loaded: true });
    }

}

class BlogEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.item
        }
    }

    render() {
        const { post } = this.state;
        var date = new Date(post.updated_at);
        date = date.toLocaleDateString();
        return(
            <Media style={mediaStyle}>
                <img
                width={350}
                className="mr-3"
                src={post.image}
                alt="Placeholder"
                />
                <Media.Body>
                    <h2>{post.title}</h2>
                    <h6>{date}</h6>
                    <p>{post.content}</p>
                </Media.Body>
            </Media>
        );
    }
}
let mediaStyle = {
    display: 'flex',
    flexWrap: 'wrap',
}

export default BlogJump;