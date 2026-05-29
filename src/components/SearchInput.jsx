import React, { useState } from 'react'

export default function SearchInput() {
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])

    function handleSearch() {
        fetch(`https://dummyjson.com/products/search?q=${query}`)
            .then((res) => res.json())
            .then((data) => {
                setResult(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search product..."
            />

            <button onClick={handleSearch}>
                Search
            </button>

            {result.map((item) => (
                <p key={item.id}>
                    {item.title}
                </p>
            ))}
        </div>
    )
}