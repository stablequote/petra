import { useState } from 'react';
import { Select } from '@mantine/core';

function FilterDropdown({children, ...props}) {
  const [searchValue, onSearchChange] = useState('');

  return (
    <Select
    searchable
    nothingFound="No options"
    onSearchChange={onSearchChange}
    searchValue={searchValue}
    {...props}
  />
  )
}

export default FilterDropdown