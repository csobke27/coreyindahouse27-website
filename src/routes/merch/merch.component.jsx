import {getMerch} from '../../utils/merch/merch.utils';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

import './merch.styles.scss';

const Twitch = () => {
    const [merch, setMerch] = useState({}); // Use an object to group items by productGroupName
    const [filter, setFilter] = useState("all"); // State to manage the selected filter

    useEffect(() => {
        const fetchMerch = async () => {
            try{
                const merchResult = await getMerch();
                const groupedMerch = {};
                Object.entries(merchResult["basicProducts"]).forEach(([key, merchItem]) => {
                    const groupName = merchItem.productGroupName;
                    if (!groupedMerch[groupName]) {
                        groupedMerch[groupName] = []; // Initialize the group if it doesn't exist
                    }
                    groupedMerch[groupName].push(merchItem); // Add the item to the group
                    if(groupName === 'Basic Tees'){ // this is just for testing purposes
                        groupedMerch[groupName].push(merchItem);
                    }
                });
                console.log(groupedMerch); // Log the grouped merch
                setMerch(groupedMerch); // Update state with the grouped merch
            } catch (error) {
                console.error("Error fetching merch:", error);
            }
        };

        fetchMerch();
    }, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value); // Update the filter state with the selected value
    }

    // Filtered merch based on the selected filter
    const filteredMerch = filter === "all" ? merch : { [filter]: merch[filter] };

    return (
      <div>
        <h1>Merch</h1>
        <div className="merch-container">
            <div className="merch-filter">
                <label>Filter</label>
                <select onChange={handleFilterChange} className="merch-filter-select">
                    <option value="all">All</option>
                    {/* Dynamically create options based on the grouped merch data */}
                    {Object.keys(merch).map((groupName, index) => (
                        <option key={index} value={groupName}>{groupName}</option>
                    ))}
                </select>
            </div>
            <div className="merch-items">
                {Object.entries(filteredMerch).map(([groupName, items], index) => (
                    // <ProductCard key={index} product={items} />
                    <div key={index} className="merch-group">
                        <h2 className="merch-group-name">{groupName}</h2>
                        <div className="merch-items-list">
                            {items.map((item, itemIndex) => (
                                <ProductCard key={itemIndex} product={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/* <iframe src="https://embed.creator-spring.com/widget?slug=coreyindahouse27s-store&per=20&currency=&page=1&layout=grid-sm-3&theme=light" title="CoreyInDaHouse27&#x27;s Store Merch store powered by Spring" width="99%" height="960" data-reactroot="test"></iframe> */}
      </div>
    );
  };
  
  export default Twitch;