import ImageTextContainer from "../components/reusable/Container";
import Button from "../components/reusable/Button";

export default function HomePage() {
  return (
    <div className="space-y-10 p-6">
      <h1 className="text-3xl font-bold text-center">Reusable Button and Container</h1>
      {/* Normal layout */}
      <ImageTextContainer
        imageSrc="/images/casino-1.jpg"
        title="Play & Win"
        description="Compete with players and win exciting rewards."
      >
        <Button variant="primary" size="medium" rounded="medium">Get Started</Button>
      </ImageTextContainer>

      {/* Reversed layout */}
      <ImageTextContainer
        imageSrc="/images/casino-2.jpg"
        title="Daily Competitions"
        description="Join daily matches and climb the leaderboard."
        reverse
      >
        <Button variant="danger" size="medium" rounded="medium">View Matches</Button>
      </ImageTextContainer>
    </div>
  );
}
