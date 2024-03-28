import { useEffect, useState } from "react";
import axios from "axios";
import SettingProps from "./SettingProps";
import { useForm } from "react-hook-form"; // Assuming you use React Hook Form

function CreateSetting() {
    const { register, handleSubmit, reset } = useForm(); 

  const [settings, setSettings] = useState([]);

  // Fetch existing settings (optional)
  useEffect(() => {
    // Your logic to fetch existing settings (if needed)
  }, []);

  const resetForm = () => {
    reset();
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8081/setting/create", data);
      console.log("Setting created successfully:", response.data);
      resetForm();
    } catch (err) {
      console.error("Error creating setting:", err);
    }
  };

  const settingsArray = settings.map((setting) => (
    <SettingProps key={setting.location} location={setting.location} />
  ));

  return (
    <div>
      <div className="container-fluid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" {...register("location", { required: true })} />
          <button type="submit">Create Location</button>
        </form>
        <div className="row">{settingsArray}</div>
      </div>
    </div>
  );
}

export default CreateSetting;