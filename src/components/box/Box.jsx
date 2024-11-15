import PropTypes from 'prop-types'; 
import './box.scss';

const Box = ({ title, content }) => {
    return (
        <div className="box">
            <div className="box-content">
                 <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
};

Box.propTypes = {
    title: PropTypes.string.isRequired,   
    content: PropTypes.string.isRequired, 
};

export default Box;