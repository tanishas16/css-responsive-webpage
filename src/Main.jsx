import Card from "./Cards";
import Mdata from "./Mdata";
const Main = () => {
  return (
    <>
      <header>List of top 5 Selena Gomez movies</header>

      {Mdata.map((val) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            mtitle={val.title}
            mname={val.name}
            mlink={val.link}
          />
        );
      })}
    </>
  );
};
export default Main;
