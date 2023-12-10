import {
  Card,
  DonutChart,
  Flex,
  Bold,
  Divider,
  Metric,
  Text,
  Title,
} from "@tremor/react"

const stocks = [
  {
    name: "Item 1",
    value: 10456,
  },
  {
    name: "Item 2",
    value: 5789,
  },
  {
    name: "Item 3",
    value: 4367,
  },
  {
    name: "Item 4",
    value: 3421,
  },
]

const dataFormatter = (number) => {
  return "₹ " + Intl.NumberFormat("us").format(number).toString()
}

const SalesItem = () => {
  return (
    <Card className="max-w-full mx-auto">
      <Flex className="space-x-8 flex-col lg:flex-row">
        <Title>Overview</Title>
      </Flex>
      <Text className="mt-8">Portfolio Value</Text>
      <Metric> 25,000</Metric>
      <Divider />
      <Text className="mt-8">
        <Bold>Revenue Generated</Bold>
      </Text>

      <DonutChart
        data={stocks}
        valueFormatter={dataFormatter}
        showAnimation={false}
        category="value"
        index="name"
        className="mt-6"
      />
    </Card>
  )
}

export default SalesItem
