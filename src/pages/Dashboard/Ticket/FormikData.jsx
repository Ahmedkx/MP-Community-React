import * as Yup from 'yup';

export const initialValues = {
    message: "",
};

export const validationSchema = Yup.object().shape({
    message: Yup.string().required("Required")
})