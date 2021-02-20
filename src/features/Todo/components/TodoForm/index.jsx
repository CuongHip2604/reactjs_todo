import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputFeild from '../FormControl/InputFeild';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {

  const schema = yup.object().shape({
    taskName: yup.string().required("The feild title is required"),
  });

  const form = useForm({
    defaultValues: {
      taskName: ""
    },
    resolver: yupResolver(schema)
  })

  const handleOnSubmit = (values) => {
    console.log('Todo form', values);
  }

  return (
    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
      <InputFeild name="taskName" form={form} />
    </form>
  );
}

export default TodoForm;