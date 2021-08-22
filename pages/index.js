import Head from 'next/head'
import ContainerBlock from '../components/ContainerBlock';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <ContainerBlock
      title="Jared Absher - Developer, Writer, Creator"
      description="Portfolio"
    >
      <Hero />
    </ContainerBlock>

  )
}
