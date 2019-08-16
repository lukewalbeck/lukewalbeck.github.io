import React from 'react';
import API from '../utils/API';
import { Card, Button, OverlayTrigger, Popover } from 'react-bootstrap';
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
            <Fade when={loaded}>
                <div style={{ width: '100%' }}>
                <h2 style={{ margin: '25px' }}>
                        <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                            <span>Projects</span>
                        </OverlayTrigger>
                    </h2>

                    <div style={flexStyle}>{project}</div>

                
                </div>
            </Fade>          
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

    componentWillUnmount() {
        this.loaded = false;
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
            <Card style={{ maxWidth: '25rem', margin:'0 25px 10px 25px' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{ overflow: 'auto', height: '12em'}}>
                        {item.description}
                    </Card.Text>
                    <Button variant="outline-primary"><FontAwesomeIcon icon={['fab', 'github']}/></Button>
                </Card.Body>
            </Card>
        );
    }
}

const popover = (
    <Popover>
        <Popover.Title as="h3">REST API Call!</Popover.Title>
        <Popover.Content>
            This content is generated from a Django REST Framework project that 
            I have built, utilizing a model so that I can add, edit, and remove 
            projects as the year progresses!
        </Popover.Content>
    </Popover>
);




const flexStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto'
};


export default Projects;