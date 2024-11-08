const speakers = [
    {
      name: "Raj Shamani",
      title: "Entrepreneur & Speaker",
      company: "Shamani Industries",
      image:
        "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729427956/aba2mzjiolcsaqrd7rfm.jpg",
      bio: "Raj Shamani is a young entrepreneur and motivational speaker. He shares insights on entrepreneurship and digital marketing, inspiring many to pursue their passions.",
      twitterUrl: "https://twitter.com/rajshamani",
      linkedinUrl: "https://www.linkedin.com/in/rajshamani/",
    },
    {
      name: "Ranveer Allahbadia",
      title: "Content Creator ",
      company: "BeerBiceps",
      image:
        "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729427956/q5jnpmvnqggc8lktjya8.jpg",
      bio: "Ranveer Allahbadia is a popular content creator known for his engaging podcasts and motivational talks. He focuses on personal development and entrepreneurship.",
      twitterUrl: "https://twitter.com/RanveerAllabadia",
      linkedinUrl: "https://www.linkedin.com/in/ranveer-allahbadia/",
    },
    {
      name: "Gary Vaynerchuk",
      title: "Entrepreneur & Author",
      company: "VaynerMedia",
      image:
        "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428316/ehfrubjokimmqa1r07a9.jpg",
      bio: "Gary Vaynerchuk is a serial entrepreneur and a leading voice in digital marketing. He shares valuable insights on building businesses and personal brands.",
      twitterUrl: "https://twitter.com/garyvee",
      linkedinUrl: "https://www.linkedin.com/in/garyvaynerchuk/",
    },
    {
      name: "Sandeep Maheshwari",
      title: "Motivational Speaker",
      company: "ImagesBazaar",
      image:
        "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428317/od1knbsygnmhaz4sfntl.jpg",
      bio: "Sandeep Maheshwari is known for his impactful speeches aimed at inspiring youth. He shares his journey and practical tips for success.",
      twitterUrl: "https://twitter.com/sandeepmarsh",
      linkedinUrl: "https://www.linkedin.com/in/sandeep-maheshwari/",
    },
    {
      name: "Niharika NM",
      title: "Content Creator & Influencer",
      company: "Niharika NM",
      image:
        "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428317/x5v1uvvwsw677bafszhx.jpg",
      bio: "Niharika NM is a talented content creator known for her relatable and humorous videos. She engages her audience with her unique storytelling style.",
      twitterUrl: "https://twitter.com/niharikanm",
      linkedinUrl: "https://www.linkedin.com/in/niharikanm/",
    },
    {
      name: "Radhakrishna K",
      title: "Digital Marketing Strategist",
      company: "Radhakrishna Digital",
      image:
        "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428317/fesz5lpyv3o2qvrfxne6.jpg",
      bio: "Radhakrishna K is a digital marketing strategist who helps businesses enhance their online presence. He focuses on driving results through effective marketing strategies.",
      twitterUrl: "https://twitter.com/radhakrishna",
      linkedinUrl: "https://www.linkedin.com/in/radhakrishna/",
    },
    {
      name: "Sanjay Gupta",
      title: "Business Coach & Author",
      company: "Gupta Consulting",
      image:
        "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428748/drzuaneb2qk147ghyis2.jpg",
      bio: "Sanjay Gupta is a seasoned business coach and author. He empowers individuals and businesses to achieve their goals through strategic guidance.",
      twitterUrl: "https://twitter.com/sanjaygupta",
      linkedinUrl: "https://www.linkedin.com/in/sanjaygupta/",
    },
    {
      name: "Neha Narkhede",
      title: "Co-Founder & CTO",
      company: "Confluent",
      image:
        "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428630/rceuyzujvvktqpybrahp.jpg",
      bio: "Neha Narkhede is a tech entrepreneur and co-founder of Confluent, focusing on real-time data streaming and innovative data solutions.",
      twitterUrl: "https://twitter.com/neha_narkhede",
      linkedinUrl: "https://www.linkedin.com/in/nehanarkhede/",
    },
    {
      name: "Naval Ravikant",
      title: "Entrepreneur & Investor",
      company: "AngelList",
      image:
        "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428630/wnjmoo1tot1p7gobappf.jpg",
      bio: "Naval Ravikant is a successful entrepreneur and angel investor. He shares profound insights on startups, investing, and personal growth.",
      twitterUrl: "https://twitter.com/naval",
      linkedinUrl: "https://www.linkedin.com/in/navalr/",
    },
    {
      name: "Simran Sethi",
      title: "Author & Educator",
      company: "University of Kansas",
      image:
        "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428317/atibe4isnjqtivhotzxt.jpg",
      bio: "Simran Sethi is an author and educator who promotes sustainability. She focuses on environmental awareness and responsible living.",
      twitterUrl: "https://twitter.com/simran_sethi",
      linkedinUrl: "https://www.linkedin.com/in/simransethi/",
    },
  ];
  
  const sliderContainer = document.querySelector(".speakers-slider");
  const modal = document.getElementById("speaker-modal");
  const modalImage = document.getElementById("modal-image");
  const modalName = document.getElementById("modal-name");
  const modalTitle = document.getElementById("modal-title");
  const modalCompany = document.getElementById("modal-company");
  const modalBio = document.getElementById("modal-bio");
  const modalTwitter = document.getElementById("modal-twitter");
  const modalLinkedIn = document.getElementById("modal-linkedin");
  

  
  speakers.forEach((speaker,index) => {
    const card = document.createElement("div");
    card.classList.add("speaker-card");
    card.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}">
      <h3>${speaker.name}</h3>
      <p>${speaker.title}</p>
    `;
    card.onclick = () => openModal(speaker);
    sliderContainer.appendChild(card);
  });
  const modalSliderContainer = document.getElementById("modal-slider");

speakers.forEach((speaker) => {
  const card = document.createElement("div");
  card.classList.add("speaker-card");
  card.innerHTML = `
    <img src="${speaker.image}" alt="${speaker.name}">
    <h3>${speaker.name}</h3>
    <p>${speaker.title}</p>
  `;
  modalSliderContainer.appendChild(card); // Add the card to the modal slider
});


  function openModal(speaker) {
    modal.style.display = "flex";
    modalImage.src = speaker.image;
    modalName.textContent = speaker.name;
    modalTitle.textContent = speaker.title;
    modalCompany.textContent = speaker.company;
    modalBio.textContent = speaker.bio;
    modalTwitter.href = speaker.twitterUrl;
    modalLinkedIn.href = speaker.linkedinUrl;
    modalSliderContainer=speakers
  
  }
  
  function closeModal() {
    modal.style.display = "none";
  }
  
  
  document.querySelectorAll(".speaker-card").forEach((card, index) => {
    card.addEventListener("click", () => openModal(speakers[index]));
  });
  