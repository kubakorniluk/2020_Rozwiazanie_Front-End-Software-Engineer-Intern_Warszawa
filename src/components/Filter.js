import React, {useState} from 'react';
export default function Filter() {
    const [value, setValue] = useState("Filter by HP");
    const handleFilter = (event) => {
        event.preventDefault();
        setValue(event.target.value)
    }
    return (
        <div class="form-group pr-2">
            <select className="form-control" value={value} onChange={handleFilter}>
                <option selected disabled>Filter by HP</option>
                <option value="All">All</option>
                <option value="Below 50">Below 50</option>
                <option value="Above 50">Over 50</option>
            </select>
        </div>
    )
}