import React, { forwardRef } from 'react';
// core
import { useTranslate } from 'sb-core';
// material ui
import { TextField } from '@mui/material';
import NumberFormat, { InputAttributes } from 'react-number-format';
import {
  NumberInputBootStrapProps,
  NumberFormatBootStrapProps
} from '../types';
import { toNumber } from 'lodash';

const NumberFormatBootStrap = forwardRef<
  NumberFormat<InputAttributes>,
  NumberFormatBootStrapProps
>((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: toNumber(values.value)
          }
        });
      }}
    />
  );
});

NumberFormatBootStrap.displayName = 'NumberFormatBootStrap';

const NumberInputBootStrap = (props: NumberInputBootStrapProps) => {
  const {
    label = 'NumberInput',
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
    sx,
    disabled
  } = props;

  const { translate } = useTranslate();

  return (
    <TextField
      sx={sx}
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
        inputComponent: NumberFormatBootStrap as any,
        startAdornment,
        endAdornment
      }}
    />
  );
};

export default NumberInputBootStrap;
