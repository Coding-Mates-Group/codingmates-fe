import Button from '@/components/common/Button';
import { ModalProps } from '@/components/common/CookieModal';
import Modal from '@/components/common/Modal';
import Logo from '/public/icons/logo_purple_small.svg';
import Facebook from '/public/icons/facebook.svg';
import Google from '/public/icons/google.svg';
import Github from '/public/icons/github.svg';

const loginButtonConfig = `flex h-48 w-[30rem] items-center justify-center gap-16`;

export default function LoginModal(props: ModalProps) {
  return (
    <Modal {...props} className="h-[44rem] w-[50rem] px-80 pt-[5.6rem] pb-[6.4rem]">
      <div className="mb-32">
        <Logo className="mx-auto mb-8" />
        <h2 id="title" className="font-18 font-bold text-gray-90">
          Welcome to Coding Mates!
        </h2>
      </div>
      <ul className="mb-36 flex flex-col gap-10">
        <li>
          <Button className={loginButtonConfig}>
            <Facebook /> Facebook Login
          </Button>
        </li>
        <li>
          <Button className={loginButtonConfig}>
            <Google /> Google Login
          </Button>
        </li>
        <li>
          <Button className={loginButtonConfig}>
            <Github /> GitHub Login
          </Button>
        </li>
      </ul>
      <p className="font-16 flex flex-col items-center">
        <span>When you sign up with social login, you agree</span>
        <span>
          to the <a className="font-14 font-medium underline">Terms of Use</a> and{' '}
          <a className="font-14 font-medium underline">Privacy Policy.</a>
        </span>
      </p>
    </Modal>
  );
}
