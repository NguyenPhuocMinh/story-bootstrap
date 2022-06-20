// core
import { useTranslate } from 'sb-core';
// material ui
import { TextField, InputAdornment, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { SearchInputBootStrapProps } from '../types';
import { isEmpty } from 'lodash';

const SearchInputBootStrap = (props: SearchInputBootStrapProps) => {
  const {
    label = 'SearchInput',
    placeholder = '',
    name,
    values,
    type,
    variant,
    margin = 'none',
    size = 'medium',
    handleChange,
    handleBlur,
    handleReset,
    touched,
    className
  } = props;

  const { translate } = useTranslate();

  const handleOnMouseDown = event => {
    event.preventDefault();
  };

  return (
    <TextField
      label={translate(label)}
      placeholder={translate(placeholder)}
      variant={variant}
      margin={margin}
      size={size}
      type={type}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
      className={className}
      InputProps={{
        autoComplete: 'off',
        endAdornment: (
          <InputAdornment position="end">
            {!isEmpty(values[name]) && !touched[name] ? (
              <SearchIcon />
            ) : (
              <IconButton
                onClick={handleReset}
                onMouseDown={handleOnMouseDown}
                edge="end"
                sx={{
                  border: 'none !important'
                }}
              >
                <ClearIcon />
              </IconButton>
            )}
          </InputAdornment>
        )
      }}
    />
  );
};

export default SearchInputBootStrap;
