import PropTypes from "prop-types";


// this sets out how setting is rendered on page

function SettingProps(props) {
  return (

    <div>
     
          
           
            {props.location} 
         
       
         

        
      
      </div>
  );
}
SettingProps.propTypes = {
  location: PropTypes.string.isRequired,

};

export default SettingProps;