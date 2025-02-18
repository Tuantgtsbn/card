import { memo, useState } from "react";
import Button from "../Button/Button";
import CheckBoxColor from "./CheckBoxColor";
import CheckBoxText from "./CheckBoxText";
const FilterContent = memo(function FilterContent({ state }) {
    const listColor = [{
        color: "black",
        hex: "#000"
    }, {
        color: "gray",
        hex: "#bfbebe"
    }, {
        color: "white",
        hex: "#fff"
    }, {
        color: "red",
        hex: "#c12126"
    }, {
        color: "purple",
        hex: "#6e2a72",

    },
    {
        color: "blue",
        hex: "#1e3a8a"
    },
    {
        color: "green",
        hex: "#1d6521"
    },
    {
        color: "yellow",
        hex: "#f4d03f"
    }
    ];
    const listPrice = [{
        value: 'free',
        label: 'Free'
    },
    {
        value: 'premium',
        label: 'Premium'
    }];
    const listSort = [
        {
            value: 'newest',
            label: 'Newest'
        },
        {
            value: 'popular',
            label: 'Most Popular'
        }
    ];
    const { filter, onClick } = state;

    const [filterState, setFilterState] = useState({ ...filter });
    const handleFilterChange = (key, value) => {
        setFilterState({
            ...filterState,
            [key]: value
        });
        console.log(filterState);
    }
    const checkChecked = (name, value) => {
        return filterState[name] === value;
    }
    return (
        <div className="flex flex-col gap-6 p-4 lg:py-8">
            {/* Color Filter */}
            <div className="space-y-2">
                <h3 className="font-semibold mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                    {listColor.map(color => (
                        <CheckBoxColor isChecked={checkChecked('color', color.color)} onChange={() => {
                            handleFilterChange('color', color.color)
                        }} key={color.color} name='color' value={color.color} bg={color.hex} />
                    ))}
                </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-2">
                <h3 className="font-semibold mb-2">Price</h3>
                <div className="flex flex-wrap gap-2">
                    {listPrice.map(price => (
                        <CheckBoxText isChecked={checkChecked('price', price.value)} onChange={() => {
                            handleFilterChange('price', price.value)
                        }} key={price.value} name='price' value={price.value}>
                            {price.label}
                        </CheckBoxText>
                    ))}
                </div>
            </div>

            {/* Sort Filter */}
            <div className="space-y-2">
                <h3 className="font-semibold mb-2">Sort</h3>
                <div className=" flex flex-wrap gap-2">
                    {listSort.map(sort => (
                        <CheckBoxText isChecked={checkChecked('sortBy', sort.value)} onChange={() => {
                            handleFilterChange('sortBy', sort.value)
                        }} key={sort.value} name='sortBy' value={sort.value}>
                            {sort.label}
                        </CheckBoxText>
                    ))}
                </div>
            </div>
            <div>
                <Button onClick={() => onClick(filterState)} varriant="secondary" className="w-full bg-thirdColor hover:bg-[#18B071] focus:bg-[#169D64]">Apply</Button>
            </div>
        </div>
    )
});
export default FilterContent;