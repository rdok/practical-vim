import './Tip.css';

const Tip = ({ tip }) => {
  const { title, description, chords = [] } = tip;

  return (
    <div className='Tip'>
      <h4>{title}</h4>
      <div dangerouslySetInnerHTML={{ __html: description }}/>
      <br/>

      {chords.map((chord, index) => {
        return (
          <div key={index}>
            <code>{chord.keystrokes}</code> {chord.description}
          </div>
        );
      })}
    </div>
  );
};

export default Tip;
