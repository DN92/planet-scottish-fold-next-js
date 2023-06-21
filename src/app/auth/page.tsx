import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { getUserAsync } from '@/lib/functions/getUserAsync';
import styles from './auth.module.css';

// TODO
// add parameter for sign in / sign up and combine routes

export default async function Login(): Promise<JSX.Element> {

  const user = await getUserAsync();

  const handleSignUp = async (formData: FormData): Promise<void> => {
    'use server';

    const email = String(formData.get('email'));
    const pw = String(formData.get('password'));
    const confirmPw = String(formData.get('confirmPW'));

    const supabase = createServerActionClient({ cookies });

    const { data, error } = await supabase.auth.signUp({
      email,
      password: pw,
      options: {
        // emailRedirectTo: `${window.location.origin}/auth/callback`,
        emailRedirectTo: '$http://localhost:3000/auth/callback',
      },
    });

    if (data) console.log('A user has signed up :: ', email, ' + ', data);
    if (error) console.log('Error occured during sign up:: ', error);
  };

  const handleSignIn = async (formData: FormData): Promise<void> => {
    'use server';

    const email = String(formData.get('email'));
    const pw = String(formData.get('pw'));

    const supabase = createServerActionClient({ cookies });
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: pw,
    });
    const { data: { session } } = await supabase.auth.getSession();
  };

  const handleSignOut = async (): Promise<void> => {
    // const { error } = await supabase.auth.signOut();
  };

  return (
    <>
      <form className={styles.auth_container} action={handleSignIn}>
        <h2 className={styles.auth_container_h2}>Sign in</h2>
        <div className={styles.auth_container_section}>
          <div className={styles.auth_section_partition}>
            <label
              className={styles.auth_section_partition_span1}
              htmlFor="input_email"
            >
              Email Address
            </label>
          </div>
          <div className={styles.auth_input_wrapper}>
            <input
              id="input_email"
              className={styles.auth_input}
              type="text"
              name="email"
            />
          </div>
        </div>
        <div className={styles.auth_container_section}>
          <div className={styles.auth_section_partition}>
            <label
              className={styles.auth_section_partition_span1}
              htmlFor="input_password"
            >
              Password
            </label>
            <span className={styles.auth_section_partition_span2}>Forgot Password?</span>
          </div>
          <div className={styles.auth_input_wrapper}>
            <input
              id="input_password"
              className={styles.auth_input}
              type="text"
              name="pw"
            />
          </div>
        </div>
        <div className={styles.auth_sign_in_button_wrapper}>
          <button
            type="submit"
            className={styles.auth_sign_in_button}
          >
            Sign In
          </button>
        </div>
        <div className={styles.auth_container_section}>
          <div className={styles.auth_section_partition}>
            <label
              className={styles.auth_section_partition_span1}
              htmlFor="input_confirm_password"
            >
              Confirm Password
            </label>
          </div>
          <div className={styles.auth_input_wrapper}>
            <input
              id="input_confirm_password"
              className={styles.auth_input}
              type="text"
              name="confirmPW"
            />
          </div>
        </div>
      </form>
      <div className={styles.auth_sign_up_wrapper}>
        <span>
          Dont have an account?
          {' '}
          <Link href="auth/signUp">Sign Up</Link>
        </span>
      </div>
    </>
  );
}
