import React from 'react';
import API from './utils/API';
import { Card, Button } from 'react-bootstrap';
class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: [],
            apiCall: props.apiCall
        };
    }
    render() {
        const { recipe } = this.state;
        return (
            <div>
                <h2 style={{margin: '25px'}}>RESTful Blueberry Treats</h2>
                <div style={flexStyle}>{recipe}</div>
            </div>
        );
    }

    async componentDidMount() {
        let data = await API.get(this.state.apiCall);
        let arr = [];
        data = data.data;
        for (var i = 0; i < data.length; i++) {
            arr.push(<Recipe item={data[i]}></Recipe>);
        }
        this.setState({ recipe: arr });
    }
}

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
    }
    render() {
        const { item } = this.state;
        return (
            <Card style={{ width: '20rem', margin: '0 auto' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{overflow: 'auto', maxHeight: '265px'}}>
                        {item.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}

const flexStyle = {
    display: 'flex'
};


export default Recipes;