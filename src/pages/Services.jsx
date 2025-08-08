const ServicesCard = () => {
  const services = [
    {
      title: "Envío Rápido",
      description: "Recibe tus productos en 24-72 horas a nivel nacional.",
      icon: "🚚",
    },
    {
      title: "Pagos Seguros",
      description: "Aceptamos tarjetas, transferencias y métodos digitales.",
      icon: "💳",
    },
    {
      title: "Atención al Cliente",
      description: "Soporte 24/7 vía WhatsApp y correo electrónico.",
      icon: "📞",
    },
    {
      title: "Cambios y Devoluciones",
      description: "Fácil gestión dentro de los primeros 7 días.",
      icon: "🔄",
    },
    {
      title: "Variedad de Estilos",
      description: "Más de 500 productos disponibles cada mes.",
      icon: "🛍️",
    },
  ];

  return (
    <section className="w-full px-4 py-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-purple-700">
          Nuestros Servicios
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f7e8f7] rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
