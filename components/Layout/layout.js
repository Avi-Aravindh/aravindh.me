import Header from '../Header/header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
