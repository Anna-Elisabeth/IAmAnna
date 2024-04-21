import { useEffect, useState } from "react";
import axios from "axios";
import SettingProps from "./promptProps/SettingProps";
import { useForm } from "react-hook-form";
import Modal from "./modal/Modal";


function CreateSetting() {
  const { register, handleSubmit, reset } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [settings, setSettings] = useState([]);
  const [showSettings, setShowSettings] = useState(true);

  const resetForm = () => {
    reset();
  };


  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8081/setting/create", data);
      console.log("Location created successfully:", response.data);
      setModalMessage("Location created!");
      setShowModal(true);
      resetForm();
    } catch (err) {
      console.error("Error creating location", err);
      setModalMessage("Error, location not created.");
      setShowModal(true);
    }
  };

  // Fetch existing settings 
  useEffect(() => {

    const fetchSettings = async () => {
      try {
        const response = await axios.get("http://localhost:8081/setting/get");
        setSettings(response.data);
      } catch (error) {
        console.error("Error fetching settings", error);
      }
    };
    fetchSettings();

  }, []);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const settingsArray = settings.map((setting) => (
    <SettingProps key={setting.location} location={setting.location} />
  ));

  return (
    <div>
      <div className="container-fluid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="location"
            style={{ marginLeft: "50px", marginTop: "50px", width: "300px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047", textAlign: "center", fontSize: "30px", }}
          >Location:</label>
          <input
            style={{
              border: "3px solid #213047",
              borderRadius: "5px",
              padding: "10px",
              fontFamily: "Verdana, sans-serif", // Verdana font
              fontWeight: "bold", // Bold text
              marginLeft: "20px",
              backgroundColor: "white" // White background color
            }}
            type="text" id="location" {...register("location", { required: true })} />
          <button style={{
            border: "3px solid #213047", // Thick border with color #213047
            borderRadius: "5px",
            padding: "10px",
            fontFamily: "Verdana, sans-serif", // Verdana font
            fontWeight: "bold", // Bold text
            marginLeft: "20px",
            backgroundColor: "white" // White background color
          }}

            type="submit">Create Location</button>
          {showModal && (
            <Modal
              open={showModal}
              onClose={handleModalClose}
              message={modalMessage}
            />
          )}
        </form>

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
        
        onClick={() => setShowSettings(!showSettings)}>
          {showSettings ? "Hide Locations" : "Show Locations"}
        </button>
        {showSettings && <div className="row">{settingsArray}</div>}
      </div>
    </div>
  );
}

export default CreateSetting;