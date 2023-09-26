import message from './asserts/messenger.png'
function Header() {
  return (
    <div className='header'>
        <div className='header-text'>Textito</div>
        <img className='messages' src={message}></img>
    </div>
  )
}

export default Header;
