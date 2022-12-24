import * as Yup from 'yup';

export const initialValues = {
    email: "admin@mail.com",
    password: "admin123456",
};

export const validationSchema = Yup.object().shape({
    email: Yup.string().email().typeError("").required("Required"),
    password: Yup.string().required("Required"),
})