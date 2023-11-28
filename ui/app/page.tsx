'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api").then((res) => res.json()).then((data) => {
      let out = []
      for (let key of Object.keys(data)) {
        out.push({key: key, value: data[key]})
      }
      // sort out by decending value
      setData(out.sort((a, b) => b.value - a.value) as any);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <center><p>How much wstETH have these addresses dumped for fixed yield using Pendle?</p><br></br>
        <p>Find out who is betting that yield will fall.</p>
        </center>
        <Table>
          <TableCaption>How much wstETH have these addresses dumped for fixed yield?</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Address</TableHead>

              <TableHead className="text-right">wstETH dumped</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              {
                data && data.map((item : { key: string, value: number }) => {
                return (
                        <TableRow key={ item.key }>
                  <TableCell className="font-medium"><a className="hover:underline" href={`https://arbiscan.io/address/${item.key}`}>{ item.key }</a></TableCell>
                  <TableCell className="text-right">{ item.value / (10**18) } </TableCell> 
                  </TableRow>
                  )
                })
              }
          </TableBody>
        </Table>
      </div>
    </main>
  )
}
