import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MyButton from '@common/MyButton';
import { XCircleIcon } from '@heroicons/react/outline'
import logo from "@assets/images/danibosna-logo.webp";
import styles from '@styles/sass/containers/ErrorBox.module.sass';

const ErrorBox = () => {

  return (
    <section className={styles.errorBox}>
      <div className={styles.error}>
        <Link href="/" passHref>
          <MyButton>
            <XCircleIcon className={styles.closeLinkIcon} />
          </MyButton>
        </Link>
        <figure>
          <Image src={logo} alt={"danibosna"} layout="intrinsic"/>
        </figure>
        <div className={styles.info}>
          <h2 className={styles.titles}>Error. 404</h2>
          <p>
            <strong>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime quos deleniti corporis alias, perferendis ea repellendus dolores quia? Earum magnam soluta quo. Dolorem similique ipsa, beatae et qui veritatis!
              Repellat, necessitatibus commodi quibusdam consequuntur dolorem ducimus neque corrupti ratione? Delectus, aliquam labore itaque minima, molestiae et tempora voluptates accusantium ipsa, nobis recusandae reprehenderit. Accusamus maiores deserunt rem quisquam quas.
              Nobis magni ea quibusdam corporis. Suscipit maiores eos, architecto quam voluptate repellendus doloribus veniam ipsa modi, ea est tempore laudantium eligendi id aspernatur hic eaque pariatur provident veritatis doloremque in!
              Ullam aliquam vitae adipisci est dolore ab nostrum, reiciendis nobis veritatis atque accusamus commodi necessitatibus quia placeat provident, sint impedit quo odio, a vero eligendi labore eius. Nisi, sapiente vero?
              Nobis eos fuga, repellendus corrupti illo aspernatur commodi dolores sit. Repudiandae mollitia dolorem amet, error fugiat repellat minima itaque quam esse excepturi. Itaque molestias, molestiae odio tempora animi odit quos?
              Nulla, voluptatem atque! Alias explicabo cumque, placeat eaque vel officia possimus corrupti voluptatem, mollitia a eum adipisci delectus omnis vitae fugiat aliquam facilis aut iure non quo exercitationem, excepturi in?
              Ducimus commodi nihil ad voluptatibus atque expedita non sed officia repellendus rem modi culpa optio nemo, laborum, labore eos. Aut quod a ab facere inventore accusamus necessitatibus vero ad iure.
              Assumenda distinctio fugit voluptate aspernatur dignissimos voluptas harum hic fugiat rerum quam doloremque repellendus architecto explicabo voluptatum impedit labore, repudiandae quis in vel et exercitationem quibusdam odit ducimus perspiciatis. Provident.
              In aut, at inventore laboriosam nam libero laudantium qui sint ducimus aliquam esse tempore delectus a natus. Quisquam quae obcaecati dolores explicabo amet vel, fugit error vitae, ex, eaque a?
              Alias, amet ullam labore mollitia suscipit veritatis ut facilis nostrum minima itaque tenetur quibusdam veniam rerum harum temporibus ipsam dolorum hic officia quod cum. Et quam mollitia pariatur fuga debitis?
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ErrorBox;