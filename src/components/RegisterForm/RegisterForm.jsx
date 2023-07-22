import { FormGenerator } from 'components/FormGenerator';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(registerUser({ name, email, password }));

    form.reset();
  };

  return <FormGenerator type={'register'} onSubmit={handleFormSubmit} />;
};
