import React from 'react';
import API from '../utils/API';
import Fade from 'react-reveal/Fade'
import { Card, Button } from 'react-bootstrap';

class Blog extends React.Component {
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
            <Fade when={loaded}>
                <div>
                    <h2 style={{margin: '25px'}}>Blog</h2>
                    <div>{posts}</div>
                </div>
            </Fade>
        );
    }

    async componentDidMount() {
        let data = await API.get(this.state.apiCall);
        let arr = [];
        data = data.data;
        for (var i = 0; i < data.length; i++) {
            arr.push(<Post item={data[i]} key={data.id}></Post>);
        }
        this.setState({ posts: arr, loaded: true }); 
    }

    componentWillUnmount() {
        this.loaded = false;
    }
}
export default Blog;

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.item
        }
    }

    render() {
        const { post } = this.state;
        return(
            <Card style={{ maxWidth: '25rem', margin:'0 25px 10px 25px' }}>
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                    <Card.Title>{post.title} - {post.updated_at.split("T")[0]}</Card.Title>
                    <Card.Text style={{ overflow: 'auto', height: '10em'}}>
                        {post.content}
                    </Card.Text>
                    <Button variant="primary">
                        More Information
                    </Button>

                </Card.Body>
            </Card>
        );
    }
}
