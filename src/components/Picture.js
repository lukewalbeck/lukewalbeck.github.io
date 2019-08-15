import React from 'react';
import pic from '../media/IMG_0376.jpg';
import Image from 'react-bootstrap/Image';
import Fade from 'react-reveal/Fade';
class Picture extends React.Component {
    render() {
        return(
            <Fade>
                <div>
                    <Image src={pic} style={imgStyle} rounded />
                </div>
            </Fade>
        );
    }
}
let imgStyle = {
    maxWidth: '400px',
    height: 'auto',
}
export default Picture;