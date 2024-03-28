import PropTypes from "prop-types";




function PersonProps(props) {
  return (

    <div>
          <h3>
          
           
            {props.characterName} 
         
          </h3>
         

        </div>
     
  );
}
PersonProps.propTypes = {
  characterName: PropTypes.string.isRequired,

};

export default PersonProps;