import '../App.css'

interface SpaceProps {
    number:  string
    measure: string
    onSelectNote: (item: string) => void
}

function Space(props: SpaceProps) {
    return(
        <div
            className={'space'}
            key={'M' + props.measure + ' ' + props.number}
            onClick= { () => {
                props.onSelectNote('M' + props.measure + ' ' + props.number)
            }}
        >
            {}
        </div>)
}

export default Space

