// Sample data for agenda and news
const sampleAgenda = [
    {
        title: "Rapat Paripurna Bulanan",
        date: "15 Desember 2024",
        time: "09:00 - 12:00 WIB",
        location: "Gedung DPRD Kota Semarang",
        description: "Rapat paripurna bulanan untuk membahas agenda legislasi dan anggaran tahun 2025."
    },
    {
        title: "Kunjungan Kerja ke Kabupaten Demak",
        date: "18 Desember 2024",
        time: "08:00 - 16:00 WIB",
        location: "Kabupaten Demak",
        description: "Kunjungan kerja untuk mempelajari sistem pengelolaan sampah berbasis komunitas."
    },
    {
        title: "Hearing dengan Dinas Pendidikan",
        date: "20 Desember 2024",
        time: "13:00 - 15:00 WIB",
        location: "Ruang Rapat Komisi C",
        description: "Hearing dengan Dinas Pendidikan terkait evaluasi program sekolah gratis."
    }
];

const sampleNews = [
    {
        title: "DPRD Kota Semarang Serahkan Bantuan ke Korban Banjir",
        date: "10 Desember 2024",
        description: "Dewan Perwakilan Rakyat Daerah (DPRD) Kota Semarang menyerahkan bantuan kepada warga yang terdampak banjir di beberapa kecamatan. Bantuan berupa sembako dan kebutuhan pokok diserahkan langsung oleh anggota dewan."
    },
    {
        title: "Anggaran Pendidikan 2025 Naik 15%",
        date: "8 Desember 2024",
        description: "Komisi C DPRD Kota Semarang menyetujui kenaikan anggaran sektor pendidikan sebesar 15% untuk tahun anggaran 2025. Kenaikan ini ditujukan untuk peningkatan kualitas pendidikan di Kota Semarang."
    },
    {
        title: "DPRD Dorong Pengembangan UMKM Digital",
        date: "5 Desember 2024",
        description: "DPRD Kota Semarang mendorong pengembangan UMKM berbasis digital melalui program pelatihan dan bantuan modal. Program ini diharapkan dapat meningkatkan daya saing UMKM lokal."
    }
];

// Function to create agenda items
function createAgendaItem(agenda) {
    return `
        <div class="agenda-item">
            <h3>${agenda.title}</h3>
            <div class="date">${agenda.date} | ${agenda.time}</div>
            <div class="location">📍 ${agenda.location}</div>
            <div class="description">${agenda.description}</div>
        </div>
    `;
}

// Function to create news items
function createNewsItem(news) {
    return `
        <div class="news-item">
            <h3>${news.title}</h3>
            <div class="date">📅 ${news.date}</div>
            <div class="description">${news.description}</div>
        </div>
    `;
}

// Function to populate agenda section
function populateAgenda() {
    const agendaSection = document.getElementById('agenda');
    const agendaHTML = sampleAgenda.map(createAgendaItem).join('');
    agendaSection.innerHTML = `
        <h2>:: Agenda Terbaru ::</h2>
        ${agendaHTML}
    `;
}

// Function to populate news section
function populateNews() {
    const newsSection = document.getElementById('news');
    const newsHTML = sampleNews.map(createNewsItem).join('');
    newsSection.innerHTML = `
        <h2>:: Berita Terbaru ::</h2>
        ${newsHTML}
    `;
}

// Function to add smooth scrolling to navigation links
function addSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Function to add mobile menu toggle
function addMobileMenuToggle() {
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.display = 'none';
    
    nav.insertBefore(mobileMenuBtn, navUl);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        navUl.classList.toggle('mobile-menu-open');
    });
    
    // Show/hide mobile menu button based on screen size
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
        } else {
            mobileMenuBtn.style.display = 'none';
            navUl.classList.remove('mobile-menu-open');
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateAgenda();
    populateNews();
    addSmoothScrolling();
    addMobileMenuToggle();
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add click tracking for social media links
    const socialLinks = document.querySelectorAll('footer a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.textContent;
            alert(`Redirecting to ${platform}... (This is a demo)`);
        });
    });
    
    // Add hover effect to agenda and news items
    const items = document.querySelectorAll('.agenda-item, .news-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e9ecef';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f8f9fa';
        });
    });
});
