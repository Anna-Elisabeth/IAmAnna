

import { useEffect, useState } from "react";
import axios from "axios";
import SituationProps from "./SituationProps";
import { useForm } from "react-hook-form"; 

function CreateSituation() {
  const { register, handleSubmit, reset } = useForm();

  const [situations, setSituations] = useState([]);

  // Fetch existing situations (optional)
  useEffect(() => {
    // Your logic to fetch existing situation (if needed)
  }, []);

  const resetForm = () => {
    reset();
  };




  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8081/situation/create", data);
      console.log("Situation created successfully:", response.data);
      resetForm();
    } catch (err) {
      console.error("Error creating situation:", err);
    }
  };

  const situationsArray = situations.map((situation) => (
    <SituationProps key={situation.scenario} scenario={situation.scenario} />
  ));

  return (
    <div>
      <div className="container-fluid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="scenario">Scenario:</label>
          <input type="text" id="scenario" {...register("scenario", { required: true })}/>
          <button type="submit">Create Scenario</button>
        </form>
        <div className="row">{situationsArray}</div>
      </div>
    </div>
  );
}

export default CreateSituation;