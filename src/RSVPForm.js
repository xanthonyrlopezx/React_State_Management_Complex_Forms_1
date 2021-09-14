import React, { useState } from "react";

function RSVPForm() {

    const initialFormState = {
        name: "",
        age: "",
        newMember: false,
        comment: ""
    }

    const [formData, setFormData] = useState( { ...initialFormState } )

    const handleChange = ( { target } ) => {
        const value = target.type === "checkbox" ? target.checked : target.value
        setFormData( { 
            ...formData, 
            [target.name]: value 
        } )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData.name, formData.age, formData.newMember, formData.comment)
        setFormData( { ...initialFormState } )
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">
                Name:
                <input 
                id="name" 
                type="text" 
                name="name" 
                onChange={handleChange} 
                value={formData.name}
                />
            </label>

            <br/>
            
            <label htmlFor="age">
                Age:
                <select id="age" name="age" onChange={handleChange} value={formData.age}>
                    <option value="">Select an age range</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                    <option value="0-19">0-19</option>
                    <option value="20-39">20-39</option>
                    <option value="40-59">40-59</option>
                    <option value="60+">60+</option>
                </select>
            </label>

            <br/>

            <label htmlFor="newMember">
                New Member:
                <input 
                id="newMember" 
                type="checkbox" 
                name="newMember" 
                onChange={handleChange} 
                checked={formData.newMember} 
                value={formData.newMember}/>
            </label>

            <br/>

            <label htmlFor="comment">
                Comment:
                <textarea 
                id="comment" 
                name="comment" 
                rows="4" 
                cols="50" 
                onChange={handleChange} 
                value={formData.comment}/>
            </label>

            <br/>

            <button type="submit">Submit</button>
            
        </form>
    )

}

export default RSVPForm;