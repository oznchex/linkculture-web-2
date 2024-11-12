const FilterButtons = () => {
  return (
    <div className="flex gap-2 p-4 overflow-x-auto">
      <button className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 flex items-center">
        연극 <span className="ml-1">×</span>
      </button>
      <button className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 flex items-center">
        전시 <span className="ml-1">×</span>
      </button>
      {/* ... 더 많은 필터 버튼들 */}
    </div>
  );
}; 

export default FilterButtons;