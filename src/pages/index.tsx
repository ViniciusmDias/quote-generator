import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { BiRefresh } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { Header, Hero, Footer } from '../styles/pages/Home';

interface IQuote {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
}

interface HomeProps {
  quote: IQuote;
}

export default function Home({ quote }: HomeProps) {
  return (
    <>
      <Header>
        <a href="/">
          random <BiRefresh />
        </a>
      </Header>
      <Hero>
        <h1>{quote.quoteText}</h1>
        <Link
          href={{
            pathname: '/Authors/[slug]',
            query: { slug: quote.quoteAuthor },
          }}
        >
          <article>
            <div>
              <h2>{quote.quoteAuthor}</h2>
              <strong>{quote.quoteGenre}</strong>
            </div>
            <BsArrowRight />
          </article>
        </Link>
      </Hero>
      <Footer>
        <h3>Vinicius Dias @ DevChallenges.io</h3>
      </Footer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(
    'https://quote-garden.herokuapp.com/api/v2/quotes/random',
  );
  const { quote } = await response.json();

  return {
    props: {
      quote,
    },
  };
};
