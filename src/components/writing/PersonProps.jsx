import PropTypes from "prop-types";



function PersonProps({ characterName }) {
  return (
    <div style={{
      border: '1px solid #ccc', // Border
      borderRadius: '4px', // Rounded borders
      padding: '10px', // Padding
      margin: '10px', // Margin
      width: '200px', // Set width
      backgroundColor: '#f8f8f8', // Background color
    }}>
      <h3>{characterName}</h3>
    </div>

     
  );
}
PersonProps.propTypes = {
  characterName: PropTypes.string.isRequired,

};

export default PersonProps;


