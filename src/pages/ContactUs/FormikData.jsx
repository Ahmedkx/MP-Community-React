import * as Yup from 'yup';
import { createDocument } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';

let date = new Date(new Date().toLocaleDateString()).toLocaleDateString('en-CA')
let time = new Date().toLocaleTimeString()

export const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email().typeError("").required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
})

export function onSubmit(e){
    const data = {
        status:"open",
        name:e.name,
        email:e.email,
        subject:e.subject,
        messages:[{id:uuidv4(),date:date,time:time,from:e.name,message:e.message}],
    }
    createDocument("Tickets",data)
};