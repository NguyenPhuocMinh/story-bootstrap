// core
import { useTranslate } from 'sb-core';
// material ui
import { TextField } from '@mui/material';
import { TextInputBootStrapProps } from '../types';

const TextInputBootStrap = (props: TextInputBootStrapProps) => {
  const {
    label = 'TextInput',
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

export default TextInputBootStrap;
