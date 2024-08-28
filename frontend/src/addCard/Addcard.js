import React from "react";
import "./Addcard.css";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";


const Addcard = () => {

  const showAddCard = useSelector((state) => state.showAddCardBox);

  return (
    <>
      <AnimatePresence>
        {showAddCard && (
          <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, ease: "easeIn"}}
          exit={{opacity: 0}}

          className="addcard-container">
            <div className="addcard-wrapper">
              <div className="addcard-wrapper-box">
                <h6 className="addcard-wrapper-box-header">Add Card Id</h6>
                <input
                  className="addcard-wrapper-box-input"
                  type="text"
                  placeholder="Add Card ID"
                />
              </div>
              <div className="addcard-wrapper-box">
                <h6 className="addcard-wrapper-box-header">Add Card Header</h6>
                <input
                  className="addcard-wrapper-box-input"
                  type="text"
                  placeholder="Add Card ID"
                />
              </div>
              <div className="addcard-wrapper-box">
                <h6 className="addcard-wrapper-box-header">
                  Add Card Description
                </h6>
                <input
                  className="addcard-wrapper-box-input"
                  type="text"
                  placeholder="Add Card ID"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Addcard;
