/**
 * LOK YATRA - TRAVEL & TOURISM CLIENT APPLICATION
 * Eastern India & Bihar Exploration Portal
 */

// ==========================================================================
// 1. COMPREHENSIVE DESTINATION DATA REGISTRY (For Modal & Quick Lookups)
// ==========================================================================
const DESTINATIONS_DATA = {
  "rajgir-stupa": {
    title: "Vishwa Shanti Stupa & Historic Ropeway (Rajgir)",
    location: "Ratnagiri Hill, Rajgir, Nalanda District",
    category: "Peace Pagoda & Ropeway",
    badge: "World Peace Monument",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Vishwa_Shanti_Stupa%2C_Rajgir.jpg",
    era: "Consecrated 1969 by Nichidatsu Fujii (Nipponzan Myohoji)",
    timings: "09:00 AM – 05:00 PM (Ropeway operational 9 AM - 1 PM, 2 PM - 5 PM)",
    entry: "Stupa: Free | Ropeway: ₹120 round-trip (Chairlift & Cabin options)",
    station: "Rajgir Railway Station (5 km) / Patna Airport (100 km)",
    desc: "Perched 400 meters high on Ratnagiri Hill, this gleaming white marble stupa stands as an international beacon of non-violence. It houses four magnificent golden statues depicting Lord Buddha in four pivotal postures: birth, enlightenment, teaching of the Dharma Chakra, and Mahaparinirvana.",
    highlights: [
      "Ascend via India's historic single-seater aerial ropeway or modern high-capacity glass cabin ropeway.",
      "Enjoy 360-degree panoramic views of Rajgir's five ancient holy hills (Ratnagiri, Vipulagiri, Vaibhargiri, Songiri, Udaygiri).",
      "Short scenic stone-paved trail leading to Gridhakuta (Vulture Peak) where Lord Buddha spent years meditating.",
      "Attend the serene evening prayer ceremony at the Japanese Temple (Nipponzan Myohoji) at the base."
    ]
  },
  "rajgir-glass-bridge": {
    title: "Rajgir Glass Skywalk & Nature Safari",
    location: "Nature Safari Park, Jethian Road, Rajgir",
    category: "Eco-Adventure & Wildlife",
    badge: "India's Premier Glass Skywalk",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Rajgir.JPG",
    era: "Inaugurated 2021 by Bihar Government",
    timings: "09:00 AM – 05:00 PM (Closed on Mondays)",
    entry: "Nature Safari: ₹50 | Glass Skywalk: ₹150 (Advance online booking recommended)",
    station: "Rajgir Railway Station (7 km)",
    desc: "Suspended 250 feet above a breathtaking lush canyon, the 85-foot-long transparent Glass Bridge in Rajgir offers an exhilarating walk over the valley canopy. The surrounding 500-acre Nature Safari features state-of-the-art adventure activities, a zoo safari with bears and leopards, and archery ranges.",
    highlights: [
      "Thrilling glass skywalk with sweeping aerial views of the forested Rajgir hills.",
      "High-speed zipline, suspension suspension rope bridges, and wall climbing.",
      "Air-conditioned safari buses through specialized wildlife enclosures.",
      "Butterfly garden, medicinal herbal nursery, and open amphitheatre."
    ]
  },
  "rajgir-ghora-katora": {
    title: "Ghora Katora Lake (Horse-Shoe Lake)",
    location: "Green Eco Zone, Rajgir",
    category: "Pristine Eco Sanctuary",
    badge: "Eco-Tourism Zone",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Lake_Ghoda_Katora_2.jpg",
    era: "Mahabharata Reference / Developed as Eco-Zone 2018",
    timings: "08:00 AM – 05:30 PM",
    entry: "Free Entry | Electric Buggy: ₹100 round-trip | Pedal Boating: ₹100",
    station: "Rajgir Railway Station (8 km)",
    desc: "Ghora Katora is an idyllic natural lake resembling the shape of a horse-shoe, flanked on three sides by lush green hills. To preserve its pristine tranquility, fossil-fuel vehicles are strictly banned. In the center of the lake stands an awe-inspiring 70-foot pink sandstone statue of Lord Buddha seated on a lotus.",
    highlights: [
      "Zero-pollution eco zone accessible via battery-operated golf carts or horse carriages (tangas).",
      "Serene pedal boating around the majestic floating Buddha statue.",
      "Winter haven for migratory birds from Siberia and Central Asia.",
      "Surrounded by remnants of King Jarasandha's ancient wrestling arena."
    ]
  },
  "rajgir-venu-vana": {
    title: "Venu Vana (The Bamboo Grove)",
    location: "Central Rajgir, Nalanda District",
    category: "Buddhist Sacred Garden",
    badge: "First Buddhist Monastery",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vishwa_shanti_stupa_at_Rajgir_Bihar.jpg",
    era: "6th Century BCE (Gifted by King Bimbisara)",
    timings: "06:00 AM – 06:00 PM (Daily)",
    entry: "₹20 for Indians | ₹100 for Foreign Nationals",
    station: "Rajgir Railway Station (2 km)",
    desc: "Venu Vana was the very first piece of land and monastic grove presented to Gautama Buddha and his disciples by the ruler of Magadha, King Bimbisara. Lord Buddha spent several rainy season retreats (Vassa) here meditating and giving discourses beneath the gently rustling bamboo trees.",
    highlights: [
      "Karanda Tank (Karandakanivapa) where Lord Buddha used to bathe.",
      "Lush bamboo clusters, landscaped lotus ponds, and meditation gazebos.",
      "Walking distance from Bimbisara's Prison and the famous Veerayatan Museum.",
      "Quiet haven for meditation and morning contemplation."
    ]
  },
  "rajgir-cyclopean-wall": {
    title: "The Cyclopean Wall of Rajgir",
    location: "Encircling the Rajgir Valley",
    category: "Ancient Stone Fortification",
    badge: "2,500+ Yrs Stone Masonry",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Shanti_Stupa%2C_Rajgir.jpg",
    era: "Pre-Mauryan (6th Century BCE or earlier, Haryanka Dynasty)",
    timings: "Open 24 Hours",
    entry: "Free",
    station: "Rajgir Railway Station (3 km)",
    desc: "One of the oldest surviving dry-stone masonry fortifications on the planet. Stretching over 40 kilometers across the crests of the five hills, this colossal pre-Mauryan wall was built using gigantic unhewn stone boulders fitted together with pinpoint precision without mortar to safeguard ancient Rajagriha.",
    highlights: [
      "Over 4 meters wide and up to 4 meters high in preserved sections.",
      "Comparable to the ancient walls of Mycenae in Greece.",
      "Visible while driving through the scenic passes into the Rajgir valley.",
      "Nominated on India's Tentative List for UNESCO World Heritage Sites."
    ]
  },
  "nalanda": {
    title: "Ruins of Nalanda Mahavihara",
    location: "Bada Gaon, Nalanda District (15 km from Rajgir)",
    category: "UNESCO World Heritage Site",
    badge: "UNESCO Site",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg",
    era: "5th to 12th Century CE (Gupta & Pala Empires)",
    timings: "09:00 AM – 05:00 PM (Daily)",
    entry: "₹40 for Indians & SAARC | ₹600 for Foreign Nationals (Children below 15 free)",
    station: "Rajgir (15 km) / Bakhtiyarpur (40 km) / Patna (85 km)",
    desc: "Founded in the 5th century CE, Nalanda was the ancient world's most glorious residential university. It flourished for over 700 years, hosting over 10,000 students and 2,000 international professors who taught philosophy, astronomy, mathematics, medicine, and logic. The vast excavated campus showcases magnificent red-brick stupas, tiered monastic cells, classrooms, and meditation chambers.",
    highlights: [
      "Temple Site No. 3: The iconic soaring multi-tiered stupa flanked by votive stupas.",
      "Xuanzang (Hiuen Tsang) Memorial Hall celebrating the great Chinese traveler scholar.",
      "Nalanda Archaeological Museum housing ancient bronzes, stucco sculptures, and royal seals.",
      "Dharmaganja: The legendary 9-storey library that once held millions of ancient manuscripts."
    ]
  },
  "bodh-gaya": {
    title: "Mahabodhi Temple Complex (Bodh Gaya)",
    location: "Bodh Gaya, Gaya District",
    category: "UNESCO World Heritage Site",
    badge: "Supreme Buddhist Sanctuary",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mahabodhitemple.jpg",
    era: "Original temple built by Emperor Ashoka (3rd Century BCE); present structure 5th-6th Century CE",
    timings: "05:00 AM – 09:00 PM (Daily)",
    entry: "Free Entry | Camera/Phone: ₹100",
    station: "Gaya Junction (16 km) / Gaya International Airport (10 km)",
    desc: "The spiritual heart of Buddhism. It was here, seated in deep absorption beneath the sacred Bodhi Tree, that Prince Siddhartha Gautama defeated Mara and attained Supreme Enlightenment (Buddhahood) in 528 BCE. The majestic 55-meter-high grand pyramidal shikhara rises over the holy sanctum housing the 10th-century gilded Buddha image touching the earth.",
    highlights: [
      "The Sacred Bodhi Tree: Direct descendant of the original Ficus religiosa tree.",
      "Vajrasana (Diamond Throne): Polished red sandstone slab marking the unshakeable center.",
      "Animesh Lochan Chaitya & Chankramana (Jewel Walkway) where lotus flowers bloomed under Buddha's steps.",
      "Muchalinda Pond where the serpent king sheltered Buddha during a ferocious cosmic storm."
    ]
  },
  "great-buddha": {
    title: "The 80-Foot Great Buddha Statue (Bodh Gaya)",
    location: "Daijokyo Buddhist Temple Road, Bodh Gaya",
    category: "Iconic Buddhist Monument",
    badge: "Colossal Sculpture",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Great_Buddha_Statue%2C_Bodhgaya.jpg",
    era: "Completed & Consecrated in 1989 by H.H. 14th Dalai Lama",
    timings: "07:00 AM – 12:00 PM & 02:00 PM – 06:00 PM",
    entry: "Free Entry",
    station: "Gaya Junction (17 km)",
    desc: "Towering at 80 feet (25 meters) tall, this monument depicts Gautama Buddha in serene meditation (Dhyana Mudra) resting on a giant blooming lotus. Constructed over seven years using sandstone and red granite blocks with the collective efforts of over 12,000 skilled stone carvers.",
    highlights: [
      "Surrounded by ten statues of Buddha's prominent disciples including Sariputta and Ananda.",
      "Features an internal spiral staircase and chamber containing bronze relics.",
      "Beautiful landscaped gardens providing a tranquil meditation ambiance.",
      "Situated near the Daijokyo Japanese Buddhist Monastery."
    ]
  },
  "vaishali": {
    title: "Ashokan Pillar & Ancient Vaishali",
    location: "Kolhua, Vaishali District (55 km north of Patna)",
    category: "Historical & Buddhist Pilgrimage",
    badge: "World's First Republic",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Ashoka_pillar_at_Vaishali%2C_Bihar%2C_India.jpg",
    era: "6th Century BCE (Licchavi Republic) / Ashoka (3rd Century BCE)",
    timings: "06:00 AM – 06:00 PM",
    entry: "₹25 for Indians | ₹300 for Foreign Nationals",
    station: "Hajipur Junction (35 km) / Patna Junction (55 km)",
    desc: "Vaishali was the cradle of the ancient Licchavi Republic, universally acknowledged as the world's first democratic senate republic. It is deeply sacred to both Buddhism and Jainism. Here, Lord Buddha preached his last sermon and inducted women into the monastic Sangha, while Lord Mahavira was born nearby at Kundalpur.",
    highlights: [
      "Kolhua Monolithic Lion Pillar: Unbroken 11-meter polished Chunar sandstone pillar with a majestic single lion.",
      "Buddha Relic Stupa: Excavated site where one-eighth portion of Buddha's original holy ashes was enshrined.",
      "Abhishek Pushkarni (Coronation Tank): Sacred pond where ancient elected kings of the republic were anointed.",
      "Vishwa Shanti Stupa of Vaishali and the Vaishali Archaeological Museum."
    ]
  },
  "pawapuri": {
    title: "Jal Mandir (Pawapuri)",
    location: "Pawapuri, Nalanda District (19 km from Rajgir)",
    category: "Supreme Jain Pilgrimage",
    badge: "Nirvana Tirtha",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Jal_Mandir_Pawapuri.jpg",
    era: "Ancient; restored by King Nandivardhan (elder brother of Mahavira)",
    timings: "06:00 AM – 08:30 PM",
    entry: "Free Entry",
    station: "Pawapuri Road (10 km) / Rajgir (19 km)",
    desc: "Pawapuri (the 'Town of Purity') is one of the holiest tirthas for Jainism. It was on this sacred soil in 527 BCE that the 24th Tirthankara, Lord Mahavira, delivered his final divine discourse (Uttaradhyayana Sutra) and attained Nirvana. The exquisite white marble temple floats gracefully in the center of an 84-acre lake teeming with red and white water lilies.",
    highlights: [
      "Connected by a 600-foot-long arched stone causeway bridge across the lotus water.",
      "Houses the ancient Charan Paduka (footprints) of Lord Mahavira.",
      "Surrounding water tank was created when millions of devotees collected ash after Mahavira's cremation.",
      "Nearby Samosharan temple marks the exact circular amphitheatre where Mahavira delivered sermons."
    ]
  },
  "golghar": {
    title: "Golghar (The Round House)",
    location: "Gandhi Maidan Road, Patna Capital",
    category: "Architectural & Historical Monument",
    badge: "Engineering Marvel",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Patna_Golghar_2.jpg",
    era: "Built 1786 by Captain John Garstin (British East India Company)",
    timings: "10:00 AM – 05:00 PM",
    entry: "₹20",
    station: "Patna Junction (3 km) / Patna Airport (7 km)",
    desc: "An extraordinary pillarless beehive-shaped granary designed following the terrible Bengal famine of 1770. Rising 29 meters high with a foundation thickness of 3.6 meters, it was constructed to store 137,000 tons of grain. Twin spiral staircases wind around its exterior, leading to the cupola at the top which offers an iconic panorama of Patna and the flowing River Ganga.",
    highlights: [
      "Twin external spiral staircases of 145 steps engineered for porters to ascend and descend simultaneously.",
      "Unrivaled 360-degree viewpoint over the vast Gandhi Maidan and the River Ganga.",
      "Stupendous acoustic echo chamber inside the pillarless vault.",
      "Surrounded by manicured gardens, evening musical laser fountain shows, and Patna Museum nearby."
    ]
  },
  "patna-sahib": {
    title: "Takht Sri Patna Sahib (Harmandir Ji)",
    location: "Old Patna City (Harmandir Gali), Patna",
    category: "Supreme Sikh Pilgrimage",
    badge: "One of Five Takhts",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Patna_Sahib_Gurudwara.jpg",
    era: "Birthplace of 10th Guru (1666); Gurudwara built by Maharaja Ranjit Singh",
    timings: "04:00 AM – 10:00 PM (Langar operates 24x7)",
    entry: "Free Entry",
    station: "Patna Sahib Railway Station (2 km) / Patna Junction (10 km)",
    desc: "Takht Sri Harmandir Ji Patna Sahib is one of the five Takhts (high seats of temporal and spiritual authority) in Sikhism. It honors the birthplace of the tenth Sikh Guru, Guru Gobind Singh Ji, born here on December 22, 1666. The shimmering white marble Gurudwara stands on the banks of the sacred Ganges.",
    highlights: [
      "Houses sacred relics of Guru Gobind Singh Ji including his golden cradle, arrows, curved sword, and wooden sandals.",
      "Priceless handwritten manuscript copies of the Sri Guru Granth Sahib bearing the Guru's holy seal.",
      "Renowned 24-hour Guru Ka Langar serving thousands of pilgrims daily with love and equality.",
      "Epicenter of the grand Prakash Parv celebrations attended by devotees from worldwide."
    ]
  },
  "sher-shah-tomb": {
    title: "Mausoleum of Sher Shah Suri",
    location: "Sasaram, Rohtas District (150 km from Patna)",
    category: "Indo-Afghan Imperial Architecture",
    badge: "Second Taj Mahal of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Tomb_of_Shershah_Suri.jpg",
    era: "Completed 1545 CE by Architect Mir Muhammad Aliwal Khan",
    timings: "06:00 AM – 06:00 PM",
    entry: "₹25 for Indians | ₹300 for Foreign Nationals",
    station: "Sasaram Junction (2 km)",
    desc: "Often celebrated by architectural historians as one of the finest Indo-Islamic monuments in India. This monumental octagonal red sandstone mausoleum stands 122 feet high inside a vast 1,400-foot square artificial lake, connected by a wide stone causeway. It commemorates the visionary monarch Sher Shah Suri, who unified northern India, built the Grand Trunk Road, and introduced the Rupiya currency.",
    highlights: [
      "The majestic dome has a span of 22 meters, exceeding the dome span of the Taj Mahal in Agra.",
      "Three-tiered octagonal plinth with arched kiosks, ornate jharokhas, and colored glazed tile traces.",
      "Mirrored reflection across the calm lake waters creating a floating palace illusion.",
      "A triumph of pre-Mughal Afghan architectural engineering."
    ]
  },
  "vikramshila": {
    title: "Vikramshila Ancient University",
    location: "Antichak Village, Kahalgaon, Bhagalpur District",
    category: "Ancient Buddhist Monastic University",
    badge: "Pala Dynasty University",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Vikramshila-7.jpg",
    era: "Late 8th Century CE (King Dharmapala)",
    timings: "09:00 AM – 05:00 PM",
    entry: "₹25 for Indians | ₹300 for Foreign Nationals",
    station: "Kahalgaon (13 km) / Bhagalpur Junction (40 km)",
    desc: "Established by the Pala emperor Dharmapala, Vikramshila rose as the supreme center of Tantric Buddhist studies (Vajrayana Buddhism) and classical Indian philosophy. The sprawling excavated site contains a colossal cruciform terraced central stupa surrounded by 208 monastic residential cells, libraries, and teaching halls.",
    highlights: [
      "Enormous cruciform central stupa decorated with terracotta relief plaques of animals and deities.",
      "The illustrious seat of master scholar Atisa Dipankara, who traveled across the Himalayas to revitalize Buddhism in Tibet.",
      "Archaeological museum preserving stone sculptures, pottery, and Tantric seals.",
      "Proximity to the Vikramshila Gangetic Dolphin Sanctuary on the sacred Ganges river."
    ]
  },
  "kakolat": {
    title: "Kakolat Waterfall",
    location: "Kakolat Hill, Govindpur Block, Nawada District",
    category: "Natural Waterfall & Scenic Oasis",
    badge: "Natural Wonder",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kakolat_waterfall%2C_Bihar%2C_India.jpg",
    era: "Ancient Natural Geological Formation & Mythological Legend",
    timings: "07:00 AM – 05:00 PM",
    entry: "Free Entry (Parking ₹30-50)",
    station: "Nawada Railway Station (33 km) / Rajgir (60 km)",
    desc: "Kakolat is one of Bihar's most picturesque natural waterfalls, tumbling down from a height of approximately 160 feet over rocky precipices into a crystal-clear natural plunge pool. Legend states that during their exile, the Pandavas bathed here and released a cursed king from the guise of a serpent.",
    highlights: [
      "Natural cold spring pool safe for refreshing swimming and bathing throughout the year.",
      "Surrounded by dense forest foliage, rocky gorges, and mountain trails.",
      "Site of the vibrant Chhath and Baisakhi seasonal fairs.",
      "Newly modernized eco-pathways and safety changing facilities by Bihar Tourism."
    ]
  },
  "valmiki-park": {
    title: "Valmiki National Park & Tiger Reserve",
    location: "West Champaran District (Himalayan Terai Belt)",
    category: "Wildlife Sanctuary & Tiger Reserve",
    badge: "Bihar's Sole Tiger Reserve",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Rajgir.JPG",
    era: "Established as National Park in 1990",
    timings: "Safari: 06:00 AM – 10:00 AM & 02:00 PM – 05:00 PM",
    entry: "Entry & Safari: ₹250 - ₹1,500 per jeep / boating",
    station: "Narkatiaganj / Bagaha (40 km) / Gorakhpur Airport (130 km)",
    desc: "Sprawled across 898 square kilometers along the international border of Nepal and the foothills of the Shivalik Himalayas, Valmiki is Bihar's only Tiger Reserve. It represents one of India's richest biodiversity hotspots with dense moist Sal forests, alluvial grasslands, and the meandering Gandak river.",
    highlights: [
      "Thriving population of Royal Bengal Tigers, Indian leopards, wild dogs, and one-horned rhinos.",
      "Thrilling open jeep jungle safaris and scenic Gandak river rafting / boat rides.",
      "Birdwatcher's paradise with over 250 species including the Kalij pheasant and great hornbill.",
      "Cozy eco-tourism jungle huts and tree houses managed by the Forest Department."
    ]
  },
  "rohtasgarh": {
    title: "Rohtasgarh Fort & Kaimur Waterfalls",
    location: "Kaimur Plateau, Rohtas District",
    category: "Ancient Hill Fort & Canyon Springs",
    badge: "Hilltop Citadel",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Kakolat_waterfall.jpg",
    era: "Founded by Raja Harishchandra's son Rohitashva; reinforced by Sher Shah Suri",
    timings: "06:00 AM – 05:00 PM",
    entry: "Free Entry",
    station: "Dehri-on-Sone (40 km) / Sasaram (50 km)",
    desc: "Perched atop a rugged plateau 1,500 feet above the Sone river, Rohtasgarh is one of the largest and most impregnable hill fortresses in India, covering an expansive circumference of nearly 45 kilometers. The surrounding Kaimur plateau is adorned with dramatic canyons and sensational waterfalls such as Telhar Kund and Tutla Bhawani.",
    highlights: [
      "Monumental palace complexes: Aina Mahal, Shahi Darwaza, and Jama Masjid.",
      "Tutla Bhawani Waterfall with its sensational hanging suspension footbridge over a deep rocky gorge.",
      "Telhar Kund: A sheer 80-meter vertical waterfall dropping into a tranquil emerald pool.",
      "Exceptional trekking and wilderness photography opportunities."
    ]
  }
};

// ==========================================================================
// 2. INITIALIZATION & DOM READY HOOKS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileNav();
  initDestinationFilters();
  initDestinationModal();
  initItineraryTabs();
  initTripPlanner();
  initBackToTop();
  initImageFallbacks();
});

// ==========================================================================
// 3. THEME TOGGLE (Dark / Light Mode - Safari Safe)
// ==========================================================================
function safeGetStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

function safeSetStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // Safari Private Browsing fallback
  }
}

function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  // Retrieve saved preference or check OS preference
  const savedTheme = safeGetStorage("lokyatra_theme") || safeGetStorage("pragya_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      safeSetStorage("lokyatra_theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      safeSetStorage("lokyatra_theme", "dark");
    }
  });
}

// ==========================================================================
// 4. MOBILE NAVIGATION DRAWER
// ==========================================================================
function initMobileNav() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-nav");
  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !isExpanded);
    drawer.hidden = isExpanded;
  });

  // Close drawer on link click
  const links = drawer.querySelectorAll(".mobile-nav-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      drawer.hidden = true;
    });
  });
}

// ==========================================================================
// 5. DESTINATION FILTERING & LIVE SEARCH
// ==========================================================================
function initDestinationFilters() {
  const filterPills = document.querySelectorAll(".filter-pill");
  const cards = document.querySelectorAll(".destination-card");
  const filterInput = document.getElementById("destination-filter-input");
  const statusSpan = document.getElementById("results-status");
  const globalSearch = document.getElementById("global-destination-search");
  const searchClearBtn = document.getElementById("search-clear-btn");
  const quickChips = document.querySelectorAll(".quick-chip");

  let currentCategory = "all";
  let searchQuery = "";

  function applyFilters() {
    let visibleCount = 0;

    cards.forEach(card => {
      const cardCategory = card.getAttribute("data-category") || "";
      const cardTitle = card.getAttribute("data-title") || "";
      const cardText = card.textContent.toLowerCase();

      // Check category match
      const categoryMatch = (currentCategory === "all") || cardCategory.includes(currentCategory);

      // Check search match
      const query = searchQuery.trim().toLowerCase();
      const searchMatch = !query || cardTitle.includes(query) || cardText.includes(query);

      if (categoryMatch && searchMatch) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // Update status text
    if (statusSpan) {
      if (visibleCount === cards.length && currentCategory === "all" && !searchQuery) {
        statusSpan.textContent = `Showing all ${cards.length} destinations`;
      } else {
        statusSpan.textContent = `Showing ${visibleCount} of ${cards.length} destinations`;
      }
    }
  }

  // Filter Pill Click
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => {
        p.classList.remove("active");
        p.setAttribute("aria-selected", "false");
      });
      pill.classList.add("active");
      pill.setAttribute("aria-selected", "true");

      currentCategory = pill.getAttribute("data-filter") || "all";
      applyFilters();
    });
  });

  // Directory Search Input
  if (filterInput) {
    filterInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }

  // Hero Global Search Input
  if (globalSearch) {
    globalSearch.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (filterInput) filterInput.value = searchQuery;
      if (searchClearBtn) searchClearBtn.hidden = !searchQuery;
      applyFilters();
    });

    globalSearch.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const destSection = document.getElementById("bihar-destinations");
        if (destSection) {
          destSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }

  // Clear button
  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      globalSearch.value = "";
      if (filterInput) filterInput.value = "";
      searchClearBtn.hidden = true;
      searchQuery = "";
      applyFilters();
    });
  }

  // Hero Quick Chips
  quickChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const cat = chip.getAttribute("data-category");
      if (cat === "rajgir") {
        document.getElementById("rajgir-spotlight")?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Scroll to destinations and select filter
        document.getElementById("bihar-destinations")?.scrollIntoView({ behavior: "smooth" });
        const targetPill = document.querySelector(`.filter-pill[data-filter="${cat}"]`);
        if (targetPill) {
          targetPill.click();
        }
      }
    });
  });
}

// ==========================================================================
// 6. DESTINATION MODAL DIALOG (<dialog>)
// ==========================================================================
function initDestinationModal() {
  const dialog = document.getElementById("destination-dialog");
  const closeBtn = document.getElementById("modal-close");
  const closeActionBtn = document.getElementById("modal-close-action");
  const openButtons = document.querySelectorAll(".open-details-btn");

  if (!dialog) return;

  function openModal(destKey) {
    const data = DESTINATIONS_DATA[destKey];
    if (!data) return;

    // Populate modal fields
    const modalImg = document.getElementById("modal-img");
    const modalBadge = document.getElementById("modal-badge");
    const modalLocation = document.getElementById("modal-location");
    const modalCategory = document.getElementById("modal-category");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalEra = document.getElementById("modal-era");
    const modalTimings = document.getElementById("modal-timings");
    const modalEntry = document.getElementById("modal-entry");
    const modalStation = document.getElementById("modal-station");
    const modalHighlights = document.getElementById("modal-highlights-list");

    if (modalImg) {
      modalImg.src = data.image;
      modalImg.alt = data.title;
    }
    if (modalBadge) modalBadge.textContent = data.badge;
    if (modalLocation) modalLocation.textContent = "📍 " + data.location;
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDesc) modalDesc.textContent = data.desc;
    if (modalEra) modalEra.textContent = data.era;
    if (modalTimings) modalTimings.textContent = data.timings;
    if (modalEntry) modalEntry.textContent = data.entry;
    if (modalStation) modalStation.textContent = data.station;

    // Highlights list
    if (modalHighlights) {
      modalHighlights.innerHTML = "";
      data.highlights.forEach(h => {
        const li = document.createElement("li");
        li.textContent = h;
        modalHighlights.appendChild(li);
      });
    }

    // Show native dialog modal with Safari fallback
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    document.body.style.overflow = "hidden"; // Prevent body scroll
  }

  function closeModal() {
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
    document.body.style.overflow = "";
  }

  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const destKey = btn.getAttribute("data-destination");
      if (destKey) openModal(destKey);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (closeActionBtn) closeActionBtn.addEventListener("click", closeModal);

  // Close when clicking on backdrop
  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeModal();
    }
  });

  // Dialog close event
  dialog.addEventListener("close", () => {
    document.body.style.overflow = "";
  });

  // Modal "Add to My Custom Itinerary" link
  const planBtn = document.getElementById("modal-plan-btn");
  if (planBtn) {
    planBtn.addEventListener("click", () => {
      closeModal();
    });
  }
}

// ==========================================================================
// 7. ITINERARY TABS SWITCHER
// ==========================================================================
function initItineraryTabs() {
  const tabBtns = document.querySelectorAll(".itinerary-tab-btn");
  const panes = document.querySelectorAll(".itinerary-pane");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");

      tabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      panes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add("active");
    });
  });
}

// ==========================================================================
// 8. INTERACTIVE TRIP PLANNER & ESTIMATION CALCULATOR
// ==========================================================================
function initTripPlanner() {
  const form = document.getElementById("trip-planner-form");
  if (!form) return;

  const styleSelect = document.getElementById("travel-style");
  const durationSelect = document.getElementById("trip-duration");
  const travelersInput = document.getElementById("num-travelers");
  const pricePPElem = document.getElementById("calc-price-pp");
  const priceTotalElem = document.getElementById("calc-price-total");
  const travelersCountElem = document.getElementById("calc-travelers");
  const feedbackElem = document.getElementById("planner-form-feedback");

  const RATES = {
    comfort: 3500,
    luxury: 7500,
    budget: 1500
  };

  function updateEstimate() {
    const style = styleSelect?.value || "comfort";
    const days = parseInt(durationSelect?.value || "5", 10);
    const travelers = Math.max(1, parseInt(travelersInput?.value || "2", 10));

    // Count selected destinations
    const checkedDests = form.querySelectorAll('input[name="dest"]:checked').length;
    const destSurcharge = Math.max(0, (checkedDests - 3) * 600); // Small surcharge for multi-city logistics

    const basePerDay = RATES[style] || 3500;
    const costPerPerson = (basePerDay * days) + destSurcharge;
    const totalCost = costPerPerson * travelers;

    if (pricePPElem) pricePPElem.textContent = `₹${costPerPerson.toLocaleString("en-IN")}`;
    if (priceTotalElem) priceTotalElem.textContent = `₹${totalCost.toLocaleString("en-IN")}`;
    if (travelersCountElem) travelersCountElem.textContent = travelers;
  }

  // Attach live update listeners
  styleSelect?.addEventListener("change", updateEstimate);
  durationSelect?.addEventListener("change", updateEstimate);
  travelersInput?.addEventListener("input", updateEstimate);
  form.querySelectorAll('input[name="dest"]').forEach(cb => {
    cb.addEventListener("change", updateEstimate);
  });

  // Initial calculation
  updateEstimate();

  // Form submission handling
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (feedbackElem) {
      feedbackElem.hidden = false;
      feedbackElem.scrollIntoView({ behavior: "smooth", block: "nearest" });
      setTimeout(() => {
        feedbackElem.hidden = true;
      }, 7000);
    }
  });
}

// ==========================================================================
// 9. BACK TO TOP BUTTON
// ==========================================================================
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==========================================================================
// 10. IMAGE FALLBACKS
// ==========================================================================
function initImageFallbacks() {
  // If an external image fails to load, gracefully fall back to an elegant SVG pattern
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.addEventListener("error", () => {
      // Create inline SVG data URI as fallback
      const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="100%" height="100%" fill="%2327272A"/><path d="M0 320 Q 150 200, 300 320 T 600 320 L 600 400 L 0 400 Z" fill="%23C2410C" opacity="0.6"/><circle cx="480" cy="120" r="40" fill="%23D97706" opacity="0.8"/><text x="50%" y="45%" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">Lok Yatra Bihar Heritage</text><text x="50%" y="55%" font-family="sans-serif" font-size="14" fill="%23E4E4E7" text-anchor="middle">Historic Monument &amp; Tourism Site</text></svg>`;
      img.src = fallbackSvg;
    });
  });
}

