import { FormGenerator } from 'components/FormGenerator';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(logInUser({ email, password }));

    form.reset();
  };

  return <FormGenerator type={'login'} onSubmit={handleFormSubmit} />;
};
