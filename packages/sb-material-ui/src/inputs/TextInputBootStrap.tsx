import React from 'react';
import PropTypes from 'prop-types';
// core
import { useTranslate } from 'sb-core';
// material ui
import { TextField } from '@mui/material';

const TextInputBootStrap = (props: any) => {
  const {
    label,
    name,
    values,
    type,
    variant,
    margin = 'none',
    handleChange,
    handleBlur,
    errors,
    touched,
    required,
    multiline,
    rows,
    className,
    startAdornment,
    endAdornment
  } = props;

  const { translate } = useTranslate();

  return (
    <TextField
      label={translate(label)}
      variant={variant}
      margin={margin}
      type={type}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
      required={required}
      error={errors[name] && touched[name]}
      helperText={errors[name] && touched[name] && errors[name]}
      multiline={multiline}
      rows={rows}
      className={className}
      InputProps={{
        autoComplete: 'off',
        startAdornment,
        endAdornment
      }}
    />
  );
};

TextInputBootStrap.defaultProps = {
  label: 'TextInput',
  name: 'TextInput',
  margin: 'none'
};

TextInputBootStrap.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  startAdornment: PropTypes.any,
  endAdornment: PropTypes.any,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object
};

export default TextInputBootStrap;
