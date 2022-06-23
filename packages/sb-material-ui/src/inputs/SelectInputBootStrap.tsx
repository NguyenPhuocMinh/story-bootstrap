// core
import { useTranslate } from 'sb-core';
// material ui
import { MenuItem, FormControl, FormHelperText, Select } from '@mui/material';
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
    <FormControl fullWidth>
      <Select
        sx={sx}
        label={translate(label)}
        type={type}
        name={source}
        value={values[source]}
        variant={variant}
        required={required}
        error={errors[source] && touched[source]}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        className={className}
        size={size}
      >
        {choices?.map(choice => {
          return (
            <MenuItem key={choice.id} value={choice.name}>
              {choice.name}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>
        {errors[source] && touched[source] && errors[source]}
      </FormHelperText>
    </FormControl>
  );
};

export default SelectInputBootStrap;
