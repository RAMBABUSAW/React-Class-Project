import Card from "./Card";

const Parent = () => {
  const player1 = {
    username: "Rohit shrama",
    age: 38,
    Team: "mi",
    skills: "Batting",
  };
  const player2 = {
    username: "Rinku Singh",
    age: 38,
    Team: "KKR",
    skills: "Batting",
  };
  const player3 = {
    username: "MS Dhoni",
    age: 38,
    Team: "CSK",
    skills: "Batting",
  };
  const player4 = {
    username: "JASWAL",
    age: 38,
    Team: "RR",
    skills: "Batting",
  };
  return (
    <div className="parent-component">
      <Card {...player1} />
      <Card {...player2} />
      <Card {...player3} />
      <Card {...player4} />
    </div>
  );
};

export default Parent;
