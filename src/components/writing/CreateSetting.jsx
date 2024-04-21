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
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editLocation, setEditLocation] = useState('');

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
      // render newly created item immediately on the page
      setSettings(prevSettings => [...prevSettings, response.data]);
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


  const handleEdit = (id, location) => {
    setEditing(true);
    setEditId(id);
    setEditLocation(location);
    console.log(`Edit location with id: ${id}`);
  };

  const handleSave = async () => {
    try {
      const response = await axios.patch(`http://localhost:8081/setting/update/${editId}`, { location: editLocation });

      if (response.status === 200) {
        const updatedSettings = settings.map(setting =>
          setting.id === editId ? { ...setting, location: editLocation } : setting
        );
        setSettings(updatedSettings);
      } else {
        console.error("Error updating setting:", response.data);
      }
    } catch (error) {
      console.error("Error updating setting:", error);
    }

    setEditing(false);
    setEditId(null);
    setEditLocation('');
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8081/setting/delete/${id}`);

      if (response.status === 200 || response.status === 204) {
        const updatedSettings = settings.filter((setting) => setting.id !== id);
        setSettings(updatedSettings);
      } else {
        console.error("Error deleting setting:", response.data);
      }
    } catch (error) {
      console.error("Error deleting setting:", error);
    }
  };


  const settingsArray = settings.map((setting) => (
    <SettingProps
      key={setting.location}
      location={setting.location}
      onEdit={() => handleEdit(setting.id, setting.location)}
      onDelete={() => handleDelete(setting.id)}
    />
  ));

  return (
    <div>
      <div className="container-fluid">
        {editing ? (
          <form onSubmit={handleSave}>
            <label htmlFor="editLocation">Edit Location:</label>
            <input
              type="text"
              id="editLocation"
              value={editLocation}
              onChange={(e) => setEditLocation(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        ) : (
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
        )}
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