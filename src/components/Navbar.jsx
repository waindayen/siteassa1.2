import { Link } from 'react-router-dom';

const menuItems = [
  { title: "Accueil", path: "/" },
  { title: "Notre Mission", path: "/mission" },
  { title: "Projets", path: "/projets" },
  { title: "Agir", path: "/agir" },
  { title: "Contact", path: "/contact" }
];

function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full z-20 top-0 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-display font-bold text-emerald-700 hover:text-emerald-600 transition-colors">
            EcoSolidaire
          </Link>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link
            to="/faire-un-don"
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Faire un don
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;