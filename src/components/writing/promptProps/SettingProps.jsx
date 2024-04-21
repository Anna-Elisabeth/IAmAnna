import PropTypes from "prop-types";


// this sets out how setting is rendered on page

function SettingProps({ location, onEdit, onDelete }) {
  return (
    <div style={{
      border: '1px solid #ccc', // Border
      borderRadius: '4px', // Rounded borders
      padding: '10px', // Padding
      margin: '10px', // Margin
      width: '200px', // Set width
      backgroundColor: '#f8f8f8', // Background color
    }}
    >
      <h3>{location}</h3>
      <button 
      style={{
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        border: '1px solid black',
        marginLeft: '10px',
        marginRight: '10px',
        padding: '5px 10px', 
        borderRadius: '5px', // Add rounded corners 
      }}
      
      onClick={onEdit}>Edit</button>
      <button
      style={{
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        border: '1px solid black',
        marginLeft: '10px',
        marginRight: '10px',
        padding: '5px 10px', 
        borderRadius: '5px', // Add rounded corners 
      }}
      onClick={onDelete}>Delete</button>
    </div>
  );

}
SettingProps.propTypes = {
  location: PropTypes.string.isRequired,

};

export default SettingProps;