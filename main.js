@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

/* Ra's Solar Palette */
:root {
    --ra-sun-disk: #FFB700;          /* The brilliant solar disk */
    --ra-dawn: #FF7E3D;              /* Sunrise orange */
    --ra-noon: #FFC23D;              /* Midday sun */
    --ra-dusk: #B84A00;              /* Sunset copper */
    --ra-desert-sand: #D4A76A;       /* Desert sands */
    --ra-royal-blue: #1C3B8C;        /* Night sky blue */
    --ra-royal-purple: #4A1578;      /* Royal purple */
    --ra-deep-purple: #2C0047;       /* Deep royal purple */
    --ra-scarab-gold: #BF9B30;       /* Sacred scarab */
    --ra-falcon-red: #8B2800;        /* Ra's falcon form */
    
    /* Functional Color Assignments */
    --main-color: var(--ra-dawn);
    --second-color: var(--ra-royal-purple);
    --gradient-angle: 45deg;
    --section-bg-1: var(--ra-royal-purple);
    --section-bg-2: var(--ra-deep-purple);
    --section-bg-3: var(--ra-royal-blue);
    --section-text-color: var(--ra-sun-disk);
    --ra-text-primary: var(--ra-sun-disk);
    --ra-text-secondary: var(--ra-desert-sand);
    --ra-text-shadow: rgba(0, 0, 0, 0.7);
    --ra-highlight-color: var(--ra-scarab-gold);
    --ra-body-text-color: var(--ra-desert-sand);
    --ra-accent-color: var(--ra-dawn);
}

/* Unified Ra-Inspired Background */
html, body,
#home, 
#about-ra-team,
#about,
#donation,
#contact {
    margin: 0 !important;
    padding: 0 !important;
    background-color: var(--ra-royal-purple) !important;
    background-image: linear-gradient(
        -45deg, 
        var(--ra-deep-purple),
        var(--ra-royal-purple),
        #5B2A8F,
        #3D1163
    ) !important;
    background-size: 400% 400% !important;
    background-attachment: fixed !important;
    animation: CosmicFlow 15s ease infinite !important;
    position: relative !important;
    min-height: 100vh !important;
    overflow-x: hidden !important;
    color: var(--ra-body-text-color) !important;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5) !important;
}

@keyframes CosmicFlow {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
}

/* Remove Any Distinct Section Backgrounds */
section {
    background: transparent !important;
    background-image: none !important;
    background-color: transparent !important;
}

/* Soft Section Overlay - Optional */
#home::before, 
#about-ra-team::before,
#about::before,
#donation::before,
#contact::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg, 
        rgba(255, 107, 53, 0.1),
        rgba(255, 191, 0, 0.1)
    );
    mix-blend-mode: overlay;
    z-index: 1;
    pointer-events: none;
}

#home, 
#about-ra-team,
#about,
#donation,
#contact {
    background-color: transparent !important;
    background-image: none !important;
    margin: 0 !important;
    padding: 0 !important;
    position: relative !important;
    z-index: 1 !important;
}

/* Soft Section Overlay */
#home::before, 
#about-ra-team::before,
#about::before,
#donation::before,
#contact::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg, 
        rgba(255, 107, 53, 0.1),
        rgba(255, 191, 0, 0.1)
    );
    mix-blend-mode: overlay;
    z-index: -1;
    pointer-events: none;
}

/* Ensure Sections Have No Distinct Background */
section {
    background: transparent !important;
    backdrop-filter: none !important;
}

/* Scrollbar Styling - Divine Theme */
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    background: rgba(139, 0, 0, 0.2);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(
        var(--ra-celestial-bronze),
        var(--ra-primary-gold)
    );
    border-radius: 6px;
}

/* Smooth Fading Purple Gradient Across Sections */
#home, 
#about-ra-team,
#about,
#donation,
#contact {
    background: transparent !important;
    position: relative !important;
    z-index: 1 !important;
}

/* Soft Section Overlay */
#home::before, 
#about-ra-team::before,
#about::before,
#donation::before,
#contact::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg, 
        rgba(38, 1, 77, 0.3),
        rgba(74, 0, 112, 0.2)
    );
    mix-blend-mode: overlay;
    z-index: -1;
    pointer-events: none;
}

/* Ensure Smooth Transition Between Sections */
#home, 
#about-ra-team,
#about,
#donation,
#contact {
    position: relative !important;
    overflow: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
}

/* Text Visibility */
#home, 
#about-ra-team,
#about,
#donation,
#contact {
    color: #f0f0f0 !important;
    backdrop-filter: blur(10px) !important;
}

#home h1, 
#about-ra-team h2, 
#about h2, 
#donation h2, 
#contact h2 {
    color: #ffffff !important;
    text-shadow: 
        2px 2px 4px rgba(0, 0, 0, 0.3),
        -1px -1px 2px rgba(255, 255, 255, 0.1) !important;
}

#home p, 
#about-ra-team p, 
#about p, 
#donation p, 
#contact p {
    color: #f0f0f0 !important;
    text-shadow: 
        1px 1px 2px rgba(0, 0, 0, 0.2) !important;
}

/* Enhanced Text Visibility */
body, html {
    color: var(--ra-text-primary) !important;
}

/* Headings Styling */
h1, h2, h3 {
    color: var(--ra-sacred-amber) !important;
    text-shadow: 
        2px 2px 4px rgba(139, 0, 0, 0.5),
        -1px -1px 2px rgba(255, 107, 53, 0.3) !important;
}

/* Paragraph Text */
p {
    color: var(--ra-text-primary) !important;
    text-shadow: 
        1px 1px 2px rgba(139, 0, 0, 0.3) !important;
}

/* Divine Buttons and Interactive Elements */
.button,
button,
input[type="submit"],
input[type="button"] {
    background: var(--ra-royal-purple) !important;
    color: var(--ra-sun-disk) !important;
    border: 2px solid var(--ra-scarab-gold) !important;
    transition: all 0.3s ease !important;
    text-shadow: 
        1px 1px 2px var(--ra-text-shadow) !important;
}

.button:hover,
button:hover,
input[type="submit"]:hover,
input[type="button"]:hover {
    background: var(--ra-deep-purple) !important;
    color: var(--ra-noon) !important;
    border-color: var(--ra-sun-disk) !important;
    box-shadow: 0 0 15px var(--ra-sun-disk) !important;
}

/* Navigation Links */
nav a {
    color: var(--ra-sun-disk) !important;
    text-shadow: 1px 1px 2px var(--ra-text-shadow) !important;
}

nav a:hover {
    color: var(--ra-noon) !important;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
    color: var(--ra-sun-disk) !important;
    text-shadow: 2px 2px 4px var(--ra-text-shadow) !important;
}

/* Body Text */
p, li, span {
    color: var(--ra-desert-sand) !important;
    text-shadow: 1px 1px 2px var(--ra-text-shadow) !important;
}

/* Links */
a {
    color: var(--ra-noon) !important;
    transition: all 0.3s ease !important;
}

a:hover {
    color: var(--ra-sun-disk) !important;
    text-shadow: 0 0 8px var(--ra-sun-disk) !important;
}

/* Form Elements */
input[type="text"],
input[type="email"],
input[type="password"],
textarea,
select {
    background: rgba(44, 0, 71, 0.3) !important;
    border: 1px solid var(--ra-scarab-gold) !important;
    color: var(--ra-desert-sand) !important;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus {
    border-color: var(--ra-sun-disk) !important;
    box-shadow: 0 0 10px var(--ra-sun-disk) !important;
}

/* Seamless Section Blending */
section {
    position: relative;
    background: transparent;
    backdrop-filter: blur(10px);
    margin: 0;
    padding: 0;
    overflow: hidden;
}

/* Section Gradient Transition */
section::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg, 
        rgba(38, 1, 77, 0.2),
        rgba(106, 13, 173, 0.2),
        transparent 70%
    );
    opacity: 0.8;
    mix-blend-mode: color-dodge;
    animation: SectionGradientFlow 15s ease infinite;
    z-index: 1;
    pointer-events: none;
}

@keyframes SectionGradientFlow {
    0% {transform: rotate(0deg);}
    50% {transform: rotate(180deg);}
    100% {transform: rotate(360deg);}
}

/* Enhanced Section Translucency */
#home, 
#about-ra-team,
#about,
#donation,
#contact {
    background: none !important;
    background-image: none !important;
    background-color: transparent !important;
    position: relative;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

#home::before, 
#about-ra-team::before,
#about::before,
#donation::before,
#contact::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        45deg, 
        rgba(74, 0, 112, 0.3),
        rgba(106, 13, 173, 0.2)
    );
    mix-blend-mode: overlay;
    z-index: 1;
    pointer-events: none;
}

#home, 
#about-ra-team,
#about,
#donation,
#contact {
    backdrop-filter: blur(10px);
}

#home h1, 
#about-ra-team h2, 
#about h2, 
#donation h2, 
#contact h2 {
    color: var(--section-text-color);
    text-shadow: 
        2px 2px 4px rgba(0, 0, 0, 0.3),
        -1px -1px 2px rgba(255, 255, 255, 0.1);
    font-weight: 600;
}

#home p, 
#about-ra-team p, 
#about p, 
#donation p, 
#contact p {
    color: var(--section-text-color);
    text-shadow: 
        1px 1px 2px rgba(0, 0, 0, 0.2);
    line-height: 1.6;
}

#home a, 
#about-ra-team a, 
#about a, 
#donation a, 
#contact a {
    color: #ffffff;
    transition: color 0.3s ease;
}

#home a:hover, 
#about-ra-team a:hover, 
#about a:hover, 
#donation a:hover, 
#contact a:hover {
    color: #f0f0f0;
    text-decoration: underline;
}

/* Enhanced Text Color Styling */
body, p {
    color: var(--ra-body-text-color) !important;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3) !important;
}

h1, h2, h3 {
    color: var(--ra-highlight-color) !important;
    text-shadow: 
        2px 2px 4px rgba(139, 0, 0, 0.5),
        -1px -1px 2px rgba(255, 107, 53, 0.3) !important;
}

b, strong, i, em {
    color: var(--ra-accent-color) !important;
    text-shadow: 1px 1px 2px rgba(139, 0, 0, 0.4) !important;
}

span {
    color: var(--ra-highlight-color) !important;
    text-shadow: 
        1px 1px 2px rgba(139, 0, 0, 0.4),
        -1px -1px 1px rgba(255, 107, 53, 0.2) !important;
}

.about-text p span {
    color: var(--ra-accent-color) !important;
    font-weight: bold !important;
}

.sticky-note p {
    color: var(--ra-body-text-color) !important;
}

.sticky-note h3 {
    color: var(--ra-highlight-color) !important;
}

.about-text i {
    color: var(--ra-sacred-amber) !important;
    font-style: italic !important;
    text-shadow: 1px 1px 2px rgba(139, 0, 0, 0.3) !important;
}

/* Smooth Text Visibility */
h1, h2, h3, p, span, a {
    color: white;
    text-shadow: 
        2px 2px 4px rgba(38, 1, 77, 0.3),
        -1px -1px 2px rgba(106, 13, 173, 0.2);
}

/* Gradient Buttons with Purple Theme */
.button,
button,
input[type="submit"],
input[type="button"] {
    background: linear-gradient(
        45deg, 
        var(--ra-royal-purple),
        var(--ra-deep-purple)
    );
    color: white;
    border: none;
    transition: all 0.3s ease;
    box-shadow: 
        0 4px 6px rgba(38, 1, 77, 0.2),
        0 1px 3px rgba(106, 13, 173, 0.1);
}

.button:hover,
button:hover,
input[type="submit"]:hover,
input[type="button"]:hover {
    background: linear-gradient(
        45deg, 
        var(--ra-deep-purple),
        var(--ra-royal-purple)
    );
    transform: scale(1.05);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    section {
        margin: 0 !important;
        padding: 0 !important;
    }
}

* {
    margin: 0;
    padding: 0;
    font-family: "Kanit", sans-serif;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
    animation: none !important;
}

:root {
    --main-color: #fa812f;
    --second-color: #26014d;
}

section {
    padding: 0;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    min-height: 100vh; /* Ensure sections take at least the full height of the viewport */
}

/* Comprehensive Navigation Styling */
nav {
    all: unset;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    background-color: var(--ra-deep-purple) !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;
    padding: 15px 5% !important; /* Reduced horizontal padding */
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    z-index: 10000 !important;
    margin: 0 !important;
    box-sizing: border-box !important; /* Ensure padding doesn't increase width */
}

/* Logo Container Adjustments */
.logo-container {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    max-width: 50% !important; /* Limit logo container width */
}

.logo {
    max-width: 50px !important;
    height: auto !important;
    margin-right: 10px !important;
}

.logo-container .menu-link {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    max-width: calc(100% - 70px) !important; /* Adjust based on logo width */
}

/* Menu Styling */
.menu {
    display: flex !important;
    list-style: none !important;
    padding: 0 !important;
    margin: 0 !important;
    max-width: 50% !important; /* Limit menu width */
    flex-wrap: wrap !important;
    justify-content: flex-end !important;
}

.menu li {
    margin-right: 0.8rem !important;
    margin-bottom: 0 !important;
}

.menu a {
    text-decoration: none !important;
    color: white !important;
    font-size: 0.9rem !important; /* Slightly smaller font */
    font-weight: bold !important;
    text-transform: uppercase !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    nav {
        padding: 15px 3% !important; /* Even less padding on mobile */
        flex-wrap: wrap !important;
    }

    .logo-container {
        width: 100% !important;
        justify-content: space-between !important;
        align-items: center !important;
    }

    .menu {
        width: 100% !important;
        flex-direction: column !important;
        align-items: center !important;
        display: none !important; /* Hidden by default */
    }

    .menu li {
        width: 100% !important;
        text-align: center !important;
        margin-right: 0 !important;
        margin-bottom: 10px !important;
    }

    .menu a {
        display: block !important;
        padding: 10px !important;
        width: 100% !important;
    }
}

/* Toggle Button for Mobile */
.toggle {
    display: none !important;
    color: white !important;
    font-size: 1.5rem !important;
    cursor: pointer !important;
}

@media screen and (max-width: 768px) {
    .toggle {
        display: block !important;
    }
}

/* Fixed Navigation Styling */
nav {
    all: unset;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    background-color: var(--ra-deep-purple) !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;
    padding: 15px 10% !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    z-index: 10000 !important;
    margin: 0 !important;
}

/* Ensure body has proper spacing */
body {
    margin: 0 !important;
    padding-top: 80px !important;
}

/* Ensure sections don't overlap nav */
section {
    margin-top: 0 !important;
    position: relative !important;
    z-index: 1 !important;
}

/* Mobile Menu Adjustments */
@media (max-width: 768px) {
    .menu {
        position: fixed !important;
        top: 80px !important;
        left: -100% !important;
        width: 100% !important;
        height: calc(100vh - 80px) !important;
        background-color: var(--ra-deep-purple) !important;
        transition: left 0.3s ease !important;
        padding: 20px !important;
        overflow-y: auto !important;
        z-index: 9999 !important;
    }
    
    .menu.active {
        left: 0 !important;
    }
}

/* Ensure logo container is properly positioned */
.logo-container {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
}

/* Menu styles */
.menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu li {
    margin-right: 1.5rem;
}

.menu a {
    text-decoration: none;
    color: white;
    font-size: 1rem; /* Adjust font size as needed */
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.5rem;
    transition: none;
}
.logo + a {
    font-size: 1rem; /* Match the size of other navigation links */
    font-weight: bold; /* Ensure the font weight matches */
    text-transform: uppercase; /* Optional: enforce uppercase to match style */
    margin-left: 10px; /* Add spacing between logo and text if needed */
}
.menu-link {
    text-decoration: none;
    color: black;
    font-size: 1rem; /* Match other nav items */
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.5rem;
    transition: none;
}
.menu a:hover {
    color: #ffcc00; /* Change hover color */
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .toggle {
        display: block;
    }
    
    .menu {
        position: fixed;
        top: 80px; /* Match navbar height */
        left: -100%;
        width: 100%;
        flex-direction: column;
        background-color: var(--second-color);
        transition: left 0.3s ease;
        padding: 20px;
    }
    
    .menu.active {
        left: 0;
    }
    
    .menu li {
        margin: 10px 0;
        width: 100%;
        text-align: center;
    }
}

/* Hamburger Menu for Mobile */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: 0.4s;
}

@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .menu {
        display: none;
    }
    
    .menu.active {
        display: flex;
    }
}

/* Basic Navbar Styles */
.logo-container {
  display: flex;
  justify-content: space-between; /* Space between logo and toggle button */
  align-items: center;
}

.logo {
  width: 50px; /* Adjust percentage to fit the design */
  max-width: 150px; /* Ensure logo does not exceed 150px */
  height: auto; /* Maintain aspect ratio */
  transition: none; /* Smooth transition for resizing */
}

.toggle {
  display: none; /* Hidden by default, visible on mobile */
  cursor: pointer;
  color: white;
  font-size: 2rem; /* Larger size for the toggle icon */
}

/* Menu styles */
.menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin-right: 1.5rem;
}

.menu a {
  text-decoration: none;
  color: white;
  font-size: 1rem; /* Adjust font size as needed */
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem;
  transition: none;
}
.logo + a {
  font-size: 1rem; /* Match the size of other navigation links */
  font-weight: bold; /* Ensure the font weight matches */
  text-transform: uppercase; /* Optional: enforce uppercase to match style */
  margin-left: 10px; /* Add spacing between logo and text if needed */
}
.menu-link {
  text-decoration: none;
  color: black;
  font-size: 1rem; /* Match other nav items */
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem;
  transition: none;
}
.menu a:hover {
  color: #ffcc00; /* Change hover color */
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .toggle {
        display: block;
    }
    
    .menu {
        position: fixed;
        top: 80px; /* Match navbar height */
        left: -100%;
        width: 100%;
        flex-direction: column;
        background-color: var(--second-color);
        transition: left 0.3s ease;
        padding: 20px;
    }
    
    .menu.active {
        left: 0;
    }
    
    .menu li {
        margin: 10px 0;
        width: 100%;
        text-align: center;
    }
}

/* Hamburger Menu for Mobile */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: 0.4s;
}

@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .menu {
        display: none;
    }
    
    .menu.active {
        display: flex;
    }
}

/* Basic Navbar Styles */
.logo-container {
  display: flex;
  justify-content: space-between; /* Space between logo and toggle button */
  align-items: center;
}

.logo {
  width: 50px; /* Adjust percentage to fit the design */
  max-width: 150px; /* Ensure logo does not exceed 150px */
  height: auto; /* Maintain aspect ratio */
  transition: none; /* Smooth transition for resizing */
}

.toggle {
  display: none; /* Hidden by default, visible on mobile */
  cursor: pointer;
  color: white;
  font-size: 2rem; /* Larger size for the toggle icon */
}

/* Menu styles */
.menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin-right: 1.5rem;
}

.menu a {
  text-decoration: none;
  color: white;
  font-size: 1rem; /* Adjust font size as needed */
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem;
  transition: none;
}
.logo + a {
  font-size: 1rem; /* Match the size of other navigation links */
  font-weight: bold; /* Ensure the font weight matches */
  text-transform: uppercase; /* Optional: enforce uppercase to match style */
  margin-left: 10px; /* Add spacing between logo and text if needed */
}
.menu-link {
  text-decoration: none;
  color: black;
  font-size: 1rem; /* Match other nav items */
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem;
  transition: none;
}
.menu a:hover {
  color: #ffcc00; /* Change hover color */
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .toggle {
        display: block;
    }
    
    .menu {
        position: fixed;
        top: 80px; /* Match navbar height */
        left: -100%;
        width: 100%;
        flex-direction: column;
        background-color: var(--second-color);
        transition: left 0.3s ease;
        padding: 20px;
    }
    
    .menu.active {
        left: 0;
    }
    
    .menu li {
        margin: 10px 0;
        width: 100%;
        text-align: center;
    }
}

/* Hamburger Menu for Mobile */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: 0.4s;
}

@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .menu {
        display: none;
    }
    
    .menu.active {
        display: flex;
    }
}

/* Ensure the "About RA Team" button is responsive */
#about-ra-team {
  position: relative;
  top: 50px; /* Push the section lower */
  margin-bottom: 50px; /* Add extra space at the bottom */
  padding: 50px 0;
  background: #fff; /* White background */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#about-ra-team .heading {
  margin-bottom: 50px;
  text-align: center;
  width: 100%;
}

#about-ra-team .heading h2 {
  margin-top: 30px; /* Add extra space above the heading */
  color: var(--second-color);
}

#about-ra-team .team-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
}

@media (max-width: 768px) {
  #about-ra-team {
    top: 30px;
    padding: 30px 0;
  }
  
  #about-ra-team .heading h2 {
    margin-top: 20px;
  }
}

#home {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px; /* Prevent overflow */
  padding-top: 80px;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 100px;
  background: #fa812f;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: none;
}
.logo {
  text-transform: uppercase;
  font-size: 1.4rem;
  color: var(--second-color);
  font-weight: 700;
}
ul {
  display: flex;
}
ul li a {
  padding: 10px 22px;
  color: var(--second-color);
  border-radius: 2px;
  font-weight: 600;
  letter-spacing: 1px;
}
ul li a:hover {
  background: var(--main-color);
  color: #fff;
  border: none;
}

.home-text {
  max-width: 500px;
  margin-bottom: 2rem;
  padding-bottom: 30px; /* Add padding to the bottom to prevent overlap */
}
.home-text h1 {
  color: white; /* Changed to white */
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  line-height: 5.5rem;
}
.home-text span {
  color: var(--main-color);
}
.home-img {
  width: 500px;
  height: 500px;
}
.home-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
.home-text a {
  padding: 12px 34px;
  background: var(--main-color);
  color: #fff;
  border-radius: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  display: inline-block;
  margin-top: 1rem; /* Add some margin for better spacing */
  z-index: 1;
}
.home-text a:hover {
  background: var(--second-color);
  box-shadow: none;
}
.social {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 5%; /* Adjust positioning */
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 300px; /* Limit max width */
    z-index: 2;
    gap: clamp(10px, 5vw, 30px);
}

.social a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: clamp(40px, 8vw, 60px);
    height: clamp(40px, 8vw, 60px);
    background: rgba(38, 1, 77, 0.7);
    border-radius: 8px;
    transition: background 0.3s ease;
}

.social a i {
    font-size: clamp(18px, 5vw, 24px);
    color: white;
}

.social a:hover {
    background: rgba(250, 129, 47, 0.7);
}

/* Ensure full visibility on smaller screens */
@media (max-width: 480px) {
    .social {
        bottom: 10%;
        max-width: 250px;
        gap: clamp(5px, 3vw, 20px);
    }

    .social a {
        width: clamp(35px, 10vw, 50px);
        height: clamp(35px, 10vw, 50px);
    }

    .social a i {
        font-size: clamp(16px, 6vw, 22px);
    }
}

.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.heading h2 {
  color: var(--second-color);
  border-bottom: 3px solid var(--second-color);
  font-size: 2.2rem;
}
.heading p {
  color: var(--second-color);
  margin-top: 1.2rem;

}
#about .heading h2 {
  margin-top: 65px; /* Add space to push the title lower */
  color: var(--second-color);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

}

#about .heading h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--second-color); /* Purple underline */
}

.about-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.about-img {
  width: 320px;
  height: 500px;
}
.about-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
.about-text {
  width: 500px;
  justify-content: center;
}
.about-text h1 {
  font-size: 1.5rem;
  color: var(--second-color);
}
.about-text h1 span {
  color: var(--main-color);
}
.about-text p {
  color: var(--second-color);
  margin: 5px 0 24px;
  text-align: justify;
  line-height: 1.8rem;



}
.about-text a {
  padding: 12px 20px;
  background: var(--main-color);
  color: #fff;
  border-radius: 10px;
  font-weight: 600;
  letter-spacing: 1px;
}
.about-text a:hover {
  background: var(--second-color);
  box-shadow: none;
}
.heading.color h2 {
  color: #fff;
  border-bottom: 3px solid #fff;
  font-size: 2.2rem;
}
.color p {
  color: #fff;
}

#contact {
  background: var(--second-color);
}
#contact .heading h2 {
  margin-top: 65px; /* Add space to push the title lower */
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}


#contact .heading h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: white; /* Purple underline */
}

.contact-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.contact-form {
  width: 360px;
  margin-top: 4rem;
}
.contact-form form input,
.contact-form form textarea {
  width: 100%;
  font-size: 13px;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  margin-bottom: 12px;
}
.contact-form form input::placeholder,
.contact-form form textarea::placeholder {
  color: var(--second-color);
  letter-spacing: 1px;
}
.contact-form form textarea {
  resize: none;
  height: 200px;
}
.contact-button {
  max-width: 100px;
  font-weight: 600;
  background: var(--main-color);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
}
#about-ra-team {
  background: #fff; /* White background */
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
  color: var(--second-color); /* Purple text color */
}

#about-ra-team .heading h2 {
  font-size: 2.5rem;
  color: var(--second-color); /* Purple text color */
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}
#about-ra-team h2 span {
  color: var(--main-color);
}
#about-ra-team p span {
  color: var(--main-color);
}
#about-ra-team .heading h2::after {
  content: "";
  position: absolute;
  bottom: -10px; /* Distance between text and underline */
  left: 0;
  width: 100%; /* Full width of the h2 element */
  height: 3px; /* Thickness of the underline */
  background-color: var(--second-color); /* Purple underline */
}

#about-ra-team .heading p {
  color: var(--second-color);
  font-size: 1.2rem;
  margin-top: 10px;
}

/* Container for sticky notes, 3 on top and 3 on the bottom */
.sticky-notes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 100%;
}

.sticky-note {
    background: rgba(74, 21, 120, 0.2) !important;  /* Subtle purple background */
    border: 1px solid var(--ra-scarab-gold) !important;
    padding: 20px !important;
    border-radius: 8px !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
}

.sticky-note h3 {
    color: var(--ra-sun-disk) !important;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3) !important;  /* Reduced glow */
    margin-bottom: 10px !important;
    font-size: 1.2rem !important;
}

.sticky-note p {
    color: var(--ra-desert-sand) !important;
    text-shadow: none !important;  /* Removed glow for better readability */
    font-size: 1rem !important;
    line-height: 1.4 !important;
}

.copyright {
    position: fixed !important;
    bottom: 0 !important;
    left: 0 !important;
    width: 100% !important;
    padding: 8px 0 !important;
    text-align: center !important;
    z-index: 1000 !important;
    font-size: 0.9rem !important;
    background-image: linear-gradient(
        -45deg, 
        var(--ra-deep-purple),
        var(--ra-royal-purple),
        #5B2A8F,
        #3D1163
    ) !important;
    background-size: 400% 400% !important;
    animation: CosmicFlow 15s ease infinite !important;
    border-top: 1px solid var(--ra-scarab-gold) !important;
}

.copyright p {
    color: var(--ra-desert-sand) !important;
    margin: 0 !important;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3) !important;
}

.copyright a {
    color: var(--ra-sun-disk) !important;
    text-decoration: none !important;
    transition: color 0.3s ease !important;
}

.copyright a:hover {
    color: var(--ra-noon) !important;
    text-shadow: 0 0 5px var(--ra-sun-disk) !important;
}

#contact {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
    margin: -1px 0;
    border-radius: 0;
    padding: 50px 0;
    position: relative;
}

#contact::before {
    display: none !important;
    content: none !important;
}

#donate {
  background: var(--second-color);
  padding: 100px 0;
  text-align: center;
}

.donate-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  background: #fff;
  border-radius: 10px;
}

.donate-form h3 {
  font-size: 2rem;
  color: var(--second-color);
}

.donate-form input {
  width: 100%;
  padding: 15px;
  margin: 20px 0;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.donate-form button {
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: var(--main-color);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.donate-form button:hover {
  background-color: var(--second-color);
}

#amountDisplay {
  font-size: 1.5rem;
  color: var(--second-color);
  margin-top: 10px;
}

.heading.color h2 {
  font-size: 2.5rem;
  color: white;
  border-bottom: 3px solid #fff;
}

.heading.color p {
  color: #fff;
  margin-top: 1rem;
}
@media (max-width: 991px) {
  .nav {
    padding: 10px 50px;
    z-index: 1000;
  }
  .menu {
    position: fixed;
    top: 60px;
    right: 100%;
    display: block;
    padding: 100px 50px;
    text-align: center;
    width: 100%;
    height: 100vh;
    background: var(--second-color);
    transition: none;
    z-index: 999;
    border-top: 1px solid rgba(0, 0, 0, 1);
  }

  .menu.active {
    right: 0;
  }
  nav ul li a {
    font-size: 35px;
    line-height: 80px;
    color: #fff;
  }

  .toggle {
    width: 40px;
    height: 40px;
    background: url(assets/menu.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px;
    cursor: pointer;
  }
  .toggle.active {
    background: url(assets/close.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25px;
    cursor: pointer;
  }

  section {
    padding: 80px;
  }
  .home-text h1 {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
    line-height: 4rem;
  }
  .home-img {
    width: 400px;
    height: 400px;
  }
  .home-text a {
    padding: 10px 20px;
    font-size: 1rem;
    width: 90%; /* Make button fit on small screens */
    margin-top: 1.5rem;
  }
  .social {
    bottom: 5%; /* Move social icons higher up to prevent overlap */
    gap: 15px;
    z-index: 2;
  }
  .heading h2 {
    font-size: 1.6rem;
  }
  .about-img {
    width: 250px;
    height: 400px;
  }
  .about-text {
    width: 400px;
  }
  .about-text h1 {
    font-size: 1.3rem;
  }
  .about-text p {
    line-height: 1.5rem;
  }
}
.paypal-button {
  display: inline-block;
  background-color: var(--main-color);
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  transition: none;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.paypal-button:hover {
  background-color: var(--second-color);
}

/* PayPal Cards Styling */
.paypal-cards {
  display: block;
  margin-top: 20px; /* Increased space between the button and the card icons */
  max-width: 100%;
  height: auto;
}

/* Powered by PayPal Styling */
.paypal-powered {
  text-align: center;
  margin-top: 10px;
}

.paypal-logo {
  height: 0.875rem;
  vertical-align: middle;
}

/* Donation Section Styling */
#donation {
  position: relative;
  padding: 50px 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#donation .heading {
  margin-bottom: 40px;
  text-align: center;
  width: 100%;
}

#donation .heading h2 {
  color: var(--second-color);
  font-size: 2.5rem;
  margin-top: 50px; /* Push the title lower */
}

.donation-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
}

.paypal-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 400px;
}

.paypal-button {
  margin: 0;
  padding: 10px 20px;
  background-color: var(--main-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: none;
}

.paypal-button:hover {
  background-color: var(--second-color);
}

/* Remove PayPal powered section completely */
.paypal-powered,
.paypal-powered img {
  display: none;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
}

@media (max-width: 768px) {
  #donation .heading h2 {
    font-size: 2rem;
    margin-top: 30px;
  }
  
  .paypal-form {
    max-width: 90%;
  }
}

#contact {
  position: relative;
  top: 0; /* Pull the contact section up */
  padding: 0;
  margin: 0;
  width: 100%;
}
/* Heading Styling */
#donation .heading h2 {
  color: var(--second-color);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

#donation .heading h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--second-color); /* Purple underline */
}

#donation .heading p {
  color: var(--second-color);
  font-size: 1.2rem;
  margin-top: 10px;
}

/* Additional Donation Description Text */
.donation-description {
  color: var(--second-color);
  font-size: 1.2rem;
  margin-top: 30px; /* Increased space between description and button */
  line-height: 1.6rem;
  max-width: 600px; /* Prevents text from stretching too wide */
  margin-left: auto;
  margin-right: auto;
}

/* Donation Content Layout */
.donation-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px; /* Added gap to create more space between elements */
}

@media (max-width: 871px) {
  section {
    padding: 50px;
  }
}
@media (max-width: 800px) {
  section {
    padding: 35px;
  }
}
@media (max-width: 768px) {
  .sticky-notes {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for smaller screens */
  }

  .paypal-button {
    min-width: 10rem;
    padding: 0 1.5rem;
    font-size: 0.9rem;
    height: 2.25rem;
  }

  .paypal-powered {
    font-size: 0.9rem;
  }

  .donation-content {
    flex-direction: column;
    align-items: center;
  }

  .donation-text,
  .donation-form {
    width: 80%;
  }

  .donation-form input {
    font-size: 1.2rem;
  }
}
@media (max-width: 600px) {
  .sticky-notes {
    grid-template-columns: 1fr; /* 1 column for very small screens */
  }
  .home-text a {
    padding: 10px 20px; /* Reduce padding */
    font-size: 1rem; /* Adjust font size */
    width: 100%; /* Make the button take up the full width */
    text-align: center; /* Center the text */
    margin-top: 1.5rem; /* Adjust top margin */
  }
  .social {
    bottom: 3%; /* Move social icons higher up to prevent overlap */
    gap: 10px;
  }
}

@media (max-width: 360px) {
  section {
    padding: 35px;
  }
  .home-text a {
    padding: 8px 16px; /* Further reduce padding on very small screens */
    font-size: 0.9rem; /* Make the font smaller */
    width: 90%; /* Make the button slightly smaller but still centered */
    margin-top: 1rem; /* Reduce the margin */
  }
  #home {
    flex-direction: column;
  }
  .home-text {
    max-width: 400px;
    margin-top: 2rem;
  }
  .home-img {
    width: 345px;
    height: 400px;
  }
  .home-text h1 {
    font-size: 2rem;
    margin-bottom: 1.8rem;
    line-height: 3rem;
  }
  .about-content {
    flex-direction: column;
  }
  .about-text {
    max-width: 280px;
  }
  .about-text h1 {
    font-size: 1.2rem;
    line-height: 2rem;
  }
  .about-img {
    width: 200px;
    height: 280px;
    margin-top: 4rem;
  }
  .contact-content {
    flex-direction: column;
  }
  .contact-form {
    width: 300px;
  }
  .social {
    bottom: 2%; /* Adjust social icons further for very small screens */
    gap: 10px;
  }
}

#about .about-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

#about .about-img,
#about .about-text {
  width: 50%;
  padding: 0 20px;
  box-sizing: border-box;
}

#about .about-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

#about .about-img img {
  max-width: 100%;
  height: auto;
}

#about .about-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 768px) {
  #about .about-content {
    flex-direction: column;
  }
  
  #about .about-img,
  #about .about-text {
    width: 100%;
    padding: 10px;
  }
}

/* Soft Transition Between Sections */
section + section::before {
    display: none;
}

/* Ensure full-width coverage */
body, html {
    overflow-x: hidden;
}

/* Contact Section Blending */
#contact {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
    border-radius: 0;
    margin: -1px 0;
    padding: 50px 0;
    position: relative;
}

/* Remove individual section margins and borders */
#home, 
#about, 
#about-ra-team, 
#donation, 
#contact {
    margin: 0 !important;
    padding: 0 !important;
    border: none;
}

/* Home Section Social Buttons */
.social {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 5%; /* Adjust positioning */
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 300px; /* Limit max width */
    z-index: 2;
    gap: clamp(10px, 5vw, 30px);
}

.social a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: clamp(40px, 8vw, 60px);
    height: clamp(40px, 8vw, 60px);
    background: rgba(38, 1, 77, 0.7);
    border-radius: 8px;
    transition: background 0.3s ease;
}

.social a i {
    font-size: clamp(18px, 5vw, 24px);
    color: white;
}

.social a:hover {
    background: rgba(250, 129, 47, 0.7);
}

/* Ensure full visibility on smaller screens */
@media (max-width: 480px) {
    .social {
        bottom: 10%;
        max-width: 250px;
        gap: clamp(5px, 3vw, 20px);
    }

    .social a {
        width: clamp(35px, 10vw, 50px);
        height: clamp(35px, 10vw, 50px);
    }

    .social a i {
        font-size: clamp(16px, 6vw, 22px);
    }
}

/* Subtle Section Separation */
#home, #about-ra-team {
    position: relative;
}

#home::after, 
#about-ra-team::after {
    display: none !important;
}

/* Ensure Consistent Background */
html, body {
    background: linear-gradient(
        45deg, 
        var(--second-color), 
        var(--main-color)
    );
    background-size: 200% 200%;
    animation: none;
}

/* Remove Overlay Effects */
section::before,
section + section::before,
body::before {
    display: none !important;
}

/* Remove ALL Section Separation */
#home::after, 
#about-ra-team::after,
section::after,
section::before {
    display: none !important;
    content: none !important;
    opacity: 0 !important;
    height: 0 !important;
}

/* Ensure No Gaps Between Sections */
section {
    margin: 0 !important;
    padding: 0 !important;
}

/* Complete Section Blending */
#home, 
#about-ra-team {
    margin: 0 !important;
    padding: 0 !important;
    position: relative;
}

/* Remove ALL Possible Separations */
#home::before,
#home::after,
#about-ra-team::before,
#about-ra-team::after,
section::before,
section::after {
    display: none !important;
    content: none !important;
    width: 0 !important;
    height: 0 !important;
    opacity: 0 !important;
}

/* Ensure Seamless Background */
section {
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
    background: transparent !important;
}

/* Consistent Section Styling */
#home, 
#about-ra-team,
#about,
#donation,
#contact {
    background-color: transparent !important;
    background-image: none !important;
    background-color: transparent !important;
    position: relative !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
}

/* Overlay for Additional Depth */
#home::before, 
#about-ra-team::before,
#about::before,
#donation::before,
#contact::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        45deg, 
        rgba(74, 0, 112, 0.3),
        rgba(106, 13, 173, 0.2)
    );
    mix-blend-mode: overlay;
    z-index: 1;
    pointer-events: none;
}

/* Ensure Text Visibility */
#home, 
#about-ra-team,
#about,
#donation,
#contact {
    color: #f0f0f0 !important;
    backdrop-filter: blur(10px) !important;
}

#home h1, 
#about-ra-team h2, 
#about h2, 
#donation h2, 
#contact h2 {
    color: #ffffff !important;
    text-shadow: 
        2px 2px 4px rgba(0, 0, 0, 0.3),
        -1px -1px 2px rgba(255, 255, 255, 0.1) !important;
}

#home p, 
#about-ra-team p, 
#about p, 
#donation p, 
#contact p {
    color: #f0f0f0 !important;
    text-shadow: 
        1px 1px 2px rgba(0, 0, 0, 0.2) !important;
}

/* Remove Any Transition Effects */
* {
    transition: none !important;
}

/* Navbar Styling to Match Body Background */
nav {
    background: none !important;
    background-color: transparent !important;
    background-image: none !important;
    backdrop-filter: blur(10px) !important;
    position: relative !important;
    z-index: 10 !important;
}

/* Mobile Menu Styling */
.menu {
    background: none !important;
    background-color: transparent !important;
    background-image: none !important;
    backdrop-filter: blur(15px) !important;
}

/* Navbar Logo and Links */
nav .logo-container,
nav .menu li a {
    background: none !important;
    background-color: transparent !important;
    background-image: none !important;
}

/* Ensure Navbar Transparency */
nav::before,
nav::after,
.menu::before,
.menu::after {
    background: transparent !important;
    background-image: none !important;
    content: none !important;
}

/* Learn More Button Styling */
.home-text a {
    background: linear-gradient(
        45deg, 
        var(--ra-celestial-bronze),
        var(--ra-solar-orange)
    ) !important;
    color: var(--ra-sacred-amber) !important;
    border: 2px solid var(--ra-primary-gold) !important;
    transition: all 0.3s ease !important;
    text-shadow: 
        1px 1px 2px var(--ra-text-shadow) !important;
    padding: 10px 20px !important;
    border-radius: 8px !important;
    text-decoration: none !important;
    display: inline-block !important;
}

.home-text a:hover {
    background: linear-gradient(
        45deg, 
        var(--ra-solar-orange),
        var(--ra-sacred-amber)
    ) !important;
    transform: scale(1.05) !important;
    box-shadow: 
        0 0 15px rgba(255, 215, 0, 0.5),
        0 0 10px var(--ra-divine-crimson) !important;
    color: var(--ra-divine-crimson) !important;
}

/* Definitive Navigation Positioning */
nav {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    z-index: 9999 !important; /* Extremely high z-index */
    background-color: var(--ra-deep-purple) !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;
    padding: 15px 5% !important;
    display: flex !important;
    justify-content: space-between !important; /* Distribute space between left and right content */
    align-items: center !important;
    box-sizing: border-box !important;
    margin: 0 !important;
}

/* Ensure body has top padding to prevent content from being hidden */
body {
    padding-top: 80px !important; /* Adjust based on nav height */
}

/* Ensure all sections are below the navigation */
section {
    position: relative !important;
    z-index: 1 !important; /* Lower than nav */
}

/* Responsive Mobile Navigation */
@media screen and (max-width: 768px) {
    nav {
        padding: 15px 3% !important;
    }

    body {
        padding-top: 60px !important; /* Slightly less padding on mobile */
    }

    .menu {
        position: fixed !important;
        top: 60px !important; /* Match mobile nav height */
        left: -100% !important;
        width: 100% !important;
        height: calc(100vh - 60px) !important;
        background-color: var(--ra-deep-purple) !important;
        z-index: 9998 !important; /* Just below nav */
        transition: left 0.3s ease !important;
    }
}

/* Logo and Menu Item Styling */
.logo-container {
    display: flex !important;
    align-items: center !important;
    max-width: 50% !important;
}

.menu {
    display: flex !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
    max-width: 50% !important;
    justify-content: flex-end !important;
}

.menu li {
    margin-right: 0.8rem !important;
}

.menu a {
    text-decoration: none !important;
    color: white !important;
    font-size: 0.9rem !important;
    font-weight: bold !important;
    text-transform: uppercase !important;
    white-space: nowrap !important;
}

/* Toggle Button */
.toggle {
    display: none !important;
    color: white !important;
    cursor: pointer !important;
    margin-left: auto !important; /* Push to far right */
    font-size: 1.5rem !important;
}

@media screen and (max-width: 768px) {
    .toggle {
        display: block !important;
    }
}

/* Definitive Navigation Positioning and Layout */
nav {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    z-index: 9999 !important;
    background-color: var(--ra-deep-purple) !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;
    padding: 15px 5% !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    box-sizing: border-box !important;
    margin: 0 !important;
}

/* Logo Container - Always on the Left */
.logo-container {
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    gap: 15px !important;
    flex-grow: 0 !important;
    max-width: 100% !important;
    width: auto !important;
}

.logo {
    max-width: 50px !important;
    height: auto !important;
    margin-right: 15px !important;
}

.logo-container .menu-link {
    color: white !important;
    font-weight: bold !important;
    text-decoration: none !important;
    white-space: nowrap !important;
    font-size: 1.2rem !important;
    max-width: none !important;
}

/* Navigation Menu Wrapper - Push to Right */
.menu-wrapper {
    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
    margin-left: auto !important; /* Push to far right */
    gap: 15px !important;
}

.menu {
    display: flex !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
    justify-content: flex-end !important;
}

.menu li {
    margin-right: 0.8rem !important;
}

.menu a {
    text-decoration: none !important;
    color: white !important;
    font-size: 0.9rem !important;
    font-weight: bold !important;
    text-transform: uppercase !important;
    white-space: nowrap !important;
}

/* Toggle Button - Fully to the Right */
.toggle {
    display: none !important;
    color: white !important;
    cursor: pointer !important;
    font-size: 1.5rem !important;
    margin-left: 10px !important; /* Small margin from menu items */
}

/* Responsive Mobile Design */
@media screen and (max-width: 768px) {
    nav {
        padding: 15px 3% !important;
        flex-wrap: wrap !important;
    }

    .logo-container {
        width: 100% !important;
        justify-content: space-between !important;
        align-items: center !important;
    }

    .menu-wrapper {
        width: 100% !important;
        justify-content: space-between !important;
    }

    .menu {
        display: none !important;
        width: 100% !important;
        flex-direction: column !important;
        align-items: center !important;
        background-color: var(--ra-deep-purple) !important;
        position: fixed !important;
        top: 60px !important;
        left: -100% !important;
        height: calc(100vh - 60px) !important;
        z-index: 9998 !important;
        transition: left 0.3s ease !important;
    }

    .menu.active {
        left: 0 !important;
        display: flex !important;
    }

    .menu li {
        width: 100% !important;
        text-align: center !important;
        margin-right: 0 !important;
        margin-bottom: 10px !important;
    }

    .toggle {
        display: block !important;
    }
}

/* Home Section Centered Layout */
#home {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    min-height: 100vh !important;
    padding: 0 5% !important;
    box-sizing: border-box !important;
    flex-wrap: wrap !important;
}

#home .home-text {
    flex: 1 !important;
    text-align: center !important;
    max-width: 40% !important;
    padding: 20px !important;
    box-sizing: border-box !important;
}

#home .home-text h1 {
    font-size: 3rem !important;
    color: white !important;
    margin-bottom: 20px !important;
    line-height: 1.2 !important;
}

#home .home-text h1 span {
    color: var(--ra-dawn) !important;
}

#home .home-text a {
    display: inline-block !important;
    background-color: var(--ra-dawn) !important;
    color: white !important;
    padding: 12px 30px !important;
    text-decoration: none !important;
    border-radius: 30px !important;
    font-weight: bold !important;
    transition: all 0.3s ease !important;
    margin-top: 20px !important;
}

#home .home-text a:hover {
    background-color: var(--ra-sun-disk) !important;
    transform: scale(1.05) !important;
}

#home .home-img {
    flex: 1 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    max-width: 40% !important;
    padding: 20px !important;
    box-sizing: border-box !important;
}

#home .home-img img {
    max-width: 100% !important;
    height: auto !important;
    object-fit: contain !important;
}

#home .social {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 50px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    display: flex !important;
    gap: 20px !important;
}

#home .social a {
    color: var(--ra-sun-disk) !important;
    font-size: 1.5rem !important;
    transition: color 0.3s ease !important;
}

#home .social a:hover {
    color: var(--ra-dawn) !important;
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
    #home {
        flex-direction: column !important;
        padding: 80px 5% 50px !important;
    }

    #home .home-text,
    #home .home-img {
        max-width: 100% !important;
        text-align: center !important;
    }

    #home .home-text h1 {
        font-size: 2.5rem !important;
    }

    #home .social {
        position: relative !important;
        bottom: auto !important;
        left: auto !important;
        transform: none !important;
        justify-content: center !important;
        margin-top: 20px !important;
    }
}

@media screen and (max-width: 768px) {
    #home .home-text h1 {
        font-size: 2rem !important;
    }
}
