import PropTypes from "prop-types";



function PersonProps({ characterName, onEdit, onDelete, showButtons }) {
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
      {showButtons && (
          <>
            <button 
              style={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 'bold',
                border: '1px solid black',
                marginLeft: '10px',
                marginRight: '10px',
                padding: '5px 10px', 
                borderRadius: '5px',
              }}
              onClick={onEdit}
            >
              Edit
            </button>
            <button
              style={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 'bold',
                border: '1px solid black',
                marginLeft: '10px',
                marginRight: '10px',
                padding: '5px 10px', 
                borderRadius: '5px',
              }}
              onClick={onDelete}
            >
              Delete
            </button>
          </>
        )}
      </div>
    );
  }
PersonProps.propTypes = {
  characterName: PropTypes.string.isRequired,
  showButtons: PropTypes.bool,
};

export default PersonProps;


