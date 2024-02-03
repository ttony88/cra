import { useState } from "react"

type AccordionPropsType = {
	title: string
}

function Accordion(props: AccordionPropsType) {

	const [collapsed, setCollapsed] = useState(true)

	const toggleCollapsed = () => {
		setCollapsed(!collapsed)
	}

	return(
		<div>
			<AccordionTitle title={props.title} toggleCollapsed={toggleCollapsed} />
			{!collapsed && <AccordionBody />}
		</div>
	)
	
}

type AccordionTitlePropsType = {
	title: string
	toggleCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

	return(
		<h3 onClick={props.toggleCollapsed}>{props.title}</h3>
	)
}

function AccordionBody() {
	
	return(
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
		</ul>
	)
}

export default Accordion 