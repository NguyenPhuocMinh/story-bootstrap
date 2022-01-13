const sanitizeRestProps = ({
  _staticContext,
  _history,
  _location,
  _match,
  ...rest
}) => rest;

export default sanitizeRestProps;
