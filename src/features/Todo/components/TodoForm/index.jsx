import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputFeild from '../FormControl/InputFeild';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    taskName: yup.string().required('Information is required').min(5, 'Infomation is too short'),
  });

  const form = useForm({
    defaultValues: { taskName: '' },
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (values, e) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    e.target.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
      <InputFeild name="taskName" form={form} />
    </form>
  );
}

export default TodoForm;
