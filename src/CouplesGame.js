import { useState } from "react";

const rounds = {
  "If You Really Knew Me…": [
    "What’s a small, weird habit you have that most people don’t notice?",
    "What’s something you secretly wish you were really good at?",
    "What song instantly puts you in a good mood, even if it’s embarrassing?",
    "What’s the most random thing that made you cry (or almost cry)?",
    "What’s a childhood game or toy you miss playing with?",
    "What’s your guilty pleasure TV show or movie you could watch on repeat?",
    "What’s something you pretend to like because I love it?",
    "What’s one of your irrational fears that makes no sense but feels real?",
    "What’s a smell that instantly brings you back to a good memory?",
    "What’s a “shower thought” you’ve had that actually blew your mind?"
  ],
  "Would You Rather: Couple’s Edition": [
    "Would you rather have a personal chef or a live-in masseuse?",
    "Would you rather travel the world together for a year or have your dream house built tomorrow?",
    "Would you rather be able to read each other’s thoughts for a day or relive your first date?",
    "Would you rather win $50,000 or spend a week in a luxury treehouse with me—completely off-grid?",
    "Would you rather be in a silly sitcom relationship or a dramatic soap opera one?",
    "Would you rather be stuck in a romantic comedy or a survival movie—with me?",
    "Would you rather go on a spontaneous road trip or a meticulously planned vacation?",
    "Would you rather relive your wedding day or your first vacation together?",
    "Would you rather always be 10 minutes late as a couple, or 30 minutes early?",
    "Would you rather live in a cabin in the woods or a penthouse in a big city—with me forever?"
  ],
  "Us, Reimagined": [
    "If our love story was a movie, what would the title be?",
    "If we started a business together, what would it be?",
    "What’s one thing we’ve never done as a couple that you think we totally should?",
    "If we could teleport to any moment in our past together, which one would you choose to relive?",
    "If you could give us a couple nickname (like 'Bennifer'), what would it be?",
    "If we were cartoon characters, who would we be and what would our theme song be?",
    "If we made a time capsule of our relationship, what 3 things would you put in it?",
    "What’s a quirky tradition we should start just for fun?",
    "If we ruled a tiny island kingdom, what would our national law be?",
    "If you had to design a tattoo to represent our relationship, what would it look like?"
  ],
  "Truth or Tell": [
    "What’s something you’ve always admired about me but never said?",
    "What’s one way I can support you better without even asking?",
    "When do you feel most loved by me?",
    "What’s something that scared you about being in a long-term relationship—but doesn’t anymore?",
    "What’s a dream or goal you’ve quietly held onto and want to share?",
    "What’s something I do that makes you feel truly seen?",
    "What part of our relationship are you most proud of?",
    "When did you first realize, ‘This person really gets me’?",
    "What’s a time I made you feel especially supported?",
    "What’s something you want to do better for us as a couple?"
  ]
};

function getRandomQuestions(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function CouplesGame() {
  const [currentRound, setCurrentRound] = useState(0);
  const [playerQuestions, setPlayerQuestions] = useState({});

  const roundKeys = Object.keys(rounds);
  const totalRounds = roundKeys.length;

  const nextRound = () => {
    if (currentRound < totalRounds) {
      const round = roundKeys[currentRound];
      const selectedQuestions = getRandomQuestions(rounds[round], 4);
      setPlayerQuestions({
        round,
        player1: selectedQuestions[0],
        player2: selectedQuestions[1],
        extras: selectedQuestions.slice(2)
      });
      setCurrentRound(currentRound + 1);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Couples Game Night</h1>
      {currentRound === 0 ? (
        <button
          onClick={nextRound}
          style={{ margin: "1rem auto", display: "block", padding: "0.5rem 1rem", fontSize: "16px" }}
        >
          Start Game
        </button>
      ) : currentRound <= totalRounds ? (
        <div>
          <h2>Round {currentRound}: {playerQuestions.round}</h2>
          <div style={{ marginBottom: "1rem" }}>
            <strong>Player 1:</strong> {playerQuestions.player1}
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <strong>Player 2:</strong> {playerQuestions.player2}
          </div>
          <button
            onClick={nextRound}
            style={{ marginTop: "1rem", padding: "0.5rem 1rem", fontSize: "16px" }}
          >
            Next Round
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Game Over</h2>
          <p>Thanks for playing!</p>
        </div>
      )}
    </div>
  );
}
