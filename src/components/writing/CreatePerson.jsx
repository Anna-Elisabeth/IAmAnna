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
        // Fetch existing persons (if needed)
        // This is just a placeholder for fetching existing persons
        // Replace it with your actual logic
        const fetchPersons = async () => {
            try {
                const response = await axios.get("http://localhost:8081/person");
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
                    <label htmlFor="characterName">Character:</label>
                    <input type="text" id="characterName" {...register("characterName", { required: true })} />
                    <button type="submit">Create Character</button>
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