
const GallerySection = () => {
  return (
    <section className="p-10 bg-white rounded-3xl">
      <h2 className="py-6 text-6xl">Gallery</h2>
      <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-7 justify-items-center ">
        <img src="gallery_1.png" alt="" />
        <img src="gallery_2.png" alt="" />
        <img src="gallery_3.png" alt="" className="sm:col-span-2 lg:col-span-1 " />
      </div>
    </section>
  )
}

export default GallerySection
