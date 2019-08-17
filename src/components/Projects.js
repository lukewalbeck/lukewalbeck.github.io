import React from 'react';
import API from '../utils/API';
import { Card, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: [],
            loaded: false,
            apiCall: props.apiCall
        };
    }
    render() {
        const { project, loaded } = this.state;
        return (
            <div>
                {!loaded && <h3>Loading Projects...</h3>}
                <Fade when={loaded}>
                    <div style={{ width: '100%' }}>
                        <div style={flexStyle}>{project}</div>
                    </div>
                </Fade>
            </div>
        );
    }

    async componentDidMount() {
        let data = await API.get(this.state.apiCall);
        let arr = [];
        data = data.data;
        for (var i = 0; i < data.length; i++) {
            arr.push(<Project item={data[i]} key={i}></Project>);
        }
        this.setState({ project: arr, loaded: true });
    }
}

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
        };
    }

    render() {
        const { item } = this.state;
        return (
            <Card style={{ maxWidth: '23rem', margin:'0 10px 10px 25px' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{ overflow: 'auto', height: '12em'}}>
                        {item.description}
                    </Card.Text>
                    <Button variant="outline-primary" href={item.github} target="_blank"><FontAwesomeIcon icon={['fab', 'github']}/></Button>
                </Card.Body>
            </Card>
        );
    }
}


const flexStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto'
};


export default Projects;