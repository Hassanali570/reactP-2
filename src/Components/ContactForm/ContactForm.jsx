import Buttons from "../Buttons/Buttons"
import styles from "./ContactForm.module.css"
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";

const ContactForm = () => {
  const onSubmit = (event) =>{
    event.preventDefault();
    console.log(event);
  }
  return (
    <>
        <section className={`${styles.container}`}>
            <div className={`${styles.contact_form}`}>
            <div className={styles.top_btn}>
                <Buttons text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="18px"/>} />
                <Buttons text="VIA CALL" icon={<FaPhoneAlt fontSize="18px"/>} />
            </div>
            
                <Buttons isOutline={true} text="VIA EMAIL FORM" icon={<MdMessage fontSize="18px"/>} />
            <form onSubmit={onSubmit}>
              <div className={styles.form_control}>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" />
              </div>
              <div className={styles.form_control}>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" />
              </div>
              <div className={styles.form_control}>
                  <label htmlFor="text">Message</label>
                  <textarea name="text" rows="5" />
              </div>
              <div style={{
                  display:"flex",
                  justifyContent:"end",

              }}  >
              <Buttons text="Submit"  />
              </div>
            </form>
            </div>
            <div className={`${styles.contact_image}`}>
                <img src="\images\form_img.svg" alt="" />
            </div>
        </section>
    </>
  )
}

export default ContactForm