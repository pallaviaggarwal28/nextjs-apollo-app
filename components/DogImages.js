import styles from "../styles/Home.module.css";
import {
  Link,
  Grid,
  Row,
  Col,
  Spacer,
  Flex,
  useTheme,
  Card,
  Block
} from "vcc-ui";

function DogImages({ dog }) {
  const { breakpoints } = useTheme();
  return (
    <Grid>
      <Spacer size={{ default: 4, [breakpoints.fromM]: 8 }} />
      <Row align="flex-start">
        <Col size={5}>
          {dog.images.urls.map(image => (
            <Flex key={image}>
              <Card>
                <Block as={"img"} src={`${image}`} />
              </Card>
              <Spacer size={3} />
            </Flex>
          ))}
        </Col>
      </Row>
    </Grid>
  );
}

export default DogImages;
