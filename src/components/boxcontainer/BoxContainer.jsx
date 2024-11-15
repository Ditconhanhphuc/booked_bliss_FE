import PropTypes from 'prop-types'; 
import Box from '../box/Box';
import './boxcontainer.scss';

const BoxContainer = ({ boxesData }) => {
    return (
        <div className="box-container grid__row">
            {boxesData.map((box, index) => (
                <div key={index} className="grid__col-4">
                    <Box title={box.title} content={box.content} />
                </div>
            ))}
        </div>
    );
};

BoxContainer.propTypes = {
    boxesData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default BoxContainer;