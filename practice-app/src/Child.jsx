function Child(props){
    console.log(props);
    
    return(
        <h1>HELLO H! FROMC CHILD  {props.fn()}</h1>
      
    )
}
export default Child;