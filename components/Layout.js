import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen bg-gray'>
      <Header />
      <div className='bg-gray flex-grow'>{children}</div>
      <Footer className='bottom-0 sticky' />
    </div>
  );
}
