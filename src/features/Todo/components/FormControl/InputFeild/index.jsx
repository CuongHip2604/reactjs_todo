import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputFeild.propTypes = {
  form: PropTypes.object,
  name: PropTypes.string,
};

function InputFeild(props) {
  const { form, name } = props;
  const { errors, formState } = form

  const hasError = errors[name] && formState.isSubmitted
  console.log(errors[name], formState.touched[name]);

  return (
    <Controller
      name={name}
      control={form.control}
      as={
        <div>
          <input type="text" className="new_todo _form" placeholder="What needs to be done?" />
          {hasError && <span>{errors[name]?.message}</span>}
        </div>
      }
    ></Controller>
  );
}

export default InputFeild;
