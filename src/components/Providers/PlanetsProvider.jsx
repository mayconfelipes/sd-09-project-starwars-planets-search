import React, { useState, useEffect } from 'react';
import { shape } from 'prop-types';
import PlanetsContext from '../../context/PlanetsContext';
import { usePlanets } from '../../hooks';

export default function PlanetsProvider({ children }) {
  const [loading, isLoading] = useState(true);

  const { planets, getPlanets, error } = usePlanets();

  useEffect(() => {
    if (!planets.length) {
      getPlanets();
      isLoading(false);
    }
  }, [planets, getPlanets]);

  const value = { loading, planets, error };

  return (
    <PlanetsContext.Provider value={ value }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: shape(),
}.isRequired;
