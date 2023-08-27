const challenges = [
  "Use a reusable water bottle today.",
  "Avoid single-use plastics during lunch.",
  "Walk or bike instead of driving.",
  "Plant a small indoor plant.",
  "Conserve energy by turning off unused lights.",
  "Collect and properly dispose of plastic waste in your area.",
  "Cook a vegetarian meal for the day.",
  "Take a five-minute shorter shower today.",
  "Bring a reusable bag when you go shopping.",
  "Unplug electronic devices when they're not in use.",
  "Try carpooling or using public transportation.",
  "Use a reusable coffee cup for your morning coffee.",
  "Start a compost bin for your food scraps.",
  "Use a cloth napkin instead of paper at mealtime.",
  "Reduce your meat consumption by having a meatless day.",
  "Turn off the faucet while brushing your teeth.",
  "Reuse a glass jar for storage instead of buying new containers.",
  "Use natural cleaning products instead of harsh chemicals.",
  "Read an article or watch a documentary about environmental issues.",
  "Upcycle an old item into something new and useful.",
  "Shop locally to reduce carbon emissions from transportation.",
  "Donate or recycle clothes you no longer wear.",
  "Turn down your thermostat by a few degrees and wear a sweater.",
  "Fix a leaky faucet or running toilet to save water.",
  "Declutter your living space and recycle unwanted paper and plastic.",
  "Explore a nearby park or nature trail and pick up litter you find.",
  "Start a habit of turning off lights when you leave a room.",
  "Write a letter to your local representatives advocating for eco-friendly policies.",
  "Research and support a local sustainable business.",
  "Calculate your carbon footprint and set a goal to reduce it.",
  "Plan a plant-based meal with locally sourced ingredients.",
  "Host a virtual eco-friendly movie night and discuss its message with friends.",
];

const pointsDisplay = document.getElementById("points");
const trophiesDisplay = document.getElementById("trophies");
const userTitleDisplay = document.querySelector(".user-title");
const motivationBanner = document.querySelector(".motivation-banner");
const motivationButton = document.querySelector(".motivation-cta");
const reminder = document.querySelector(".reminder");
const motivationalMessageContainer = document.querySelector(".motivational-message");
const randomNameDisplay = document.getElementById("random-name");
const randomScoreDisplay = document.getElementById("random-score");
const tickerList = document.querySelector(".ticker-list");

let points = 0;
let trophies = "";
let currentChallengeIndex = 0;

const userTitles = {
  0: "🌱 Eco Newbie",
  50: "🌿 Eco Apprentice",
  100: "🌳 Eco Enthusiast",
  200: "🌎 Eco Champion",
  300: "🕊️ Eco Hero!"
};

const motivationalMessages = [
  "You're making a positive impact on the planet, keep up the great work!",
  "Every small step counts. You're on your way to a greener future!",
  "Your efforts are making a difference in building a sustainable world.",
  "By taking these actions, you're inspiring others to join the movement.",
  "Your commitment to eco-friendly choices is contributing to a better environment.",
  "You're a true eco-champion! Your dedication is changing the world for the better.",
  "Thank you for your efforts in creating a more sustainable future."
];

const names = [
  "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Isabella", "Jack",
  "Jisoo", "Seojin", "Sungmin", "Sophia", "Haeun", "Michael", "Jiyoung", "Minho", "Donghae",
  "Yuna", "Taeyang", "Minji", "Joonho", "Eunbi", "Siwoo", "Yebin", "Hyunwoo", "Sunmi"
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function displayChallenges() {
  const gameContainer = document.querySelector(".game-container");
  gameContainer.innerHTML = ''; // Clear existing challenges
  if (currentChallengeIndex < challenges.length) {
    const challengeItem = document.createElement("div");
    challengeItem.classList.add("challenge");
    challengeItem.innerHTML = `
      <h3>Day ${currentChallengeIndex + 1}</h3>
      <p>${challenges[currentChallengeIndex]}</p>
      <button class="complete-button">Complete</button>
      <button class="next-challenge-button" style="display: none;">Next Challenge</button>
    `;
    const completeButton = challengeItem.querySelector(".complete-button");
    const nextChallengeButton = challengeItem.querySelector(".next-challenge-button");

    completeButton.addEventListener("click", () => {
      completeChallenge();
      completeButton.style.display = "none";
      nextChallengeButton.style.display = "block";
    });

    nextChallengeButton.addEventListener("click", () => {
      nextChallengeButton.style.display = "none";
      displayChallenges();
    });

    gameContainer.appendChild(challengeItem);
  } else {
    gameContainer.innerHTML = '<p>Congratulations! You have completed all challenges.</p>';
  }
}

function displayMotivationBanner() {
  motivationBanner.style.display = "block";
  motivationButton.addEventListener("click", () => {
    motivationBanner.style.display = "none";
    displayChallenges();
  });
}

function showReminder() {
  reminder.style.display = "block";
}

function completeChallenge() {
  points += 10;
  trophies += "🏆";
  currentChallengeIndex++;
  updateDisplays();
  showReminder();
  updateUserTitle();
  updateLeaderboardTicker();
  displayMotivationalMessage();
}

function updateDisplays() {
  pointsDisplay.textContent = points;
  trophiesDisplay.textContent = trophies;
}

function updateUserTitle() {
  let newTitle = "🌱 Eco Newbie";
  for (const pointsThreshold in userTitles) {
    if (points >= parseInt(pointsThreshold)) {
      newTitle = userTitles[pointsThreshold];
    }
  }
  userTitleDisplay.textContent = newTitle;
}

function displayMotivationalMessage() {
  const motivationalMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
  const messageElement = document.createElement("p");
  messageElement.textContent = motivationalMessage;
  motivationalMessageContainer.innerHTML = '';
  motivationalMessageContainer.appendChild(messageElement);
}

function updateLeaderboardTicker() {
  tickerList.innerHTML = "";
  
  const leaderBoardTitle = document.createElement("span");
  leaderBoardTitle.classList.add("ticker-title");
  leaderBoardTitle.textContent = "Leader Board ";
  tickerList.appendChild(leaderBoardTitle);

  for (let i = 0; i < 5; i++) {
    const randomName = getRandomArrayElement(names);
    const randomScore = points + getRandomNumber(20, 60);
    const tickerItem = document.createElement("li");
    tickerItem.classList.add("ticker-item");
    tickerItem.textContent = `${randomName}: ${randomScore}`;
    tickerList.appendChild(tickerItem);
  }
}

updateLeaderboardTicker();
displayMotivationBanner();