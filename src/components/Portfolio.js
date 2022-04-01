import React, { useEffect, useState } from 'react'
import { projects } from '../data';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

function Portfolio() {
    const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [listProjects, setListProjects] = useState(projects);
    const [filteredList, setFilteredList] = useState([]);
    
    const onSelectFilter = (e) => {
        e.preventDefault();
        const filter = e.target.getAttribute('name');
        setSelectedFilter(filter);
    };

    useEffect(() => {
        const list = [...listProjects];
        let result = [];
        if (selectedFilter === 'All') {
            setFilteredList(list);
        } else {
            result = list.filter((project) => 
            (project.category === selectedFilter)
            );
        setFilteredList(result);
        }
    }, [listProjects, selectedFilter])

  return (
    <>
        <Toolbar
            filters = {filters}
            selected = {selectedFilter}
            onSelectFilter = {onSelectFilter}
        />
        <ProjectList filteredList={filteredList} />
    </>
  )
}

export default Portfolio;
