import React, { useEffect, useState } from "react";
import "./Cards.css";
import arrowSvg from "../../assets/arrow.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAddCard } from "../../store/Store";

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/cards");
        dispatch(setAddCard(res.data));
      } catch (err) {
        console.log("error fetching cards", err);
      }
    };
    fetchData();
  }, [dispatch]);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="cards-container">
      <div className="cards-search-box">
        <h1 className="cards-search-box-header">How Can We Help?</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Search"
            className="cards-search-box-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img className="arrow-logo" src={arrowSvg} alt="Search Icon" />
        </div>
      </div>
      <div className="parent-card-list">
        <div className="cards-list">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div key={card.id} className="card-item">
                <h2 className="card-item-header">{card.title}</h2>
                <p className="card-item-p">{card.description}</p>
              </div>
            ))
          ) : (
            <h1>Card Not Exist!!!</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
