import React from 'react';
import API from '../utils/API';
import { Card, Button, Modal } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

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
            <Fade ssrFadeout when={loaded}>
                <div style={{margin: '0 auto', width: '100%' }} id="projects">
                <h2 style={{ margin: '25px' }}>Projects</h2>
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
}

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            modalShow: false
        };
    }
    
    render() {
        const { item, modalShow } = this.state;
        return (
            <Card style={{ maxWidth: '25rem', margin: '0 auto', marginBottom: '10px' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{ overflow: 'auto', height: '15em'}}>
                        {item.description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.setState({modalShow: true})}>
                        More Information
                    </Button>
                    <MyModal show={modalShow} recipe={item} onHide={() => this.setState({modalShow: false})}></MyModal>
                </Card.Body>
            </Card>
        );
    }
}

function MyModal(props) {
    console.log(props.recipe);
    return (      
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.recipe.title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.recipe.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


const flexStyle = {
    display: 'flex',
    flexWrap: 'wrap'
};


export default Projects;