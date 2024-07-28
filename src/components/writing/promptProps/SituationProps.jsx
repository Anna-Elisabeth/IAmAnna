import PropTypes from "prop-types";




function SituationProps({ scenario, onEdit, onDelete, showButtons }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '10px',
      margin: '10px',
      width: '200px',
      backgroundColor: '#f8f8f8',
    }}>
      <h3> {scenario}</h3>

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
  
  SituationProps.propTypes = {
    location: PropTypes.string.isRequired,
    showButtons: PropTypes.bool, // Add this line
  };
export default SituationProps;