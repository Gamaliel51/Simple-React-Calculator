export default function Button(props){
    let items = props.vals
    return(
        <tr>
        {
            items.map((m, index) => {
                if(m === "="){
                    return <td><input type="button" value={m} onClick={(e) => props.func(m)} style={{backgroundColor: "green"}}/></td>
                }
                else if(m === "√"){
                    return <td><input type="button" value={m} onClick={(e) => props.func("√(")}/></td>
                }
                else if(m === "ln"){
                    return <td><input type="button" value={m} onClick={(e) => props.func("ln(")} style={{fontSize: "13px"}}/></td>
                }
                else if(m === "×"){
                    return <td><input type="button" value={m} onClick={(e) => props.func(m)} style={{fontSize: "17px"}}/></td>
                }
                else if(m === "+"){
                    return <td><input type="button" value={m} onClick={(e) => props.func(m)} style={{fontSize: "15px"}}/></td>
                }
                else if(m === "C"){
                    return <td><input type="button" value={m} onClick={(e) => props.funct()} style={{backgroundColor: "#fb0066"}}/></td>
                }
                else if(m === "CE"){
                    return <td><input type="button" value={m} onClick={(e) => props.func(m)} style={{backgroundColor: "#fb0066"}}/></td>
                }
                else if(m === ""){
                    return <td></td>
                }
                else{
                    return <td><input type="button" value={m} onClick={(e) => props.func(m)}/></td>
                }
            })
        }
        </tr>
    )
}
