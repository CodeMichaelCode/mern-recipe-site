import React from "react";
import { useState } from "react";
import { DotsVertical } from "@styled-icons/heroicons-outline/DotsVertical";

const ListItem = ({ item }) => {
  const [liSelected, setLiSelected] = useState(false);
  const handleToggle = () => {
    setLiSelected(!liSelected);
  };
  const toggleClassCheck = liSelected ? "strike" : null;

  return (
    <>
      <li className={toggleClassCheck} onClick={handleToggle}>
        <DotsVertical size={20} /> {item}
      </li>
    </>
  );
};

export default ListItem;
