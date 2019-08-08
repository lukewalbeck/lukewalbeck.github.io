import React from 'react';
import API from './utils/API';
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
            <div>
                <h2>Title: {item.title}</h2>
                <p>
                    Description: {item.description}
                </p>
                <p>
                    Image:<br></br>
                    <img src={item.image} alt="loading" width="20%"></img>
                </p>
            </div>         
        );       
    }
}

const flexStyle = {
    display: 'flex'
};


export default Recipes;