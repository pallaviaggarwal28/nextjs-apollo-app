import {
  Card,
  Grid,
  Row,
  Col,
  Spacer,
  Flex,
  useTheme,
  CardContent
} from "vcc-ui";

function DogsBasicInfo({ breeds }) {
  const { breakpoints } = useTheme();
  return (
    <Grid>
      <Spacer size={{ default: 4, [breakpoints.fromM]: 8 }} />
      <Row align="flex-start">
        <Col size={5}>
          {breeds.map(item => (
            <Flex key={item.name}>
              <Card href={`/dogs/${item.name}`}>
                <Flex
                  extend={{
                    justifyContent: "center",
                    padding: 32
                  }}
                >
                  <CardContent>{item.name}</CardContent>
                </Flex>
              </Card>
              <Spacer size={3} />
            </Flex>
          ))}
        </Col>
      </Row>
    </Grid>
  );
  // return (
  //   <div className={styles.grid}>
  //     {breeds.map(item => (
  //       <div key={item.name} className={styles.card}>
  //         <Link href={`/dogs/${item.name}`}>{item.name}</Link>
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default DogsBasicInfo;
