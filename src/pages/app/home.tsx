import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { Helmet } from "react-helmet-async";
import { Separator } from "@/components/ui/separator"

export function Home() {
  return (
    <section className="max-w-5xl mx-auto">
      <Helmet title='Encontre aqui o evento que voçê deseja' />
      <Header />
      <footer className="bg-teal-500 absolute w-full left-0 bottom-0">
        <div className="max-w-[1080px] mx-auto px-4">
          <Logo className="my-3" />
          <Separator />
          <div className="flex items-center justify-between gap-3 my-2">
          </div>
          <Separator />
          <span className="text-center w-[100%] block text-base py-1">&#169; Seu Role LTDA - Todos os direitos reservados</span>
        </div>
      </footer>
    </section>
  )
}
