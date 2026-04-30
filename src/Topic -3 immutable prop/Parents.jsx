import Child from "./Child";

const Parents = () => {
  const user = {
    username: "Ram",
    age: 26,
    address: {
        city:"Delhi"
        
    }
  };

  return (
    <div>
      {/* child username={username} age={age} */}
      <Child user={user} />
    </div>
  );
};
