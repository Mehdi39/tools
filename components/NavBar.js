import React from "react";

const NavBar = () => {
  let menus = [
    {
      name: "Home",
      href: "https://blueocean-bd.com/",
      kye: 1,
    },
    {
      name: "Service",
      href: "https://blueocean-bd.com/index.php/service/",
      key: 2,
    },
    {
      name: "About Us",
      href: "https://blueocean-bd.com/index.php/about-us/",
      key: 3,
    },
    {
      name: "Contact",
      href: "https://blueocean-bd.com/index.php/contact-us/",
      key: 4,
    },
  ];

  let age = [1, 2, 3];

  return (
    <div>
      <ul className="flex gap-5 justify-between my-5">
        {menus.map((menu) => (
          <li className="border-2 bg-blue-700 px-5 py-2 text-white font-semibold text-2xl" key={menu.key}>
            <a href={menu.href}>{menu.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
