export const sortCategoryData = ["All", "Popular", "Recommended", "More"];

 

export const categoriesData = [
  {
    title: "Palaces",
    image: require("../../assets/images/palaces.png"),
  },
  {
    title: "Temples",
    image: require("../../assets/images/temple.png"),
  },
  {
    title: "Castles",
    image: require("../../assets/images/castle.png"),
  },
  {
    title: "Ancient Ruins",
    image: require("../../assets/images/ancient.png"),
  },
  {
    title: "Landmarks",
    image: require("../../assets/images/landmark.png"),
  },
];

export const destinationData = [
  {
    id: 1,
    title: "Islamabad",
    duration: "10 Days",
    distance: "500 KM",
    weather: "25°C",
    price: 1500,
    shortDescription:
      "Located in Islamabad, 8 km from Shah Faisal Mosque and 20 km from Lake View Park",
    longDescription:
      " The Grand Palace provides spacious air-conditioned accommodation with a balcony and free WiFi. With free private parking, the property is 23 km from Ayūb National Park and 25 km from Taxila Museum. The property is non-smoking and is situated 5 km from PAF Golf Course.Fatima Jinnah Park is 5.9 km from the guest house, while Golra Sharif Railway Museum is 6.8 km away. The nearest airport is Islamabad International Airport, 30 km from The Grand Palace.",
    image: require("../../assets/images/grand palace isl.jpeg"),
  },
  {
    id: 2,
    title: "Rawalpinidi",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Rawalpindi located in the nothernmost part of Punjab province, was the capital of Pakistan from 1959 to 1969.",
    longDescription:
      " The city lies on the Potwar Plateau 9 miles (14 km) southwest of Islamabad, the national capital. The district has an area of 5,286 square kilometre (2,041 square mile).",
    image: require("../../assets/images/rawalpindi.jpeg"),
  },

  {
    id: 3,
    title: "Bahawalpur",
    duration: "5 Days",
    distance: "200 KM",
    weather: "20°C",
    price: 1200,
    shortDescription:
      "Bahawalpur is said to be the 12th largest city of Pakistan and is situated in Punjab.",
    longDescription:
      " It was recognized as the capital of a princely state after the decline of Durrani Empire. This princely state was founded by Nawab Muhammad Bahawal Khan-II in the early nineteenth century.",
    image: require("../../assets/images/bahawalpur.jpeg"),
  },
  {
    id: 4,
    title: "Multan",
    duration: "3 Days",
    distance: "50 KM",
    weather: "26°C",
    price: 800,
    shortDescription:
      "Multan is a city in the Punjab Province of Pakistan and it is located in the southern part of the province,nd is steeped in history.",
    longDescription:
      "It has a population of 5.36 million (according to 2023 census), making it the seventh largest city in Pakistan.",
    image: require("../../assets/images/multan.jpeg"),
  },
  {
    id: 5,
    title: "Hyderabad",
    duration: "4 Days",
    distance: "180 KM",
    weather: "23°C",
    price: 950,
    shortDescription:
      "Hyderabad is now an important commercial and cultural center, and serves as a transit between the rural and the urban Sindh. ",
    longDescription:
      "Noteworthy sights in Hyderabad include the tombs of the Kalhora and Talpur rulers, two royal fortresses, and the miles-long bustling and colourful Shahi Bazaar.",
    image: require("../../assets/images/Hyderabad.jpg"),
  },
  {
    id: 6,
    title: "Karachi",
    duration: "6 Days",
    distance: "400 KM",
    weather: "18°C",
    price: 1600,
    shortDescription:
      "Karachi city is spread over 3,530 km2 (1,360 sq mi) in area. ",
    longDescription:
      " It is locally known as the City of Lights for its liveliness, and the City of the Quaid, having been the birth and burial place of Quaid-e-Azam (Muhammad Ali Jinnah), the founder of Pakistan, who also made the city his home after Pakistan's independence.",
    image:require("../../assets/images/karachi.jpeg"),
  },
  {
    id: 7,
    title: "Faisalabad",
    duration: "8 Days",
    distance: "1200 KM",
    weather: "15°C",
    price: 2200,
    shortDescription:
      "It is second largest city and industrial heart of Punjab, Pakistan.",
    longDescription:
      "With an estimated population of 3.8 million in 2024, it is the second-largest Punjabi-speaking city in the world. Historically one of the largest villages of Punjab, Lyallpur was one of the first planned cities within British India.",
    image: require("../../assets/images/faisalabad.jpeg"),
  },
  {
    id: 8,
    title: "Lahore",
    duration: "7 Days",
    distance: "500 KM",
    weather: "14°C",
    price: 1900,
    shortDescription:
      "Lahore is one of Pakistan's major industrial, educational and economic hubs",
    longDescription:
      "It has been the historic capital and cultural center of the wider Punjab region, and is one of Pakistan's most socially liberal, progressive, and cosmopolitan cities. Lahore's origin dates back to antiquity.",
    image: require("../../assets/images/lahore.jpeg"),
  },
];
// City Data
export const pakistanCities = [
  {
    title: "Hyderabad",
    image: require("../../assets/images/Hyderabad.jpg"),
  },
  {
    title: "Multan",
    image: require("../../assets/images/multan.jpeg"),
  },
  {
    title: "Bahawalpur",
    image: require("../../assets/images/bahawalpur.jpeg"),
  },
  {
    title: "Karachi",
    image: require("../../assets/images/karachi.jpeg"),
  },
  {
    title: "Lahore",
    image: require("../../assets/images/lahore.jpeg"),
  },
  {
    title: "Faisalabad",
    image: require("../../assets/images/faisalabad.jpeg"),
  },
  {
    title: "Peshawar",
    image: require("../../assets/images/Peshawar.jpg"),
  },
  
];

console.log("pakistanCities data:", pakistanCities);


export const CitiesDataHyedrbad = [
  //Palaces
  {
    id: 1,
    title: "Mukhi House",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The Mukhi House, also known as Mukhi Mahal, is a museum located in Hyderabad, Sindh, Pakistan",
    longDescription:
      "Built in 1920 by Jethanand Mukhi, the Mukhi House served as a family residence until the partition of India compelled the family to vacate by 1957.Craftsmanship from India is evident in the floor work, wooden details, and fresco-like stonework. Exhibits within the museum, including family photographs and artifacts, showcase the Mukhi family's affluent lifestyle and their social and political prominence.",
    image: require("../../assets/images/MukhiMahalhyd.jpg"),

  },
  {
    id: 2,
    title: "Mohata Palace",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The Mohatta Palace (Urdu: مہتا پیلس) is a museum located in Karachi, Sindh, Pakistan.",
    longDescription:
      "The palace was built in the tradition of stone palaces of Rajasthan, using pink Jodhpur stone in combination with the local yellow stone from nearby Gizri. Mohatta could enjoy this building for only about two decades before the partition of India, after which he left Karachi for the new state of India.",
    image: require("../../assets/images/Mohatta Palace hyd.jpg"),

  },
  //Temples
  {
    id: 3,
    title: "Shiv Mandir",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The Shiv Mandir, Hyderabad or Shiv Shanker Mahadev temple or Goswamiparshotam Gir Chela Goswami Nihal Gir temple is a Hindu temple located in the Tando Wali Muhammad area in the Hyderabad District in the Sindh province of Pakistan.",
    longDescription:
      "It is a century old temple",
    image: require("../../assets/images/Shiv Mandir hyderabad.jpg"),

  },
  {
    id: 4,
    title: "durga shivi",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Durga Shiv Mandir regd near Circuit House is the oldest Mandir Since 1768 of Pakistan",
    longDescription:
      "It is a century old temple",
    image: require("../../assets/images/durga shivi tample hyd.jpg"),

  },
   //Castle
   {
    id: 5,
    title: "UmerFort",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Umerkot Fort, also known as Amarkot, is a historic fort in Umerkot, Sindh, Pakistan",
    longDescription:
      "The fort has wide walls, large circular bastions at each corner, and a watch tower with cannons. The fort's outer walls are 45 feet high, 17 feet wide, and about eight feet thick.",
    image: require("../../assets/images/umerFort hyd.jpg"),

  },
  {
    id: 6,
    title: "Kacha Qilla",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Kacha Qila (Weak Fort) is also called Makki Shah Qila as there is a shrine inside the fort. This fort is small compared to Pakka Qila.",
    longDescription:
      "Kacha Qila (Weak Fort) is also called Makki Shah Qila as there is a shrine inside the fort. This fort is small compared to Pakka Qila, and is made of mud.",
    image: require("../../assets/images/Qachha qila hyd.jpg"),

  },
  //Ancient Ruins
  {
    id: 7,
    title: "Mohenjo Daro",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Mohenjo-daro, group of mounds and ruins on the right bank of the Indus River, northern Sindh province, southern Pakistan. ",
    longDescription:
      "The name Mohenjo-daro is reputed to signify “the mound of the dead.” The archaeological importance of the site was first recognized in 1922, one year after the discovery of Harappa. Subsequent excavations revealed that the mounds contain the remains of what was once the largest city of the Indus civilization.",
    image: require("../../assets/images/Mohenjo Daro.webp"),

  },

  {
    id: 8,
    title: "Tombs of the Talpur Mirs",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The tombs are also known as Cubbas (the Sindhi word for Domes). These tombs are located in Hirabad, Hyderabad in the Sindh province of Pakistan.",
    longDescription:
      "The tombs complex hosts large mausoleums for Talpur rulers while they are several smaller mausoleums for their wives, consorts and infant children.",
    image: require("../../assets/images/Talpur Mirs hyd.jpg"),

  },

  //Landmarks

  {
    id: 9,
    title: "Jamia mosque",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The grand mosque is an architectural marvel and a significant religious site in Hyderabad.",
    longDescription:
      "It is one of the most beautiful mosques in Pakistan. Its stunning design and peaceful ambience attract visitors from far and wide.These are just a few of the attractions in Hyderabad, Sindh. The city has a rich cultural heritage and a blend of historical and modern sites to explore.",
    image: require("../../assets/images/Talpur Mirs hyd.jpg"),

  },

  {
    id: 10,
    title: "Makli Graveyard",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Makli Necropolis is located near the city of Thatta in the Sindh province of Pakistan",
    longDescription:
      " When we say the land of the dead, we mean an actual funerary site. The necropolis is one of the largest funerary sites in the world, and the largest in Asia.",
    image: require("../../assets/images/Makli graveyards hyd.jpg"),

  },

  
];

console.log("CitiesDataHyderabad data:", CitiesDataHyedrbad);

export const CitiesDataBahawalpur = [
  {
    id: 1,
    title: "Noor Mahal",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Noor Mahal is a palace in Bahawalpur, Pakistan, that is a popular tourist attraction and a protected monument.",
    longDescription:
      "A blend of Islamic, European, and Indian architectural styles, including Corinthian, with five domes and angular elliptical shapes.",
    image: require("../../assets/images/Bhawalpur/Noor mahal.jpg"),
    
  },
  {
    id: 2,
    title: "Gulzar Mahal",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Gulzar Mahal is a palace in the city of Bahawalpur, Pakistan.",
    longDescription:
      "Gulzar Mahal was built between 1906 and 1909.[4] It was commissioned during the reign of Sadeq Mohammad Khan V and was built to be the residence for women members of the royal household of the former princely state of Bahawalpur, aside from the Queen.",
    image: require("../../assets/images/Bhawalpur/Gulzar mahal bwp.jpg"),
   

  },
  
  {
    id: 4,
    title: "Kala Dhari Mandir",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "It is a century old temple.",
    longDescription:
      "The 300-year-old Shiri Nani Dev Kaala Dhari Jee Maharaaj Mandir, is the oldest and one of the most beautiful temples in Bahawalpur",
    image: require("../../assets/images/Bhawalpur/Kala-dhari-Mandir.jpg"),


  },
   //Castle
   {
    id: 5,
    title: "Darawar Fort",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Darawar Fort, is 130 kilometers south of Bahawalpur City and is quite well worth the drive.",
    longDescription:
      "The fort has wide walls, large circular bastions at each corner, and a watch tower with cannons. The fort's outer walls are 45 feet high, 17 feet wide, and about eight feet thick.",
    image: require("../../assets/images/Bhawalpur/Darawar fort.jpg"),
   

  },
  {
    id: 6,
    title: "sadiq-garh",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The only Palace which is far more superior to all others in terms of elegance and glory is named Sadiq Garh Palace.",
    longDescription:
      "This Palace was established in 1882 by His Highness Nawab Sadiq Muhammad Khan (IV). This Palace was constructed under the supervision of expert engineers with a cost of fifteen lac rupees.",
    image: require("../../assets/images/Bhawalpur/SadiqGarh fort.jpg"),
    
  },
  //Ancient Ruins
  {
    id: 7,
    title: "Royal Necropolis of Darawar",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Royal cemetery of Derawar is an eternal resting place of the ruling family of former Muslim princely state Bahawalpur. ",
    longDescription:
      "This graveyard has historical importance in thesense that eight rulers of an independent state are inhumed at one place. ",
    image: require("../../assets/images/Bhawalpur/Royal nacropolis.jpg"),
    
  },

  {
    id: 8,
    title: "Fareed Gate",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The Name Fareed Gate was Given due to The eminent Sufi poet Khwaja Ghulam Farid as he spent 18 years in the desert of Cholistan",
    longDescription:
      "Fareed Gate is one of the historic gateways located in Bahawalpur, Pakistan. It is named after Nawab Sadiq Muhammad Khan Abbasi IV, also known as Nawab Bahawal Khan, whose full title included the name Fareed.",
    image: require("../../assets/images/Bhawalpur/Fareed Gate.jpg"),
   
  },

  //Jamia Mosque

  {
    id: 9,
    title: "Tomb of Bibi Jawandi",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The most elegant building and the prime attraction in Uch is the tomb of Bibi Jawandi. It is on the tentative list of the UNESCO World Heritage Sites.",
    longDescription:
      "It is one of the most beautiful mosques in Pakistan. Its stunning design and peaceful ambience attract visitors from far and wide.These are just a few of the attractions in Hyderabad, Sindh. The city has a rich cultural heritage and a blend of historical and modern sites to explore.",
    image: require("../../assets/images/Bhawalpur/tomb-of-Bibi-Jawindi.jpg"),
  },

  {
    id: 10,
    title: "Graves of Prophet's (P.B.U.H.) Companions",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "If you’re visiting Derawar Fort, this is a must stop for visiting and praying for their souls.",
    longDescription:
      " If you’re visiting Derawar Fort, this is a must stop for visiting and praying for their souls.",
    image: require("../../assets/images/Bhawalpur/Garaves of pbuh.jpg"),
  },

  
];

console.log("CitiesDataBahawalpur data:", CitiesDataBahawalpur);

export const CitiesDataLahore = [
  {
    id: 1,
    title: "Shesh Mahal",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The Sheesh Mahal “The Palace of Mirrors” is located within the Shah Burj block in northern-western corner of Lahore Fort . ",
    longDescription:
      "The plan is of Shish Mahal is based upon pure geometry where use of grid, architectural axis has been used to create variety of spaces at different angles and to create views of the distant landscape.",
    image: require("../../assets/images/Lahore/shesh mahal.jpg"),
    
  },
  {
    id: 2,
    title: "Rang Mahal Bazar",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Navigating the labyrinthine streets of Rang Mahal Bazar is an adventure in itself.",
    longDescription:
      "As visitors weave their way through the maze, they experience a sensory feast of sights, sounds, and smells, with colourful fabrics hanging from shop fronts, the aroma of spices lingering in the air, and the chatter of vendors and shoppers filling the streets.",
    image: require("../../assets/images/Lahore/rang mahal.jpg"),
   

  },
  
  {
    id: 3,
    title: "Krishna Mandir",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "It is a century old temple.",
    longDescription:
      "The Krishna Mandir is a Hindu temple (mandir) dedicated to the Hindu deity Krishna located in Ravi Road, opposite of Timber Market in Lahore, Punjab, Pakistan.",
    image: require("../../assets/images/Lahore/krisnatemple.jpg"),


  },
  {
    id: 4,
    title: "Valmiki Mandir",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "It is a century old temple.",
    longDescription:
      "The temple is managed and maintained by the Pakistan Hindu Council and Evacuee Trust Property Board. In the contemporary era, the Krishna Temple and the Valmiki Temple are the only two functional Hindu temples in Lahore.",
    image: require("../../assets/images/Lahore/velmiki tample.jpg"),


  },
  //Ancient Ruins
   
   {
    id: 5,
    title: "Shahi Qilal Lahore",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The Fort is situated in the north west corner of the city.",
    longDescription:
      " It is irregular in plan being about 500 yards east to west by some 400 yards north to south. It is girdled round by a fortification wall constructed in small brunt brick having considerable strength. ",
    image: require("../../assets/images/Lahore/shahi-qila-lahore.jpg"), 
  
  },
  {
    id: 6,
    title: "Tample of lava",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Temple of Loh was conserved by the Walled City of Lahore Authority in 2021.",
    longDescription:
      "Inside the Alamgiri Gate is a temple famously known as the temple of Raja Loh, who, according to Hindu religion, was the son of Rama and Sita. It is argued that the historic city of Lahore was founded by none other than Loh.",
    image: require("../../assets/images/Lahore/Tample of lava.jpg"),
    
  },
  //Castle
  {
    id: 7,
    title: "Lahore Fort",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The Lahore Fort is a citadel in the walled interior of Lahore in Punjab, Pakistan. ",
    longDescription:
      "The Fort is situated in the north west corner of the city. It is irregular in plan being about 500 yards east to west by some 400 yards north to south. ",
    image: require("../../assets/images/Lahore/lahore-fort.jpg"),
    
  },

  {
    id: 8,
    title: "Alamagir gate",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "It was built by the Mughal emperor Aurangzeb in 1674",
    longDescription:
      "It has two semi-circular bastions where lotus petal design adorns its base. It opens to the Hazuri Bagh and faces the Badshahi Mosque. The gate is one of Lahore's most iconic monuments, and once featured on Pakistani currency.",
    image: require("../../assets/images/Lahore/Alamagir gate.jpg"),
   
  },

  //LandMarks

  {
    id: 9,
    title: "badshahi Mosque",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The Badshahi Mosque is a Mughal era mosque in Lahore, capital of Punjab, Pakistan",
    longDescription:
      "It is one of the most beautiful mosques in Pakistan. Its stunning design and peaceful ambience attract visitors from far and wide.These are just a few of the attractions in Hyderabad, Sindh. The city has a rich cultural heritage and a blend of historical and modern sites to explore.",
    image: require("../../assets/images/Lahore/badshahi-mosque-by-day.jpg"),
  },

  {
    id: 10,
    title: "Wazir Khan Mosque",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      " Masjid Wazir Khan is 17th Century masjid located in the city of Lahore",
    longDescription:
      "Its intricate faience tile work known as Kashi-kari, as well as its interior surfaces that are almost entirely embellished with elaborate Mughal-era frescoes.",
    image: require("../../assets/images/Lahore/masjid-wazir-khan-wazir.jpg"),
  },

  
];

console.log("CitiesDataLahore data:", CitiesDataLahore);

export const CitiesDataKarachi = [
  {
    id: 1,
    title: "Mohtama Palace",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The only monument in Karachi that has been kept in the best possible state in Karachi.",
    longDescription:
      "Mohatta palace is located in one of the poshest areas in Karachi known as Clifton. It was built by a Hindu businessman as a gesture of gift for his wife in 1927 but had to be abandoned after the partition in 1947.",
    image: require("../../assets/images/Karachi/Mohtama palces.jpg"),
    
  },
  {
    id: 2,
    title: "Frere Hall",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Its architectural style is one of its kind and is a mixture of both local and European blend.",
    longDescription:
      "This was built in 1865 and was intended to serve as the townhall but later became a public park, library and an exhibition space. This is located at one of the central most localities in Karachi neighboring to civil lines.",
    image: require("../../assets/images/Karachi/Frere Hall.jpg"),
   

  },
  
  {
    id:3,
    title: "Swami Narayan Temple",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "It is a big Temple estate, surrounded by residential houses. ",
    longDescription:
      "It is an old temple building, which dates back more than 150 years. In this temple, celebrations of Swami Narain Jayanti, Sri Ram Navmi, Janam Ashtami, Dussehra, Diwali, and mostly all the religious festivals are celebrated by Hindus.",
    image: require("../../assets/images/Karachi//Shree Swaminarayan.jpg"),


  },
  {
    id: 4,
    title: "Panch Mukhi Hanuman Tample",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "It is an old Temple constructed in 1927 and was under the supervision of Mahant Baldev Das Gadi Nasheen. ",
    longDescription:
      "Annual Festivals of Sri Ram Navmi, Hanuman Jantee, Janam Ashtami, and Deshera are held, and every Saturday and Tuesday, Sandur and Oil are offered on the statue of Panch Mukhi Hanuman, the curer of evil effects of Shanee dev.",
    image: require("../../assets/images/Karachi/shree punch makhi.jpg"),


  },

  
 
  //Ancient Ruins
  {
    id: 7,
    title: "Chaukhandi Tomb",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Chaukhandi Tombs offers a unique insight into Pakistan's cultural heritage and is a great destination for history lovers.",
    longDescription:
      "Chaukhandi is a prominent necropolis in Sindh, Pakistan, containing many tombs belonging to the ancestors of a local tribe. It is listed as a tentative UNESCO World Heritage Site due to its unique carvings, which are representative of Sindhi culture.",
    image: require("../../assets/images/Karachi/Chukhandi tomb.jpg"),
    
  },
  {
    id: 8,
    title: "Malki Graveyard",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Makli Necropolis is located in the town of Makli, which is located on a plateau approximately 6 kilometres from the city of Thatta,",
    longDescription:
      " Makli Necropolis features several large funerary monuments belonging to royalty, various Sufi saints, and esteemed scholars",
    image: require("../../assets/images/Karachi/malki.jpg"),
  },

  

  //landMarks

  {
    id: 9,
    title: "Quaid e Azam Tomb",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "It's the final resting place of Muhammad Ali Jinnah, the founder of Pakistan. ",
    longDescription:
      "The Quaid-e-Azam tomb, also known as Mazar-e-Quaid, is a white marble mausoleum in Karachi, Pakistan. The cool inner sanctum reflects the green of a four-tiered crystal chandelier given by the People's Republic of China.",
    image: require("../../assets/images/Karachi/Mazar e quaid.jpg"),
  },
  {
    id: 10,
    title: "Empress Market",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "The market traces its origins to the British Raj era, when it was first constructed.",
    longDescription:
      "Today, it is amongst the most popular and busy places for shopping in Karachi. Commodities sold in the Empress Market range from condiments, fruit, vegetables and meat to stationery material, textiles and pets.",
    image: require("../../assets/images/Karachi/Empress Market.webp"),
   
  },
 

  
];

console.log("CitiesDataKarachi data:", CitiesDataKarachi);

export const CitiesDataMultan = [
  
  
  
  {
    id: 4,
    title: "Suraj Mandir",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "It is a century old temple.",
    longDescription:
      "The most important place of the Hindu period was the Sun Mandir. It was the most important place of worship throughout the South Asia as referred to in many books. It was situated on old Fort near Shah Rukn-e-Alam shrine. The ruins of Sun Mandir are located near the High Court of Multan.",
    image: require("../../assets/images/Multan/sun mandir.jpg"),


  },
   //Castle
   {
    id: 5,
    title: "Jain Mandir",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "A Jain temple which is known as a pilgrimage centre is often termed as Tirtha.",
    longDescription:
      "Jain Mandir or Jain temple belongs to the Suembra Sect of Jain Religion. It is located near Chowk Bazar, near Masjid Phool Hathan, Inner Walled City Multan. Perhaps 100 year old Mandir now converted into Madrassa.",
    image: require("../../assets/images/Multan/jain-mandir.jpg"),
   

  },
  {
    id: 6,
    title: "Shah Shams Tabrez Tomb",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Shams from Tabriz, Iran, around 1185 he is most famous for his impact on Rumi, the poet and the Sufi.",
    longDescription:
      "Hazrat Shah Shams-ud-Din Sabzwari Multani (RA) (died 757 AH/1356 AD) was a Muslim Sufi missionary. He arrived in Multan in early 1200 AD in Pakistan and preached Islam to the local population. He is considered to be a saint due to his poetry and the local traditions.",
    image: require("../../assets/images/Multan/sha shms tabrez.jpeg"),
    
  },
  //Ancient Ruins
  {
    id: 7,
    title: "Shah Rukn e Alam",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "Hazrat Shah Rukne Alam (RA) was the son of Sadar-Al-Din Arif. ",
    longDescription:
      "Hazrat Sheikh Rukn-ud-Din Abul Fateh (RA) commonly known by the title Shah Rukn-e-Alam (Pillar of the World) (1251 - 1335 AD), was an eminent Sufi saint from Multan in modern-day Pakistan who belonged to Suhrawardiya Sufi order. ",
    image: require("../../assets/images/Multan/tomb-of-shah-rukn-e-alam.jpg"),
    
  },

  {
    id: 8,
    title: "Haram Gate",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "It was constructed during the reign of the Delhi Sultanate in the 13th century.",
    longDescription:
      "Haram Gate Multan, also known as “Bab-al-Multan,” has a rich historical background that dates back to ancient times. The gate was named “Haram” due to its proximity to the mausoleum of Hazrat Bahauddin Zakariya, a revered Sufi saint.",
    image: require("../../assets/images/Multan/haram-gate.jpg"),
   
  },

  //Jamia Mosque

  {
    id: 9,
    title: "Tomb of Bibi Pak Daman",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      " The tomb is within a large compound surrounded by a wall of brick masonry.",
    longDescription:
      "The Shrine of Bibi Pak Daman is a revered Sufi shrine located in Multan, Pakistan. It is a place of religious significance and pilgrimage for many devotees. Bibi Pak Daman is believed to refer to a group of female saints, and the shrine is dedicated to them. ",
    image: require("../../assets/images/Multan/mausoleum-of-bibi-pak.jpg"),
  },

  {
    id: 10,
    title: "Fort Qasim",
    duration: "7 Days",
    distance: "300 KM",
    weather: "28°C",
    price: 2800,
    shortDescription:
      "It is the most beautiful place to visit in Multan, Pakistan.", 
    longDescription:
      " Nestled in the heart of Multan, Pakistan, lies a majestic historical landmark known as Fort Kohna Qasim Garden. This magnificent fort and its surrounding garden are a testament to the rich history and cultural heritage of this region.",
    image: require("../../assets/images/Multan/multan-fort_0.jpg"),
  },

  
];

console.log("CitiesDataMultan data:", CitiesDataMultan);
