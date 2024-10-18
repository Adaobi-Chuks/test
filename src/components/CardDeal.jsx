import { sendtoken } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`${layout.section} mb-20`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Blockchain Payments <br className="sm:block hidden" /> at Your Fingertips.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Forget about long wallet addresses and complicated steps! With our platform, sending and receiving payments is as simple as using your phone. All you need is a phone number or an easy-to-remember domain name to transfer tokens instantly.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={sendtoken} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
