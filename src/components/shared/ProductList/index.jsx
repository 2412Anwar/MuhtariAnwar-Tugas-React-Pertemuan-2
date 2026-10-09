export default function ProductList(){
    return(
        <>
         <main>
      <div className="album py-5 bg-light mt-5">
        <div className="container">
          <h2 className="text-center mb-5">Rekomendasi Buku</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://picsum.photos/400/250?random=1" className="card-img-top" alt="Buku 1" />
                <div className="card-body">
                  <p className="card-text">Buku ini berisi ringkasan menarik untuk mengelola keuangan.</p>
                  <button type="button" className="btn btn-sm btn-outline-primary">Lihat Detail</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://picsum.photos/400/250?random=2" className="card-img-top" alt="Buku 2" />
                <div className="card-body">
                  <p className="card-text">Novel fiksi ilmiah yang akan membawa Anda menjelajahi galaksi.</p>
                  <button type="button" className="btn btn-sm btn-outline-primary">Lihat Detail</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://picsum.photos/400/250?random=3" className="card-img-top" alt="Buku 3" />
                <div className="card-body">
                  <p className="card-text">Kumpulan resep masakan nusantara yang mudah dibuat oleh pemula.</p>
                  <button type="button" className="btn btn-sm btn-outline-primary">Lihat Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
        </>
    )
}