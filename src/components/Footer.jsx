import { Footer }  from 'flowbite-react';

export default function FooterPage() {
  return (
    <footer className="relative top-20 bg-indigo-500 flex w-full p-5 font-mono text-slate-300">
      <Footer container className='dark:bg-blue-800'>
      <Footer.Copyright
        by="StellarThreads"
        href="#"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
    </footer>
  );
}
