const ContactForm = ({name, number, nameChange, numberChange, click}) => {
  return (
    <>
      <form>
        <div>name: <input value={name} onChange={nameChange}/></div>
        <div>number: <input value={number} onChange={numberChange}/></div>
        <div><button type="submit" onClick={click}>add</button></div>
      </form>
    </>
  )
}

export default ContactForm