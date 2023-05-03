import React from 'react'

function FooterPartial() {

    const date = new Date().getFullYear()

    return (
    <>
        <footer>
            <div className="container"> 
            <p>&copy; {currentYear} Manero</p>
            </div>
        </footer>
    </>
    )
}

export default FooterPartial