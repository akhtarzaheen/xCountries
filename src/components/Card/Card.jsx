export const Card = ({name,flag,abbr}) => {
  return <>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",textAlign: "center",gap: "10px",border: "1px solid black",height:"200px",width:"200px"}}>
        <img src={flag} alt={abbr} style={{height:"100px",width:"100px"}}/>
        <h5>{name}</h5>
    </div>
  </>;
};