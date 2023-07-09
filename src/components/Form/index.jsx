import { useState } from "react";
import TextInput from "../TextInput";
import Button from '@mui/joy/Button';
import axios from 'axios';



const Form = () => {

    const [formValues, setFormValues] = useState({});

    const buildNewData = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData)

        axios.post('linkdataapi.com.br', data )

    };

    return (
        <form onSubmit={handleSubmit}>
                <div style={{display: "flex", gap: "6px"}}>
                    <TextInput name='movie_name' value={formValues.movie_name} handleInputChange={buildNewData} />
                    <Button type="submit">Submit</Button>
                </div>
        </form>
    );
};

export default Form;