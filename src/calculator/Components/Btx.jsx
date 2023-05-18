function Btx({digit, setPrevious, Previous}){
    return (
        <button onClick={()=>{
            setPrevious([...Previous,digit])
        }}>{digit}</button>
    )
}
export default Btx;