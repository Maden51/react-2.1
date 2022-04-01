import React from 'react'

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
        <div className="filterBox">
            {filters.map((filter) => (
                <button 
                    className={
                        selected === filter
                        ? "btn selected"
                        : "btn"
                    }
                    type="button"
                    name={filter} 
                    key={filter}
                    onClick={onSelectFilter}
                >
                    {filter}
                </button>
            ))}
        </div>
    )
}

export default Toolbar
