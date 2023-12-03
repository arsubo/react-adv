import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe de ser de 3 caracteres o más")
            .max(15, "El nombre debe de ser de 15 caracteres máximo")
            .required("Requerido"),
          email: Yup.string().email("Revise el formato del correo").required(),
          password1: Yup.string()
            .min(6, "Minimo debe ser de 6 letras")
            .required("Requerido"),
          password2: Yup.string()
            .required("Requerido")
            .oneOf([Yup.ref("password1")], "las contraseñas no son iguales"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Arnoldo" />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="john@google.com"
            />
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="**********"
            />
            <MyTextInput
              label="Confirm Password"
              name="password2"
              type="password"
              placeholder="**********"
            />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
