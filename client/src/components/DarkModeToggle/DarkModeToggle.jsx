function DarkModeToggle(props) {
  return (
    <>
    <button className='dark-mode-toggle'  onClick={() => {props.toggleDark()}}>
        Toggle
    </button>
    </>
  )
}

export default DarkModeToggle