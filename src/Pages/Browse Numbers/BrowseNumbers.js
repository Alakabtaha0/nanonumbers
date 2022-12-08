import React, {useState} from 'react';
import './BrowseNumbers.css'
import InitialiseProducts from '../../Functions/initialiseProducts';
import InitialiseCart from '../../Functions/initialiseCart';
import FilterSlider from '../../Components/Filter Slider/FilterSlider';
import Footer from '../../Footer/Footer';

function BrowseNumbers() {
    const [searchQuery, setSearchQuery] = useState(); //lifting state up SEARCH QUERY
    const [minVal, setMinVal] = useState(2500); //lifting state up (minVal)
    const [maxVal, setMaxVal] = useState(5000); //lifting state up (maxVal)

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        console.log(e.target.value);
    }
    
    return (
        <div className='set-page'>
            <h1 className='page-title'>Browse Our Gold Numbers</h1>
            <h2 className='page-subtitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</h2>
            <div className='browse--format'>
                <div className='filter-menu'>
                    <input className='search-query' placeholder='Input 6 digits...' alt='Search Bar Input Field' onChange={handleChange}/>
                    <FilterSlider 
                        min={2500} 
                        max={5000}
                        setMinVal={setMinVal}
                        setMaxVal={setMaxVal}
                        minVal={minVal}
                        maxVal={maxVal}
                        onChange={({ min, max }) => (min, max)} />
                </div>
                
                <div className='numbers-list-box'>
                    <InitialiseProducts searchQuery={searchQuery} minVal={minVal} maxVal={maxVal} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BrowseNumbers;