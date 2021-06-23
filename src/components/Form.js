import React from "react";

function Form({firstName, lastName, isChecked, functions}) {
  
  return (
    <form>
      <input type="text" value={firstName} onChange={(e) => functions.setFirstName(e.target.value)} />
      <input type="text" value={lastName} onChange={(e) => functions.setLastName(e.target.value)} />
      <input type="checkbox" onChange={(e) => functions.setIsChecked(!isChecked)} checked={isChecked} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;