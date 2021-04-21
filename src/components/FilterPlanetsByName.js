import React, { useContext } from 'react';
import { savePlanets } from '../context/contextPlanets';

export default function FilterPlanetsByName() {
  const { searchByName, setSearchByName } = useContext(savePlanets);
  return (
    <div>
      <input
        className="form-control"
        type="text"
        data-testid="name-filter"
        onChange={ (e) => setSearchByName(e.target.value) }
        placeholder="Busca por Nome"
        value={ searchByName }
      />
    </div>
  );
}
