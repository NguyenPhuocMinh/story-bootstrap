// core
import { useTranslate } from 'sb-core';
// material ui
import { FormControlLabel, Switch } from '@mui/material';
import { SwitchInputBootStrapProps } from '../types';
import { createIcon } from '../dynamic';

const SwitchInputBootStrap = (props: SwitchInputBootStrapProps) => {
  const {
    label = 'SwitchInput',
    name,
    values,
    value,
    handleChange,
    handleBlur,
    required,
    className,
    color,
    registerIcons,
    checkedIcon,
    defaultChecked,
    disabled,
    disableRipple,
    icon,
    size,
    sx
  } = props;

  const { translate } = useTranslate();

  return (
    <FormControlLabel
      control={
        <Switch
          name={name}
          value={value}
          checked={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          className={className}
          color={color}
          checkedIcon={createIcon({ icon: checkedIcon, registerIcons })}
          defaultChecked={defaultChecked}
          disabled={disabled}
          disableRipple={disableRipple}
          icon={createIcon({ icon: icon, registerIcons })}
          size={size}
          sx={sx}
        />
      }
      label={translate(label)}
    />
  );
};

export default SwitchInputBootStrap;
