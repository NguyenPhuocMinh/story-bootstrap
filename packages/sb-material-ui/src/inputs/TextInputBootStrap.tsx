// core
import { useTranslate } from 'sb-core';
// material ui
import { TextField } from '@mui/material';
import { TextInputBootStrapProps } from '../types';

const TextInputBootStrap = (props: TextInputBootStrapProps) => {
  const {
    label = 'TextInput',
    source,
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
    endAdornment,
    size,
    sx,
    disabled
  } = props;

  const { translate } = useTranslate();

  return (
    <TextField
      label={translate(label)}
      variant={variant}
      margin={margin}
      type={type}
      name={source}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[source]}
      required={required}
      error={errors[source] && touched[source]}
      helperText={errors[source] && touched[source] && errors[source]}
      multiline={multiline}
      rows={rows}
      disabled={disabled}
      className={className}
      InputProps={{
        autoComplete: 'off',
        startAdornment,
        endAdornment
      }}
      size={size}
      sx={sx}
    />
  );
};

export default TextInputBootStrap;
