const philosophyQuotes = [
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
  "The mind is not a vessel to be filled, but a fire to be kindled. - Plutarch",
  "Learning never exhausts the mind. - Leonardo da Vinci",
  "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
  "Education is not preparation for life; education is life itself. - John Dewey",
  "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. - Brian Herbert",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
  "The expert in anything was once a beginner. - Helen Hayes",
  "Success is the sum of small efforts repeated day in and day out. - Robert Collier"
];

function getRandomQuote() {
  try {
    const randomIndex = Math.floor(Math.random() * philosophyQuotes.length);
    return philosophyQuotes[randomIndex];
  } catch (error) {
    console.error('getRandomQuote error:', error);
    return "Learning is a journey, not a destination.";
  }
}