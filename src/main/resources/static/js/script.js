

  if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Scroll to #hero after page loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth' }); // or 'smooth' if you want animation
        }
      }, 0);
    });

// Loading Animation
window.addEventListener('load', () => {
  setTimeout(() => {
      document.querySelector('.loader-wrapper').style.opacity = '0';
      setTimeout(() => {
          document.querySelector('.loader-wrapper').style.display = 'none';
      }, 500);
  }, 2000);
});

//document.addEventListener('mousedown', () => {
//  cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
//});
//
//document.addEventListener('mouseup', () => {
//  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
//});

// Scrolled Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
          setTimeout(() => {
              entry.target.classList.add('animated');
          }, index * 200);
      }
  });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
  projectObserver.observe(card);
});

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animated');
      }
  });
}, observerOptions);

document.querySelectorAll('.timeline-content').forEach(item => {
  timelineObserver.observe(item);
});

const achievementObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
          setTimeout(() => {
              entry.target.classList.add('animated');
          }, index * 200);
      }
  });
}, observerOptions);

document.querySelectorAll('.achievement-card').forEach(card => {
  achievementObserver.observe(card);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
      });
  });
});

//project section

function toggleProjectDetail(id, btn) {
  const detail = document.getElementById(id);
  const isOpen = detail.classList.contains('show');

  document.querySelectorAll('.project-detail').forEach(section => {
    section.classList.remove('show');
    section.style.maxHeight = null;
  });

  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.textContent = 'Read More';
  });

  if (!isOpen) {
    detail.classList.add('show');
     detail.style.maxHeight = (detail.scrollHeight + 60) + 'px';
    btn.textContent = 'Read Less';
     if (window.innerWidth < 768) {
       detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }
  }
}

// scrollToTop btn

  const scrollTopBtn = document.getElementById("scrollTopBtn");

   window.addEventListener("scroll", () => {
     if (window.scrollY > 300) {
       scrollTopBtn.classList.add("show");
     } else {
       scrollTopBtn.classList.remove("show");
     }
   });

   scrollTopBtn.addEventListener("click", () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   });