import React from 'react';
import API from './utils/API';
import {Card, Button} from 'react-bootstrap';
class Recipes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recipe: [],
            apiCall: props.apiCall
        };
    }
    render() {
        const { recipe } = this.state;
        return(
            <div style={flexStyle}>{recipe}</div>            
        );       
    }

    async componentDidMount() {
        let data = await API.get(this.state.apiCall);
        let arr = [];
        data = data.data;
        for(var i = 0; i < data.length; i++){
            arr.push(<Recipe item={data[i]}></Recipe>);
        }
        this.setState({recipe: arr});
    }
}

class Recipe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: props.item         
        };
    }
    render() {
        const { item } = this.state;
        return(
            <Card style={{ width: '18rem', margin: '50px' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>        
        );       
    }
}

const flexStyle = {
    display: 'flex',
};


export default Recipes;