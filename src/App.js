import { useEffect, useState } from "react";
import Display from "./Component/Display";
import Search from "./Component/Search";

function App(props) {
  const [Data, setData] = useState([]);
  const [Title, setTitle] = useState("");

  const GetData = async () => {
    let API = "";
    if (Title == "") {
      API =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    } else {
      API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${Title}`;
    }
    console.log(API);
  
    const response = await fetch(API);
    const json = await response.json();
    console.log(json.results);
    if (
      json.results == null ||
      json.results == undefined ||
      json.results.length < 0
    ) {
      //data empty
    } else {
      setData(json.results);
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    GetData();
  }, [Title]);

  const ChangeHandler = (value) => {
    setTitle(value);
  };
  return (
    <div>
      <Search title={Title} handler={ChangeHandler} />
      <Display data={Data} />
    </div>
  );
}

export default App;
