import * as Yup from 'yup';

export const initialValues = {
    email: "",
    password: "",
};

export const validationSchema = Yup.object().shape({
    email: Yup.string().email().typeError("").required("Required"),
    password: Yup.string().required("Required"),
})