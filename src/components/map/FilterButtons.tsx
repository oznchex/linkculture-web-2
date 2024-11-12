import React, { useState } from 'react';

type FilterType = '연극' | '전시' | '운동' | '관광' | '숙소';

interface FilterButtonProps {
  label: FilterType;
  isSelected: boolean;
  onClick: () => void;
}

const FilterButtons = () => {
  const [selectedFilters, setSelectedFilters] = useState<FilterType[]>([]);

  const toggleFilter = (filter: FilterType) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const FilterButton: React.FC<FilterButtonProps> = ({ label, isSelected, onClick }) => (
    <button
      onClick={onClick}
      className={`
        px-3 py-1 rounded-full border border-[#4374D9] text-[12px]
        transition-all duration-200
        ${isSelected 
          ? 'bg-[#E8F0FF] text-[#4374D9] ' 
          : 'bg-white border-gray-500 text-gray-600 hover:bg-gray-50'
        }
      `}
    >
      {label} {isSelected && '×'}
    </button>
  );

  return (
    <div className="flex gap-2 p-2.5">
      {(['연극', '전시', '운동', '관광', '숙소'] as FilterType[]).map((filter) => (
        <FilterButton
          key={filter}
          label={filter}
          isSelected={selectedFilters.includes(filter)}
          onClick={() => toggleFilter(filter)}
        />
      ))}
    </div>
  );
};

export default FilterButtons;
