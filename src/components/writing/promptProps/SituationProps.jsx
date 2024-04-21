import PropTypes from "prop-types";




function SituationProps(props, onEdit, onDelete) {
  return (

    <div  style={{
      border: '1px solid #ccc', // Border
      borderRadius: '4px', // Rounded borders
      padding: '10px', // Padding
      margin: '10px', // Margin
      width: '200px', // Set width
      backgroundColor: '#f8f8f8', // Background color
    }}>
     



          <h3>
          
           
            {props.scenario} 
            <button   style={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 'bold',
                border: '1px solid black',
                marginLeft: '10px',
                marginRight: '10px',
                padding: '5px 10px', 
                borderRadius: '5px', // Add rounded corners 
              }} onClick={onEdit}>Edit</button>
            <button   style={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 'bold',
                border: '1px solid black',
                marginLeft: '10px',
                marginRight: '10px',
                padding: '5px 10px', 
                borderRadius: '5px', // Add rounded corners 
              }} onClick={onDelete}>Delete</button>
          </h3>
         

        </div>
     
  );
}
SituationProps.propTypes = {
  scenario: PropTypes.string.isRequired,

};

export default SituationProps;