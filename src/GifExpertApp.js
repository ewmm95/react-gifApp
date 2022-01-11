import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ deffaultCategories = [] }) => {
    const [categories, setCategories] = useState(deffaultCategories)
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory
                setCategories={setCategories}
            />
            <ol>
                {
                    categories.map(
                        (category, i) =>
                            <GifGrid
                                key={category}
                                category={category}
                            />
                    )
                }
            </ol>
        </>
    )
}
