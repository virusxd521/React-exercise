import Term from "./Term";
import './App.css';
import Quora from "./Quora";

const dataObj = {
  head: "Antidisestablishmentarianism",
  text: "A political position that developed in 19th-century Britain in opposition to Liberal proposals for the disestablishment of the Church of England—meaning the removal of the Anglican Church's status as the state church of England, Ireland, and Wales. The establishment was maintained in England, but in Ireland, the Church of Ireland (Anglican) was disestablished in 1871. In Wales, four Church of England dioceses were disestablished in 1920 and became the Church in Wales.",
  titleQuora: "What's up with chocolate?",
  questionQuora: "How come chocolate is so fucking tasty?"
}



function App() {
  return (
    <div className="App">
      <Term head={dataObj.head} text={dataObj.text} />
      <Quora title={dataObj.titleQuora} question={dataObj.questionQuora} />
      <Quora title={dataObj.titleQuora} question={dataObj.questionQuora} />
    </div>
  );
}

export default App;
