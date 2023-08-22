import { useEffect, useState } from 'react';
import propTypes from 'prop-types';

ClientOnly.propTypes = {
  children: propTypes.node.isRequired,
};

export default function ClientOnly({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;

  return children;
}
