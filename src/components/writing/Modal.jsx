
import './Modal.css';
import AnnaNewLogo from "../../AnnaNewLogo.png"; // Adjusted import statement

const Modal = ({ open, onClose, message }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={AnnaNewLogo} alt='anna logo' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content' style={{ fontSize: "20px", fontFamily: "Verdana, sans-serif", fontWeight: "bold" }}
          >
            <p>{message}</p>
            <div className='btnContainer'>
              <button className='btnPrimary' onClick={onClose}>
                <span className='bold'>Continue</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;