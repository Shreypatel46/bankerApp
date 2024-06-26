import { card } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
         Find a better Card deal <br className='sm:block hidden'/>
          in Few Easy Steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] pt-5`}>
        Arcu tortor, purus in mattis at sed intefer faucibus. Aliquet quis eget mauris tortor.
      </p>
      <Button styles="mt-10"  />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]'/>

    </div>
  </section>
)

export default CardDeal
