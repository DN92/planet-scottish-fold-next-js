import supabase from '@/lib/supabaseConfig/serviceConnection';
import KittenSingleton from '../_cattery_subcomponents/KittenSingleton';
import styles from './kittens.module.css';

const Kittens:() => Promise<JSX.Element> = async () => {

  const { data, error } = await supabase.from('kitten').select();
  const kittens: Array<KittenSchema> = data as Array<KittenSchema> ?? [];

  const availableKittens: Array<KittenSchema> = kittens.filter((kitten: KittenSchema) => (
    kitten.status === 'Reserved'
  ));

  const soldKittens: Array<KittenSchema> = kittens.filter((kitten: KittenSchema) => (
    kitten.status === 'Sold'
  ))
    .sort((a: KittenSchema, b: KittenSchema) => (b.price - a.price))
    .slice(0, 15);

  return (
    <div>
      <h2 className={styles.h2}>Available Kittens</h2>
      <section className={`${styles.kitten_section}`}>
        {availableKittens.map((kitten: KittenSchema) => (
          <KittenSingleton
            key={kitten.id}
            kitten={kitten}
            wrapperClasses={['background100']}
          />
        ))}
      </section>
      <h2 className={styles.h2}>Sold Kittens</h2>
      <section className={styles.kitten_section}>
        {soldKittens.map((kitten: KittenSchema) => (
          <KittenSingleton
            key={kitten.id}
            kitten={kitten}
            wrapperClasses={['background500']}
          />
        ))}
      </section>
    </div>
  );
};

export default Kittens;
