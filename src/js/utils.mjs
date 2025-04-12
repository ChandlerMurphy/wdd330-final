export function setConstants() {
    // Toggle for Hambuger Menu vvv
    const hamButton = document.querySelector("#hamburger");
    const ul = document.querySelector("ul");

    hamButton.addEventListener("click", () => {
        ul.classList.toggle("open-nav");
        hamButton.classList.toggle("open-ham");
    });

    // Footer Current Year vvv
    const year = document.querySelector("#currentyear");
    const today = new Date();
    year.innerHTML = today.getFullYear();

    // Footer Last Modified vvv
    const lastUpdated = document.querySelector("#lastUpdated");
    lastUpdated.innerHTML = (document.lastModified); 
}

export function loadHeaderFooter(activePage) {
    const header = `
        <nav>
            <div id="nav-header">
                <div id="nav-left">
                    <div id="nav-header-text">
                        <h1>B&D</h1>
                        <p>Beginners and Dungeons</p>
                    </div>
                </div>
                <button id="hamburger" title="menu-button"></button>
            </div>
            <ul>
                <li><a href="/" title="Home"${activePage === "home" ? ' class="active"' : ""}>Home</a></li>
                <li><a href="/tips/index.html" title="Tips"${activePage === "tips" ? ' class="active"' : ""}>Tips</a></li>
                <li><a href="/dice/index.html" title="Dice"${activePage === "dice" ? ' class="active"' : ""}>Dice</a></li>
                <li><a href="/bestiary/index.html" title="Bestiary"${activePage === "bestiary" ? ' class="active"' : ""}>Bestiary</a></li>
                <li><a href="/feedback/index.html" title="Feedback"${activePage === "feedback" ? ' class="active"' : ""}>Feedback</a></li>
            </ul>
        </nav>
    `;

    const footer = `
        <div id="right-footer">
            <h3>Chandler Murphy</h3>
            <p>chandlermurphy02@gmail.com</p>
            <p>(385) 377-4130</p>
        </div>
        <div id="social-footer">
            <a href="https://www.facebook.com/chandler.murphy.391" title="Chandler Facebook Profile Link">
                <img src="/images/fb-icon.png" alt="Facebook Logo">
            </a>
            <a href="https://www.linkedin.com/in/chandler-murphy/" title="Chandler Murphy Indeed Profile Link">
                <img src="/images/indeed-icon.png" alt="Indeed Logo">
            </a>
        </div>
        <div id="left-footer">
            <p>WDD 231 Final Project</p>
            <p>© <span id="currentyear"></span></p>
            <p class="last-updated">Last Modification: <span id="lastUpdated"></span></p>
        </div>
    `;

    document.getElementById("header").innerHTML = header;
    document.getElementById("footer").innerHTML = footer;
}

export function rollDice (numSides) {
    return Math.ceil(Math.random() * numSides);
}

export function setDice() {
    document.addEventListener("DOMContentLoaded", () => {
        let d4element = document.querySelector("#d4result");
        let d6element = document.querySelector("#d6result");
        let d8element = document.querySelector("#d8result");
        let d10element = document.querySelector("#d10result");
        let d12element = document.querySelector("#d12result");
        let d20element = document.querySelector("#d20result");
        let d100element = document.querySelector("#d100result");
        
        let d4button = document.querySelector("#d4button");
        let d6button = document.querySelector("#d6button");
        let d8button = document.querySelector("#d8button");
        let d10button = document.querySelector("#d10button");
        let d12button = document.querySelector("#d12button");
        let d20button = document.querySelector("#d20button");
        let d100button = document.querySelector("#d100button");

        d4button.addEventListener("click", () => {
            let diceResult = rollDice(4);
            d4element.textContent = diceResult;
        });
        
        d6button.addEventListener("click", () => {
            let diceResult = rollDice(6);
            d6element.textContent = diceResult;
        });
        
        d8button.addEventListener("click", () => {
            let diceResult = rollDice(8);
            d8element.textContent = diceResult;
        });
        
        d10button.addEventListener("click", () => {
            let diceResult = rollDice(10);
            d10element.textContent = diceResult;
        });
        
        d12button.addEventListener("click", () => {
            let diceResult = rollDice(12);
            d12element.textContent = diceResult;
        });
        
        d20button.addEventListener("click", () => {
            let diceResult = rollDice(20);
            d20element.textContent = diceResult;
        });
        
        d100button.addEventListener("click", () => {
            let diceResult = rollDice(100);
            d100element.textContent = diceResult;
        });
    });
}

export function setFormFields() {
    document.addEventListener("DOMContentLoaded", () => {
        const selectElement = document.querySelector("#favFeature");
      
        const features = [
          {
            location: "all",
            feature: "Color Scheme",
          },
          {
            location: "home",
            feature: "Home Layout",
          },
          {
            location: "all",
            feature: "Menu Buttons",
          },
          {
            location: "all",
            feature: "Page Viewport Responsiveness",
          },
          {
            location: "form",
            feature: "Feedback Form",
          },
          {
            location: "dice",
            feature: "Dice Rollers",
          },
          {
            location: "all",
            feature: "Navigation",
          },
          {
            location: "tips",
            feature: "Tips Page Content",
          },
        ];
      
        features.forEach(feature => {
            let newFeature = document.createElement("option");
            newFeature.value = feature.location;
            newFeature.text = feature.feature;
      
            selectElement.appendChild(newFeature);
        });
    });      
}

export function setFeedbackSuccess() {
    const showInfo = document.querySelector("#results");
    const rawData = localStorage.getItem("latestFeedback");

    if (!rawData) {
        showInfo.innerHTML = "<p>No feedback data found.</p>";
        return;
    }

    const data = JSON.parse(rawData);
    const numVisits = Number(localStorage.getItem("numVisits")) || 1;

    const starMap = {
        oneStar: "☆",
        twoStar: "☆☆",
        threeStar: "☆☆☆",
        fourStar: "☆☆☆☆",
        fiveStar: "☆☆☆☆☆"
    };

    showInfo.innerHTML = `
    <p><span class="results-title">Name: </span><br><br>${data.userName || "NA"}</p>
    <p><span class="results-title">Date: </span><br><br>${data.reviewDate || "NA"}</p>
    <p><span class="results-title">Site Rating: </span><br><br>${starMap[data.starRating] || "NA"}</p>
    <p><span class="results-title">Favorite Feature: </span><br><br>${data.favFeature || "NA"}</p>
    <p><span class="results-title">Referral Source: </span><br><br>${data.writtenReview || "NA"}</p>
    <p><span class="results-title">Feedback Given: </span><br><br>${data.feedback || "NA"}</p>
    <p><span class="results-title">Total Number of Feedback Forms Submitted: </span><br><br>${numVisits}</p>
    `;

    localStorage.removeItem("latestFeedback");
}