import Button from "./Button";

const buttonList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "News",
  "Cricket",
  "Cooking",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonList.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
