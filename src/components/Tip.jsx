import './Tip.css'

const Tip = ({ tip }) => {
  return (
    <div className='Tip'>
      <h4>{tip.title}</h4>
      <div dangerouslySetInnerHTML={{__html: tip.description}} />
    </div>
  );
};

export default Tip;
