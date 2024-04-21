import { useEffect, useState } from "react";
import axios from "axios";
import PersonProps from "./promptProps/PersonProps";
import { useForm } from "react-hook-form";
import Modal from "./modal/Modal";

function CreatePerson() {
    const { register, handleSubmit, reset } = useForm(); 
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [person, setPersons] = useState([]);
    const [showCharacters, setShowCharacters] = useState(true);
    const [editing, setEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editCharacterName, setEditCharacterName] = useState('');

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
        // Fetch existing persons 

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


    const handleEdit = (id, characterName) => {
        setEditing(true);
        setEditId(id);
        setEditCharacterName(characterName);
        console.log(`Edit character with id: ${id}`);
    };

    const handleSave = async () => {
        try {
            const response = await axios.patch(`http://localhost:8081/person/update/${editId}`, { characterName: editCharacterName });

            if (response.status === 200) {
                const updatedPersons = person.map(person =>
                    person.id === editId ? { ...person, characterName: editCharacterName } : person
                );
                setPersons(updatedPersons);
            } else {
                console.error("Error updating person:", response.data);
            }
        } catch (error) {
            console.error("Error updating person:", error);
        }

        setEditing(false);
        setEditId(null);
        setEditCharacterName('');
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8081/person/delete/${id}`);

            if (response.status === 200 || response.status === 204) {
                const updatedPersons = person.filter((person) => person.id !== id);
                setPersons(updatedPersons);
            } else {
                console.error("Error deleting person:", response.data);
            }
        } catch (error) {
            console.error("Error deleting person:", error);
        }
    };

    const personArray = person.map((person) => (
        <PersonProps 
        key={person.characterName} 
        characterName={person.characterName} 
        onEdit={() => handleEdit(person.id, person.characterName)}
        onDelete={() => handleDelete(person.id)}
    /> ));

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

                {editing ? (
            <div>
                <input 
                    type="text" 
                    value={editCharacterName} 
                    onChange={e => setEditCharacterName(e.target.value)} 
                />
                <button onClick={handleSave}>Save</button>
            </div>
        ) : null}

        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <h1>A new character was added</h1>
            </Modal>
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
                
                onClick={() => setShowCharacters(!showCharacters)}>
  {showCharacters ? "Hide Characters" : "Show Characters"}
</button>
{showCharacters && <div className="row">{personArray}</div>}
            </div>
        </div>
    );
}

export default CreatePerson;