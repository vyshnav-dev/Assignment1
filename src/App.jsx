import { useState, useEffect } from "react";
import "./App.css";
import TodoContainer from "./Components/TodoContainer";
import { ColorRing } from "react-loader-spinner";

function App() {
  const [json, setjson] = useState([]);
  const [loading, setLoading] = useState(false);

  // -------Api Fetching----------

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setjson(json);
          setLoading(true);
        }, 1000);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <TodoContainer jsonTodos={json} />
      ) : (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
    </div>
  );
}

export default App;
