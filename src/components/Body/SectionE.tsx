const SectionE = () => {
    return (
<section id="sectionE" className="h-screen py-32 bg-white">
<div className="max-w-6xl mx-auto px-4 text-center">
  <h2 className="text-3xl font-semibold text-black">Nuestros Productos</h2>
  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold">Producto 1</h3>
      <p className="mt-4">Descripción del Producto 1.</p>
    </div>
    <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold">Producto 2</h3>
      <p className="mt-4">Descripción del Producto 2.</p>
    </div>
    <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold">Producto 3</h3>
      <p className="mt-4">Descripción del Producto 3.</p>
    </div>
  </div>
</div>
</section>
  );
};
export default SectionE;



