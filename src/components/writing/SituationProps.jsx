import PropTypes from "prop-types";




function SituationProps(props) {
  return (

    <div>
          <h3>
          
           
            {props.scenario} 
         
          </h3>
         

        </div>
     
  );
}
SituationProps.propTypes = {
  scenario: PropTypes.string.isRequired,

};

export default SituationProps;