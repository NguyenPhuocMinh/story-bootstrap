// core
import { useTranslate } from 'sb-core';
// material ui
import { FormControlLabel, Switch } from '@mui/material';
import { SwitchInputBootStrapProps } from '../types';

const SwitchInputBootStrap = (props: SwitchInputBootStrapProps) => {
  const {
    label = 'SwitchInput',
    source,
    values,
    value,
    handleChange,
    handleBlur,
    required,
    className,
    color,
    defaultChecked,
    disabled,
    disableRipple,
    size,
    sx
  } = props;

  const { translate } = useTranslate();

  return (
    <FormControlLabel
      control={
        <Switch
          name={source}
          value={value}
          checked={values[source]}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          className={className}
          color={color}
          defaultChecked={defaultChecked}
          disabled={disabled}
          disableRipple={disableRipple}
          size={size}
          sx={sx}
        />
      }
      label={translate(label)}
    />
  );
};

export default SwitchInputBootStrap;
