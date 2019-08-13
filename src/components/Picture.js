import React from 'react';
import pic from '../media/IMG_0376.jpg';
import Image from 'react-bootstrap/Image';
import Fade from 'react-reveal/Fade';
class Picture extends React.Component {
    render() {
        return(
            <Fade>
                <div style={imgStyle}>
                    <Image src={pic} fluid rounded />
                </div>
            </Fade>
        );
    }
}
let imgStyle = {
    width: '40%',
    margin: '0 auto',
    marginBottom: '0'
}
export default Picture;