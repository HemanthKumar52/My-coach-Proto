const philosophyQuotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Your limitation—it's only your imagination. - Unknown",
  "Great things never come from comfort zones. - Neil Strauss",
  "Dream it. Wish it. Do it. - Unknown",
  "Success doesn't just find you. You have to go out and get it. - Unknown",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "Dream bigger. Do bigger. - Unknown",
  "Don't stop when you're tired. Stop when you're done. - Unknown",
  "Wake up with determination. Go to bed with satisfaction. - Unknown",
  "Do something today that your future self will thank you for. - Sean Patrick Flanery",
  "Little things make big days. - Unknown",
  "It's going to be hard, but hard does not mean impossible. - Unknown",
  "Don't wait for opportunity. Create it. - Unknown",
  "Sometimes we're tested not to show our weaknesses, but to discover our strengths. - Unknown",
  "The key to success is to focus on goals, not obstacles. - Unknown"
];

function getRandomQuote() {
  try {
    const randomIndex = Math.floor(Math.random() * philosophyQuotes.length);
    const selectedQuote = philosophyQuotes[randomIndex];
    return selectedQuote;
  } catch (error) {
    console.error('getRandomQuote error:', error);
    return "Learning is a journey, not a destination. - MyCoach";
  }
}

// Expose globally for both index.html and dashboard.html consumers
window.getRandomQuote = getRandomQuote;
window.philosophyQuotes = philosophyQuotes;