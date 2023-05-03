import React from 'react'

function FooterPartial() {

    const date = new Date().getFullYear()

    return (
    <>
        <footer>
            <p>&copy; {date} Manero</p>
        </footer>
    </>
    )
}

export default FooterPartial