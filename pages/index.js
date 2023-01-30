import CardList from '../components/CardList'
import Layout from '../widget/Layout'
import axios from 'axios'
import { useState } from 'react'

export async function getServerSideProps(){
  let res = await axios.get('https://cari-kkn-be.fly.dev/admin/desa')
  let data = await res.data

  return {
    props: {
      data
    }
  }
}

export default function Home({home, data}) {
  const [dataDesa , setDataDesa] = useState(data.result)

  return (
    <Layout home>
        <div className="mt-10">
          <h1 className='text-lg font-medium font-sans border-b-2 pb-2 mb-5'>
            List Cari Kuliah Kerja Nyata
          </h1>
          <div className="flex flex-wrap gap-2">
            {dataDesa && dataDesa.map((res) => {
              return (
                <CardList key={res._id} data={res}/>
              )
            })}
          </div>
        </div>
      </Layout>
  )
}
