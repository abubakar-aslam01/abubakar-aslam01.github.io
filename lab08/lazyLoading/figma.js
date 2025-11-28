const lazyImages = document.querySelectorAll(".lazy");

const lazyLoad = (target) => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute("data-src");
          console.log("Lazy image loaded:", img.src);
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: "50px",

      threshold: 1,
    }
  );

  observer.observe(target);
};

lazyImages.forEach(lazyLoad);
