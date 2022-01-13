const warning = (condition, message) => {
  if (condition && process.env.NODE_ENV !== 'production') {
    console.warn(message); // eslint-disable-line
  }
};

export default warning;
