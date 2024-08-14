// Rastgele yönlendirilmek üzere kullanılacak geniş URL listesi
const urls = [
    // Arama Motorları
    'https://www.google.com',
    'https://www.bing.com',
    'https://www.yahoo.com',
    'https://www.duckduckgo.com',
    'https://www.ask.com',
    'https://www.aol.com',
    
    // Sosyal Medya
    'https://www.facebook.com',
    'https://www.twitter.com',
    'https://www.instagram.com',
    'https://www.linkedin.com',
    'https://www.snapchat.com',
    'https://www.tiktok.com',
    'https://www.pinterest.com',
    'https://www.reddit.com',
    'https://www.whatsapp.com',
    'https://www.telegram.org',
    
    // Video Paylaşım Siteleri
    'https://www.youtube.com',
    'https://www.vimeo.com',
    'https://www.dailymotion.com',
    'https://www.twitch.tv',
    'https://www.metacafe.com',
    
    // Haber Kaynakları
    'https://www.bbc.com',
    'https://www.cnn.com',
    'https://www.nytimes.com',
    'https://www.aljazeera.com',
    'https://www.reuters.com',
    'https://www.theguardian.com',
    'https://www.washingtonpost.com',
    'https://www.nbcnews.com',
    'https://www.foxnews.com',
    'https://www.huffpost.com',
    
    // Finans ve İş Dünyası
    'https://www.bloomberg.com',
    'https://www.forbes.com',
    'https://www.economist.com',
    'https://www.cnbc.com',
    'https://www.ft.com',
    'https://www.wsj.com',
    'https://www.businessinsider.com',
    
    // Teknoloji
    'https://www.theverge.com',
    'https://www.techcrunch.com',
    'https://www.engadget.com',
    'https://www.wired.com',
    'https://www.cnet.com',
    'https://www.zdnet.com',
    'https://www.tomshardware.com',
    'https://www.arstechnica.com',
    'https://www.gizmodo.com',
    'https://www.bgr.com',
    
    // Eğitim
    'https://www.khanacademy.org',
    'https://www.coursera.org',
    'https://www.edx.org',
    'https://www.udacity.com',
    'https://www.codecademy.com',
    'https://www.skillshare.com',
    'https://www.lynda.com',
    'https://www.udemy.com',
    'https://www.futurelearn.com',
    
    // Bilim ve Sağlık
    'https://www.nationalgeographic.com',
    'https://www.sciencedaily.com',
    'https://www.smithsonianmag.com',
    'https://www.newscientist.com',
    'https://www.popsci.com',
    'https://www.scientificamerican.com',
    'https://www.livescience.com',
    'https://www.earthsky.org',
    'https://www.webmd.com',
    'https://www.mayoclinic.org',
    'https://www.healthline.com',
    'https://www.cdc.gov',
    'https://www.nih.gov',
    
    // E-Ticaret
    'https://www.amazon.com',
    'https://www.ebay.com',
    'https://www.alibaba.com',
    'https://www.walmart.com',
    'https://www.target.com',
    'https://www.bestbuy.com',
    'https://www.newegg.com',
    'https://www.etsy.com',
    'https://www.shopify.com',
    'https://www.zalando.com',
    
    // Eğlence ve Kültür
    'https://www.artstation.com',
    'https://www.deviantart.com',
    'https://www.behance.net',
    'https://www.saatchiart.com',
    'https://www.pantone.com',
    'https://www.masterclass.com',
    
    // Topluluklar ve Forumlar
    'https://www.github.com',
    'https://www.gitlab.com',
    'https://www.bitbucket.org',
    'https://www.stackoverflow.com',
    'https://www.hackernews.com',
    'https://www.dev.to',
    
    // Araştırma ve Yayınlar
    'https://www.acm.org',
    'https://www.IEEE.org',
    'https://www.springer.com',
    'https://www.jstor.org',
    'https://www.elsevier.com',
    'https://www.arxiv.org',
    'https://www.sciencedirect.com',
    
    // Kodlama ve Öğrenme
    'https://www.codingbat.com',
    'https://www.codewars.com',
    'https://www.datacamp.com',
    'https://www.turing.com',
    'https://www.freecodecamp.org',
    'https://www.hackerrank.com',
    'https://www.codecademy.com',
    'https://www.projecteuler.net',
    
    // Çevre ve Doğa
    'https://www.greenpeace.org',
    'https://www.worldwildlife.org',
    'https://www.earthjustice.org',
    'https://www.nature.org',
    'https://www.conservation.org',
    'https://www.ourworldindata.org',
    
    // Diğer İlginç Kaynaklar
    'https://www.mentalfloss.com',
    'https://www.ted.com',
    'https://www.brainpickings.org',
    'https://www.buzzfeed.com',
    'https://www.thecut.com',
    'https://www.lithub.com',
    'https://www.washington.edu',
    'https://www.mit.edu',
    'https://www.stanford.edu',
    'https://www.harvard.edu'
];

// Butona tıklama olayını yakala
document.getElementById('randomButton').addEventListener('click', () => {
    // Rastgele bir URL seç
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    // Yeni URL'ye yönlendir
    window.location.href = randomUrl;
});
