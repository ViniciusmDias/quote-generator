import { GetServerSideProps } from 'next';
import { Header, Hero, Footer } from '../../styles/pages/Home';

interface IQuote {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
}

interface HomeProps {
  quotes: IQuote[];
  message: string;
}

export default function Home({ quotes, message }: HomeProps) {
  return (
    <>
      <Header>
        <a href="/">Home</a>
      </Header>
      <Hero>
        <h3>{message}</h3>
        {quotes.map((quote: IQuote) => (
          <h1>{quote.quoteText}</h1>
        ))}
      </Hero>
      <Footer>
        <h3>Vinicius Dias @ DevChallenges.io</h3>
      </Footer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context,
) => {
  const { slug } = context.params;

  const response = await fetch(
    `https://quote-garden.herokuapp.com/api/v2/authors/${slug}?page=1&limit=10`,
  );

  const { quotes, message } = await response.json();

  return {
    props: {
      quotes,
      message,
    },
  };
};
