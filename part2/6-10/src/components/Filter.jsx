const Filter = (props) => {
  return(
    <form>
      filter: <input value={props.value} onChange={props.onChange} />
    </form>
  )
}

export default Filter