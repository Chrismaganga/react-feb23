

const Navbar = () => {
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "BOT", link: "#bot" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CODELOVERS", link: "#codelovers" },
    { name: "HERO", link: "#hero" },
    { name: "CONTACT", link: "#contact" },
    { name: "NAVBAR", link: "#navbar" },
    ]
  return (
    <nav>
      <div>
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            CODE<span className="text-cyan-600">LOVER</span>S
          </h4>

        </div>
        <div>
          <ul>
            {menuLinks?.map((menu, i) => (
              <li key={i}>
            <a href={menu?.link}>{menu?.link}</a>
            </li>
          
            ))}
          </ul>
            
        </div>
      </div>
    </nav>
  )
}

export default Navbar