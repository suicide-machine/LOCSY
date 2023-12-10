import React from "react"

import { Card, Title, AreaChart } from "@tremor/react"

// Backend

const chartdata = [
  {
    month: "Jan",
    revenue: 2890,
    "Item 1": 500,
  },
  {
    month: "Feb",
    revenue: 2756,
    "Item 1": 120,
  },
  {
    month: "Mar",
    revenue: 3322,
    "Item 1": 150,
  },
  {
    month: "Apr",
    revenue: 3470,
    "Item 1": 220,
  },
  {
    month: "May",
    revenue: 3475,
    "Item 1": 300,
  },
  {
    month: "Jun",
    revenue: 3129,
    "Item 1": 100,
  },
]

// Need to modify item number and rupees

const dataFormatter = (number) => {
  return "₹" + Intl.NumberFormat("rs").format(number).toString()
}
const itemFormatter = (number) => {
  return Intl.NumberFormat("number").format(number).toString()
}

const AreaChartComponent = () => {
  return (
    <>
      <Card className="mt-4">
        <Title>Your total revenue over time (RS)</Title>
        <AreaChart
          className="h-72 mt-4"
          data={chartdata}
          index="month"
          categories={["revenue"]}
          colors={["indigo"]}
          valueFormatter={dataFormatter}
        />
      </Card>
      <Card className="mt-4">
        <Title>Items sold over time (number)</Title>
        <AreaChart
          className="h-72 mt-4"
          data={chartdata}
          index="month"
          categories={["Item 1"]}
          colors={["cyan"]}
          valueFormatter={itemFormatter}
        />
      </Card>
    </>
  )
}

export default AreaChartComponent
