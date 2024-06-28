import { Header } from "@/components/header";
import { Helmet } from "react-helmet-async";

export function Home() {
  return (
    <section className="max-w-5xl mx-auto">
      <Helmet title='Encontre aqui o evento que voçê deseja' />

      <Header />
    </section>
  )
}
