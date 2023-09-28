const galleryData = {
    months: ["January", "February", "March", "April", "May", "June", "July", "August"],
    images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "album.gif"]
  };
  
  function generateGalleryHTML(month, images) {
    const sections = images.map(image => `
      <section>
        <img data-src="gallery_2023/${month}/${image}">
      </section>
    `).join("");
  
    return `
      <section data-transition="slide">
        ${sections}
      </section>
    `;
  }
  
  $(document).ready(function() {
    const galleryContainer = $("#gallery-container");
  
    // Loop through months and generate gallery HTML
    galleryData.months.forEach(month => {
      const images = galleryData.images;
      const galleryHTML = generateGalleryHTML(month, images);
      galleryContainer.append(galleryHTML);
    });
  });
  