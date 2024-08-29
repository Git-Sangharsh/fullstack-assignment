import React, { useEffect, useState } from "react";
import "./Addcard.css";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setShowAddCardBox } from "../store/Store";

const Addcard = () => {
  const dispatch = useDispatch();

  const showAddCard = useSelector((state) => state.showAddCardBox);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notValid, setNotValid] = useState(false);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmitBtn = () => {
    console.log(id, title, description);

    const sendObject = {
      id: id,
      title: title,
      description: description,
    };

    axios
      .post("http://localhost:5000/cards", sendObject)
      .then((res) => {console.log(res.data)
        if(res.data.status === false) {
          setNotValid(true);
        }
      })
      .catch((err) => console.log(err));
    dispatch(setShowAddCardBox(false));
  };


  useEffect(() => {
    if(notValid){
      const timer = setTimeout(() => {
        setNotValid(false);
      },3000);
      return () => clearTimeout(timer)
    }
  }, [notValid])

  console.log("not valid is ",notValid);

  return (
    <>
      <AnimatePresence>
        {showAddCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            exit={{ opacity: 0 }}
            className="addcard-container"
          >
            <div className="addcard-wrapper">
              <h1>Add Card</h1>
              <div className="addcard-wrapper-box">
                <h6 className="addcard-wrapper-box-header">Add Card Id</h6>
                <input
                  className="addcard-wrapper-box-input"
                  type="text"
                  placeholder="Add Card ID"
                  onChange={handleIdChange}
                />
              </div>
              <div className="addcard-wrapper-box">
                <h6 className="addcard-wrapper-box-header">Add Card Header</h6>
                <input
                  className="addcard-wrapper-box-input"
                  type="text"
                  placeholder="Add Card Header"
                  onChange={handleTitleChange}
                />
              </div>
              <div className="addcard-wrapper-box">
                <h6 className="addcard-wrapper-box-header">
                  Add Card Description
                </h6>
                <input
                  className="addcard-wrapper-box-input"
                  type="text"
                  placeholder="Add Card Description"
                  onChange={handleDescriptionChange}
                />
              </div>
              <button className="submit-btn" onClick={handleSubmitBtn}>
                Submit Card
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Addcard;
