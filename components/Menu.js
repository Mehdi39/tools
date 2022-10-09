import React from 'react';

const Menu = () => {
    let menus = [
        {
            name: "Home"
        },
        {
            name: "Service"
        },
        {
            name: "About Us"
        },
        {
            name: "Contact"
        }
    ]

    return (
        <div>
            {
                menus.map( menu => {
                    <p>hello</p>
                })
            }
        </div>
    );
};

export default Menu;