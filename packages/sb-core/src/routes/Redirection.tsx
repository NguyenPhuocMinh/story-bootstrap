import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RedirectionProps } from '../types';

const Redirection = ({ to }: RedirectionProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  });

  return null;
};

export default Redirection;
