import PropTypes from "prop-types";


// this sets out how setting is rendered on page

function SettingProps(props) {
  return (

    <div style={{
      border: '1px solid #ccc', // Border
      borderRadius: '4px', // Rounded borders
      padding: '10px', // Padding
      margin: '10px', // Margin
      width: '200px', // Set width
      backgroundColor: '#f8f8f8', // Background color
    }}>
     
          
           
         <h3>  {props.location} </h3> 
         
       
         

        
      
      </div>
  );
}
SettingProps.propTypes = {
  location: PropTypes.string.isRequired,

};

export default SettingProps;