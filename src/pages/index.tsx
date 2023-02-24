import { Heading, ListItem, UnorderedList } from '@chakra-ui/react'
import { Head } from 'components/layout/Head'
import { LinkComponent } from 'components/layout/LinkComponent'

export default function Home() {
  return (
    <>
      <Head />

      <main>
        <Heading as="h2">Nexth Examples</Heading>
        <UnorderedList>
          <ListItem>
            <LinkComponent href="/examples/sign">Sign & verify messages</LinkComponent>
          </ListItem>
          <ListItem>
            <LinkComponent href="/examples/siwe">Sign-in With Ethereum</LinkComponent>
          </ListItem>
          <ListItem>
            <LinkComponent href="/examples/passport">Gitcoin Passport</LinkComponent>
          </ListItem>
          <ListItem>
            <LinkComponent href="/examples/send-ether">Send Ether transaction</LinkComponent>
          </ListItem>
          <ListItem>
            <LinkComponent href="/examples/send-erc20">Send ERC20 transaction</LinkComponent>
          </ListItem>
          <ListItem>
            <LinkComponent href="/examples/mint-nft">Mint NFT</LinkComponent>
          </ListItem>
        </UnorderedList>
      </main>
    </>
  )
}
