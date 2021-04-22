import React, { useContext, useState } from 'react';
import SWContext from '../StarWarsContext';

function TableFilters() {
  const context = useContext(SWContext);
  const { setFilters } = context;

  const comparisonFilters = [
    'maior que', 'menor que', 'igual a',
  ];
  const [columnFilters, setColumnFilters] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleNameFilter = ({ target }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByName: {
        name: target.value,
      },
    }));
  };
  const handleNumericFilter = (dropdown, value) => {
    setNumericFilter({
      ...numericFilter,
      [dropdown]: value,
    });
  };

  const handleSetNumFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByNumericValues: [
        ...prevFilters.filterByNumericValues,
        numericFilter,
      ],
    }));

    setColumnFilters(columnFilters.filter((column) => column !== numericFilter.column));

    setNumericFilter({
      column: columnFilters[0],
      comparison: 'maior que',
      value: '0',
    });
  };

  return (
    <form>
      <label htmlFor="text-search">
        Pesquise por texto
        <input
          name="text-search"
          type="text"
          data-testid="name-filter"
          onChange={ (event) => handleNameFilter(event) }
        />
      </label>

      <select
        data-testid="column-filter"
        onChange={ ({ target }) => handleNumericFilter('column', target.value) }
      >
        {columnFilters.map((filter) => <option key={ filter }>{filter}</option>)}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => handleNumericFilter('comparison', target.value) }
      >
        {comparisonFilters.map((filter) => <option key={ filter }>{filter}</option>)}
      </select>

      <label htmlFor="number-search">
        Digite um valor
        <input
          name="number-search"
          type="number"
          data-testid="value-filter"
          onChange={ ({ target }) => handleNumericFilter('value', target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleSetNumFilter() }
      >
        Aplicar filtro
      </button>
    </form>
  );
}

export default TableFilters;
