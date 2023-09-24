import message from './messenger.png'
function Header() {
  return (
    <div className='header'>
        <div className='header-text'>Textito</div>
        <img className='message' src={message}></img>
    </div>
  )
}

export default Header;
