import { Anchor, Box, Center, Tabs, Text, Title } from "@mantine/core";
import HuntTable from "@/components/HuntTable/HuntTable";
import SkelionTable from "@/components/SkelionTable/SkelionTable";
import { useState } from "react";

type TabOptions = "Daily Hunt" | "Skelion Daily";
export function HomePage() {
  const [activeTab, setTab] = useState<TabOptions | null>("Daily Hunt");
  console.log(activeTab);

  return (
    <Box px="xl" py="lg">
      <Center>
        <Title>Halloween Event Companion Guide</Title>
      </Center>
      <Text ta="left" py="xl">
        See official event documentation
        <Anchor href="https://wiki.uaro.net/halloween-event-2026"> here</Anchor>
      </Text>
      <Tabs onChange={setTab} value={activeTab}>
        <Tabs.List>
          <Tabs.Tab value="Daily Hunt">
            <Text size="xl">Noisy Neighbours (Coin Daily)</Text>
          </Tabs.Tab>
          <Tabs.Tab value="Skelion Daily">
            <Text size="xl">Spooky Memories (Skelion Daily)</Text>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Daily Hunt">
          <HuntTable />
        </Tabs.Panel>
        <Tabs.Panel value="Skelion Daily">
          <SkelionTable />
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}
