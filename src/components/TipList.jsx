import Tip from "./Tip";
import './TipList.css';

const TipList = ({ tips }) => {

  return (
    <div className="TipList">
      {tips.map((tip, index) => (<Tip key={index} tip={tip}/>))}
    </div>
  );
};


export default TipList;
