import PropTypes from "prop-types";




function ChallengeProps(props) {
  return (

    <div>
          <h3>
          
           
            {props.challengeStory} 
         
          </h3>
         

        </div>
     
  );
}
ChallengeProps.propTypes = {
  challengeStory: PropTypes.string.isRequired,

};

export default ChallengeProps;