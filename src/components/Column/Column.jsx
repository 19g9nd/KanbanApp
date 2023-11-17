import React from "react";
import Card from "../Card/Card";

const Column = ({ title, cards, handleUpdateCard, handleRemoveCard }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            details={card.details}
            handleMoveForward={() =>
              handleUpdateCard(card.id, title).moveForward()
            }
            handleMoveBackward={() =>
              handleUpdateCard(card.id, title).moveBackward()
            }
            handleRemove={() => handleRemoveCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;