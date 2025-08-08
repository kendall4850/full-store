import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#AD5FAD] to-[#DEADDE] text-white py-10 px-6 text-center overflow-hidden flex flex-col justify-start items-center">
      {/* Imagen principal */}
      <img
        src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png
"
        alt=""
        className="w-15 h-15 mx-auto mt-6 mb-4  animate-fadeIn"
      />

      {/* Título y descripción */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 animate-fadeIn">
        Bienvenido a Tu Tienda Favorita
      </h1>
      <p className="text-base md:text-lg mb-4 opacity-90">
        Descubre productos que combinan estilo y calidad.
      </p>

      {/* Botón más pequeño */}
      <button className="bg-white text-purple-600 font-medium py-2 px-6 rounded-lg hover:scale-105 transition transform mb-4 text-sm">
        <Link to="/Products">Ver productos</Link>
      </button>

      {/* Subtítulo */}
      <h2 className="text-lg font-semibold mt-6 mb-4">Marcas Oficiales</h2>

      {/* Logos de marcas */}
      <div className="flex justify-center items-center flex-wrap gap-6">
        <img
          src="https://www.logogenio.es/images/articles/10-best-fashion-logos1.jpg"
          alt="Marca 1"
          className="h-14"
        />
        <img
          src="https://www.logogenio.es/images/articles/10-best-fashion-logos7.jpg"
          alt="Marca 2"
          className="h-14"
        />
        <img
          src="https://assets.turbologo.ru/blog/ru/2021/11/12081458/Gucci_logo.png"
          alt="Marca 3"
          className="h-14"
        />
      </div>
    </section>
  );
};

export default Home;
