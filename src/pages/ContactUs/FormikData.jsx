import * as Yup from 'yup';

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