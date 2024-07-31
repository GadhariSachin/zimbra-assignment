import "./FilterDropdown.css";

// eslint-disable-next-line react/prop-types
const FilterDropdown = ({ options = [], setFilterCategory }) => {
  return (
    <div className="category-filter-conatiner">
      <label htmlFor="category">Filter by category</label>
      <select
        name="category"
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
