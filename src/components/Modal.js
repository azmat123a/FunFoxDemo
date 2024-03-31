import React from "react";
const Modal = ({ handleCloseModal }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  const closeModal = () => {
    handleCloseModal(false)
  };

  return (
    <div>
      {/* {isOpen && ( */}
      <div className="fixed -top-[70px]   w-full h-full  bg-[#6C5D4AB2] bg-opacity-100 flex items-center justify-center">
        <div className="bg-[#11111133]">
          <h2>This is a Modal</h2>
          <p>Modal content goes here...</p>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Modal;
