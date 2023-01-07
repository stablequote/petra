import { Paper, Stack, Text, Button } from '@mantine/core'
import FilterDropdown from '../FilterDropdown/FilterDropdown'
// import Button from '../Button/Button';

function FilterSidebar() {

    const handleSearchProject = () => {
        
    }

  return (
    <Paper width="md" withBorder>
        <Text>Search for projects</Text>
        <Stack>
            <FilterDropdown 
            label="State"
            placeholder="Select State"
            clearable
            data={[
                { value: 'kordufan', label: 'Kordufan' },
                { value: 'northern', label: 'Northern' },
            ]}
            />
            <FilterDropdown 
            label="City"
            placeholder="Select City"
            clearable
            data={[
                { value: 'leri', label: 'Leri' },
                { value: 'abu-hamad', label: 'Abu Hamad' },
            ]}
            />
            <FilterDropdown 
            label="Project type"
            placeholder="Select Project type"
            clearable
            data={[
                { value: 'gold', label: 'Gold' },
                { value: 'petrolium', label: 'Petrolium' },
                { value: 'dimon', label: 'Dimon' },
            ]}
            />
        </Stack>
        {/* <FilterDropdown />
        <FilterDropdown />
        <FilterDropdown /> */}
        <Button 
        variant="contained"
        color="cyan"
        mt="lg"
        onClick={handleSearchProject}
        >
        Search
        </Button>
    </Paper>
  )
}

export default FilterSidebar