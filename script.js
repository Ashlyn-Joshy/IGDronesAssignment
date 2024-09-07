// Add event listeners to all buttons
const buttons = document.querySelectorAll(".timeline-button");
const heading = document.getElementById("heading");
const description = document.getElementById("description");
const image = document.getElementById("image");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove 'active' class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    this.classList.add("active");
  });
});
// Object to store content for each year
const timelineData = {
  2018: {
    heading: "April 2018",
    description:
      "Its journey as an enterprise drone solutions provider, aiming to revolutionize surveying, mapping, and inspection using drone technology.",
    image: "images/2018.jpg",
  },
  2019: {
    heading: "April 2019",
    description:
      " IG Drones expanded its team and began collaborating with various industries, including agriculture, infrastructure, and energy.Introduced their AI-powered SaaS platform, enabling data capture, processing, analysis, and sharing.",
    image: "images/2019.jpg",
  },
  2020: {
    heading: "April 2020",
    description:
      "IG Drones played a pivotal role in smart city development by providing real-time information for civic administration.Their technology facilitated rapid assessment of pipe conditions, enhancing safety and efficiency.",
    image: "images/2020.jpg",
  },
  2021: {
    heading: "April 2021",
    description:
      "IG Drones ventured into industrial inspection, offering access to hazardous areas and reducing downtime.Their accurate data collection improved mine site management and quarry operations.",
    image: "images/2021.jpg",
  },
  2022: {
    heading: "April 2022",
    description:
      "The company automated power line inspections, saving man-hours and costs for utility companies.IG Drones remained at the forefront of geospatial and inspection analytics, pushing boundaries.",
    image: "images/2022.jpg",
  },
  2023: {
    heading: "April 2023",
    description:
      "Received industry accolades for their contributions to drone technology and data analytics.Expanded their client base beyond India, collaborating with international partners.",
    image: "images/2023.jpg",
  },
  2024: {
    heading: "April 2024",
    description:
      "IG Drones continues to evolve, exploring new applications and refining their AI-driven solutions.Their work contributes to safer infrastructure, efficient resource management, and environmental sustainability.",
    image: "images/2024.jpg",
  },
};

// Function to handle button clicks
function handleButtonClick(event) {
  const year = event.target.getAttribute("data-year");

  // Update the heading, description, and image
  heading.textContent = timelineData[year].heading;
  description.textContent = timelineData[year].description;
  image.src = timelineData[year].image;
  image.alt = `Image for ${timelineData[year].heading}`;
  image.style.display = "block"; // Show the image
}

// Attach the event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
