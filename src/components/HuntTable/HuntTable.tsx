import { Container, Table, Text } from "@mantine/core";
import Hunt from "../../data/hunt.json";

function HuntTable() {
  const data = Hunt;
  const easyRows = data.easy.map((quest, i) =>
    quest.mobs.map((mob, i) => (
      <Table.Tr key={`${quest.id}-${i}`}>
        {i === 0 && <Table.Td rowSpan={quest.mobs.length}>{quest.id}</Table.Td>}
        <Table.Td>{mob.name}</Table.Td>
        <Table.Td>{mob.count}</Table.Td>
      </Table.Tr>
    )),
  );

  const hardRows = data.hard.map((quest, i) =>
    quest.mobs.map((mob, i) => (
      <Table.Tr key={`${quest.id}-${i}`}>
        {i === 0 && <Table.Td rowSpan={quest.mobs.length}>{quest.id}</Table.Td>}
        <Table.Td>{mob.name}</Table.Td>
        <Table.Td>{mob.count}</Table.Td>
      </Table.Tr>
    )),
  );

  return (
    <Container size="xl">
    <Table horizontalSpacing="md" >
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>
            <Text size="xl">Easy</Text>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
      <Table.Tbody>
        <Table.Tr>
          <Table.Th>Quest Id</Table.Th>
          <Table.Th>Monster</Table.Th>
          <Table.Th>Quantity</Table.Th>
        </Table.Tr>
      </Table.Tbody>
      <Table.Tbody>{easyRows}</Table.Tbody>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>
            <Text>
              Hard
            </Text>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
      <Table.Tbody>{hardRows}</Table.Tbody>
    </Table>
    </Container>
  );
}

export default HuntTable;
