/* eslint-disable no-unused-expressions */
import React from "react";

const NewSingleItem = (character) => (
<div className="employeeDetail" id={"Single"+character.character.name}>
  <ul id={"u"+character.character.name}>
    <li id={"l"+character.character.name}>Name: {character.character.name}</li>
    <li id={"h"+character.character.name}>Height: {character.character.height}</li>
    <li id={"g"+character.character.name}>Gender: {character.character.gender}</li>
  </ul>
</div>);

export default NewSingleItem;