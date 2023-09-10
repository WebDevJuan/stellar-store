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
          Política de privacidad
        </Footer.Link>
        <Footer.Link href="#">
          Tel.697970907
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
    </footer>
  );
}
