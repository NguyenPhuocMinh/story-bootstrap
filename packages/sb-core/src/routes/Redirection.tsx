import { useEffect } from 'react';
import { useNavigate, NavigateProps } from 'react-router-dom';

const Redirection = ({ to }: NavigateProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  });

  return null;
};

export default Redirection;
