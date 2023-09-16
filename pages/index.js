import Layout from "@/components/Layout"
import Link from "next/link"

const Index = () => (
  <Layout>
    <h1>Hello world</h1>

    <Link legacyBehavior href="/formularios">
    <h2>Formularios</h2>
    </Link>
    
  </Layout>
)

export default Index