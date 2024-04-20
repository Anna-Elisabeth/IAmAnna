import { useEffect, useState } from "react";
import axios from "axios";
import PersonProps from "./PersonProps";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

function CreatePerson() {
    const { register, handleSubmit, reset } = useForm(); 
   
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [person, setPersons] = useState([]);

    const resetForm = () => {
        reset();
    };

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:8081/person/create", data);
            console.log("Character created successfully:", response.data);
            setModalMessage("Character created!");
            setShowModal(true);
            resetForm();
        } catch (err) {
            console.error("Error creating Character", err);
            setModalMessage("Error, character not created.");
            setShowModal(true);
        }
    };

    useEffect(() => {
        // Fetch existing persons (add if needed)

        const fetchPersons = async () => {
            try {
                const response = await axios.get("http://localhost:8081/person/get");
                setPersons(response.data);
            } catch (error) {
                console.error("Error fetching persons", error);
            }
        };
        fetchPersons();
    }, []);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const personArray = person.map((person) => (
        <PersonProps key={person.characterName} characterName={person.characterName} />
    ));

    return (
        <div>
            <div className="container-fluid">
                <form onSubmit={handleSubmit(onSubmit)}>
                <label
            style={{ marginLeft: "50px", marginTop: "50px", width: "300px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047", textAlign: "center", fontSize: "30px", }}
 htmlFor="characterName">Character:</label>
                    <input  style={{
              border: "3px solid #213047", // Thick border with color #213047
              borderRadius: "5px",
              padding: "10px",
              fontFamily: "Verdana, sans-serif", // Verdana font
              fontWeight: "bold", // Bold text
              marginLeft: "20px",
              backgroundColor: "white" // White background color
            }}
            type="text" id="characterName" {...register("characterName", { required: true })} />
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
                       type="submit">Create Character</button>
                    {showModal && (
                        <Modal
                            open={showModal}
                            onClose={handleModalClose}
                            message={modalMessage}
                        />
                    )}
                   
                </form>
                <div className="row">{personArray}</div>
            </div>
        </div>
    );
}

export default CreatePerson;