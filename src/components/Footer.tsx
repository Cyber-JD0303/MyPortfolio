import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Jemish Dobariya. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="https://www.linkedin.com/in/jemish-dobariya-bb34791b1/"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="https://github.com/" target="_blank">
          GitHub
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;