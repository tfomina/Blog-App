import * as yup from "yup";

const requiredMessage = "Заполните поле";
const wrongEmailMessage = "Неверный формат email";

export const schema = yup.object().shape({
  username: yup.string().trim().required(requiredMessage),
  email: yup.string().trim().email(wrongEmailMessage).required(requiredMessage),
  password: yup.string().trim().required(requiredMessage),
});
