import React from 'react';
import API from '../utils/API';
import Fade from 'react-reveal/Fade'
import { Card, Button } from 'react-bootstrap';

class BlogCard extends React.Component {
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
                {!loaded && <h3>Loading Posts...</h3>}
                <Fade when={loaded}>
                    <div>
                        <h2 style={{margin: '25px'}}>Blog</h2>
                        <div>{posts}</div>
                    </div>
                </Fade>
            </div>
        );
    }

    async componentDidMount() {
        let config = {'Authorization': 'Api-Key RYiV1aLG.LsqIQoRhrytrhPrJox96fWG3kSR8sCb3'}
        let data = await API.get(this.state.apiCall, {headers: config});
        let arr = [];
        data = data.data;
        for (var i = 0; i < data.length; i++) {
            arr.push(<Post item={data[i]} key={i}></Post>);
        }
        this.setState({ posts: arr, loaded: true });
    }

    componentWillUnmount() {
        this.loaded = false;
    }
}
export default BlogCard;

class Post extends React.Component {
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
            <Card style={{ maxWidth: '25rem', margin:'0 25px 10px 25px' }}>
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                    <Card.Title>{post.title} - {date}</Card.Title>
                    <Card.Text style={{ overflow: 'auto', height: '10em'}}>
                        {post.content}
                    </Card.Text>
                    <Button variant="outline-primary">
                        Read More
                    </Button>

                </Card.Body>
            </Card>
        );
    }
}
