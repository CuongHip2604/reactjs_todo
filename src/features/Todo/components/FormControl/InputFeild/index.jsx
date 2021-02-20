import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import './styles.scss';

InputFeild.propTypes = {
  form: PropTypes.object,
  name: PropTypes.string,
};

function InputFeild(props) {
  const { form, name } = props;
  const { errors, formState } = form;

  const hasError = errors[name] && formState.isSubmitted;

  return (
    <Controller
      name={name}
      control={form.control}
      as={
        <div>
          <input type="text" className="new_todo _form" placeholder="What needs to be done?" />
          <input id="toggle_all" className="toggle_all" type="checkbox" />
          <label htmlFor="toggle_all"></label>

          {hasError && <div className="error">{errors[name]?.message}</div>}
        </div>
      }
    ></Controller>
  );
}

export default InputFeild;
