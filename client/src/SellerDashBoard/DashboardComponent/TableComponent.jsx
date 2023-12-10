import React from "react"
import { StatusOnlineIcon } from "@heroicons/react/outline"
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react"

const data = [
  {
    Name: "Item 1",
    InStock: "Available",
    Category: "xyz",
    Price: "100",
  },
  {
    Name: "Item 1",
    InStock: "Available",
    Category: "xyz",
    Price: "100",
  },
  {
    Name: "Item 1",
    InStock: "Available",
    Category: "xyz",
    Price: "100",
  },
  {
    Name: "Item 1",
    InStock: "Available",
    Category: "xyz",
    Price: "100",
  },
]

const TableComponent = () => {
  return (
    <Card className="mt-4">
      <Title>Products</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>InStock</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.Name}>
              <TableCell>{item.Name}</TableCell>
              <TableCell>
                <Text>{item.InStock}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.Category}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.Price}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default TableComponent
