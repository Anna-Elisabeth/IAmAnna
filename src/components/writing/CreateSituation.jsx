import { useEffect, useState } from "react";
import axios from "axios";
import SituationProps from "./promptProps/SituationProps";
import { useForm } from "react-hook-form";
import Modal from "./modal/Modal";


function CreateSituation() {
  const { register, handleSubmit, reset } = useForm();
  const [situations, setSituations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showSituations, setShowSituations] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editScenario, setEditScenario] = useState('');


  const resetForm = () => {
    reset();
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8081/situation/create", data);
      console.log("Scenario created successfully:", response.data);
      setModalMessage("Scenario created!");
      setShowModal(true);
      resetForm();
    } catch (err) {
      console.error("Error creating scenario", err);
      setModalMessage("Error, scenario not created.");
      setShowModal(true);
    }
  };


  useEffect(() => {

    const fetchSituations = async () => {
      try {
        const response = await axios.get("http://localhost:8081/situation/get");
        setSituations(response.data);
      } catch (error) {
        console.error("Error fetching scenarios", error);
      }
    };
    fetchSituations();


  }, []);


  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleEdit = (id, scenario) => {
    setEditing(true);
    setEditId(id);
    setEditScenario(scenario);
    console.log(`Edit scenario with id: ${id}`);
  };

  const handleSave = async () => {
    try {
      const response = await axios.patch(`http://localhost:8081/situation/update/${editId}`, { scenario: editScenario });

      if (response.status === 200) {
        const updatedSituations = situations.map(situation =>
          situation.id === editId ? { ...situation, scenario: editScenario } : situation
        );
        setSituations(updatedSituations);
      } else {
        console.error("Error updating situation:", response.data);
      }
    } catch (error) {
      console.error("Error updating situation:", error);
    }

    setEditing(false);
    setEditId(null);
    setEditScenario('');
  };

  
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8081/situation/delete/${id}`);

      if (response.status === 200 || response.status === 204) { // Check for both 200 and 204
        const updatedSituations = situations.filter((situation) => situation.id !== id);
        setSituations(updatedSituations);
      } else {
        console.error("Error deleting situation:", response.data);
      }
    } catch (error) {
      console.error("Error deleting situation:", error);
    }
  };

  const situationsArray = situations.map((situation) => (
    <SituationProps
      key={situation.scenario}
      scenario={situation.scenario}
      onEdit={() => handleEdit(situation.id, situation.scenario)}
      onDelete={() => handleDelete(situation.id)}
    />
  ));

  return (
    <div>
      <div className="container-fluid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            style={{ marginLeft: "50px", marginTop: "50px", width: "300px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047", textAlign: "center", fontSize: "30px", }}

            htmlFor="scenario">Scenario:</label>
          <input
            style={{
              border: "3px solid #213047", // Thick border with color #213047
              borderRadius: "5px",
              padding: "10px",
              fontFamily: "Verdana, sans-serif", // Verdana font
              fontWeight: "bold", // Bold text
              marginLeft: "20px",
              backgroundColor: "white" // White background color
            }}

            type="text" id="scenario" {...register("scenario", { required: true })} />
          <button
            style={{
              border: "3px solid #213047",
              borderRadius: "5px",
              padding: "10px",
              fontFamily: "Verdana, sans-serif",
              fontWeight: "bold",
              marginLeft: "20px",
              backgroundColor: "white"
            }} type="submit">Create Scenario</button>
          {showModal && (
            <Modal
              open={showModal}
              onClose={handleModalClose}
              message={modalMessage}
            />
          )}
        </form>

        {editing ? (
          <div>
            <input
              type="text"
              value={editScenario}
              onChange={e => setEditScenario(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : null}

        <button
          style={{
            border: "3px solid #213047", // Thick border with color #213047
            borderRadius: "5px",
            padding: "10px",
            fontFamily: "Verdana, sans-serif", // Verdana font
            fontWeight: "bold", // Bold text
            marginLeft: "20px",
            backgroundColor: "white" // White background color
          }}
          onClick={() => setShowSituations(!showSituations)}>
          {showSituations ? "Hide Scenarios" : "Show Scenarios"}
        </button>

        {showSituations && <div className="row">{situationsArray}</div>}




      </div>
    </div>
  );
}

export default CreateSituation;

