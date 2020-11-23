import { Header, Hero, Footer } from '../styles/pages/Home';

export default function Home() {
  return (
    <>
      <Header>
        <a href="/">random</a>
      </Header>
      <Hero>
        <h1>
          “The first rule of any technology used in a business is that
          automation applied to an efficient operation will magnify the
          efficiency. The second is that automation applied to an inefficient
          operation will magnify the inefficiency.”
        </h1>
        <a href="/">
          <div>
            <h2>Bill Gates</h2>
            <strong>business</strong>
          </div>
        </a>
      </Hero>
      <Footer>
        <h3>Vinicius Dias @ DevChallenges.io</h3>
      </Footer>
    </>
  );
}
