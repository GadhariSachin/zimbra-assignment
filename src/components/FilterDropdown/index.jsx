import "./FilterDropdown.css";

/**
 * @function FilterDropdown
 * @description A dropdown component that allows users to filter products by category.
 * @param {Object[]} options - An array of category objects to populate the dropdown. Each category object should have an `id` and `name` property.
 * @param {Function} setFilterCategory - A function to update the selected category filter in the parent component.
 * @returns {JSX.Element} The rendered filter dropdown component.
 */

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
