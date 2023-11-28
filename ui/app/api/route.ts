import { NextRequest, NextResponse } from "next/server";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const APIURL = 'https://api.thegraph.com/subgraphs/name/ananthvivekanand/pendle-wst-eth-28-dec-23'

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

export async function GET(req: NextRequest) {
    let a : Record<string, number> = {};
  await Promise.all([0, 1, 2, 3, 4, 5].map(
    async (i) => {
        await client
      .query({
        query: gql(`
        query MyQuery {
          swaps(first: 1000, skip: ${i * 1000}) {
            receiver
            netPtOut
            netSyOut
          }
        }
        `
        ),
      }).then((data) => {
         for (let swap of data.data.swaps) {
          if (a[swap.receiver as string]) {
            a[swap.receiver] += -1 * parseInt(swap.netSyOut)
          } else {
            a[swap.receiver] = -1 * parseInt(swap.netSyOut)
          }
        }
      })
    })
  ); 
  return NextResponse.json(a);
}