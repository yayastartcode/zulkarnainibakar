import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🦀</span>
              </div>
              <span className="text-2xl font-bold text-red-900">Zulkarnainibakar</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#hero" className="text-red-700 hover:text-red-900 font-medium transition-colors">Utama</a>
              <a href="#products" className="text-red-700 hover:text-red-900 font-medium transition-colors">Produk</a>
              <a href="#gallery" className="text-red-700 hover:text-red-900 font-medium transition-colors">Galeri</a>
              <a href="#contact" className="text-red-700 hover:text-red-900 font-medium transition-colors">Hubungi</a>
            </nav>
            <a href="tel:+60143800463" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors">
              Hubungi Sekarang
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-red-50 via-orange-100 to-red-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-5xl lg:text-6xl font-extrabold text-red-900 mb-6 leading-tight">
                Ketam Hidup Segar
                <span className="block text-red-700">Kualiti Premium</span>
              </h2>
              <p className="text-xl text-red-700 mb-8 max-w-2xl">
                Pakar ketam hidup segar berkualiti tinggi untuk restoran dan pengguna di Kuala Lumpur. Penghantaran pantas dan boleh dipercayai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://wa.me/60143800463" className="bg-red-700 hover:bg-red-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg">
                  Tempah Sekarang
                </a>
                <a href="#products" className="border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                  Lihat Produk
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <Image
                  src="/ketam.jpeg"
                  alt="Fresh Live Crabs"
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-900">100%</div>
                    <div className="text-sm text-red-700">Segar & Hidup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-red-900 mb-4">Produk Premium Kami</h3>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Ketam nipah super saiz berkualiti premium terus dari perairan terbaik
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow max-w-md">
              <Image
                src="/ketam2.jpeg"
                alt="Ketam Nipah Super Saiz"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-red-900 mb-2">Ketam Nipah Super Saiz 500gram</h4>
                <p className="text-red-700 mb-4">Ketam nipah saiz super dengan berat 500gram setiap ekor. Kualiti premium dengan daging yang padat dan segar.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-900">RM 55/kg</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Tersedia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-red-900 mb-4">Galeri Kami</h3>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Lihat koleksi ketam segar berkualiti tinggi yang kami sediakan
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-xl">
              <Image
                src="/ketam.jpeg"
                alt="Fresh Crabs"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1650081486942-818b77296bde"
                alt="Mud Crab"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1567008247317-91a2b3b4f0b2"
                alt="Blue Swimmer Crab"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop&crop=center"
                alt="Flower Crab"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1582515073490-39981397c445?w=300&h=300&fit=crop&crop=center"
                alt="Seafood Market"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&h=300&fit=crop&crop=center"
                alt="Fresh Seafood"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <Image
                src="/ketam2.jpeg"
                alt="Crab Preparation"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1542803417-f2be3270347d"
                alt="Seafood Display"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Hubungi Kami</h3>
            <p className="text-xl text-red-200 max-w-3xl mx-auto">
              Hubungi kami untuk tempahan atau maklumat lanjut
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-700 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Lokasi</h4>
                  <p className="text-red-200">
                    BLOK G, NO 25 Plaza KLTS 99,<br />
                    Jl. Gombak, WP Kuala Lumpur,<br />
                    Kuala Lumpur, Malaysia, 53000
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-700 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Telefon</h4>
                  <a href="tel:+60143800463" className="text-red-200 hover:text-white transition-colors text-lg">
                    +60 14-380-0463
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-700 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Waktu Perniagaan</h4>
                  <p className="text-red-200">
                    Isnin - Sabtu<br />
                    8:00 Pagi - 8:00 Malam
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-red-900 mb-6">Hantar mesej kepada kami</h4>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Nama Anda" className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                </div>
                <div>
                  <input type="tel" placeholder="Nombor Telefon" className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                </div>
                <div>
                  <textarea rows={4} placeholder="Mesej Anda" className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-red-700 hover:bg-red-900 text-white py-3 rounded-lg font-semibold transition-colors">
                  Hantar Mesej
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-2xl font-bold mb-4">Zulkarnainibakar</h5>
              <p className="text-red-200 mb-4">
                Supplier kepiting hidup terpercaya di Kuala Lumpur dengan kualitas premium dan pelayanan terbaik.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-red-700 hover:bg-red-600 p-2 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="bg-red-700 hover:bg-red-600 p-2 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h6 className="text-lg font-semibold mb-4">Pautan Pantas</h6>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-red-200 hover:text-white transition-colors">Utama</a></li>
                <li><a href="#products" className="text-red-200 hover:text-white transition-colors">Produk</a></li>
                <li><a href="#gallery" className="text-red-200 hover:text-white transition-colors">Galeri</a></li>
                <li><a href="#contact" className="text-red-200 hover:text-white transition-colors">Hubungi</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-lg font-semibold mb-4">Maklumat Hubungan</h6>
              <div className="space-y-2 text-red-200">
                <p>BLOK G, NO 25 Plaza KLTS 99</p>
                <p>Jl. Gombak, WP Kuala Lumpur</p>
                <p>Kuala Lumpur, Malaysia, 53000</p>
                <p className="font-semibold">+60 14-380-0463</p>
              </div>
            </div>
          </div>
          <div className="border-t border-red-800 mt-8 pt-8 text-center">
            <p className="text-red-200">
              &copy; {new Date().getFullYear()} Zulkarnainibakar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <a 
            href="https://wa.me/60143800463?text=Halo,%20saya%20ingin%20memesan%20ketam%20nipah%20super%20saiz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span className="ml-2 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }
