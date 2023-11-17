import { useState } from "react";
import CreateCard from "../CreateCard/CreateCard";
import Column from "../Column/Column";

const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });

  const handleAddCard = (task) => {
    const newCard = {
      id: Date.now(),
      name: task,
      details: "Task details",
    };

    // чтобы карта всегда добавлялась в начало
    const columnIndex = 0;

    setColumns((prevColumns) => ({
      ...prevColumns,
      [Object.keys(prevColumns)[columnIndex]]: [...prevColumns[Object.keys(prevColumns)[columnIndex]], newCard],
    }));
  };

  const handleUpdateCard = (id, currentColumn) => {
    const cardToMove = columns[currentColumn].find((card) => card.id === id);
    const columnKeys = Object.keys(columns);
    const currentIndex = columnKeys.indexOf(currentColumn);

    const moveForward = () => {
      const nextIndex =
        currentIndex + 1 < columnKeys.length ? currentIndex + 1 : null;
      if (nextIndex !== null) {
        setColumns((prevColumns) => ({
          ...prevColumns,
          [currentColumn]: prevColumns[currentColumn].filter(
            (card) => card.id !== id
          ),
          [columnKeys[nextIndex]]: [
            ...prevColumns[columnKeys[nextIndex]],
            cardToMove,
          ],
        }));
      }
    };

    const moveBackward = () => {
      const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : null;
      if (prevIndex !== null) {
        setColumns((prevColumns) => ({
          ...prevColumns,
          [currentColumn]: prevColumns[currentColumn].filter(
            (card) => card.id !== id
          ),
          [columnKeys[prevIndex]]: [
            ...prevColumns[columnKeys[prevIndex]],
            cardToMove,
          ],
        }));
      }
    };

    return { moveForward, moveBackward };
  };

  const handleRemoveCard = (id) => {
    setColumns((prevColumns) => {
      const updatedColumns = {};

      // Удаляем карту из каждого столбца
      for (const columnName in prevColumns) {
        updatedColumns[columnName] = prevColumns[columnName].filter(
          (card) => card.id !== id
        );
      }

      return updatedColumns;
    });
  };

  return (
    <div className="kanban-board">
      <CreateCard onSubmit={handleAddCard} />
      <div className="columns-container">
        {Object.keys(columns).map((columnName) => (
          <Column
            key={columnName}
            title={columnName}
            cards={columns[columnName]}
            handleUpdateCard={handleUpdateCard}
            handleRemoveCard={handleRemoveCard}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
