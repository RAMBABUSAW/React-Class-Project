const Card = ({ username = "Rambabu saw", age, skill, team, jersy }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "300px",
        padding: "20px 30px",
        marginTop: "20px",
      }}
    >
      <h4>username: {username}</h4>
      <h4>Age : {age}</h4>
      <h4>Team :{team}</h4>
      <h4>skill : {skill}</h4>
      <h4>jersy: {jersy}</h4>
    </div>
  );
};
export default Card;
