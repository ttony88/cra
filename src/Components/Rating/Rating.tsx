import { useState } from "react"

function Rating() {

    const [value, setValue] = useState(0)

    const assignValueCreator = (value: number) => {
        return () => setValue(value)
    }

    return(
        <div>
            <Star assignValueCreator={assignValueCreator(1)} selected={value > 0} />
            <Star assignValueCreator={assignValueCreator(2)} selected={value > 1} />
            <Star assignValueCreator={assignValueCreator(3)} selected={value > 2} />
            <Star assignValueCreator={assignValueCreator(4)} selected={value > 3} />
            <Star assignValueCreator={assignValueCreator(5)} selected={value > 4} />
        </div>
    )
}
    
type StarPropsType = {
    selected: boolean
    assignValueCreator: () => void
}

function Star(props: StarPropsType) {
 
    const onClickHandler = () => props.assignValueCreator()

    const starSelectedStyle = {
        fontWeight: 900,
    }

    const starStyle = {
        fontWeight: 400,
    }

    return(
        <span onClick={onClickHandler} style={props.selected ? starSelectedStyle: starStyle}>
            star
        </span>
    )
}

export default Rating