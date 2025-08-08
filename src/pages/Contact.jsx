const ContactCard = () => {
  return (
    <section className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 text-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">
        Contáctanos
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">📞 Teléfono</h3>
          <p className="text-gray-600">+1 (+506) 85359866</p>
        </div>

        <div>
          <h3 className="font-semibold">📧 Email</h3>
          <p className="text-gray-600">vargask4850@gmail.com.com</p>
        </div>

        <div>
          <h3 className="font-semibold">📍 Costa Rica</h3>
          <p className="text-gray-600">San carlos ,quesada</p>
        </div>

        <div>
          <h3 className="font-semibold">⏰ Horario</h3>
          <p className="text-gray-600">Lunes a Viernes, 9:00 am - 6:00 pm</p>
        </div>
      </div>

      <button className="mt-8 w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition">
        Enviar Mensaje
      </button>
    </section>
  );
};

export default ContactCard;
