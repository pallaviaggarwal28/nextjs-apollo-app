import { gql } from "@apollo/client";
import client from "../apollo-client";
import DogsBasicInfo from "../components/DogsBasicInfo";
import { Block, Text } from "vcc-ui";

const GET_All_BREEDS = gql`
  query {
    breeds {
      name
      area
    }
  }
`;

const Home = ({ breeds }) => {
  return (
    <div>
      <Block extend={{ textAlign: "center" }}>
        <Text variant="hillary" as="h2">
          All Dog Breeds
        </Text>
      </Block>
      <DogsBasicInfo breeds={breeds} />
    </div>
  );
};

export async function getStaticProps() {
  const breedsData = await client.query({ query: GET_All_BREEDS });
  const breeds = breedsData.data.breeds;
  return { props: { breeds: breeds } };
}

export default Home;
