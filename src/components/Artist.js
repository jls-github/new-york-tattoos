import React from 'react'

export default function Artist({artist}) {
    return (
        <div>
            <h2>{artist.name}</h2>
            <p>{artist.details}</p>
        </div>
    )
}
