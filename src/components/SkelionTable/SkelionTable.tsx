import { Center, Container, Group, Table, Text } from "@mantine/core";
import skelion from "../../data/skelion.json";
import { useClipboard } from '@mantine/hooks';
import { IconCopy } from "@tabler/icons-react";

function SkelionTable() {
  const clipboard = useClipboard({timeout: 500})
  
  function handleCopy(text:string){
    return () => clipboard.copy(text)
  }

  const rowData = skelion.days.map((day)=>{
    const targetRowCount = day.targets.length !== 0 ? day.targets.length : day.items.length
    if (day.type === "Kill") {
      return day.targets.map((target, i) => (
        <Table.Tr key={`hunt-days-${day.day}-${i}`}>
          {i === 0 && (
            <>
              <Table.Td rowSpan={targetRowCount}>{day.day}</Table.Td>
              <Table.Td rowSpan={targetRowCount}>{day.type}</Table.Td>
              <Table.Td rowSpan={targetRowCount}>{day.startNpcName}</Table.Td>
              <Table.Td rowSpan={targetRowCount}>
                <Group gap="xs" justify="center">
                  {day.startLocation} 
                  <IconCopy onClick={handleCopy(day.startLocation)}/>
                </Group>
              </Table.Td>
              <Table.Td rowSpan={targetRowCount}>{day.endNpcName}</Table.Td>
              <Table.Td rowSpan={targetRowCount}>
                <Group gap="xs" justify="center">
                {day.endLocation}
                <IconCopy onClick={handleCopy(day.endLocation)}/>
                </Group>
                </Table.Td> 
              <Table.Td rowSpan={targetRowCount}>{day.zone}</Table.Td>
            </>
            
          )}
              <Table.Td>{target.name}</Table.Td>
              <Table.Td>{target.count}</Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
        </Table.Tr>
      ))
    }

      if (day.type === "Gather") {
      return day.items.map((target, i) => (
        <Table.Tr key={`gather-days-${day.day}-${i}`}>
          {i === 0 && (
            <>
              <Table.Td rowSpan={targetRowCount}>{day.day}</Table.Td>
              <Table.Td rowSpan={targetRowCount}>{day.type}</Table.Td>
              <Table.Td rowSpan={targetRowCount}>{day.startNpcName}</Table.Td>
              <Table.Td rowSpan={targetRowCount}>
                <Group gap="xs" justify="center">
                  {day.startLocation} 
                  <IconCopy onClick={handleCopy(day.startLocation)}/>
                </Group>
                </Table.Td> 
              <Table.Td rowSpan={targetRowCount}>{day.endNpcName}</Table.Td>
              <Table.Td rowSpan={targetRowCount}>
                <Group gap="xs" justify="center">
                {day.endLocation}
                <IconCopy onClick={handleCopy(day.endLocation)}/>
                </Group>
                </Table.Td> 
              <Table.Td rowSpan={targetRowCount}>{day.zone}</Table.Td>
            </>
            
          )}
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td>{target.itemName}</Table.Td>
              <Table.Td>{target.count}</Table.Td>
              <Table.Td>{target.monster}</Table.Td>
              <Table.Td>{target.soldByVendor ? "Yes" : "No"}</Table.Td>
        </Table.Tr>
      ))
    }
  });
  return (
      <Table styles={{ td: { textAlign: 'center' }, th: { textAlign: 'center' } }}>
        <Table.Tbody>
          <Table.Tr>
            <Table.Th rowSpan={2}>Day</Table.Th>
            <Table.Th rowSpan={2}>Type</Table.Th>
            <Table.Th rowSpan={2}>Start NPC</Table.Th>
            <Table.Th rowSpan={2}>Start Location</Table.Th>
            <Table.Th rowSpan={2}>End NPC</Table.Th>
            <Table.Th rowSpan={2}>End Location</Table.Th>
            <Table.Th rowSpan={2}>Zone</Table.Th>
            <Table.Th colSpan={6} ta="center">Mission</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Monster</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Item Name</Table.Th>
            <Table.Th>Count</Table.Th>
            <Table.Th>Monster Drop</Table.Th>
            <Table.Th>Sold By Vendor</Table.Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rowData}
        </Table.Tbody>
      </Table>
  );
}

export default SkelionTable;
