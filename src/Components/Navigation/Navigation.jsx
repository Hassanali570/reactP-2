import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
        <nav className={`${styles.navigations} Container`}> 
            <div className='logo'>
                <img src="public\images\logo.png" alt="do some coding" />
            </div>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
        </nav>
    </>
  )
}

export default Navigation