// core
import { useTranslate } from 'sb-core';
// material ui
import { MenuItem, TextField } from '@mui/material';
import { SelectInputBootStrapProps } from '../types';

const SelectInputBootStrap = (props: SelectInputBootStrapProps) => {
  const {
    sx,
    label = 'SelectInput',
    choices,
    source,
    values,
    type,
    variant,
    handleChange,
    handleBlur,
    errors,
    touched,
    required,
    className,
    disabled,
    size = 'medium'
  } = props;

  const { translate } = useTranslate();

  return (
    <TextField
      sx={sx}
      select
      label={translate(label)}
      type={type}
      name={source}
      value={values[source]}
      variant={variant}
      required={required}
      error={errors[source] && touched[source]}
      helperText={errors[source] && touched[source] && errors[source]}
      onChange={handleChange}
      onBlur={handleBlur}
      disabled={disabled}
      className={className}
      size={size}
    >
      {choices?.map(choice => {
        return (
          <MenuItem key={choice.id} value={choice.name}>
            {translate(choice.name)}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectInputBootStrap;
