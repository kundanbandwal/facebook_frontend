import LoginInput from "../../components/inputs/logininput";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
export default function CodeVerification({ code, setCode, error }) {
  const validateCode = Yup.object({
    code: Yup.string()
      .required("Code id required")
      .min(5, "Code must be 5 characters")
      .max(5, "Code must be 5 characters"),
  });
  return (
    <div className="reset_form">
      <div className="reset_form_header">Code Verification</div>
      <div className="reset_form_text">
        Please enter code that been send to email.
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          code,
        }}
        validationSchema={validateCode}
      >
        {(formik) => (
          <Form>
            <LoginInput
              type="text"
              name="code"
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter Code"
            />
            {error && <div className="error_text"></div>}
            <div className="reset_form_btns">
              <Link to="/login" className="gray_btn">
                Cancel
              </Link>
              <button type="submit" className="blue_btn">
                continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
