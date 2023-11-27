type AccordionPropsType = {
	title: string
	collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

	if(props.collapsed) {

		return(
			<div>
				<AccordionTitle title={props.title}/>
			</div>
		)
	}
	return(
		<div>
			<AccordionTitle title={props.title}/>
			<AccordionBody />
		</div>
	)
}

type AccordionTitlePropsType = {
	title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
	
	return(
		<h3>{props.title}</h3>
	)
}

function AccordionBody() {
	
	return(
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	)
}

export default Accordion 