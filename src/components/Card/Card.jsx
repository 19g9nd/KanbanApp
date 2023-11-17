const Card = ({ name, details, handleMoveForward, handleMoveBackward, handleRemove }) => {
  return (
    <div className='card'>
      <h2 className='task-name'>{name}</h2>
      {/* <p className='task-details'>{details}</p> можно добавить потом */}
      <div className='button-container'>
        <button className='move-btn' onClick={handleMoveBackward}>
          &lt; Move Backward
        </button>
        <button className='move-btn' onClick={handleMoveForward}>
          Move Forward &gt;
        </button>
      </div>
      <button className='remove-btn' onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default Card;