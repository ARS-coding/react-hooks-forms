import React, {useState} from "react";
import Form from "./Form";

function Parent() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <Form firstName={firstName} lastName={lastName} isChecked={isChecked} functions={{setFirstName: setFirstName, setLastName: setLastName, setIsChecked: setIsChecked}} />
    )

}

export default Parent;