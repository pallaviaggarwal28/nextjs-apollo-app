import { gql } from "@apollo/client";
import client from "../../apollo-client";
import DogImages from "../../components/DogImages";
import { TabNav, Block, Text, Flex } from "vcc-ui";

const GET_DATA_PER_BREED = gql`
  query getDataPerBreed($breed: String!) {
    dog(breed: $breed) {
      breed
      images {
        urls
      }
      subBreeds
    }
  }
`;

const Dog = ({ dog }) => {
  return (
    <Flex>
      <TabNav
        backButton={{
          text: "Home",
          href: "/",
          clickHandler: () => {}
        }}
      ></TabNav>

      {/* <Block extend={{ textAlign: "center" }}> */}
      <Text variant="hillary" as="h3">
        {dog.breed[0].toUpperCase() + dog.breed.slice(1)}
      </Text>
      {/* </Block> */}
      <DogImages dog={dog} />
    </Flex>
  );
};

export async function getStaticProps(params) {
  var breed = params.params.slug;
  const data = await client.query({
    query: GET_DATA_PER_BREED,
    variables: { breed: breed }
  });
  return { props: { dog: data.data.dog } };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking"
  };
}

export default Dog;
