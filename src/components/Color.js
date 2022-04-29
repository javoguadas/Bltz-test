export default function Color(props){

    function handleChange(e){
        props.setColor(e.target.value) ;

    }   
      return (
        <select 
            onChange={handleChange}
            value={props.color}
        >
            {props.option.map((color) => (
            <option key={color} value={color}> {color.toUpperCase()}</option> 
            ))}
        </select>
      )
}
