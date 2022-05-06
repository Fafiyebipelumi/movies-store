import React, { useEffect } from "react"
// import axios from 'axios'

export default function Movies() {

    useEffect(() => {
        fetch('')
            .then((response) => {
                console.log(response);
            })
    }, [])


    return (
        <div>

        </div>
    )
}