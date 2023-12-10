import React from "react"
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react"

const CardItem = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>Total Sales</Text>
      </Flex>
      <Metric> 00,000</Metric>
    </Card>
  )
}

export default CardItem
