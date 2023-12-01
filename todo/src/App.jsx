import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  return (
    <>
      <Header />
      <div className="w-full h-full py-10 flex gap-10 flex-col justify-center items-center">
        <Input />
        <div className="flex justify-center items-center flex-wrap gap-10">
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          
          
          </div>
      </div>
    </>
  );
}

export default App;
