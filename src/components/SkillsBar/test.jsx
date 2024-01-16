export function Stack ( { title, icon: Icon }) {
//   const isString = typeof Icon === "string";
//   console.log(Icon === "string");

console.log(title)
  return (
    <div>
      <h1>{title}</h1>
      {/* {isString ? (
        <img src={Icon} alt={title} title={title} height="84px" width="84px" />
      ) : (
        <Icon size={140} color="aliceblue" />
        // #623CEA
      )} */}
    </div>
  );
};
