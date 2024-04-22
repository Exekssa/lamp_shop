import React, { useEffect, useState } from "react";
import "./CursorGlow.css";

const CursorTrail = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let animationFrameId;

    const updateCursorPosition = (e) => {
      const { clientX, clientY } = e;
      setPositions((prevPositions) => [
        { x: clientX, y: clientY },
        ...prevPositions.slice(0, 2),
      ]);
    };

    const update = () => {
      animationFrameId = requestAnimationFrame(update);
      setPositions((prevPositions) => prevPositions.slice(0, 3)); // Ограничиваем длину массива до 3 элементов
    };

    document.addEventListener("mousemove", updateCursorPosition);
    animationFrameId = requestAnimationFrame(update);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {positions.map((position, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        ></div>
      ))}
    </>
  );
};

export default CursorTrail;
