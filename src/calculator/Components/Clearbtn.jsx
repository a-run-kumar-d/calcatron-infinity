function Clearbtn({digit, setPrevious, setSolution}){
    return(
        <button className="spanitem" onClick={()=>{
            setPrevious('')
            setSolution('')
        }}>{digit}</button>
    )
}
export default Clearbtn